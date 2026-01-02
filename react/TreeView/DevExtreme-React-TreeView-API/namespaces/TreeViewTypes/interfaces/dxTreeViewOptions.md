[**DevExtreme React TreeView API v26.1.0**](../../../../README.md)

***

[DevExtreme React TreeView API](../../../../globals.md) / [TreeViewTypes](../README.md) / dxTreeViewOptions

# ~~Interface: dxTreeViewOptions\<TItem, TKey\>~~

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:193

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Extends

- `Omit`\<`HierarchicalCollectionWidgetOptions`\<`dxTreeView`\<`TItem`, `TKey`\>, `TItem`, `TKey`\>, `"dataSource"`\>.`SearchBoxMixinOptions`

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

`Omit.accessKey`

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

`Omit.activeStateEnabled`

***

### ~~animationEnabled?~~

> `optional` **animationEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:200

#### Docid

#### Default

```ts
true
@public
```

***

### ~~collapseIcon?~~

> `optional` **collapseIcon**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:386

#### Docid

#### Default

```ts
null
@public
```

***

### ~~createChildren()?~~

> `optional` **createChildren**: (`parentNode`) => `any`[] \| `PromiseLike`\<`any`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:207

#### Parameters

##### parentNode

[`Node`](../type-aliases/Node.md)\<`TItem`, `TKey`\>

#### Returns

`any`[] \| `PromiseLike`\<`any`\>

#### Docid

@type_function_param1 parentNode:dxTreeViewNode
@type_function_return Promise<any>|Array<Object>

***

### ~~dataSource?~~

> `optional` **dataSource**: `DataSourceLike`\<`TItem`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:214

#### Docid

#### Default

```ts
null
@public
```

***

### ~~dataStructure?~~

> `optional` **dataStructure**: [`DataStructure`](../type-aliases/DataStructure.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:220

#### Docid

#### Default

```ts
'tree'
@public
```

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

`Omit.disabled`

***

### ~~disabledExpr?~~

> `optional` **disabledExpr**: `string` \| `Function`

Defined in: devextreme/artifacts/npm/devextreme/ui/hierarchical\_collection/ui.hierarchical\_collection\_widget.d.ts:30

#### Docid

#### Default

```ts
'disabled'
@public
```

#### Inherited from

`Omit.disabledExpr`

***

### ~~displayExpr?~~

> `optional` **displayExpr**: `string` \| (`item`) => `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/hierarchical\_collection/ui.hierarchical\_collection\_widget.d.ts:37

#### Docid

#### Default

```ts
'text'
@type_function_param1 item:object
@public
```

#### Inherited from

`Omit.displayExpr`

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

`Omit.elementAttr`

***

### ~~expandAllEnabled?~~

> `optional` **expandAllEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:226

#### Docid

#### Default

```ts
false
@public
```

***

### ~~expandEvent?~~

> `optional` **expandEvent**: [`TreeViewExpandEvent`](../type-aliases/TreeViewExpandEvent.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:232

#### Docid

#### Default

```ts
"dblclick"
@public
```

***

### ~~expandIcon?~~

> `optional` **expandIcon**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:392

#### Docid

#### Default

```ts
null
@public
```

***

### ~~expandNodesRecursive?~~

> `optional` **expandNodesRecursive**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:238

#### Docid

#### Default

```ts
true
@public
```

***

### ~~focusStateEnabled?~~

> `optional` **focusStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/hierarchical\_collection/ui.hierarchical\_collection\_widget.d.ts:43

#### Docid

#### Default

```ts
true &for(desktop)
@public
```

#### Inherited from

`Omit.focusStateEnabled`

***

### ~~hasItemsExpr?~~

> `optional` **hasItemsExpr**: `string` \| `Function`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:251

#### Docid

#### Default

```ts
'hasItems'
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

`Omit.height`

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

`Omit.hint`

***

### ~~hoverStateEnabled?~~

> `optional` **hoverStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/hierarchical\_collection/ui.hierarchical\_collection\_widget.d.ts:49

#### Docid

#### Default

```ts
true
@public
```

#### Inherited from

`Omit.hoverStateEnabled`

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

`Omit.itemHoldTimeout`

***

### ~~items?~~

> `optional` **items**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:257

#### Docid

#### Overrides

`Omit.items`

***

### ~~itemsExpr?~~

> `optional` **itemsExpr**: `string` \| `Function`

Defined in: devextreme/artifacts/npm/devextreme/ui/hierarchical\_collection/ui.hierarchical\_collection\_widget.d.ts:55

#### Docid

#### Default

```ts
'items'
@public
```

#### Inherited from

`Omit.itemsExpr`

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

`Omit.itemTemplate`

***

### ~~keyExpr?~~

> `optional` **keyExpr**: `string` \| `Function`

Defined in: devextreme/artifacts/npm/devextreme/ui/hierarchical\_collection/ui.hierarchical\_collection\_widget.d.ts:61

#### Docid

#### Default

```ts
'id'
@public
```

#### Inherited from

`Omit.keyExpr`

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

`Omit.noDataText`

***

### ~~onContentReady()?~~

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxTreeView`\<`TItem`, `TKey`\>\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
```

#### Action

#### Inherited from

`Omit.onContentReady`

***

### ~~onDisposing()?~~

> `optional` **onDisposing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:62

#### Parameters

##### e

`EventInfo`\<`dxTreeView`\<`TItem`, `TKey`\>\>

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

`Omit.onDisposing`

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

`Omit.onInitialized`

***

### ~~onItemClick()?~~

> `optional` **onItemClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:266

#### Parameters

##### e

[`ItemClickEvent`](../type-aliases/ItemClickEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:ItemClickEvent}
```

#### Action

#### Overrides

`Omit.onItemClick`

***

### ~~onItemCollapsed()?~~

> `optional` **onItemCollapsed**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:274

#### Parameters

##### e

[`ItemCollapsedEvent`](../type-aliases/ItemCollapsedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:ItemCollapsedEvent}
```

#### Action

***

### ~~onItemContextMenu()?~~

> `optional` **onItemContextMenu**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:282

#### Parameters

##### e

[`ItemContextMenuEvent`](../type-aliases/ItemContextMenuEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:ItemContextMenuEvent}
```

#### Action

#### Overrides

`Omit.onItemContextMenu`

***

### ~~onItemExpanded()?~~

> `optional` **onItemExpanded**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:290

#### Parameters

##### e

[`ItemExpandedEvent`](../type-aliases/ItemExpandedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:ItemExpandedEvent}
```

#### Action

***

### ~~onItemHold()?~~

> `optional` **onItemHold**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:298

#### Parameters

##### e

[`ItemHoldEvent`](../type-aliases/ItemHoldEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:ItemHoldEvent}
```

#### Action

#### Overrides

`Omit.onItemHold`

***

### ~~onItemRendered()?~~

> `optional` **onItemRendered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:306

#### Parameters

##### e

[`ItemRenderedEvent`](../type-aliases/ItemRenderedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:ItemRenderedEvent}
```

#### Action

#### Overrides

`Omit.onItemRendered`

***

### ~~onItemSelectionChanged()?~~

> `optional` **onItemSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:314

#### Parameters

##### e

[`ItemSelectionChangedEvent`](../type-aliases/ItemSelectionChangedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:ItemSelectionChangedEvent}
```

#### Action

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxTreeView`\<`TItem`, `TKey`\>\>

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

`Omit.onOptionChanged`

***

### ~~onSelectAllValueChanged()?~~

> `optional` **onSelectAllValueChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:322

#### Parameters

##### e

[`SelectAllValueChangedEvent`](../type-aliases/SelectAllValueChangedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:SelectAllValueChangedEvent}
```

#### Action

***

### ~~onSelectionChanged()?~~

> `optional` **onSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:331

#### Parameters

##### e

[`SelectionChangedEvent`](../type-aliases/SelectionChangedEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_view:SelectionChangedEvent}
```

#### Action

#### Overrides

`Omit.onSelectionChanged`

***

### ~~onSelectionChanging()?~~

> `optional` **onSelectionChanging**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:153

#### Parameters

##### e

`SelectionChangingEventBase`\<`dxTreeView`\<`TItem`, `TKey`\>\>

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

`Omit.onSelectionChanging`

***

### ~~rootValue?~~

> `optional` **rootValue**: `any`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:344

#### Docid

#### Default

```ts
0
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

`Omit.rtlEnabled`

***

### ~~scrollDirection?~~

> `optional` **scrollDirection**: [`ScrollDirection`](../type-aliases/ScrollDirection.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:350

#### Docid

#### Default

```ts
"vertical"
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

### ~~selectAllText?~~

> `optional` **selectAllText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:356

#### Docid

#### Default

```ts
"Select All"
@public
```

***

### ~~selectByClick?~~

> `optional` **selectByClick**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:362

#### Docid

#### Default

```ts
false
@public
```

***

### ~~selectedExpr?~~

> `optional` **selectedExpr**: `string` \| `Function`

Defined in: devextreme/artifacts/npm/devextreme/ui/hierarchical\_collection/ui.hierarchical\_collection\_widget.d.ts:67

#### Docid

#### Default

```ts
'selected'
@public
```

#### Inherited from

`Omit.selectedExpr`

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

`Omit.selectedIndex`

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

`Omit.selectedItem`

***

### ~~selectedItemKeys?~~

> `optional` **selectedItemKeys**: `TKey`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:185

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`Omit.selectedItemKeys`

***

### ~~selectedItems?~~

> `optional` **selectedItems**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:191

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`Omit.selectedItems`

***

### ~~selectionMode?~~

> `optional` **selectionMode**: [`SingleOrMultiple`](../type-aliases/SingleOrMultiple.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:374

#### Docid

#### Default

```ts
"multiple"
@public
```

***

### ~~selectNodesRecursive?~~

> `optional` **selectNodesRecursive**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:368

#### Docid

#### Default

```ts
true
@public
```

***

### ~~showCheckBoxesMode?~~

> `optional` **showCheckBoxesMode**: [`TreeViewCheckBoxMode`](../type-aliases/TreeViewCheckBoxMode.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:380

#### Docid

#### Default

```ts
'none'
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

`Omit.tabIndex`

***

### ~~useNativeScrolling?~~

> `optional` **useNativeScrolling**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:405

#### Docid

#### Default

```ts
true
```

#### Default

```ts
false &for(desktop except Mac)
@public
```

***

### ~~virtualModeEnabled?~~

> `optional` **virtualModeEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_view.d.ts:398

#### Docid

#### Default

```ts
false
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

`Omit.visible`

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

`Omit.width`
