[**DevExtreme React ContextMenu API v26.1.0**](../../../../README.md)

***

[DevExtreme React ContextMenu API](../../../../globals.md) / [ContextMenuTypes](../README.md) / dxContextMenuOptions

# ~~Interface: dxContextMenuOptions\<TItem, TKey\>~~

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:163

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Extends

- `dxMenuBaseOptions`\<`dxContextMenu`\<`TItem`, `TKey`\>, `TItem`, `TKey`\>

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

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:173

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

### ~~hideOnOutsideClick?~~

> `optional` **hideOnOutsideClick**: `boolean` \| (`event`) => `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:181

#### Docid

#### Default

```ts
true
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

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:187

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

`EventInfo`\<`dxContextMenu`\<`TItem`, `TKey`\>\>

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

`EventInfo`\<`dxContextMenu`\<`TItem`, `TKey`\>\>

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

### ~~onHidden()?~~

> `optional` **onHidden**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:195

#### Parameters

##### e

[`HiddenEvent`](../type-aliases/HiddenEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/context_menu:HiddenEvent}
```

#### Action

***

### ~~onHiding()?~~

> `optional` **onHiding**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:203

#### Parameters

##### e

[`HidingEvent`](../type-aliases/HidingEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/context_menu:HidingEvent}
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

`NativeEventInfo`\<`dxContextMenu`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

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

`NativeEventInfo`\<`dxContextMenu`\<`TItem`, `TKey`\>, `PointerInteractionEvent`\> & `ItemInfo`\<`TItem`\>

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

`EventInfo`\<`dxContextMenu`\<`TItem`, `TKey`\>\> & `ItemInfo`\<`TItem`\>

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

`OptionChangedEventInfo`\<`dxContextMenu`\<`TItem`, `TKey`\>\>

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

### ~~onPositioning()?~~

> `optional` **onPositioning**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:211

#### Parameters

##### e

[`PositioningEvent`](../type-aliases/PositioningEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/context_menu:PositioningEvent}
```

#### Action

***

### ~~onSelectionChanged()?~~

> `optional` **onSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/collection/ui.collection\_widget.base.d.ts:164

#### Parameters

##### e

`EventInfo`\<`dxContextMenu`\<`TItem`, `TKey`\>\> & `SelectionChangeInfo`\<`TItem`\>

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

`SelectionChangingEventBase`\<`dxContextMenu`\<`TItem`, `TKey`\>\>

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

### ~~onShowing()?~~

> `optional` **onShowing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:219

#### Parameters

##### e

[`ShowingEvent`](../type-aliases/ShowingEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/context_menu:ShowingEvent}
```

#### Action

***

### ~~onShown()?~~

> `optional` **onShown**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:227

#### Parameters

##### e

[`ShownEvent`](../type-aliases/ShownEvent.md)\<`TItem`, `TKey`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/context_menu:ShownEvent}
```

#### Action

***

### ~~position?~~

> `optional` **position**: `PositionConfig`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:234

#### Docid

#### Default

```ts
{ my: 'top left', at: 'top left' }
```

#### Ref

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

### ~~showEvent?~~

> `optional` **showEvent**: `string` \| \{ `delay?`: `number`; `name?`: `string`; \}

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:240

#### Type Declaration

`string`

\{ `delay?`: `number`; `name?`: `string`; \}

#### ~~delay?~~

> `optional` **delay**: `number`

##### Docid

##### Default

```ts
undefined
```

#### ~~name?~~

> `optional` **name**: `string`

##### Docid

##### Default

```ts
undefined
```

#### Docid

#### Default

```ts
"dxcontextmenu"
@public
```

***

### ~~showSubmenuMode?~~

> `optional` **showSubmenuMode**: `SubmenuShowMode` \| \{ `delay?`: `number` \| \{ `hide?`: `number`; `show?`: `number`; \}; `name?`: `SubmenuShowMode`; \}

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu/ui.menu\_base.d.ts:99

#### Type Declaration

`SubmenuShowMode`

\{ `delay?`: `number` \| \{ `hide?`: `number`; `show?`: `number`; \}; `name?`: `SubmenuShowMode`; \}

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

> `optional` **name**: `SubmenuShowMode`

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

> `optional` **submenuDirection**: [`ContextSubmenuDirection`](../type-aliases/ContextSubmenuDirection.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:257

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

### ~~target?~~

> `optional` **target**: `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:263

#### Docid

#### Default

```ts
undefined
@public
```

***

### ~~visible?~~

> `optional` **visible**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/context\_menu.d.ts:271

#### Docid

#### Default

```ts
false
```

#### Fires

dxContextMenuOptions.onShowing

#### Fires

dxContextMenuOptions.onHiding

#### Overrides

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
