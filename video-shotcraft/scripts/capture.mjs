import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const videoRoot = path.resolve(here, '..');
const outDir = path.join(videoRoot, 'public', 'textures');
const baseUrl = process.env.CAPTURE_BASE_URL ?? 'http://127.0.0.1:4173/';
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1'],
});

const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
  colorScheme: 'light',
  reducedMotion: 'reduce',
});

const page = await context.newPage();
const layout = { viewport: { width: 1920, height: 1080, deviceScaleFactor: 2 }, pages: {} };

const settle = async (ms = 900) => {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await page.waitForTimeout(ms);
};

const record = async (name, selectors = []) => {
  await page.screenshot({ path: path.join(outDir, `${name}.png`), animations: 'disabled' });
  const boxes = {};
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if ((await locator.count()) === 0) continue;
    const box = await locator.boundingBox();
    if (box) boxes[selector] = box;
  }
  layout.pages[name] = {
    url: page.url(),
    scrollY: await page.evaluate(() => window.scrollY),
    boxes,
  };
};

const cutout = async (name, selector) => {
  const locator = page.locator(selector).first();
  if ((await locator.count()) === 0) return;
  await locator.screenshot({ path: path.join(outDir, `${name}.png`), animations: 'disabled' });
  const box = await locator.boundingBox();
  if (box) layout.pages[name] = { selector, box };
};

const cutoutNth = async (name, selector, index) => {
  const locator = page.locator(selector).nth(index);
  if ((await locator.count()) === 0) return;
  await locator.screenshot({ path: path.join(outDir, `${name}.png`), animations: 'disabled' });
  const box = await locator.boundingBox();
  if (box) layout.pages[name] = { selector, index, box };
};

try {
  await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 60_000 });
  await page.locator('#heroMap3d').waitFor({ state: 'visible' });
  await page.waitForFunction(() => !document.querySelector('#mapDataMode')?.textContent?.includes('加载中'));
  await settle(1600);

  await record('map-overview', ['#heroMap3d', '#mapDistrictDetail', '.map-hotspots']);

  await page.locator('[data-map-district="xicheng"]').click();
  await page.waitForFunction(() => document.querySelector('#heroMap3d')?.classList.contains('district-detail-active'));
  await settle(1200);
  await record('map-xicheng', ['#heroMap3d', '#mapDistrictDetail', '.community-value-layer', '.map-value-legend']);
  await cutout('xicheng-detail', '#mapDistrictDetail');

  // Community markers now live in a MapLibre/Canvas layer. The navigator is the
  // stable, accessible way to select the first real community record.
  await page.locator('[data-community-direction="next"]').click();
  await page.waitForFunction(() => {
    const host = document.querySelector('#heroMap3d');
    const detail = document.querySelector('#mapDistrictDetail');
    return host?.classList.contains('community-focus-active') && Boolean(detail?.getAttribute('data-value-tier'));
  });
  await settle(2400);
  await record('map-community', ['#heroMap3d', '#mapDistrictDetail', '.community-location-context', '.community-geographic-map']);
  await cutout('community-detail', '#mapDistrictDetail');
  await cutout('community-evidence', '.community-location-context');

  const vicinityButton = page.locator('[data-open-community-vicinity]').first();
  if ((await vicinityButton.count()) > 0) {
    await vicinityButton.click();
    await page.waitForFunction(() => document.querySelector('#heroMap3d')?.classList.contains('community-location-active'), null, { timeout: 8_000 });
    await settle(2600);
    await record('map-vicinity', ['#heroMap3d', '#mapDistrictDetail', '.community-local-map', '.community-location-context']);
  }

  await page.locator('#exitMapWorkspace').click({ force: true });
  await page.waitForFunction(() => !document.querySelector('#heroMap3d')?.classList.contains('map-workspace-active'));

  await page.evaluate(() => document.querySelector('#model')?.scrollIntoView({ block: 'start' }));
  await settle(800);
  await record('model-results', ['#model', '.results-panel', '.decision-card', '.wealth-card', '.risk-card']);
  await cutout('scenario-switch-self', '.scenario-switch');
  await cutout('decision-card', '.decision-card');
  await cutout('wealth-card', '.wealth-card');
  await cutout('risk-card', '.risk-card');

  await page.locator('.scenario-toggle[data-view="rent"]').click();
  await page.mouse.move(12, 12);
  await settle(700);
  await record('model-rent-results', ['#model', '.results-panel', '.decision-card', '.wealth-card', '.risk-card']);
  await cutout('scenario-switch-rent', '.scenario-switch');
  await cutout('decision-card-rent', '.decision-card');
  await cutout('wealth-card-rent', '.wealth-card');
  await cutout('risk-card-rent', '.risk-card');

  await page.locator('.wealth-chart-card').scrollIntoViewIfNeeded();
  await settle(500);
  await record('wealth-chart', ['.wealth-chart-card', '.chart-legend', '.wealth-chart-stage']);
  await cutout('wealth-chart-card', '.wealth-chart-card');

  await page.locator('.matrix-card').scrollIntoViewIfNeeded();
  await settle(500);
  await record('stress-matrix', ['.matrix-card', '.scenario-matrix']);
  await cutout('stress-matrix-card', '.matrix-card');

  await page.evaluate(() => document.querySelector('#selection')?.scrollIntoView({ block: 'start' }));
  await settle(700);
  await record('candidate-comparison', ['#selection', '.score-panel', '.comparison-panel', '.comparison-list']);
  await cutout('candidate-score-panel', '.score-panel');
  await cutout('candidate-comparison-panel', '.comparison-panel');
  await cutoutNth('candidate-a', '.comparison-row', 0);
  await cutoutNth('candidate-b', '.comparison-row', 1);
  await cutoutNth('candidate-c', '.comparison-row', 2);

  await fs.writeFile(path.join(outDir, 'layout.json'), JSON.stringify(layout, null, 2));
} finally {
  await browser.close();
}
