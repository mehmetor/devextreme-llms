[**DevExtreme React BarGauge API v26.1.0**](../../../../README.md)

***

[DevExtreme React BarGauge API](../../../../globals.md) / [BarGaugeTypes](../README.md) / Legend

# Type Alias: Legend

> **Legend** = `BaseLegend` & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/bar\_gauge.d.ts:377

## Type Declaration

### customizeHint()?

> `optional` **customizeHint**: (`arg`) => `string`

#### Parameters

##### arg

###### item?

`BarGaugeBarInfo`

###### text?

`string`

#### Returns

`string`

#### Docid

dxBarGaugeOptions.legend.customizeHint

### customizeItems()?

> `optional` **customizeItems**: (`items`) => [`LegendItem`](LegendItem.md)[]

#### Parameters

##### items

[`LegendItem`](LegendItem.md)[]

#### Returns

[`LegendItem`](LegendItem.md)[]

#### Docid

dxBarGaugeOptions.legend.customizeItems
@type_function_param1 items:Array<BarGaugeLegendItem>
@type_function_return Array<BarGaugeLegendItem>

### customizeText()?

> `optional` **customizeText**: (`arg`) => `string`

#### Parameters

##### arg

###### item?

`BarGaugeBarInfo`

###### text?

`string`

#### Returns

`string`

#### Docid

dxBarGaugeOptions.legend.customizeText

#### Not Used In Theme

### itemTextFormat?

> `optional` **itemTextFormat**: `Format`

#### Docid

dxBarGaugeOptions.legend.itemTextFormat

#### Default

```ts
undefined
@public
```

### markerTemplate?

> `optional` **markerTemplate**: `template` \| (`legendItem`, `element`) => `string` \| `UserDefinedElement`\<`SVGElement`\>

#### Docid

dxBarGaugeOptions.legend.markerTemplate

#### Default

```ts
undefined
@type_function_param1 legendItem:BarGaugeLegendItem
@type_function_return string|SVGElement|jQuery
@public
```

### visible?

> `optional` **visible**: `boolean`

#### Docid

dxBarGaugeOptions.legend.visible

#### Default

```ts
false
@public
```

## Docid

dxBarGaugeLegend
