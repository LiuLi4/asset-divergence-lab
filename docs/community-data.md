# 小区购买价值数据接入

首页地图默认加载获授权的七区生产数据，也可以在浏览器本地导入最多 50,000 个小区覆盖默认数据，文件不会上传。具备评分证据的小区用三档颜色点位显示；近期成交或同质可比不足的点位为灰色且明确标注“暂不评分”。少量候选显示名称，任一点位都可以点击查看明细。

目前地图底图支持海淀、朝阳、石景山、西城、丰台、通州和大兴七区。经纬度会投影为当前艺术地图内的相对位置，并非测绘或产权边界。

## JSON 格式

```json
{
  "version": 1,
  "label": "2026-08 授权数据",
  "updatedAt": "2026-08-05",
  "sourceName": "数据提供方名称",
  "sourceUrl": "https://example.com/dataset",
  "communities": [
    {
      "id": "haidian-example-1",
      "district": "haidian",
      "name": "示例小区",
      "zone": "万柳",
      "longitude": 116.31,
      "latitude": 39.99,
      "dataStatus": "scored",
      "qualityScore": 86,
      "adjustedDiscount": 8.5,
      "referenceUnitPrice": 72000,
      "latestUnitPrice": 70500,
      "nearbyMedianUnitPrice": 77000,
      "latestTransactionDate": "2026-07-28",
      "liquidityScore": 81,
      "confidenceScore": 78,
      "riskPenalty": 2,
      "transactions180d": 9,
      "comparableSamples": 14,
      "watch": "逐套核验楼栋、噪声、采光和产权"
    }
  ]
}
```

`district` 可用值：`haidian`、`chaoyang`、`shijingshan`、`xicheng`、`fengtai`、`tongzhou`、`daxing`。如果已有针对艺术底图校准过的坐标，可以不用经纬度，改传 `position: { "x": 30, "y": 42 }`，两个值均为 `0–100`。

## 评分口径

```text
折价分 = clamp(50 + 同质可比折价 × 3.5, 0, 100)
原始分 = 优质小区分 × 45% + 折价分 × 30% + 流动性 × 15% + 置信度 × 10% − 风险扣分
```

当 `qualityScore < 75` 时，总分最高只能为 64，防止低价掩盖基本面短板。颜色区间为绿色 `80–100`、琥珀色 `65–79`、玫红色 `0–64`。`dataStatus: "insufficient"` 使用灰色，不参与平均分和价值分层。

“最新成交低于周边小区”不能直接拿小区均价相减。建议先按面积、户型、楼龄、楼层和装修做同质调整，再用同商圈或 1–2 公里范围内、近 180 天至少 5 个可比样本的中位数计算折价。样本不足时降低 `confidenceScore`，不要把挂牌价当成交价。

## 已核验的数据来源边界

- [北京市公共数据开放平台“居住小区”](https://data.beijing.gov.cn/zyml/wnkfsj/48beb9402b944aa7a858b51d714918f2.htm)包含小区名称、地址、百度经纬度、区和街道等基础字段；下载和 API 需要登录后的个人标识码。它能补齐名录和坐标，不能单独算购买价值。
- [北京市住建委房地产交易信息](https://bjjs.zjw.beijing.gov.cn/eportal/ui?pageId=307749)公开的是区县、面积段和价格段聚合数据，不包含逐小区成交单价。
- [flowerwithoutbee/beijing-property-dashboard](https://github.com/flowerwithoutbee/beijing-property-dashboard)提供了本次转换使用的小区表与成交明细。项目维护者已确认取得本项目使用和公开发布派生评分数据的授权；仓库仅提交 `public/data/community-values.json`，不再分发原始 CSV 成交明细。原始上游仓库仍未声明通用开源许可证，因此此项授权不应外推为第三方可自由再分发原始数据。
- [linpingta/lianjia-eroom-analysis](https://github.com/linpingta/lianjia-eroom-analysis)包含 2022–2024 挂牌快照，但项目说明限制数据分享和商用；挂牌价也不能代替最新成交价。
- [Kaggle Beijing Housing Data](https://www.kaggle.com/datasets/ruiqurm/lianjia)是 2011–2017 年历史成交，采用 CC BY-NC-SA 4.0，适合验证算法，不适合标成当前购买价值。

生产数据截止 `2025-08-01`，覆盖七区 7,972 个小区：2,578 个同时具备近 180 天成交和至少 3 个同质可比样本并获得分数，5,394 个以“数据不足”展示。评分分布为绿色 549、琥珀色 822、玫红色 1,207。接入新数据时仍必须记录日期、来源 URL、许可、字段口径和覆盖率；没有授权或时间戳的数据不要进入生产地图。

## 从两张 CSV 生成地图文件

仓库提供一个无第三方依赖的流式转换器，适配包含上述中文字段的“小区表 + 成交表”：

```bash
npm run data:build -- communities.csv transactions.csv community-values.json
```

转换器以成交表的最新日期为基准读取近 180 天记录，用同板块（少于 5 个可比小区时扩展到同区 3 公里范围）最新成交单价中位数计算折价，并从楼龄、绿化率、容积率、轨道交通标签、物业信息、成交量和可比样本量构建质量、流动性与置信度字段。没有近期成交或少于 3 个可比小区时仍保留点位，但输出 `dataStatus: "insufficient"`。生成后仍应抽样核对小区名称匹配、坐标系、异常成交和评分阈值；脚本不会替输入数据取得许可。

## OpenStreetMap 小区坐标底表

`scripts/build-osm-community-catalog.mjs` 可以把 Overpass 返回的住宅要素与七区行政边界做点面空间连接，输出稳定的 OSM ID、名称、区和 WGS84 坐标：

```bash
npm run data:osm -- beijing-residential.json beijing-districts.json public/data/beijing-osm-community-catalog.json
```

当前仓库生成的目录遵守 ODbL 1.0，并保留 `© OpenStreetMap contributors` 署名。OSM 覆盖率取决于贡献者编辑情况，它是可合法复用的坐标和名称底表，不包含成交价，也不能单独生成购买价值分数。

当前生成快照位于 `public/data/beijing-osm-community-catalog.json`，共 4,590 个七区住宅要素：海淀 1,049、朝阳 1,171、石景山 244、西城 244、丰台 855、通州 522、大兴 505。构建器会剔除纯数字楼栋名称，并按行政区多边形进行空间归属。
