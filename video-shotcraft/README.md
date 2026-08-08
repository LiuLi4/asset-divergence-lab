# 北京买房项目抖音宣传片

这是 `asset-divergence-lab` 的 42 秒竖屏产品宣传片工程，使用 Remotion 生成 1080 × 1920、30fps、H.264 MP4。

## 本地生成

```bash
npm install
npm run capture
npm run check
npm run render -- --codec=h264 --crf=20 --audio-codec=aac
npm run render:nobgm -- --codec=h264 --crf=20 --audio-codec=aac
```

`npm run capture` 默认从 `http://127.0.0.1:4173/` 采集真实产品页面，可通过 `CAPTURE_BASE_URL` 覆盖。

## 时间线

成片依次展示北京全图、西城区真实坐标、小区购买价值、周边街区、买租现金流、资产曲线与压力矩阵、三套候选房评分、开源项目地址。分镜、视觉方向和数据口径见 [PROJECT_SPEC.md](./PROJECT_SPEC.md)。

## 音频

带 BGM 与无 BGM 版本由同一画面时间线生成；后者保留所有动作音效。音乐和音效的原始素材名、作者及可复核下载地址见 [AUDIO_LICENSES.md](./AUDIO_LICENSES.md)。

## 发布文件

- `docs/media/beijing-homebuying-douyin.mp4`
- `docs/media/beijing-homebuying-douyin-nobgm.mp4`
