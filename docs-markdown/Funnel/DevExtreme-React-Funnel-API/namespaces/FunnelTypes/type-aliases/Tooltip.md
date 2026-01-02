[**DevExtreme React Funnel API v26.1.0**](../../../../README.md)

***

[DevExtreme React Funnel API](../../../../globals.md) / [FunnelTypes](../README.md) / Tooltip

# Type Alias: Tooltip

> **Tooltip** = `BaseWidgetTooltip` & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/funnel.d.ts:652

## Type Declaration

### contentTemplate?

> `optional` **contentTemplate**: `template` \| (`info`, `element`) => `string` \| `UserDefinedElement`

#### Docid

dxFunnelOptions.tooltip.contentTemplate
@type_function_param1_field item:dxFunnelItem
@type_function_return string|Element|jQuery

#### Default

```ts
undefined
@public
```

### customizeTooltip()?

> `optional` **customizeTooltip**: (`info`) => `any`

#### Parameters

##### info

###### item?

[`Item`](Item.md)

###### percent?

`number`

###### percentText?

`string`

###### value?

`number`

###### valueText?

`string`

#### Returns

`any`

#### Docid

dxFunnelOptions.tooltip.customizeTooltip

#### Default

```ts
undefined
@type_function_param1_field item:dxFunnelItem
@type_function_return object
@public
```

## Docid

dxFunnelTooltip
