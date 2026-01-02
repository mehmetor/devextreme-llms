[**DevExtreme React Menu API v26.1.0**](../../../../README.md)

***

[DevExtreme React Menu API](../../../../globals.md) / [MenuTypes](../README.md) / dxMenuOptions

# ~~Interface: dxMenuOptions\<TItem, TKey\>~~

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:190

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Extends

- `dxMenuBaseOptions`\<`dxMenu`\<`TItem`, `TKey`\>, `TItem`, `TKey`\>

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

`dxMenuBaseOptions.accessKey`

***

### ~~activeStateEnabled?~~

> `optional` **activeStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu/ui.menu\_base.d.ts:44

#### Docid

#### Default

```ts
true
@public
```

#### Inherited from

`dxMenuBaseOptions.activeStateEnabled`

***

### ~~adaptivityEnabled?~~

> `optional` **adaptivityEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:199

#### Docid

#### Default

```ts
false
@public
```

***

### ~~animation?~~

> `optional` **animation**: `object`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu/ui.menu\_base.d.ts:51

#### ~~hide?~~

> `optional` **hide**: `AnimationConfig`

##### Docid

##### Default

```ts
{ type: "fade", from: 1, to: 0, duration: 100 }
```

#### ~~show?~~

> `optional` **show**: `AnimationConfig`

##### Docid

##### Default

```ts
{ type: "fade", from: 0, to: 1, duration: 100 }
```

#### Docid

#### Default

```ts
{ show: { type: "fade", from: 0, to: 1, duration: 100 }, hide: { type: "fade", from: 1, to: 0, duration: 100 } }
```

#### Ref

#### Inherited from

`dxMenuBaseOptions.animation`

***

### ~~cssClass?~~

> `optional` **cssClass**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu/ui.menu\_base.d.ts:68

#### Docid

#### Default

```ts
""
@public
```

#### Inherited from

`dxMenuBaseOptions.cssClass`

***

### ~~dataSource?~~

> `optional` **dataSource**: `DataSourceLike`\<`TItem`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:206

#### Docid

#### Default

```ts
null
@public
```

#### Overrides

`dxMenuBaseOptions.dataSource`

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

`dxMenuBaseOptions.disabled`

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

`dxMenuBaseOptions.disabledExpr`

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

`dxMenuBaseOptions.displayExpr`

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

`dxMenuBaseOptions.elementAttr`

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

`dxMenuBaseOptions.focusStateEnabled`

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

`dxMenuBaseOptions.height`

***

### ~~hideSubmenuOnMouseLeave?~~

> `optional` **hideSubmenuOnMouseLeave**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:212

#### Docid

#### Default

```ts
false
@public
```

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

`dxMenuBaseOptions.hint`

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

`dxMenuBaseOptions.hoverStateEnabled`

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

`dxMenuBaseOptions.itemHoldTimeout`

***

### ~~items?~~

> `optional` **items**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:218

#### Docid

#### Overrides

`dxMenuBaseOptions.items`

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

`dxMenuBaseOptions.itemsExpr`

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

`dxMenuBaseOptions.itemTemplate`

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

`dxMenuBaseOptions.keyExpr`

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

`dxMenuBaseOptions.noDataText`

***

### ~~onContentReady()?~~

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxMenu`\<`TItem`, `TKey`\>\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
```

#### Action

#### Inherited from

`dxMenuBaseOptions.onContentReady`

***

### ~~onDisposing()?~~

> `optional` **onDisposing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:62

#### Parameters

##### e

`EventInfo`\<`dxMenu`\<`TItem`, `TKey`\>\>

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

`dxMenuBaseOptions.onDisposing`

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

`dxMenuBaseOptions.onInitialized`

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

`dxMenuBaseOptions.onItemClick`

***

### ~~onItemContextMenu()?~~

> `optional` **onItemContextMenu**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:120

#### Parameters

##### e

`NativeEventInfo`\<`dxMenu`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

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

`dxMenuBaseOptions.onItemContextMenu`

***

### ~~onItemHold()?~~

> `optional` **onItemHold**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:131

#### Parameters

##### e

`NativeEventInfo`\<`dxMenu`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

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

`dxMenuBaseOptions.onItemHold`

***

### ~~onItemRendered()?~~

> `optional` **onItemRendered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:141

#### Parameters

##### e

`EventInfo`\<`dxMenu`\<`TItem`, `TKey`\>\> & `ItemInfo`\<`TItem`\>

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

`dxMenuBaseOptions.onItemRendered`

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxMenu`\<`TItem`, `TKey`\>\>

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

`dxMenuBaseOptions.onOptionChanged`

***

### ~~onSelectionChanged()?~~

> `optional` **onSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:164

#### Parameters

##### e

`EventInfo`\<`dxMenu`\<`TItem`, `TKey`\>\> & `SelectionChangeInfo`\<`TItem`\>

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

`dxMenuBaseOptions.onSelectionChanged`

***

### ~~onSelectionChanging()?~~

> `optional` **onSelectionChanging**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:153

#### Parameters

##### e

`SelectionChangingEventBase`\<`dxMenu`\<`TItem`, `TKey`\>\>

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

`dxMenuBaseOptions.onSelectionChanging`

***

### ~~onSubmenuHidden()?~~

> `optional` **onSubmenuHidden**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:226

#### Parameters

##### e

[`SubmenuHiddenEvent`](../type-aliases/SubmenuHiddenEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/menu:SubmenuHiddenEvent}
```

#### Action

***

### ~~onSubmenuHiding()?~~

> `optional` **onSubmenuHiding**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:234

#### Parameters

##### e

[`SubmenuHidingEvent`](../type-aliases/SubmenuHidingEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/menu:SubmenuHidingEvent}
```

#### Action

***

### ~~onSubmenuShowing()?~~

> `optional` **onSubmenuShowing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:242

#### Parameters

##### e

[`SubmenuShowingEvent`](../type-aliases/SubmenuShowingEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/menu:SubmenuShowingEvent}
```

#### Action

***

### ~~onSubmenuShown()?~~

> `optional` **onSubmenuShown**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:250

#### Parameters

##### e

[`SubmenuShownEvent`](../type-aliases/SubmenuShownEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/menu:SubmenuShownEvent}
```

#### Action

***

### ~~orientation?~~

> `optional` **orientation**: [`Orientation`](../type-aliases/Orientation.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:256

#### Docid

#### Default

```ts
"horizontal"
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

`dxMenuBaseOptions.rtlEnabled`

***

### ~~selectByClick?~~

> `optional` **selectByClick**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu/ui.menu\_base.d.ts:87

#### Docid

#### Default

```ts
false
@public
```

#### Inherited from

`dxMenuBaseOptions.selectByClick`

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

`dxMenuBaseOptions.selectedExpr`

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

`dxMenuBaseOptions.selectedIndex`

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

`dxMenuBaseOptions.selectedItem`

***

### ~~selectedItemKeys?~~

> `optional` **selectedItemKeys**: `TKey`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:185

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`dxMenuBaseOptions.selectedItemKeys`

***

### ~~selectedItems?~~

> `optional` **selectedItems**: `TItem`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:191

#### Docid

#### Fires

CollectionWidgetOptions.onSelectionChanged

#### Inherited from

`dxMenuBaseOptions.selectedItems`

***

### ~~selectionMode?~~

> `optional` **selectionMode**: `SingleOrNone`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu/ui.menu\_base.d.ts:93

#### Docid

#### Default

```ts
none
@public
```

#### Inherited from

`dxMenuBaseOptions.selectionMode`

***

### ~~showFirstSubmenuMode?~~

> `optional` **showFirstSubmenuMode**: [`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md) \| \{ `delay?`: `number` \| \{ `hide?`: `number`; `show?`: `number`; \}; `name?`: [`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md); \}

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:262

#### Type Declaration

[`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md)

\{ `delay?`: `number` \| \{ `hide?`: `number`; `show?`: `number`; \}; `name?`: [`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md); \}

#### ~~delay?~~

> `optional` **delay**: `number` \| \{ `hide?`: `number`; `show?`: `number`; \}

##### Type Declaration

`number`

\{ `hide?`: `number`; `show?`: `number`; \}

##### Docid

##### Default

```ts
{ show: 50, hide: 300 }
```

#### ~~name?~~

> `optional` **name**: [`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md)

##### Docid

##### Default

```ts
"onClick"
```

#### Docid

#### Default

```ts
{ name: "onClick", delay: { show: 50, hide: 300 } }
@public
```

***

### ~~showSubmenuMode?~~

> `optional` **showSubmenuMode**: [`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md) \| \{ `delay?`: `number` \| \{ `hide?`: `number`; `show?`: `number`; \}; `name?`: [`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md); \}

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu/ui.menu\_base.d.ts:99

#### Type Declaration

[`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md)

\{ `delay?`: `number` \| \{ `hide?`: `number`; `show?`: `number`; \}; `name?`: [`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md); \}

#### ~~delay?~~

> `optional` **delay**: `number` \| \{ `hide?`: `number`; `show?`: `number`; \}

##### Type Declaration

`number`

\{ `hide?`: `number`; `show?`: `number`; \}

##### Docid

##### Default

```ts
{ show: 50, hide: 300 }
```

#### ~~name?~~

> `optional` **name**: [`SubmenuShowMode`](../type-aliases/SubmenuShowMode.md)

##### Docid

##### Default

```ts
"onHover"
```

#### Docid

#### Default

```ts
{ name: "onHover", delay: { show: 50, hide: 300 } }
@public
```

#### Inherited from

`dxMenuBaseOptions.showSubmenuMode`

***

### ~~submenuDirection?~~

> `optional` **submenuDirection**: [`SubmenuDirection`](../type-aliases/SubmenuDirection.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/menu.d.ts:290

#### Docid

#### Default

```ts
"auto"
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

`dxMenuBaseOptions.tabIndex`

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

`dxMenuBaseOptions.visible`

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

`dxMenuBaseOptions.width`
