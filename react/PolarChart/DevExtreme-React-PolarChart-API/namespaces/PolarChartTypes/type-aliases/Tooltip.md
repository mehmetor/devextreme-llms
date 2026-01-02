[**DevExtreme React PolarChart API v26.1.0**](../../../../README.md)

***

[DevExtreme React PolarChart API](../../../../globals.md) / [PolarChartTypes](../README.md) / Tooltip

# Type Alias: Tooltip

> **Tooltip** = `Omit`\<`BaseChartTooltip`\<[`PointInfo`](PointInfo.md)\>, `"contentTemplate"` \| `"customizeTooltip"`\> & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/polar\_chart.d.ts:1241

## Type Declaration

### contentTemplate?

> `optional` **contentTemplate**: `template` \| (`pointInfo`, `element`) => `string` \| `UserDefinedElement`

#### Docid

dxPolarChartOptions.tooltip.contentTemplate
@type_function_param1 pointInfo:dxPolarChartPointInfo
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

dxPolarChartOptions.tooltip.customizeTooltip

@type_function_param1 pointInfo:dxPolarChartPointInfo
@type_function_return object

#### Default

```ts
undefined
```

#### Not Used In Theme

### shared?

> `optional` **shared**: `boolean`

#### Docid

dxPolarChartOptions.tooltip.shared

#### Default

```ts
false
@public
```

## Docid

dxPolarChartTooltip
