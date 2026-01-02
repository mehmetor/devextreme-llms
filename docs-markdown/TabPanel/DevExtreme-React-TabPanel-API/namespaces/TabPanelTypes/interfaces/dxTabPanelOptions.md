[**DevExtreme React TabPanel API v26.1.0**](../../../../README.md)

***

[DevExtreme React TabPanel API](../../../../globals.md) / [TabPanelTypes](../README.md) / dxTabPanelOptions

# ~~Interface: dxTabPanelOptions\<TItem, TKey\>~~

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:175

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Extends

- `dxMultiViewBaseOptions`\<`dxTabPanel`\<`TItem`, `TKey`\>, `TItem`, `TKey`\>

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

`dxMultiViewBaseOptions.accessKey`

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

`dxMultiViewBaseOptions.activeStateEnabled`

***

### ~~animationEnabled?~~

> `optional` **animationEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:185

#### Docid

#### Default

```ts
false
```

#### Default

```ts
true &for(Android|iOS)
@public
```

#### Overrides

`dxMultiViewBaseOptions.animationEnabled`

***

### ~~dataSource?~~

> `optional` **dataSource**: `DataSourceLike`\<`TItem`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:192

#### Docid

#### Default

```ts
null
@public
```

#### Overrides

`dxMultiViewBaseOptions.dataSource`

***

### ~~deferRendering?~~

> `optional` **deferRendering**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/multi\_view.d.ts:139

#### Docid

dxMultiViewOptions.deferRendering

#### Default

```ts
true
@public
```

#### Inherited from

`dxMultiViewBaseOptions.deferRendering`

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

`dxMultiViewBaseOptions.disabled`

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

`dxMultiViewBaseOptions.elementAttr`

***

### ~~focusStateEnabled?~~

> `optional` **focusStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/multi\_view.d.ts:145

#### Docid

dxMultiViewOptions.focusStateEnabled

#### Default

```ts
true &for(desktop)
@public
```

#### Inherited from

`dxMultiViewBaseOptions.focusStateEnabled`

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

`dxMultiViewBaseOptions.height`

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

`dxMultiViewBaseOptions.hint`

***

### ~~hoverStateEnabled?~~

> `optional` **hoverStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:198

#### Docid

#### Default

```ts
true
@public
```

#### Overrides

`dxMultiViewBaseOptions.hoverStateEnabled`

***

### ~~iconPosition?~~

> `optional` **iconPosition**: [`TabsIconPosition`](../type-aliases/TabsIconPosition.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:214

#### Docid

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

`dxMultiViewBaseOptions.itemHoldTimeout`

***

### ~~items?~~

> `optional` **items**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:221

#### Docid

#### Fires

dxTabPanelOptions.onOptionChanged

#### Overrides

`dxMultiViewBaseOptions.items`

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

`dxMultiViewBaseOptions.itemTemplate`

***

### ~~itemTitleTemplate?~~

> `optional` **itemTitleTemplate**: `template` \| (`itemData`, `itemIndex`, `itemElement`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:206

#### Docid

#### Default

```ts
"title"
@type_function_param1 itemData:object
@type_function_return string|Element|jQuery
@public
```

***

### ~~keyExpr?~~

> `optional` **keyExpr**: `string` \| `Function`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:226

#### Docid

***

### ~~loop?~~

> `optional` **loop**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/multi\_view.d.ts:158

#### Docid

dxMultiViewOptions.loop

#### Default

```ts
false
@public
```

#### Inherited from

`dxMultiViewBaseOptions.loop`

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

`dxMultiViewBaseOptions.noDataText`

***

### ~~onContentReady()?~~

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxTabPanel`\<`TItem`, `TKey`\>\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
```

#### Action

#### Inherited from

`dxMultiViewBaseOptions.onContentReady`

***

### ~~onDisposing()?~~

> `optional` **onDisposing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:62

#### Parameters

##### e

`EventInfo`\<`dxTabPanel`\<`TItem`, `TKey`\>\>

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

`dxMultiViewBaseOptions.onDisposing`

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

`dxMultiViewBaseOptions.onInitialized`

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

`dxMultiViewBaseOptions.onItemClick`

***

### ~~onItemContextMenu()?~~

> `optional` **onItemContextMenu**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:120

#### Parameters

##### e

`NativeEventInfo`\<`dxTabPanel`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

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

`dxMultiViewBaseOptions.onItemContextMenu`

***

### ~~onItemHold()?~~

> `optional` **onItemHold**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:131

#### Parameters

##### e

`NativeEventInfo`\<`dxTabPanel`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

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

`dxMultiViewBaseOptions.onItemHold`

***

### ~~onItemRendered()?~~

> `optional` **onItemRendered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:141

#### Parameters

##### e

`EventInfo`\<`dxTabPanel`\<`TItem`, `TKey`\>\> & `ItemInfo`\<`TItem`\>

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

`dxMultiViewBaseOptions.onItemRendered`

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxTabPanel`\<`TItem`, `TKey`\>\>

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

`dxMultiViewBaseOptions.onOptionChanged`

***

### ~~onSelectionChanged()?~~

> `optional` **onSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:164

#### Parameters

##### e

`EventInfo`\<`dxTabPanel`\<`TItem`, `TKey`\>\> & `SelectionChangeInfo`\<`TItem`\>

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

`dxMultiViewBaseOptions.onSelectionChanged`

***

### ~~onSelectionChanging()?~~

> `optional` **onSelectionChanging**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:153

#### Parameters

##### e

`SelectionChangingEventBase`\<`dxTabPanel`\<`TItem`, `TKey`\>\>

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

`dxMultiViewBaseOptions.onSelectionChanging`

***

### ~~onTitleClick?~~

> `optional` **onTitleClick**: `string` \| (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:235

#### Docid

#### Default

```ts
null
```

#### Action

***

### ~~onTitleHold()?~~

> `optional` **onTitleHold**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:243

#### Parameters

##### e

[`TitleHoldEvent`](../type-aliases/TitleHoldEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tab_panel:TitleHoldEvent}
```

#### Action

***

### ~~onTitleRendered()?~~

> `optional` **onTitleRendered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:251

#### Parameters

##### e

[`TitleRenderedEvent`](../type-aliases/TitleRenderedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tab_panel:TitleRenderedEvent}
```

#### Action

***

### ~~repaintChangesOnly?~~

> `optional` **repaintChangesOnly**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:257

#### Docid

#### Default

```ts
false
@public
```

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

`dxMultiViewBaseOptions.rtlEnabled`

***

### ~~scrollByContent?~~

> `optional` **scrollByContent**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:263

#### Docid

#### Default

```ts
true
@public
```

***

### ~~scrollingEnabled?~~

> `optional` **scrollingEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:269

#### Docid

#### Default

```ts
true
@public
```

***

### ~~selectedIndex?~~

> `optional` **selectedIndex**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/multi\_view.d.ts:164

#### Docid

dxMultiViewOptions.selectedIndex

#### Default

```ts
0
@public
```

#### Inherited from

`dxMultiViewBaseOptions.selectedIndex`

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

`dxMultiViewBaseOptions.selectedItem`

***

### ~~selectedItemKeys?~~

> `optional` **selectedItemKeys**: `TKey`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:185

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`dxMultiViewBaseOptions.selectedItemKeys`

***

### ~~selectedItems?~~

> `optional` **selectedItems**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:191

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`dxMultiViewBaseOptions.selectedItems`

***

### ~~showNavButtons?~~

> `optional` **showNavButtons**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:275

#### Docid

#### Default

```ts
false
@public
```

***

### ~~stylingMode?~~

> `optional` **stylingMode**: [`TabsStyle`](../type-aliases/TabsStyle.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:282

#### Docid

#### Default

```ts
'primary'
```

#### Default

```ts
'secondary' &for(Fluent)
@public
```

***

### ~~swipeEnabled?~~

> `optional` **swipeEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:288

#### Docid

#### Default

```ts
false &for(non-touch_devices)
@public
```

#### Overrides

`dxMultiViewBaseOptions.swipeEnabled`

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

`dxMultiViewBaseOptions.tabIndex`

***

### ~~tabsPosition?~~

> `optional` **tabsPosition**: [`Position`](../type-aliases/Position.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tab\_panel.d.ts:294

#### Docid

#### Default

```ts
'top'
@public
```

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

`dxMultiViewBaseOptions.visible`

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

`dxMultiViewBaseOptions.width`
