[**DevExtreme React Sankey API v26.1.0**](../../../../README.md)

***

[DevExtreme React Sankey API](../../../../globals.md) / [SankeyTypes](../README.md) / Tooltip

# Type Alias: Tooltip

> **Tooltip** = `BaseWidgetTooltip` & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/sankey.d.ts:588

## Type Declaration

### customizeLinkTooltip()?

> `optional` **customizeLinkTooltip**: (`info`) => `any`

#### Parameters

##### info

###### source?

`string`

###### target?

`string`

###### weight?

`number`

#### Returns

`any`

#### Docid

dxSankeyOptions.tooltip.customizeLinkTooltip

#### Default

```ts
undefined
@type_function_return object
@public
```

### customizeNodeTooltip()?

> `optional` **customizeNodeTooltip**: (`info`) => `any`

#### Parameters

##### info

###### label?

`string`

###### title?

`string`

###### weightIn?

`number`

###### weightOut?

`number`

#### Returns

`any`

#### Docid

dxSankeyOptions.tooltip.customizeNodeTooltip

#### Default

```ts
undefined
@type_function_param1_field title:string:deprecated(label)
@type_function_return object
@public
```

### enabled?

> `optional` **enabled**: `boolean`

#### Docid

dxSankeyOptions.tooltip.enabled

#### Default

```ts
true
@public
```

### linkTooltipTemplate?

> `optional` **linkTooltipTemplate**: `template` \| (`info`, `element`) => `string` \| `UserDefinedElement`

#### Docid

dxSankeyOptions.tooltip.linkTooltipTemplate
@type_function_return string|Element|jQuery

#### Default

```ts
undefined
@public
```

### nodeTooltipTemplate?

> `optional` **nodeTooltipTemplate**: `template` \| (`info`, `element`) => `string` \| `UserDefinedElement`

#### Docid

dxSankeyOptions.tooltip.nodeTooltipTemplate
@type_function_return string|Element|jQuery

#### Default

```ts
undefined
@public
```

## Docid

dxSankeyTooltip
