[**DevExtreme React List API v26.1.0**](../../../../README.md)

***

[DevExtreme React List API](../../../../globals.md) / [ListTypes](../README.md) / dxListOptions

# ~~Interface: dxListOptions\<TItem, TKey\>~~

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:285

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Extends

- `CollectionWidgetOptions`\<`dxList`\<`TItem`, `TKey`\>, `TItem`, `TKey`\>.`SearchBoxMixinOptions`

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

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:294

#### Docid

#### Default

```ts
true
@public
```

#### Overrides

`CollectionWidgetOptions.activeStateEnabled`

***

### ~~allowItemDeleting?~~

> `optional` **allowItemDeleting**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:300

#### Docid

#### Default

```ts
false
@public
```

***

### ~~bounceEnabled?~~

> `optional` **bounceEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:307

#### Docid

#### Default

```ts
true
```

#### Default

```ts
false &for(desktop)
@public
```

***

### ~~collapsibleGroups?~~

> `optional` **collapsibleGroups**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:313

#### Docid

#### Default

```ts
false
@public
```

***

### ~~dataSource?~~

> `optional` **dataSource**: `DataSourceLike`\<`TItem`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:320

#### Docid

#### Default

```ts
null
@public
```

#### Overrides

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

### ~~displayExpr?~~

> `optional` **displayExpr**: `string` \| (`item`) => `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:327

#### Docid

#### Default

```ts
undefined
@type_function_param1 item:object
@public
```

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

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:333

#### Docid

#### Default

```ts
true &for(desktop)
@public
```

#### Overrides

`CollectionWidgetOptions.focusStateEnabled`

***

### ~~grouped?~~

> `optional` **grouped**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:347

#### Docid

#### Default

```ts
false
@public
```

***

### ~~groupTemplate?~~

> `optional` **groupTemplate**: `template` \| (`groupData`, `groupIndex`, `groupElement`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:341

#### Docid

#### Default

```ts
"group"
@type_function_param1 groupData:object
@type_function_return string|Element|jQuery
@public
```

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

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:353

#### Docid

#### Default

```ts
true
@public
```

#### Overrides

`CollectionWidgetOptions.hoverStateEnabled`

***

### ~~indicateLoading?~~

> `optional` **indicateLoading**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:359

#### Docid

#### Default

```ts
true
@public
```

***

### ~~itemDeleteMode?~~

> `optional` **itemDeleteMode**: [`ItemDeleteMode`](../type-aliases/ItemDeleteMode.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:367

#### Docid

#### Default

```ts
'static'
```

#### Default

```ts
'slideItem' &for(iOS)
```

#### Default

```ts
'swipe' &for(Android)
@public
```

***

### ~~itemDragging?~~

> `optional` **itemDragging**: `dxSortableOptions`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:372

#### Docid

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

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:379

#### Docid

#### Fires

dxListOptions.onOptionChanged

#### Overrides

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

### ~~menuItems?~~

> `optional` **menuItems**: `object`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:385

#### ~~action()?~~

> `optional` **action**: (`itemElement`, `itemData`) => `any`

##### Parameters

###### itemElement

`HTMLElement`

###### itemData

`TItem`

##### Returns

`any`

##### Docid

@type_function_param2 itemData:object
@type_function_return void

#### ~~text?~~

> `optional` **text**: `string`

##### Docid

#### Docid

#### Default

```ts
[]
@public
```

***

### ~~menuMode?~~

> `optional` **menuMode**: [`ListMenuMode`](../type-aliases/ListMenuMode.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:403

#### Docid

#### Default

```ts
'context'
```

#### Default

```ts
'slide' &for(iOS)
@public
```

***

### ~~nextButtonText?~~

> `optional` **nextButtonText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:409

#### Docid

#### Default

```ts
"More"
@public
```

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

`EventInfo`\<`dxList`\<`TItem`, `TKey`\>\>

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

`EventInfo`\<`dxList`\<`TItem`, `TKey`\>\>

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

### ~~onGroupRendered()?~~

> `optional` **onGroupRendered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:417

#### Parameters

##### e

[`GroupRenderedEvent`](../type-aliases/GroupRenderedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/list:GroupRenderedEvent}
```

#### Action

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

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:426

#### Docid

#### Default

```ts
null
```

#### Action

#### Overrides

`CollectionWidgetOptions.onItemClick`

***

### ~~onItemContextMenu()?~~

> `optional` **onItemContextMenu**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:434

#### Parameters

##### e

[`ItemContextMenuEvent`](../type-aliases/ItemContextMenuEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/list:ItemContextMenuEvent}
```

#### Action

#### Overrides

`CollectionWidgetOptions.onItemContextMenu`

***

### ~~onItemHold()?~~

> `optional` **onItemHold**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:460

#### Parameters

##### e

[`ItemHoldEvent`](../type-aliases/ItemHoldEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/list:ItemHoldEvent}
```

#### Action

#### Overrides

`CollectionWidgetOptions.onItemHold`

***

### ~~onItemRendered()?~~

> `optional` **onItemRendered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:141

#### Parameters

##### e

`EventInfo`\<`dxList`\<`TItem`, `TKey`\>\> & `ItemInfo`\<`TItem`\>

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

### ~~onItemSwipe()?~~

> `optional` **onItemSwipe**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:477

#### Parameters

##### e

[`ItemSwipeEvent`](../type-aliases/ItemSwipeEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/list:ItemSwipeEvent}
```

#### Action

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxList`\<`TItem`, `TKey`\>\>

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

### ~~onPageLoading()?~~

> `optional` **onPageLoading**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:485

#### Parameters

##### e

[`PageLoadingEvent`](../type-aliases/PageLoadingEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/list:PageLoadingEvent}
```

#### Action

***

### ~~onPullRefresh()?~~

> `optional` **onPullRefresh**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:493

#### Parameters

##### e

[`PullRefreshEvent`](../type-aliases/PullRefreshEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/list:PullRefreshEvent}
```

#### Action

***

### ~~onScroll()?~~

> `optional` **onScroll**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:501

#### Parameters

##### e

[`ScrollEvent`](../type-aliases/ScrollEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/list:ScrollEvent}
```

#### Action

***

### ~~onSelectAllValueChanged()?~~

> `optional` **onSelectAllValueChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:509

#### Parameters

##### e

[`SelectAllValueChangedEvent`](../type-aliases/SelectAllValueChangedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/list:SelectAllValueChangedEvent}
```

#### Action

***

### ~~onSelectionChanged()?~~

> `optional` **onSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:164

#### Parameters

##### e

`EventInfo`\<`dxList`\<`TItem`, `TKey`\>\> & `SelectionChangeInfo`\<`TItem`\>

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

`SelectionChangingEventBase`\<`dxList`\<`TItem`, `TKey`\>\>

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

### ~~pageLoadingText?~~

> `optional` **pageLoadingText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:524

#### Docid

#### Default

```ts
"Loading..."
```

#### Default

```ts
"" &for(Material)
```

#### Default

```ts
"" &for(Fluent)
@public
```

***

### ~~pageLoadMode?~~

> `optional` **pageLoadMode**: [`PageLoadMode`](../type-aliases/PageLoadMode.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:516

#### Docid

#### Default

```ts
"scrollBottom"
```

#### Default

```ts
"nextButton" &for(desktop except Mac)
@public
```

***

### ~~pulledDownText?~~

> `optional` **pulledDownText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:538

#### Docid

#### Default

```ts
"Release to refresh..."
```

#### Default

```ts
"" &for(Material)
```

#### Default

```ts
"" &for(Fluent)
@public
```

***

### ~~pullingDownText?~~

> `optional` **pullingDownText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:546

#### Docid

#### Default

```ts
"Pull down to refresh..."
```

#### Default

```ts
"" &for(Material)
```

#### Default

```ts
"" &for(Fluent)
@public
```

***

### ~~pullRefreshEnabled?~~

> `optional` **pullRefreshEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:530

#### Docid

#### Default

```ts
false
@public
```

***

### ~~refreshingText?~~

> `optional` **refreshingText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:554

#### Docid

#### Default

```ts
"Refreshing..."
```

#### Default

```ts
"" &for(Material)
```

#### Default

```ts
"" &for(Fluent)
@public
```

***

### ~~repaintChangesOnly?~~

> `optional` **repaintChangesOnly**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:560

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

`CollectionWidgetOptions.rtlEnabled`

***

### ~~scrollByContent?~~

> `optional` **scrollByContent**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:567

#### Docid

#### Default

```ts
true
```

#### Default

```ts
false &for(non-touch_devices)
@public
```

***

### ~~scrollByThumb?~~

> `optional` **scrollByThumb**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:574

#### Docid

#### Default

```ts
false
```

#### Default

```ts
true &for(desktop)
@public
```

***

### ~~scrollingEnabled?~~

> `optional` **scrollingEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:580

#### Docid

#### Default

```ts
true
@public
```

***

### ~~searchEditorOptions?~~

> `optional` **searchEditorOptions**: `Properties`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.search\_box\_mixin.d.ts:29

#### Docid

#### Default

```ts
{}
@public
```

#### Inherited from

`SearchBoxMixinOptions.searchEditorOptions`

***

### ~~searchEnabled?~~

> `optional` **searchEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.search\_box\_mixin.d.ts:35

#### Docid

#### Default

```ts
false
@public
```

#### Inherited from

`SearchBoxMixinOptions.searchEnabled`

***

### ~~searchExpr?~~

> `optional` **searchExpr**: `string` \| `Function` \| (`string` \| `Function`)[]

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.search\_box\_mixin.d.ts:42

#### Docid

#### Default

```ts
null
@public
```

#### Inherited from

`SearchBoxMixinOptions.searchExpr`

***

### ~~searchMode?~~

> `optional` **searchMode**: `SearchMode`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.search\_box\_mixin.d.ts:48

#### Docid

#### Default

```ts
'contains'
@public
```

#### Inherited from

`SearchBoxMixinOptions.searchMode`

***

### ~~searchTimeout?~~

> `optional` **searchTimeout**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.search\_box\_mixin.d.ts:54

#### Docid

#### Default

```ts
undefined
@public
```

#### Inherited from

`SearchBoxMixinOptions.searchTimeout`

***

### ~~searchValue?~~

> `optional` **searchValue**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.search\_box\_mixin.d.ts:60

#### Docid

#### Default

```ts
""
@public
```

#### Inherited from

`SearchBoxMixinOptions.searchValue`

***

### ~~selectAllMode?~~

> `optional` **selectAllMode**: [`SelectAllMode`](../type-aliases/SelectAllMode.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:586

#### Docid

#### Default

```ts
'page'
@public
```

***

### ~~selectAllText?~~

> `optional` **selectAllText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:617

#### Docid

#### Default

```ts
"Select All"
@public
```

***

### ~~selectByClick?~~

> `optional` **selectByClick**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:592

#### Docid

#### Default

```ts
true
@public
```

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

### ~~selectionMode?~~

> `optional` **selectionMode**: `SingleMultipleAllOrNone`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:598

#### Docid

#### Default

```ts
'none'
@public
```

***

### ~~showScrollbar?~~

> `optional` **showScrollbar**: [`ScrollbarMode`](../type-aliases/ScrollbarMode.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:605

#### Docid

#### Default

```ts
'onScroll'
```

#### Default

```ts
'onHover' &for(desktop)
@public
```

***

### ~~showSelectionControls?~~

> `optional` **showSelectionControls**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:611

#### Docid

#### Default

```ts
false
@public
```

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

### ~~useNativeScrolling?~~

> `optional` **useNativeScrolling**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/list.d.ts:624

#### Docid

#### Default

```ts
false &for(desktop except Mac)
```

#### Default

```ts
true
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
