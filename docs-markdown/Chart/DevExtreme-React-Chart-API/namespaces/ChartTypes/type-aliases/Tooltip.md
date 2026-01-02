[**DevExtreme React Chart API v26.1.0**](../../../../README.md)

***

[DevExtreme React Chart API](../../../../globals.md) / [ChartTypes](../README.md) / Tooltip

# Type Alias: Tooltip

> **Tooltip** = `Omit`\<`BaseChartTooltip`\<[`PointInfo`](PointInfo.md)\>, `"contentTemplate"` \| `"customizeTooltip"`\> & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/chart.d.ts:2701

## Type Declaration

### contentTemplate?

> `optional` **contentTemplate**: `template` \| (`pointInfo`, `element`) => `string` \| `UserDefinedElement`

#### Docid

dxChartOptions.tooltip.contentTemplate
@type_function_param1 pointInfo:dxChartPointInfo
@type_function_return string|Element|jQuery

#### Default

```ts
undefined
@public
```

### customizeTooltip()?

> `optional` **customizeTooltip**: (`pointInfo`) => `any`

#### Parameters

##### pointInfo

[`PointInfo`](PointInfo.md)

#### Returns

`any`

#### Docid

dxChartOptions.tooltip.customizeTooltip

@type_function_param1 pointInfo:dxChartPointInfo
@type_function_return object

#### Default

```ts
undefined
```

#### Not Used In Theme

### location?

> `optional` **location**: [`ChartTooltipLocation`](ChartTooltipLocation.md)

#### Docid

dxChartOptions.tooltip.location

#### Default

```ts
'center'
```

#### Property Of

dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.BubbleSeries,dxChartSeriesTypes.StockSeries,dxChartSeriesTypes.CandleStickSeries

## Docid

dxChartTooltip
