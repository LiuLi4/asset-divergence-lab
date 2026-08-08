import React from 'react';
import {CameraMotionBlur} from '@remotion/motion-blur';
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export type PromoProps = {bgm: boolean};

const C = {
  paper: '#f1eefb',
  paper2: '#f8f4fb',
  ink: '#251044',
  muted: '#756987',
  violet: '#7760b3',
  green: '#147a5d',
  amber: '#a66b16',
  risk: '#b44b59',
  white: '#ffffff',
};

const font = '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const easeOut = Easing.bezier(0, 0, 0.2, 1);

const img = (name: string) => staticFile(`textures/${name}.png`);

const SHOTS = {
  s1: {from: 0, duration: 150},
  s2: {from: 150, duration: 150},
  s3: {from: 300, duration: 150},
  s4: {from: 450, duration: 150},
  s5: {from: 600, duration: 165},
  s6: {from: 765, duration: 165},
  s7: {from: 930, duration: 150},
  s8: {from: 1080, duration: 180},
} as const;

const noise = `radial-gradient(circle at 16% 10%, rgba(119,96,179,.18), transparent 30%),
radial-gradient(circle at 86% 78%, rgba(20,122,93,.12), transparent 28%),
linear-gradient(180deg, ${C.paper2}, ${C.paper})`;

const enter = (frame: number, from = 0, duration = 24) =>
  interpolate(frame, [from, from + duration], [0, 1], {...clamp, easing: easeOut});

const quadratic = (t: number, start: number, control: number, end: number) =>
  (1 - t) * (1 - t) * start + 2 * (1 - t) * t * control + t * t * end;

const SafeCaption: React.FC<{
  eyebrow?: string;
  children: React.ReactNode;
  dark?: boolean;
  align?: 'left' | 'center';
}> = ({eyebrow, children, dark = false, align = 'left'}) => (
  <div
    style={{
      position: 'absolute',
      left: 64,
      right: 64,
      bottom: 118,
      zIndex: 20,
      color: dark ? C.white : C.ink,
      textAlign: align,
      textShadow: dark ? '0 3px 20px rgba(20,8,38,.45)' : 'none',
    }}
  >
    {eyebrow ? (
      <div style={{fontFamily: font, fontSize: 32, fontWeight: 750, letterSpacing: 3, marginBottom: 18, opacity: 0.78}}>
        {eyebrow}
      </div>
    ) : null}
    <div style={{fontFamily: font, fontSize: 64, lineHeight: 1.22, fontWeight: 760, letterSpacing: -2}}>{children}</div>
  </div>
);

const Pill: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = C.violet}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '15px 24px',
      borderRadius: 999,
      color,
      background: 'rgba(255,255,255,.9)',
      border: `2px solid ${color}30`,
      boxShadow: '0 18px 48px rgba(50,26,83,.12)',
      fontFamily: font,
      fontSize: 32,
      fontWeight: 720,
    }}
  >
    {children}
  </div>
);

const ScreenshotCard: React.FC<{
  name: string;
  style?: React.CSSProperties;
  contain?: boolean;
  objectPosition?: string;
}> = ({name, style, contain = false, objectPosition = 'center'}) => (
  <div
    style={{
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 42,
      background: C.white,
      boxShadow: '0 35px 100px rgba(50,26,83,.2)',
      ...style,
    }}
  >
    <Img
      src={img(name)}
      style={{width: '100%', height: '100%', objectFit: contain ? 'contain' : 'cover', objectPosition, display: 'block'}}
    />
  </div>
);

const SceneBase: React.FC<{children: React.ReactNode; dark?: boolean}> = ({children, dark = false}) => (
  <AbsoluteFill style={{overflow: 'hidden', background: dark ? C.ink : noise}}>{children}</AbsoluteFill>
);

const OsmAttribution: React.FC<{dark?: boolean; opacity?: number}> = ({dark = false, opacity = 1}) => (
  <div style={{position: 'absolute', right: 44, bottom: 42, zIndex: 30, color: dark ? C.white : C.muted, opacity, fontFamily: font, fontSize: 32, fontWeight: 650, textShadow: dark ? '0 2px 12px rgba(0,0,0,.5)' : '0 2px 12px rgba(255,255,255,.8)'}}>
    © OpenStreetMap contributors
  </div>
);

const DroneDiveScene: React.FC = () => {
  const frame = useCurrentFrame();
  const dive = interpolate(frame, [20, 45], [0, 0.82], {...clamp, easing: Easing.in(Easing.cubic)});
  const land = interpolate(frame, [45, 65], [0, 0.18], {...clamp, easing: Easing.out(Easing.poly(5))});
  const p = frame < 45 ? dive : 0.82 + land;
  const rotX = interpolate(p, [0, 1], [58, 0]);
  const scale = interpolate(p, [0, 1], [0.72, 1.86]);
  const y = interpolate(p, [0, 1], [360, 112]);
  const x = interpolate(p, [0, 1], [40, -260]);
  const swap = interpolate(p, [0.7, 0.92], [0, 1], clamp);
  const titleIn = enter(frame, 0, 18);
  const badgeIn = spring({frame: frame - 87, fps: 30, config: {damping: 18, stiffness: 145, mass: 0.8}});

  return (
    <CameraMotionBlur shutterAngle={220} samples={9}>
      <SceneBase>
        <div style={{position: 'absolute', inset: 0, perspective: 1600}}>
          <div
            style={{
              position: 'absolute',
              width: 1000,
              height: 562,
              left: x,
              top: y,
              borderRadius: 34,
              overflow: 'hidden',
              transformOrigin: '62% 49%',
              transform: `rotateX(${rotX}deg) scale(${scale})`,
              boxShadow: `0 ${20 + (1 - p) * 60}px ${55 + (1 - p) * 90}px rgba(50,26,83,${0.15 + (1 - p) * 0.18})`,
              background: C.white,
            }}
          >
            <Img src={img('map-overview')} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 1 - swap}} />
            <Img src={img('map-xicheng')} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: swap}} />
          </div>
          <div style={{position: 'absolute', left: -793, top: -125, width: 1860, height: 1046, borderRadius: 63, overflow: 'hidden', opacity: interpolate(p, [0.86, 1], [0, 1], clamp), boxShadow: '0 30px 80px rgba(50,26,83,.18)'}}>
            <Img src={img('map-xicheng')} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
        </div>
        <div style={{position: 'absolute', top: 112, left: 64, opacity: titleIn, transform: `translateY(${(1 - titleIn) * 28}px)`}}>
          <div style={{fontFamily: font, fontSize: 32, fontWeight: 750, color: C.violet, letterSpacing: 3}}>北京买房，从地图开始</div>
          <div style={{fontFamily: font, fontSize: 88, lineHeight: 1.02, fontWeight: 780, color: C.ink, letterSpacing: -5, marginTop: 16}}>
            7,972 个小区<br />到底怎么买？
          </div>
        </div>
        <div style={{position: 'absolute', top: 358, left: 64, transform: `scale(${Math.max(0, badgeIn)})`, transformOrigin: 'left center'}}>
          <Pill color={C.green}>● 西城区 · 真实成交证据</Pill>
        </div>
        <div style={{position: 'absolute', left: 64, bottom: 92, fontFamily: font, fontSize: 32, fontWeight: 650, color: C.muted}}>
          不预测房价，只把决策证据摆到你面前
        </div>
        <OsmAttribution opacity={swap} />
      </SceneBase>
    </CameraMotionBlur>
  );
};

const CursorScene: React.FC = () => {
  const frame = useCurrentFrame();
  const segment1 = interpolate(frame, [10, 28], [0, 1], {...clamp, easing: Easing.in(Easing.cubic)});
  const segment2 = interpolate(frame, [28, 44], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const segment3 = interpolate(frame, [44, 56], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const cx = frame < 28 ? quadratic(segment1, 890, 980, 760) : frame < 44 ? quadratic(segment2, 760, 610, 500) : quadratic(segment3, 500, 625, 568);
  const cy = frame < 28 ? quadratic(segment1, 380, 500, 650) : frame < 44 ? quadratic(segment2, 650, 820, 700) : quadratic(segment3, 700, 775, 742);
  const click = spring({frame: frame - 58, fps: 30, config: {damping: 16, stiffness: 220, mass: 0.45}});
  const punchIn = interpolate(frame, [58, 82], [1, 1.4], {...clamp, easing: Easing.out(Easing.cubic)});
  const punchOut = interpolate(frame, [102, 130], [1.4, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const zoom = frame < 102 ? punchIn : punchOut;
  const transition = interpolate(frame, [82, 108], [0, 1], {...clamp, easing: easeOut});
  const hover = interpolate(frame, [44, 52, 58], [0, 1, 0], clamp);
  const captionIn = enter(frame, 90, 20);

  return (
    <SceneBase>
      <div style={{position: 'absolute', inset: 0, transform: `scale(${zoom})`, transformOrigin: '568px 742px', filter: `brightness(${1 + hover * 0.04})`}}>
        <ScreenshotCard name="map-xicheng" style={{left: -570, top: 110, width: 2220, height: 1249}} objectPosition="center" />
        <ScreenshotCard name="map-community" style={{left: -570, top: 110, width: 2220, height: 1249, opacity: transition}} objectPosition="center" />
      </div>
      <div
        style={{
          position: 'absolute', left: cx, top: cy, width: 42, height: 56, zIndex: 12,
          transform: `translate(-10px,-8px) scale(${1 - Math.max(0, click) * 0.12})`,
          filter: 'drop-shadow(0 8px 9px rgba(37,16,68,.35))',
        }}
      >
        <svg viewBox="0 0 42 56"><path d="M4 3v40l10-10 8 18 8-4-8-17h14z" fill="#fff" stroke="#251044" strokeWidth="3" strokeLinejoin="round" /></svg>
      </div>
      <div
        style={{
          position: 'absolute', left: cx - 45, top: cy - 45, width: 90, height: 90, borderRadius: '50%',
          border: `5px solid ${C.green}`, opacity: interpolate(frame, [58, 78], [0.85, 0], clamp),
          transform: `scale(${interpolate(frame, [58, 78], [0.3, 2.1], clamp)})`, zIndex: 11,
        }}
      />
      <div style={{position: 'absolute', left: 542, top: 716, width: 52, height: 52, borderRadius: '50%', background: C.green, border: '8px solid rgba(255,255,255,.92)', opacity: hover, transform: `scale(${1 + hover * 0.28})`, boxShadow: '0 10px 34px rgba(20,122,93,.48)', zIndex: 10}} />
      <div style={{position: 'absolute', top: 94, left: 64, opacity: enter(frame, 4, 18)}}><Pill>点击任意小区 · 继续缩小范围</Pill></div>
      <div style={{opacity: captionIn}}>
        <SafeCaption eyebrow="每一个点都能继续查看">先看成交证据，<br />不只看挂牌均价</SafeCaption>
      </div>
      <OsmAttribution />
    </SceneBase>
  );
};

const SpotlightScene: React.FC = () => {
  const frame = useCurrentFrame();
  const approach = interpolate(frame, [10, 44], [0, 1], {...clamp, easing: easeOut});
  const reseat = interpolate(frame, [104, 132], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const detailScale = interpolate(approach, [0, 1], [0.86, 1.04]) - reseat * 0.04;
  const hoverFloat = frame >= 44 && frame < 104 ? Math.sin(((frame - 44) / 60) * Math.PI * 2) * 5 : 0;
  const detailY = interpolate(approach, [0, 1], [54, -18]) + reseat * 18 + hoverFloat;
  const detailZ = interpolate(approach, [0, 1], [0, 74]) * (1 - reseat);
  const rotY = interpolate(approach, [0, 1], [-12, -4]) + reseat * 4;
  const beam = interpolate(frame, [8, 34, 98, 128], [0, 0.42, 0.42, 0], clamp);
  const ring = interpolate(frame, [42, 62, 82, 102], [0, 1, 1, 0], clamp);
  return (
    <SceneBase dark>
      <Img src={img('map-community')} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28, filter: 'blur(2px) saturate(.7)'}} />
      <div style={{position: 'absolute', left: 80, top: 132, width: 920, height: 1110, borderRadius: 46, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.16)'}} />
      <div style={{position: 'absolute', left: 45, top: 45, width: 990, height: 1180, background: `radial-gradient(circle at 50% 38%, rgba(255,255,255,${beam}), transparent 44%)`}} />
      <div style={{position: 'absolute', left: 120, top: 188, width: 840, height: 612, perspective: 1500, transformStyle: 'preserve-3d'}}>
        <div style={{position: 'absolute', inset: 0, transform: `translate3d(0, ${detailY}px, ${detailZ}px) rotateY(${rotY}deg) scale(${detailScale})`, transformOrigin: 'center', transformStyle: 'preserve-3d'}}>
          <ScreenshotCard name="community-detail" contain style={{inset: 0, boxShadow: `0 ${32 + ring * 20}px ${90 + ring * 40}px rgba(0,0,0,.36), 0 0 ${24 + ring * 28}px rgba(119,96,179,${ring * 0.42})`}} />
          <svg viewBox="0 0 840 612" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', opacity: ring, pointerEvents: 'none'}}>
            <rect x="5" y="5" width="830" height="602" rx="40" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="4" />
            <rect x="5" y="5" width="830" height="602" rx="40" fill="none" stroke="#d8ccff" strokeWidth="9" strokeLinecap="round" pathLength="1000" strokeDasharray="125 875" strokeDashoffset={-((frame - 42) * 11)} style={{filter: 'drop-shadow(0 0 12px #b6a2ff)'}} />
            <rect x="5" y="5" width="830" height="602" rx="40" fill="none" stroke="#9fe0ca" strokeWidth="7" strokeLinecap="round" pathLength="1000" strokeDasharray="82 918" strokeDashoffset={350 + (frame - 42) * 16} style={{filter: 'drop-shadow(0 0 10px #63c7a5)'}} />
          </svg>
        </div>
      </div>
      <ScreenshotCard name="community-evidence" contain style={{left: 120, top: 842, width: 840, height: 358, opacity: enter(frame, 42, 24), transform: `translateY(${(1 - enter(frame, 42, 24)) * 34}px)`}} />
      <div style={{position: 'absolute', left: 114, top: 128, opacity: enter(frame, 12, 20)}}><Pill color={C.green}>87 分 · 优先核验</Pill></div>
      <SafeCaption dark eyebrow="购买价值不是一个黑箱">品质、价格机会、流动性，<br />都能回到证据</SafeCaption>
      <OsmAttribution dark />
    </SceneBase>
  );
};

const VicinityScene: React.FC = () => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [30, 75], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const radius = interpolate(p, [0, 1], [42, 1320]);
  const pulse = frame < 30 ? 1 + 0.28 * Math.abs(Math.sin((frame / 30) * Math.PI * 2)) : 1;
  const pinScale = interpolate(p, [0, 0.4, 1], [pulse, 1.28, 0.72]);
  const waves = [0, 14].map((start) => {
    const wp = interpolate(frame, [start, start + 16], [0, 1], clamp);
    return {radius: 48 + wp * 70, opacity: frame < start + 16 ? 0.72 * (1 - wp) : 0};
  });
  return (
    <SceneBase>
      <Img src={img('map-community')} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
      <div style={{position: 'absolute', left: 540 - radius, top: 760 - radius, width: radius * 2, height: radius * 2, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 0 0 6px rgba(255,255,255,.9), 0 20px 80px rgba(37,16,68,.25)'}}>
        <Img src={img('map-vicinity')} style={{position: 'absolute', left: 540 - radius, top: 760 - radius, width: 1080, height: 1920, objectFit: 'cover', transform: `translate(${radius - 540}px, ${radius - 760}px)`}} />
      </div>
      <div style={{position: 'absolute', left: 498, top: 716, width: 84, height: 84, borderRadius: '50% 50% 50% 0', background: C.green, border: '7px solid white', transform: `rotate(-45deg) scale(${pinScale})`, boxShadow: '0 14px 40px rgba(20,122,93,.42)'}}>
        <div style={{width: 24, height: 24, borderRadius: '50%', background: 'white', margin: 22}} />
      </div>
      {waves.map((wave, index) => <div key={index} style={{position: 'absolute', left: 540 - wave.radius, top: 758 - wave.radius, width: wave.radius * 2, height: wave.radius * 2, borderRadius: '50%', border: `5px solid ${C.green}`, opacity: wave.opacity}} />)}
      <div style={{position: 'absolute', top: 94, left: 64, opacity: enter(frame, 74, 18)}}><Pill color={C.green}>公开坐标 · 道路 · 周边参照</Pill></div>
      <SafeCaption eyebrow="从小区点位再下一层">下钻到真实坐标，<br />看清周边街区</SafeCaption>
      <OsmAttribution />
    </SceneBase>
  );
};

const CashflowScene: React.FC = () => {
  const frame = useCurrentFrame();
  const press = spring({frame: frame - 54, fps: 30, config: {damping: 16, stiffness: 260, mass: 0.38}});
  const thumb = interpolate(frame, [58, 66], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const resultSwap = interpolate(frame, [66, 84], [0, 1], {...clamp, easing: easeOut});
  const selfOpacity = 1 - resultSwap;
  const rentOpacity = resultSwap;
  const cardLift = spring({frame: frame - 18, fps: 30, config: {damping: 17, stiffness: 120, mass: 0.75}});
  const cursorX = interpolate(frame, [30, 52], [850, 684], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const cursorY = interpolate(frame, [30, 52], [250, 356], {...clamp, easing: Easing.inOut(Easing.cubic)});
  return (
    <SceneBase>
      <div style={{position: 'absolute', top: 104, left: 64, opacity: enter(frame, 4, 18)}}><Pill>同一笔现金流 · 两种人生路径</Pill></div>
      <div style={{position: 'absolute', top: 280, left: 85, width: 910, height: 760, borderRadius: 48, background: C.ink, boxShadow: '0 44px 110px rgba(37,16,68,.26)', transform: `translateY(${(1 - Math.max(0, cardLift)) * 45}px)`}}>
        <div style={{position: 'absolute', top: 44, left: 195, width: 520, height: 98, borderRadius: 999, background: '#2c154a', border: '2px solid rgba(241,238,251,.24)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.05)'}}>
          <div style={{position: 'absolute', top: 5, left: 5 + thumb * 256, width: 254, height: 84, borderRadius: 999, background: C.paper, transform: `scale(${1 - Math.max(0, press) * 0.025})`, boxShadow: '0 8px 22px rgba(0,0,0,.24)'}} />
          <div style={{position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', placeItems: 'center', fontFamily: font, fontSize: 32, fontWeight: 720}}>
            <span style={{color: thumb < 0.5 ? C.ink : '#b9adc9'}}>自住对比</span>
            <span style={{color: thumb > 0.5 ? C.ink : '#b9adc9'}}>出租对比</span>
          </div>
        </div>
        <div style={{position: 'absolute', left: 89, top: 170, width: 732, height: 520}}>
          <Img src={img('wealth-card')} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', opacity: selfOpacity, transform: `translateX(${-resultSwap * 26}px)`}} />
          <Img src={img('wealth-card-rent')} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', opacity: rentOpacity, transform: `translateX(${(1 - resultSwap) * 26}px)`}} />
        </div>
      </div>
      <div style={{position: 'absolute', left: cursorX, top: cursorY, width: 44, height: 58, zIndex: 12, opacity: interpolate(frame, [24, 32, 72, 82], [0, 1, 1, 0], clamp), filter: 'drop-shadow(0 8px 9px rgba(37,16,68,.35))'}}>
        <svg viewBox="0 0 42 56"><path d="M4 3v40l10-10 8 18 8-4-8-17h14z" fill="#fff" stroke="#251044" strokeWidth="3" strokeLinejoin="round" /></svg>
      </div>
      <div style={{position: 'absolute', left: 674, top: 346, width: 80, height: 80, borderRadius: '50%', border: `5px solid ${C.amber}`, opacity: interpolate(frame, [54, 72], [0.8, 0], clamp), transform: `scale(${interpolate(frame, [54, 72], [0.25, 1.8], clamp)})`}} />
      <div style={{position: 'absolute', left: 132, top: 1074, display: 'flex', gap: 26}}>
        <Pill color={C.green}>自住对比</Pill><Pill color={C.amber}>出租对比</Pill>
      </div>
      <SafeCaption eyebrow="买房与租住理财">把两条路径，<br />放进同一条现金流</SafeCaption>
    </SceneBase>
  );
};

const ChartScene: React.FC = () => {
  const frame = useCurrentFrame();
  const streamFrame = Math.min(Math.max(frame - 8, 0), 72);
  const streamX = -streamFrame * 8;
  const write = interpolate(frame, [8, 28], [0, 1], {...clamp, easing: easeOut});
  const swap = interpolate(frame, [82, 108], [0, 1], {...clamp, easing: easeOut});
  const spike = interpolate(frame, [52, 60, 72], [0, 1, 0], clamp);
  return (
    <SceneBase dark>
      <div style={{position: 'absolute', top: 88, left: 64, zIndex: 10, opacity: enter(frame, 2, 16)}}><Pill color={C.violet}>时间会放大每一个假设</Pill></div>
      <div style={{position: 'absolute', left: 65, top: 290, width: 950, height: 770, borderRadius: 42, overflow: 'hidden', background: C.ink, boxShadow: '0 38px 100px rgba(0,0,0,.3)'}}>
        <div style={{position: 'absolute', inset: 0, overflow: 'hidden', opacity: (1 - swap) * write}}>
          <Img src={img('wealth-chart-card')} style={{position: 'absolute', left: streamX, top: 0, width: 1420, height: 770, objectFit: 'contain'}} />
          <Img src={img('wealth-chart-card')} style={{position: 'absolute', left: 1420 + streamX, top: 0, width: 1420, height: 770, objectFit: 'contain'}} />
        </div>
        <div style={{position: 'absolute', right: 86, top: 190 - spike * 80, width: 18, height: 420 + spike * 130, background: `linear-gradient(180deg, transparent, ${C.green}, transparent)`, opacity: (1 - swap) * write, boxShadow: `0 0 ${32 + spike * 34}px ${C.green}`}} />
        <div style={{position: 'absolute', right: 63, top: 360 - spike * 92, width: 64, height: 64, borderRadius: '50%', background: C.green, border: '9px solid rgba(255,255,255,.88)', opacity: (1 - swap) * write, boxShadow: `0 0 ${24 + spike * 34}px ${C.green}`}} />
        <Img src={img('stress-matrix-card')} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', opacity: swap, transform: `scale(${0.96 + swap * 0.04})`}} />
      </div>
      <div style={{position: 'absolute', top: 1110, left: 72, right: 72, display: 'flex', justifyContent: 'space-between', opacity: enter(frame, 55, 20)}}>
        <Pill color={C.green}>资产曲线</Pill><Pill color={C.risk}>压力矩阵</Pill>
      </div>
      <SafeCaption dark eyebrow="利率、涨幅、租金、持有年限">改一组假设，<br />结论就重新计算</SafeCaption>
    </SceneBase>
  );
};

const CandidateCard: React.FC<{name: 'candidate-a' | 'candidate-b' | 'candidate-c'; from: number; label: string; score: number; tone: string}> = ({name, from, label, score, tone}) => {
  const frame = useCurrentFrame();
  const turn = interpolate(frame, [from, from + 18], [0, 192], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const settle = interpolate(frame, [from + 18, from + 26], [192, 180], {...clamp, easing: Easing.out(Easing.cubic)});
  const angle = frame < from + 18 ? turn : settle;
  const edge = Math.abs(Math.sin((Math.min(angle, 180) / 180) * Math.PI));
  return (
    <div style={{width: 880, height: 285, perspective: 1400}}>
      <div style={{position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transform: `rotateY(${angle}deg)`, boxShadow: `0 25px ${70 + edge * 45}px rgba(50,26,83,${0.16 + edge * 0.2})`}}>
        <div style={{position: 'absolute', inset: 0, borderRadius: 34, overflow: 'hidden', background: C.white, backfaceVisibility: 'hidden'}}>
          <Img src={img(name)} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
        </div>
        <div style={{position: 'absolute', inset: 0, borderRadius: 34, overflow: 'hidden', background: `linear-gradient(135deg, ${C.ink}, ${tone})`, color: C.white, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', padding: '34px 48px', boxSizing: 'border-box', border: '2px solid rgba(255,255,255,.16)'}}>
          <div style={{fontFamily: font}}><div style={{fontSize: 32, opacity: .72, fontWeight: 680}}>候选 {label} · 购买价值</div><div style={{fontSize: 48, fontWeight: 760, marginTop: 12}}>同一把尺子核验</div></div>
          <div style={{fontFamily: font, fontSize: 112, lineHeight: 1, fontWeight: 820}}>{score}</div>
        </div>
      </div>
    </div>
  );
};

const CandidatesScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneBase>
      <div style={{position: 'absolute', top: 88, left: 64, opacity: enter(frame, 2, 16)}}><Pill>三个候选 · 同一把尺子</Pill></div>
      <div style={{position: 'absolute', top: 286, left: 100, display: 'grid', gap: 48}}>
        <CandidateCard name="candidate-a" from={12} label="A" score={83} tone={C.green} />
        <CandidateCard name="candidate-b" from={22} label="B" score={68} tone={C.amber} />
        <CandidateCard name="candidate-c" from={32} label="C" score={56} tone={C.risk} />
      </div>
      <div style={{position: 'absolute', left: 64, right: 64, top: 1250, display: 'flex', justifyContent: 'space-between', opacity: enter(frame, 64, 18)}}>
        <div style={{fontFamily: font, fontSize: 34, color: C.muted, fontWeight: 650}}>通勤 · 医疗 · 户型</div>
        <div style={{fontFamily: font, fontSize: 34, color: C.muted, fontWeight: 650}}>物业 · 环境 · 价格</div>
      </div>
      <SafeCaption eyebrow="主观偏好可以不同">但证据，必须用同一把尺子</SafeCaption>
    </SceneBase>
  );
};

const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const crane = interpolate(frame, [0, 86], [1.14, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const logoIn = spring({frame: frame - 64, fps: 30, config: {damping: 15, stiffness: 125, mass: 0.72}});
  const cards = [
    {name: 'map-overview', x: -390, y: 120, r: -8, fromX: -1040, fromY: -260, start: 4},
    {name: 'map-community', x: 710, y: 180, r: 7, fromX: 1320, fromY: -300, start: 10},
    {name: 'community-detail', x: -330, y: 570, r: 5, fromX: -980, fromY: 520, start: 16},
    {name: 'map-vicinity', x: 730, y: 660, r: -6, fromX: 1360, fromY: 610, start: 21},
    {name: 'wealth-chart-card', x: -350, y: 1080, r: 6, fromX: -980, fromY: 1500, start: 25},
    {name: 'stress-matrix-card', x: 720, y: 1120, r: -5, fromX: 1360, fromY: 1540, start: 29},
    {name: 'candidate-comparison-panel', x: -280, y: 1490, r: -5, fromX: -880, fromY: 2100, start: 32},
    {name: 'scenario-switch-self', x: 730, y: 1510, r: 5, fromX: 1320, fromY: 2080, start: 35},
  ];
  const particles = Array.from({length: 24}, (_, index) => ({
    x: (index * 137) % 1000,
    y: 820 + ((index * 83) % 660),
    size: 5 + (index % 5) * 2,
    delay: 54 + (index % 8) * 3,
  }));
  return (
    <SceneBase dark>
      <div style={{position: 'absolute', inset: -160, transform: `scale(${crane})`, background: 'radial-gradient(circle at 50% 44%, rgba(119,96,179,.42), transparent 35%), linear-gradient(180deg,#16072a,#251044 58%,#13051f)'}} />
      <div style={{position: 'absolute', left: 94, top: -180, width: 340, height: 1500, transform: 'rotate(18deg)', background: 'linear-gradient(180deg,rgba(255,255,255,.22),transparent 72%)', filter: 'blur(28px)', opacity: .52}} />
      <div style={{position: 'absolute', right: 70, top: -220, width: 330, height: 1500, transform: 'rotate(-17deg)', background: 'linear-gradient(180deg,rgba(255,255,255,.18),transparent 72%)', filter: 'blur(30px)', opacity: .5}} />
      {cards.map((card, index) => {
        const p = spring({frame: frame - card.start, fps: 30, config: {damping: 13, stiffness: 105 + index * 3, mass: 0.8}});
        const x = interpolate(p, [0, 1], [card.fromX, card.x]);
        const y = interpolate(p, [0, 1], [card.fromY, card.y]);
        return <ScreenshotCard key={`${card.name}-${index}`} name={card.name} contain style={{left: x, top: y, width: index > 5 ? 620 : 700, height: index > 5 ? 330 : 394, opacity: interpolate(p, [0, .2, 1], [0, .42, .68], clamp), transform: `rotate(${card.r * Math.min(p, 1)}deg) scale(${0.72 + Math.min(p, 1) * 0.28})`, filter: 'saturate(.78)'}} />;
      })}
      {particles.map((particle, index) => {
        const p = interpolate(frame, [particle.delay, particle.delay + 46], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)});
        return <div key={index} style={{position: 'absolute', left: particle.x, top: particle.y - p * (120 + (index % 4) * 36), width: particle.size, height: particle.size, borderRadius: '50%', background: index % 3 === 0 ? '#d7c7ff' : '#9fe0ca', opacity: Math.sin(p * Math.PI) * .78, boxShadow: '0 0 16px currentColor'}} />;
      })}
      <div style={{position: 'absolute', left: 74, right: 74, top: 478, height: 830, borderRadius: 54, background: 'rgba(255,255,255,.96)', border: '2px solid rgba(255,255,255,.5)', boxShadow: '0 45px 160px rgba(0,0,0,.42), 0 0 80px rgba(119,96,179,.28)', transform: `translateY(${(1 - Math.max(0, logoIn)) * 110}px) scale(${0.88 + Math.max(0, logoIn) * 0.12})`, opacity: interpolate(frame, [58, 78], [0, 1], clamp)}}>
        <Img src={staticFile('assets/asset-divergence-logo-v3.svg')} style={{position: 'absolute', top: 96, left: 430, width: 74, height: 74}} />
        <div style={{position: 'absolute', top: 216, left: 70, right: 70, textAlign: 'center', fontFamily: font, color: C.ink}}>
          <div style={{fontSize: 32, fontWeight: 760, letterSpacing: 4, color: C.violet}}>OPEN SOURCE · BEIJING</div>
          <div style={{fontSize: 82, lineHeight: 1.06, fontWeight: 790, letterSpacing: -5, marginTop: 24}}>北京买房<br />决策工具</div>
          <div style={{fontSize: 34, lineHeight: 1.5, color: C.muted, fontWeight: 620, marginTop: 30}}>地图证据 · 现金流 · 压力测试 · 候选评分</div>
          <div style={{fontSize: 34, lineHeight: 1.35, color: C.green, fontWeight: 760, marginTop: 46}}>github.com/LiuLi4/asset-divergence-lab</div>
        </div>
      </div>
      <div style={{position: 'absolute', bottom: 136, left: 64, right: 64, textAlign: 'center', fontFamily: font, fontSize: 62, lineHeight: 1.2, fontWeight: 760, color: C.white, textShadow: '0 4px 24px rgba(0,0,0,.52)', opacity: enter(frame, 90, 20)}}>
        喜欢可以收藏，<br />买房之前先把证据算清楚
      </div>
      <OsmAttribution dark />
    </SceneBase>
  );
};

const SFX = [
  {from: SHOTS.s1.from + 18, src: 'air-whoosh-powerful.mp3', volume: 0.42, duration: 74}, // 北京全图俯冲
  {from: SHOTS.s1.from + 56, src: 'impact-deep-whoosh.mp3', volume: 0.48, duration: 94}, // 西城落地
  {from: SHOTS.s2.from + 54, src: 'click-camera.mp3', volume: 0.56, duration: 20}, // 点击小区
  {from: SHOTS.s2.from + 70, src: 'swoosh-quick.mp3', volume: 0.34, duration: 34}, // 地图推进
  {from: SHOTS.s3.from + 18, src: 'transition-soft.mp3', volume: 0.3, duration: 46}, // 证据卡抬升
  {from: SHOTS.s4.from + 20, src: 'air-whoosh-powerful.mp3', volume: 0.4, duration: 84}, // 周边孔径扩张
  {from: SHOTS.s5.from + 55, src: 'switch-click-quick.mp3', volume: 0.48, duration: 18}, // 自住/出租切换
  {from: SHOTS.s6.from + 12, src: 'transition-soft.mp3', volume: 0.28, duration: 48}, // 曲线开始
  {from: SHOTS.s6.from + 84, src: 'swoosh-quick.mp3', volume: 0.3, duration: 36}, // 压力矩阵切入
  {from: SHOTS.s7.from + 12, src: 'air-woosh-quick.mp3', volume: 0.28, duration: 36}, // 候选 A
  {from: SHOTS.s7.from + 22, src: 'sweep-short.mp3', volume: 0.24, duration: 34}, // 候选 B
  {from: SHOTS.s7.from + 32, src: 'air-woosh-quick.mp3', volume: 0.2, duration: 32}, // 候选 C
  {from: SHOTS.s8.from + 20, src: 'swoosh-slow.mp3', volume: 0.38, duration: 128}, // 收尾汇聚
  {from: SHOTS.s8.from + 60, src: 'impact-deep-whoosh.mp3', volume: 0.45, duration: 106}, // 品牌落定
  {from: SHOTS.s8.from + 82, src: 'shimmer-sparkle-sweep.mp3', volume: 0.3, duration: 90}, // 品牌余韵
] as const;

const AudioTrack: React.FC<PromoProps> = ({bgm}) => {
  const frame = useCurrentFrame();
  const volume = interpolate(frame, [0, 30, 1195, 1259], [0, 0.31, 0.31, 0], clamp);
  return (
    <>
      {bgm ? <Audio src={staticFile('audio/house-vibez-120bpm.mp3')} volume={volume} loop /> : null}
      {SFX.map((s) => (
        <Sequence key={`${s.from}-${s.src}`} from={s.from} durationInFrames={s.duration}>
          <Audio src={staticFile(`audio/${s.src}`)} volume={s.volume} />
        </Sequence>
      ))}
    </>
  );
};

export const BeijingHomebuyingPromo: React.FC<PromoProps> = ({bgm}) => {
  const {fps} = useVideoConfig();
  if (fps !== 30) throw new Error('This timeline is authored for 30fps.');
  return (
    <AbsoluteFill style={{fontFamily: font, background: C.paper}}>
      <Sequence from={SHOTS.s1.from} durationInFrames={SHOTS.s1.duration}><DroneDiveScene /></Sequence>
      <Sequence from={SHOTS.s2.from} durationInFrames={SHOTS.s2.duration}><CursorScene /></Sequence>
      <Sequence from={SHOTS.s3.from} durationInFrames={SHOTS.s3.duration}><SpotlightScene /></Sequence>
      <Sequence from={SHOTS.s4.from} durationInFrames={SHOTS.s4.duration}><VicinityScene /></Sequence>
      <Sequence from={SHOTS.s5.from} durationInFrames={SHOTS.s5.duration}><CashflowScene /></Sequence>
      <Sequence from={SHOTS.s6.from} durationInFrames={SHOTS.s6.duration}><ChartScene /></Sequence>
      <Sequence from={SHOTS.s7.from} durationInFrames={SHOTS.s7.duration}><CandidatesScene /></Sequence>
      <Sequence from={SHOTS.s8.from} durationInFrames={SHOTS.s8.duration}><OutroScene /></Sequence>
      <AudioTrack bgm={bgm} />
    </AbsoluteFill>
  );
};
