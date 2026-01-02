[**DevExtreme React Funnel API v26.1.0**](../../../../README.md)

***

[DevExtreme React Funnel API](../../../../globals.md) / [FunnelTypes](../README.md) / Legend

# Type Alias: Legend

> **Legend** = `BaseLegend` & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/funnel.d.ts:612

## Type Declaration

### customizeHint()?

> `optional` **customizeHint**: (`itemInfo`) => `string`

#### Parameters

##### itemInfo

###### item?

[`Item`](Item.md)

###### text?

`string`

#### Returns

`string`

#### Docid

dxFunnelOptions.legend.customizeHint
@type_function_param1_field item:dxFunnelItem

### customizeItems()?

> `optional` **customizeItems**: (`items`) => [`LegendItem`](LegendItem.md)[]

#### Parameters

##### items

[`LegendItem`](LegendItem.md)[]

#### Returns

[`LegendItem`](LegendItem.md)[]

#### Docid

dxFunnelOptions.legend.customizeItems
@type_function_param1 items:Array<FunnelLegendItem>
@type_function_return Array<FunnelLegendItem>

### customizeText()?

> `optional` **customizeText**: (`itemInfo`) => `string`

#### Parameters

##### itemInfo

###### item?

[`Item`](Item.md)

###### text?

`string`

#### Returns

`string`

#### Docid

dxFunnelOptions.legend.customizeText
@type_function_param1_field item:dxFunnelItem

#### Not Used In Theme

### markerTemplate?

> `optional` **markerTemplate**: `template` \| (`legendItem`, `element`) => `string` \| `UserDefinedElement`\<`SVGElement`\>

#### Docid

dxFunnelOptions.legend.markerTemplate

#### Default

```ts
undefined
@type_function_param1 legendItem:FunnelLegendItem
@type_function_return string|SVGElement|jQuery
@public
```

### visible?

> `optional` **visible**: `boolean`

#### Docid

dxFunnelOptions.legend.visible

#### Default

```ts
false
@public
```

## Docid

dxFunnelLegend
