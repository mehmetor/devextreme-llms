[**DevExtreme React PieChart API v26.1.0**](../../../../README.md)

***

[DevExtreme React PieChart API](../../../../globals.md) / [PieChartTypes](../README.md) / Tooltip

# Type Alias: Tooltip

> **Tooltip** = `Omit`\<`BaseChartTooltip`\<[`PointInfo`](PointInfo.md)\>, `"contentTemplate"` \| `"customizeTooltip"`\> & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/pie\_chart.d.ts:287

## Type Declaration

### contentTemplate?

> `optional` **contentTemplate**: `template` \| (`pointInfo`, `element`) => `string` \| `UserDefinedElement`

#### Docid

dxPieChartOptions.tooltip.contentTemplate
@type_function_param1 pointInfo:dxPieChartPointInfo
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

dxPieChartOptions.tooltip.customizeTooltip

@type_function_param1 pointInfo:dxPieChartPointInfo
@type_function_return object

#### Default

```ts
undefined
```

#### Not Used In Theme

## Docid

dxPieChartTooltip
