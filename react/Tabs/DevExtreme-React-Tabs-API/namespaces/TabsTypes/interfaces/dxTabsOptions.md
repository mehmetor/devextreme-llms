[**DevExtreme React Tabs API v26.1.0**](../../../../README.md)

***

[DevExtreme React Tabs API](../../../../globals.md) / [TabsTypes](../README.md) / dxTabsOptions

# ~~Interface: dxTabsOptions\<TItem, TKey\>~~

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:129

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Extends

- [`Properties`](../type-aliases/Properties.md)\<`TItem`, `TKey`\>

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

`Properties.accessKey`

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

`Properties.activeStateEnabled`

***

### ~~dataSource?~~

> `optional` **dataSource**: `DataSourceLike`\<`TItem`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:150

#### Docid

dxTabsOptions.dataSource

#### Default

```ts
null
@public
```

#### Inherited from

`Properties.dataSource`

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

`Properties.disabled`

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

`Properties.elementAttr`

***

### ~~focusStateEnabled?~~

> `optional` **focusStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:156

#### Docid

dxTabsOptions.focusStateEnabled

#### Default

```ts
true &for(desktop)
@public
```

#### Inherited from

`Properties.focusStateEnabled`

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

`Properties.height`

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

`Properties.hint`

***

### ~~hoverStateEnabled?~~

> `optional` **hoverStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:162

#### Docid

dxTabsOptions.hoverStateEnabled

#### Default

```ts
true
@public
```

#### Inherited from

`Properties.hoverStateEnabled`

***

### ~~iconPosition?~~

> `optional` **iconPosition**: [`TabsIconPosition`](../type-aliases/TabsIconPosition.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:170

#### Docid

dxTabsOptions.iconPosition

#### Default

```ts
'start'
```

#### Default

```ts
'top' &for(Material)
```

#### Default

```ts
'top' &for(Fluent)
@public
```

#### Inherited from

`Properties.iconPosition`

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

`Properties.itemHoldTimeout`

***

### ~~items?~~

> `optional` **items**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:177

#### Docid

dxTabsOptions.items

#### Fires

dxTabsOptions.onOptionChanged

#### Inherited from

`Properties.items`

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

`Properties.itemTemplate`

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

`Properties.keyExpr`

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

`Properties.noDataText`

***

### ~~onContentReady()?~~

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxTabs`\<`TItem`, `TKey`\>\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
```

#### Action

#### Inherited from

`Properties.onContentReady`

***

### ~~onDisposing()?~~

> `optional` **onDisposing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:62

#### Parameters

##### e

`EventInfo`\<`dxTabs`\<`TItem`, `TKey`\>\>

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

`Properties.onDisposing`

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

`Properties.onInitialized`

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

`Properties.onItemClick`

***

### ~~onItemContextMenu()?~~

> `optional` **onItemContextMenu**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:120

#### Parameters

##### e

`NativeEventInfo`\<`dxTabs`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

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

`Properties.onItemContextMenu`

***

### ~~onItemHold()?~~

> `optional` **onItemHold**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:131

#### Parameters

##### e

`NativeEventInfo`\<`dxTabs`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

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

`Properties.onItemHold`

***

### ~~onItemRendered()?~~

> `optional` **onItemRendered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:141

#### Parameters

##### e

`EventInfo`\<`dxTabs`\<`TItem`, `TKey`\>\> & `ItemInfo`\<`TItem`\>

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

`Properties.onItemRendered`

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxTabs`\<`TItem`, `TKey`\>\>

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

`Properties.onOptionChanged`

***

### ~~onSelectionChanged()?~~

> `optional` **onSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:164

#### Parameters

##### e

`EventInfo`\<`dxTabs`\<`TItem`, `TKey`\>\> & `SelectionChangeInfo`\<`TItem`\>

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

`Properties.onSelectionChanged`

***

### ~~onSelectionChanging()?~~

> `optional` **onSelectionChanging**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:153

#### Parameters

##### e

`SelectionChangingEventBase`\<`dxTabs`\<`TItem`, `TKey`\>\>

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

`Properties.onSelectionChanging`

***

### ~~orientation?~~

> `optional` **orientation**: [`Orientation`](../type-aliases/Orientation.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:183

#### Docid

dxTabsOptions.orientation

#### Default

```ts
'horizontal'
@public
```

#### Inherited from

`Properties.orientation`

***

### ~~repaintChangesOnly?~~

> `optional` **repaintChangesOnly**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:189

#### Docid

dxTabsOptions.repaintChangesOnly

#### Default

```ts
false
@public
```

#### Inherited from

`Properties.repaintChangesOnly`

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

`Properties.rtlEnabled`

***

### ~~scrollByContent?~~

> `optional` **scrollByContent**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:196

#### Docid

dxTabsOptions.scrollByContent

#### Default

```ts
true
```

#### Default

```ts
false &for(desktop)
@public
```

#### Inherited from

`Properties.scrollByContent`

***

### ~~scrollingEnabled?~~

> `optional` **scrollingEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:202

#### Docid

dxTabsOptions.scrollingEnabled

#### Default

```ts
true
@public
```

#### Inherited from

`Properties.scrollingEnabled`

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

`Properties.selectedIndex`

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

`Properties.selectedItem`

***

### ~~selectedItemKeys?~~

> `optional` **selectedItemKeys**: `TKey`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:185

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`Properties.selectedItemKeys`

***

### ~~selectedItems?~~

> `optional` **selectedItems**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:191

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`Properties.selectedItems`

***

### ~~selectionMode?~~

> `optional` **selectionMode**: [`SingleOrMultiple`](../type-aliases/SingleOrMultiple.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:208

#### Docid

dxTabsOptions.selectionMode

#### Default

```ts
'single'
@public
```

#### Inherited from

`Properties.selectionMode`

***

### ~~showNavButtons?~~

> `optional` **showNavButtons**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:215

#### Docid

dxTabsOptions.showNavButtons

#### Default

```ts
true
```

#### Default

```ts
false &for(mobile_devices)
@public
```

#### Inherited from

`Properties.showNavButtons`

***

### ~~stylingMode?~~

> `optional` **stylingMode**: [`TabsStyle`](../type-aliases/TabsStyle.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tabs.d.ts:222

#### Docid

dxTabsOptions.stylingMode

#### Default

```ts
'primary'
```

#### Default

```ts
'secondary' &for(Fluent)
@public
```

#### Inherited from

`Properties.stylingMode`

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

`Properties.tabIndex`

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

`Properties.visible`

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

`Properties.width`
