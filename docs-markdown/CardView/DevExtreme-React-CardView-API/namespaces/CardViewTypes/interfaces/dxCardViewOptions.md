[**DevExtreme React CardView API v26.1.0**](../../../../README.md)

***

[DevExtreme React CardView API](../../../../globals.md) / [CardViewTypes](../README.md) / dxCardViewOptions

# ~~Interface: dxCardViewOptions\<TCardData, TKey\>~~

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1310

**`Namespace`**

DevExpress.ui

## Docid

## Deprecated

use Properties instead

## Extends

- `Omit`\<`WidgetOptions`\<`dxCardView`\>, `"onOptionChanged"`\>

## Type Parameters

### TCardData

`TCardData` = `unknown`

### TKey

`TKey` = `unknown`

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

### ~~allowColumnReordering?~~

> `optional` **allowColumnReordering**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1373

#### Docid

#### Default

```ts
false
```

***

### ~~cardContentTemplate?~~

> `optional` **cardContentTemplate**: `template` \| (`data`, `container`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1476

#### Docid

***

### ~~cardCover?~~

> `optional` **cardCover**: [`CardCover`](../type-aliases/CardCover.md)\<`TCardData`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1466

#### Docid

***

### ~~cardFooterTemplate?~~

> `optional` **cardFooterTemplate**: `template` \| (`data`, `container`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1556

#### Docid

***

### ~~cardHeader?~~

> `optional` **cardHeader**: [`CardHeader`](../type-aliases/CardHeader.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1561

#### Docid

***

### ~~cardMaxWidth?~~

> `optional` **cardMaxWidth**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1456

#### Docid

***

### ~~cardMinWidth?~~

> `optional` **cardMinWidth**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1451

#### Docid

***

### ~~cardsPerRow?~~

> `optional` **cardsPerRow**: `number` \| `"auto"`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1446

#### Docid

***

### ~~cardTemplate?~~

> `optional` **cardTemplate**: `template` \| (`data`, `container`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1471

#### Docid

***

### ~~columnChooser?~~

> `optional` **columnChooser**: [`ColumnChooser`](../type-aliases/ColumnChooser.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1616

#### Docid

***

### ~~columns?~~

> `optional` **columns**: (`string` \| [`ColumnProperties`](../type-aliases/ColumnProperties.md)\<`TCardData`, `TKey`\>)[]

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1366

#### Docid

***

### ~~dataSource?~~

> `optional` **dataSource**: `DataSourceLike`\<`TCardData`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1320

#### Docid

#### Default

```ts
undefined
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

### ~~editing?~~

> `optional` **editing**: [`Editing`](../type-aliases/Editing.md)\<`TCardData`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1635

#### Docid

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

### ~~errorRowEnabled?~~

> `optional` **errorRowEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1425

#### Docid

#### Default

```ts
true
```

***

### ~~fieldHintEnabled?~~

> `optional` **fieldHintEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1481

#### Docid

***

### ~~filterBuilder?~~

> `optional` **filterBuilder**: `dxFilterBuilderOptions`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1606

#### Docid

***

### ~~filterBuilderPopup?~~

> `optional` **filterBuilderPopup**: [`PopupProperties`](../type-aliases/PopupProperties.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1601

#### Docid

***

### ~~filterPanel?~~

> `optional` **filterPanel**: `FilterPanel`\<`dxCardView`\<`unknown`, `unknown`\>\>

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1611

#### Docid

***

### ~~filterValue?~~

> `optional` **filterValue**: `string` \| `Function` \| `any`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1595

#### Docid

#### Default

```ts
null
```

#### Fires

dxCardViewOptions.onOptionChanged

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

`Omit.focusStateEnabled`

***

### ~~headerFilter?~~

> `optional` **headerFilter**: [`HeaderFilter`](../type-aliases/HeaderFilter.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1626

#### Docid

***

### ~~headerPanel?~~

> `optional` **headerPanel**: [`HeaderPanel`](../type-aliases/HeaderPanel.md)\<`TCardData`, `TKey`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1382

#### Docid

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

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1567

#### Docid

#### Overrides

`Omit.hoverStateEnabled`

***

### ~~keyExpr?~~

> `optional` **keyExpr**: `string` \| `string`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1331

#### Docid

#### Default

```ts
undefined
@public
```

***

### ~~loadPanel?~~

> `optional` **loadPanel**: `dxLoadPanelOptions`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1430

#### Docid

***

### ~~noDataTemplate?~~

> `optional` **noDataTemplate**: `template` \| (`e`, `container`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1441

#### Docid

***

### ~~noDataText?~~

> `optional` **noDataText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1436

#### Docid

#### Default

```ts
"No data"
```

***

### ~~onCardClick()?~~

> `optional` **onCardClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1488

#### Parameters

##### e

[`CardClickEvent`](../type-aliases/CardClickEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardClickEvent}

#### Action

***

### ~~onCardDblClick()?~~

> `optional` **onCardDblClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1495

#### Parameters

##### e

[`CardDblClickEvent`](../type-aliases/CardDblClickEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardDblClickEvent}

#### Action

***

### ~~onCardHoverChanged()?~~

> `optional` **onCardHoverChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1551

#### Parameters

##### e

[`CardHoverChangedEvent`](../type-aliases/CardHoverChangedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardHoverChangedEvent}

#### Action

***

### ~~onCardInserted()?~~

> `optional` **onCardInserted**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1670

#### Parameters

##### e

[`CardInsertedEvent`](../type-aliases/CardInsertedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardInsertedEvent}

#### Action

***

### ~~onCardInserting()?~~

> `optional` **onCardInserting**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1677

#### Parameters

##### e

[`CardInsertingEvent`](../type-aliases/CardInsertingEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardInsertingEvent}

#### Action

***

### ~~onCardPrepared()?~~

> `optional` **onCardPrepared**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1502

#### Parameters

##### e

[`CardPreparedEvent`](../type-aliases/CardPreparedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardPreparedEvent}

#### Action

***

### ~~onCardRemoved()?~~

> `optional` **onCardRemoved**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1684

#### Parameters

##### e

[`CardRemovedEvent`](../type-aliases/CardRemovedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardRemovedEvent}

#### Action

***

### ~~onCardRemoving()?~~

> `optional` **onCardRemoving**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1691

#### Parameters

##### e

[`CardRemovingEvent`](../type-aliases/CardRemovingEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardRemovingEvent}

#### Action

***

### ~~onCardUpdated()?~~

> `optional` **onCardUpdated**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1698

#### Parameters

##### e

[`CardUpdatedEvent`](../type-aliases/CardUpdatedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardUpdatedEvent}

#### Action

***

### ~~onCardUpdating()?~~

> `optional` **onCardUpdating**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1705

#### Parameters

##### e

[`CardUpdatingEvent`](../type-aliases/CardUpdatingEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:CardUpdatingEvent}

#### Action

***

### ~~onContentReady()?~~

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxCardView`\<`unknown`, `unknown`\>\>

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

### ~~onContextMenuPreparing()?~~

> `optional` **onContextMenuPreparing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1771

#### Parameters

##### e

[`ContextMenuPreparingEvent`](../type-aliases/ContextMenuPreparingEvent.md)\<`TCardData`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:ContextMenuPreparingEvent}

#### Action

***

### ~~onDataErrorOccurred()?~~

> `optional` **onDataErrorOccurred**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1346

#### Parameters

##### e

`EventInfo`\<`dxCardView`\<`unknown`, `unknown`\>\> & `DataErrorOccurredInfo`

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:object
@type_function_param1_field component:this
```

#### Action

***

### ~~onDisposing()?~~

> `optional` **onDisposing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:62

#### Parameters

##### e

`EventInfo`\<`dxCardView`\<`unknown`, `unknown`\>\>

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

### ~~onEditCanceled()?~~

> `optional` **onEditCanceled**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1642

#### Parameters

##### e

[`EditCanceledEvent`](../type-aliases/EditCanceledEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:EditCanceledEvent}

#### Action

***

### ~~onEditCanceling()?~~

> `optional` **onEditCanceling**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1649

#### Parameters

##### e

[`EditCancelingEvent`](../type-aliases/EditCancelingEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:EditCancelingEvent}

#### Action

***

### ~~onEditingStart()?~~

> `optional` **onEditingStart**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1656

#### Parameters

##### e

[`EditingStartEvent`](../type-aliases/EditingStartEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:EditingStartEvent}

#### Action

***

### ~~onFieldCaptionClick()?~~

> `optional` **onFieldCaptionClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1509

#### Parameters

##### e

[`FieldCaptionClickEvent`](../type-aliases/FieldCaptionClickEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:FieldCaptionClickEvent}

#### Action

***

### ~~onFieldCaptionDblClick()?~~

> `optional` **onFieldCaptionDblClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1516

#### Parameters

##### e

[`FieldCaptionDblClickEvent`](../type-aliases/FieldCaptionDblClickEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:FieldCaptionDblClickEvent}

#### Action

***

### ~~onFieldCaptionPrepared()?~~

> `optional` **onFieldCaptionPrepared**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1523

#### Parameters

##### e

[`FieldCaptionPreparedEvent`](../type-aliases/FieldCaptionPreparedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:FieldCaptionPreparedEvent}

#### Action

***

### ~~onFieldValueClick()?~~

> `optional` **onFieldValueClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1530

#### Parameters

##### e

[`FieldValueClickEvent`](../type-aliases/FieldValueClickEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:FieldValueClickEvent}

#### Action

***

### ~~onFieldValueDblClick()?~~

> `optional` **onFieldValueDblClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1537

#### Parameters

##### e

[`FieldValueDblClickEvent`](../type-aliases/FieldValueDblClickEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:FieldValueDblClickEvent}

#### Action

***

### ~~onFieldValuePrepared()?~~

> `optional` **onFieldValuePrepared**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1544

#### Parameters

##### e

[`FieldValuePreparedEvent`](../type-aliases/FieldValuePreparedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:FieldValuePreparedEvent}

#### Action

***

### ~~onFocusedCardChanged()?~~

> `optional` **onFocusedCardChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1761

#### Parameters

##### e

[`FocusedCardChanged`](../type-aliases/FocusedCardChanged.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:FocusedCardChanged}

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

`Omit.onInitialized`

***

### ~~onInitNewCard()?~~

> `optional` **onInitNewCard**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1663

#### Parameters

##### e

[`InitNewCardEvent`](../type-aliases/InitNewCardEvent.md)\<`TCardData`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:InitNewCardEvent}

#### Action

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1712

#### Parameters

##### e

[`OptionChangedEvent`](../type-aliases/OptionChangedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:OptionChangedEvent}

#### Action

***

### ~~onSaved()?~~

> `optional` **onSaved**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1719

#### Parameters

##### e

[`SavedEvent`](../type-aliases/SavedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:SavedEvent}

#### Action

***

### ~~onSaving()?~~

> `optional` **onSaving**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1726

#### Parameters

##### e

[`SavingEvent`](../type-aliases/SavingEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:SavingEvent}

#### Action

***

### ~~onSelectionChanged()?~~

> `optional` **onSelectionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1749

#### Parameters

##### e

[`SelectionChangedEvent`](../type-aliases/SelectionChangedEvent.md)

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/card_view:SelectionChangedEvent}

#### Action

***

### ~~pager?~~

> `optional` **pager**: [`Pager`](../type-aliases/Pager.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1356

#### Docid

***

### ~~paging?~~

> `optional` **paging**: [`Paging`](../type-aliases/Paging.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1325

#### Docid

***

### ~~remoteOperations?~~

> `optional` **remoteOperations**: `boolean` \| `"auto"` \| [`RemoteOperations`](../type-aliases/RemoteOperations.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1337

#### Docid

#### Default

```ts
"auto"
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

### ~~scrolling?~~

> `optional` **scrolling**: `object`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1392

#### ~~scrollByContent?~~

> `optional` **scrollByContent**: `boolean`

##### Docid

##### Default

```ts
true
```

##### Default

```ts
false &for(non-touch_devices)
@public
```

#### ~~scrollByThumb?~~

> `optional` **scrollByThumb**: `boolean`

##### Docid

##### Default

```ts
false
@public
```

#### ~~showScrollbar?~~

> `optional` **showScrollbar**: [`ScrollbarMode`](../type-aliases/ScrollbarMode.md)

##### Docid

##### Default

```ts
'onHover' &for(desktop)
```

##### Default

```ts
'onScroll'
@public
```

#### ~~useNative?~~

> `optional` **useNative**: `boolean` \| `"auto"`

##### Docid

##### Default

```ts
"auto"
@public
```

#### Docid

***

### ~~searchPanel?~~

> `optional` **searchPanel**: [`SearchPanel`](../type-aliases/SearchPanel.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1621

#### Docid

***

### ~~selectedCardKeys?~~

> `optional` **selectedCardKeys**: `TKey`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1737

#### Docid

#### Fires

dxCardViewOptions.onSelectionChanged

***

### ~~selection?~~

> `optional` **selection**: [`SelectionConfiguration`](../type-aliases/SelectionConfiguration.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1742

#### Docid

***

### ~~sorting?~~

> `optional` **sorting**: [`Sorting`](../type-aliases/Sorting.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1586

#### Docid

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

### ~~toolbar?~~

> `optional` **toolbar**: [`Toolbar`](../type-aliases/Toolbar.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1578

#### Docid

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

***

### ~~wordWrapEnabled?~~

> `optional` **wordWrapEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:1461

#### Docid
