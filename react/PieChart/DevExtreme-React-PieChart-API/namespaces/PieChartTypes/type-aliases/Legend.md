[**DevExtreme React PieChart API v26.1.0**](../../../../README.md)

***

[DevExtreme React PieChart API](../../../../globals.md) / [PieChartTypes](../README.md) / Legend

# Type Alias: Legend

> **Legend** = `BaseChartLegend` & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/pie\_chart.d.ts:535

## Type Declaration

### customizeHint()?

> `optional` **customizeHint**: (`pointInfo`) => `string`

#### Parameters

##### pointInfo

###### pointColor?

`string`

###### pointIndex?

`number`

###### pointName?

`any`

#### Returns

`string`

#### Docid

dxPieChartOptions.legend.customizeHint

### customizeItems()?

> `optional` **customizeItems**: (`items`) => [`LegendItem`](LegendItem.md)[]

#### Parameters

##### items

[`LegendItem`](LegendItem.md)[]

#### Returns

[`LegendItem`](LegendItem.md)[]

#### Docid

dxPieChartOptions.legend.customizeItems
@type_function_param1 items:Array<PieChartLegendItem>
@type_function_return Array<PieChartLegendItem>

### customizeText()?

> `optional` **customizeText**: (`pointInfo`) => `string`

#### Parameters

##### pointInfo

###### pointColor?

`string`

###### pointIndex?

`number`

###### pointName?

`any`

#### Returns

`string`

#### Docid

dxPieChartOptions.legend.customizeText

#### Not Used In Theme

### hoverMode?

> `optional` **hoverMode**: [`PieChartLegendHoverMode`](PieChartLegendHoverMode.md)

#### Docid

dxPieChartOptions.legend.hoverMode

#### Default

```ts
'allArgumentPoints'
@public
```

### markerTemplate?

> `optional` **markerTemplate**: `template` \| (`legendItem`, `element`) => `string` \| `UserDefinedElement`\<`SVGElement`\>

#### Docid

dxPieChartOptions.legend.markerTemplate

#### Default

```ts
undefined
@type_function_param1 legendItem:PieChartLegendItem
@type_function_return string|SVGElement|jQuery
@public
```

## Docid

dxPieChartLegend
