[**DevExtreme React BarGauge API v26.1.0**](../../../../README.md)

***

[DevExtreme React BarGauge API](../../../../globals.md) / [BarGaugeTypes](../README.md) / Tooltip

# Type Alias: Tooltip

> **Tooltip** = `BaseWidgetTooltip` & `object`

Defined in: devextreme/artifacts/npm/devextreme/viz/bar\_gauge.d.ts:433

## Type Declaration

### contentTemplate?

> `optional` **contentTemplate**: `template` \| (`scaleValue`, `element`) => `string` \| `UserDefinedElement`

#### Docid

dxBarGaugeOptions.tooltip.contentTemplate
@type_function_return string|Element|jQuery

#### Default

```ts
undefined
@public
```

### customizeTooltip()?

> `optional` **customizeTooltip**: (`scaleValue`) => `any`

#### Parameters

##### scaleValue

###### index?

`number`

###### value?

`number`

###### valueText?

`string`

#### Returns

`any`

#### Docid

dxBarGaugeOptions.tooltip.customizeTooltip

#### Default

```ts
undefined
@type_function_return object
@public
```

### interactive?

> `optional` **interactive**: `boolean`

#### Docid

dxBarGaugeOptions.tooltip.interactive

#### Default

```ts
false
@public
```

## Docid

dxBarGaugeTooltip
