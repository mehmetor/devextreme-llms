[**DevExtreme React ValidationSummary API v26.1.0**](../../../../README.md)

***

[DevExtreme React ValidationSummary API](../../../../globals.md) / [ValidationSummaryTypes](../README.md) / dxValidationSummaryOptions

# ~~Interface: dxValidationSummaryOptions\<TItem, TKey\>~~

Defined in: devextreme/artifacts/npm/devextreme/ui/validation\_summary.d.ts:68

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Extends

- `CollectionWidgetOptions`\<`dxValidationSummary`\<`TItem`, `TKey`\>, `TItem`, `TKey`\>

## Type Parameters

### TItem

`TItem` *extends* `ItemLike` = `any`

### TKey

`TKey` = `any`

## Properties

### ~~accessKey?~~

> `optional` **accessKey**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:29

#### Docid

#### Default

```ts
undefined
@public
```

#### Inherited from

`CollectionWidgetOptions.accessKey`

***

### ~~activeStateEnabled?~~

> `optional` **activeStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:35

#### Docid

#### Default

```ts
false
@public
```

#### Inherited from

`CollectionWidgetOptions.activeStateEnabled`

***

### ~~dataSource?~~

> `optional` **dataSource**: `DataSourceLike`\<`TItem`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:64

#### Docid

#### Default

```ts
null
```

#### Inherited from

`CollectionWidgetOptions.dataSource`

***

### ~~disabled?~~

> `optional` **disabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:41

#### Docid

#### Default

```ts
false
@public
```

#### Inherited from

`CollectionWidgetOptions.disabled`

***

### ~~elementAttr?~~

> `optional` **elementAttr**: `object`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:49

#### Index Signature

\[`key`: `string`\]: `any`

#### Docid

#### Default

```ts
{}
@public
```

#### Inherited from

`CollectionWidgetOptions.elementAttr`

***

### ~~focusStateEnabled?~~

> `optional` **focusStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:47

#### Docid

#### Default

```ts
false
@public
```

#### Inherited from

`CollectionWidgetOptions.focusStateEnabled`

***

### ~~height?~~

> `optional` **height**: `string` \| `number`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:55

#### Docid

#### Default

```ts
undefined
@public
```

#### Inherited from

`CollectionWidgetOptions.height`

***

### ~~hint?~~

> `optional` **hint**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:53

#### Docid

#### Default

```ts
undefined
@public
```

#### Inherited from

`CollectionWidgetOptions.hint`

***

### ~~hoverStateEnabled?~~

> `optional` **hoverStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:59

#### Docid

#### Default

```ts
false
@public
```

#### Inherited from

`CollectionWidgetOptions.hoverStateEnabled`

***

### ~~itemHoldTimeout?~~

> `optional` **itemHoldTimeout**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:70

#### Docid

#### Default

```ts
750
@public
```

#### Inherited from

`CollectionWidgetOptions.itemHoldTimeout`

***

### ~~items?~~

> `optional` **items**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:85

#### Docid

#### Fires

CollectionWidgetOptions.onOptionChanged

#### Inherited from

`CollectionWidgetOptions.items`

***

### ~~itemTemplate?~~

> `optional` **itemTemplate**: `template` \| (`itemData`, `itemIndex`, `itemElement`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:78

#### Docid

#### Default

```ts
"item"
@type_function_param1 itemData:object
@type_function_return string|Element|jQuery
@public
```

#### Inherited from

`CollectionWidgetOptions.itemTemplate`

***

### ~~keyExpr?~~

> `optional` **keyExpr**: `string` \| `Function`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:91

#### Docid

#### Default

```ts
null
@public
```

#### Inherited from

`CollectionWidgetOptions.keyExpr`

***

### ~~noDataText?~~

> `optional` **noDataText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:97

#### Docid

#### Default

```ts
"No data to display"
@public
```

#### Inherited from

`CollectionWidgetOptions.noDataText`

***

### ~~onContentReady()?~~

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxValidationSummary`\<`TItem`, `TKey`\>\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
```

#### Action

#### Inherited from

`CollectionWidgetOptions.onContentReady`

***

### ~~onDisposing()?~~

> `optional` **onDisposing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:62

#### Parameters

##### e

`EventInfo`\<`dxValidationSummary`\<`TItem`, `TKey`\>\>

#### Returns

`void`

#### Docid

#### Action

#### Default

```ts
null
@public
```

#### Inherited from

`CollectionWidgetOptions.onDisposing`

***

### ~~onInitialized()?~~

> `optional` **onInitialized**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/component.d.ts:33

#### Parameters

##### e

`InitializedEventInfo`

#### Returns

`void`

#### Docid

@type_function_param1 e:object
@type_function_param1_field component:this
@type_function_param1_field element:DxElement

#### Default

```ts
null
```

#### Action

#### Inherited from

`CollectionWidgetOptions.onInitialized`

***

### ~~onItemClick?~~

> `optional` **onItemClick**: `string` \| (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:109

#### Docid

#### Default

```ts
null
```

#### Action

#### Inherited from

`CollectionWidgetOptions.onItemClick`

***

### ~~onItemContextMenu()?~~

> `optional` **onItemContextMenu**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:120

#### Parameters

##### e

`NativeEventInfo`\<`dxValidationSummary`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:object
@type_function_param1_field itemData:object
@type_function_param1_field event:event
@type_function_param1_field component:this
```

#### Action

#### Inherited from

`CollectionWidgetOptions.onItemContextMenu`

***

### ~~onItemHold()?~~

> `optional` **onItemHold**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:131

#### Parameters

##### e

`NativeEventInfo`\<`dxValidationSummary`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:object
@type_function_param1_field itemData:object
@type_function_param1_field event:event
@type_function_param1_field component:this
```

#### Action

#### Inherited from

`CollectionWidgetOptions.onItemHold`

***

### ~~onItemRendered()?~~

> `optional` **onItemRendered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:141

#### Parameters

##### e

`EventInfo`\<`dxValidationSummary`\<`TItem`, `TKey`\>\> & `ItemInfo`\<`TItem`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:object
@type_function_param1_field itemData:object
@type_function_param1_field component:this
```

#### Action

#### Inherited from

`CollectionWidgetOptions.onItemRendered`

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxValidationSummary`\<`TItem`, `TKey`\>\>

#### Returns

`void`

#### Docid

#### Action

#### Default

```ts
null
@type_function_param1 e:object
@type_function_param1_field component:<DOMComponent>
@public
```

#### Inherited from

`CollectionWidgetOptions.onOptionChanged`

***

### ~~onSelectionChanged()?~~

> `optional` **onSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:164

#### Parameters

##### e

`EventInfo`\<`dxValidationSummary`\<`TItem`, `TKey`\>\> & `SelectionChangeInfo`\<`TItem`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:object
@type_function_param1_field addedItems:array<any>
@type_function_param1_field removedItems:array<any>
@type_function_param1_field component:this
```

#### Action

#### Inherited from

`CollectionWidgetOptions.onSelectionChanged`

***

### ~~onSelectionChanging()?~~

> `optional` **onSelectionChanging**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:153

#### Parameters

##### e

`SelectionChangingEventBase`\<`dxValidationSummary`\<`TItem`, `TKey`\>\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:object
@type_function_param1_field cancel:boolean|Promise<boolean>
@type_function_param1_field addedItems:array<any>
@type_function_param1_field removedItems:array<any>
@type_function_param1_field component:this
```

#### Action

#### Inherited from

`CollectionWidgetOptions.onSelectionChanging`

***

### ~~rtlEnabled?~~

> `optional` **rtlEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:77

#### Docid

#### Default

```ts
false
@public
```

#### Inherited from

`CollectionWidgetOptions.rtlEnabled`

***

### ~~selectedIndex?~~

> `optional` **selectedIndex**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:171

#### Docid

#### Default

```ts
-1
```

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`CollectionWidgetOptions.selectedIndex`

***

### ~~selectedItem?~~

> `optional` **selectedItem**: `TItem`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:179

#### Docid

#### Default

```ts
null
```

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Ref

#### Inherited from

`CollectionWidgetOptions.selectedItem`

***

### ~~selectedItemKeys?~~

> `optional` **selectedItemKeys**: `TKey`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:185

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`CollectionWidgetOptions.selectedItemKeys`

***

### ~~selectedItems?~~

> `optional` **selectedItems**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:191

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`CollectionWidgetOptions.selectedItems`

***

### ~~tabIndex?~~

> `optional` **tabIndex**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:72

#### Docid

#### Default

```ts
0
@public
```

#### Inherited from

`CollectionWidgetOptions.tabIndex`

***

### ~~validationGroup?~~

> `optional` **validationGroup**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/validation\_summary.d.ts:77

#### Docid

#### Ref

***

### ~~visible?~~

> `optional` **visible**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:78

#### Docid

#### Default

```ts
true
@public
```

#### Inherited from

`CollectionWidgetOptions.visible`

***

### ~~width?~~

> `optional` **width**: `string` \| `number`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:83

#### Docid

#### Default

```ts
undefined
@public
```

#### Inherited from

`CollectionWidgetOptions.width`
