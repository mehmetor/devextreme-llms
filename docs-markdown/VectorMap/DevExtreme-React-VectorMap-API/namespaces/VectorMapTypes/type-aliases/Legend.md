[**DevExtreme React VectorMap API v26.1.0**](../../../../README.md)

***

[DevExtreme React VectorMap API](../../../../globals.md) / [VectorMapTypes](../README.md) / Legend

# Type Alias: Legend

> **Legend** = `BaseLegend` & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/vector\_map.d.ts:794

## Type Declaration

### customizeHint()?

> `optional` **customizeHint**: (`itemInfo`) => `string`

#### Parameters

##### itemInfo

###### color?

`string`

###### end?

`number`

###### index?

`number`

###### size?

`number`

###### start?

`number`

#### Returns

`string`

#### Docid

dxVectorMapOptions.legends.customizeHint

#### Not Used In Theme

### customizeItems()?

> `optional` **customizeItems**: (`items`) => [`LegendItem`](LegendItem.md)[]

#### Parameters

##### items

[`LegendItem`](LegendItem.md)[]

#### Returns

[`LegendItem`](LegendItem.md)[]

#### Docid

dxVectorMapOptions.legends.customizeItems
@type_function_param1 items:Array<VectorMapLegendItem>
@type_function_return Array<VectorMapLegendItem>

### customizeText()?

> `optional` **customizeText**: (`itemInfo`) => `string`

#### Parameters

##### itemInfo

###### color?

`string`

###### end?

`number`

###### index?

`number`

###### size?

`number`

###### start?

`number`

#### Returns

`string`

#### Docid

dxVectorMapOptions.legends.customizeText

#### Not Used In Theme

### font?

> `optional` **font**: `Font`

#### Docid

dxVectorMapOptions.legends.font

#### Default

```ts
'#2b2b2b' &prop(color)
@public
```

### markerColor?

> `optional` **markerColor**: `string`

#### Docid

dxVectorMapOptions.legends.markerColor

#### Default

```ts
undefined
@public
```

### markerShape?

> `optional` **markerShape**: [`VectorMapMarkerShape`](VectorMapMarkerShape.md)

#### Docid

dxVectorMapOptions.legends.markerShape

#### Default

```ts
"square"
@public
```

### markerSize?

> `optional` **markerSize**: `number`

#### Docid

dxVectorMapOptions.legends.markerSize

#### Default

```ts
12
@public
```

### markerTemplate?

> `optional` **markerTemplate**: `template` \| (`legendItem`, `element`) => `string` \| `UserDefinedElement`\<`SVGElement`\>

#### Docid

dxVectorMapOptions.legends.markerTemplate

#### Default

```ts
undefined
@type_function_param1 legendItem:VectorMapLegendItem
@type_function_return string|SVGElement|jQuery
@public
```

### source?

> `optional` **source**: `object`

#### Docid

dxVectorMapOptions.legends.source

#### Not Used In Theme

#### source.grouping?

> `optional` **grouping**: `string`

##### Docid

dxVectorMapOptions.legends.source.grouping

##### Not Used In Theme

#### source.layer?

> `optional` **layer**: `string`

##### Docid

dxVectorMapOptions.legends.source.layer

##### Not Used In Theme

## Docid

dxVectorMapLegends
