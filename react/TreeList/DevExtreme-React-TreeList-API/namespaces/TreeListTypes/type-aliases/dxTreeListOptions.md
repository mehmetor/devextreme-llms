[**DevExtreme React TreeList API v26.1.0**](../../../../README.md)

***

[DevExtreme React TreeList API](../../../../globals.md) / [TreeListTypes](../README.md) / dxTreeListOptions

# ~~Type Alias: dxTreeListOptions\<TRowData, TKey\>~~

> **dxTreeListOptions**\<`TRowData`, `TKey`\> = `Omit`\<`GridBaseOptions`\<`dxTreeList`\<`TRowData`, `TKey`\>, `TRowData`, `TKey`\>, `OverriddenKeys`\> & `object`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_list.d.ts:910

**`Namespace`**

## Type Declaration

### ~~autoExpandAll?~~

> `optional` **autoExpandAll**: `boolean`

#### Docid

#### Default

```ts
false
@public
```

### ~~columns?~~

> `optional` **columns**: ([`Column`](Column.md)\<`TRowData`, `TKey`\> \| `string`)[]

#### Docid

#### Default

```ts
undefined
@public
```

### ~~customizeColumns()?~~

> `optional` **customizeColumns**: (`columns`) => `void`

#### Parameters

##### columns

[`Column`](Column.md)\<`TRowData`, `TKey`\>[]

#### Returns

`void`

#### Docid

@type_function_param1 columns:Array<dxTreeListColumn>

### ~~dataStructure?~~

> `optional` **dataStructure**: [`DataStructure`](DataStructure.md)

#### Docid

#### Default

```ts
"plain"
@public
```

### ~~editing?~~

> `optional` **editing**: [`Editing`](../interfaces/Editing.md)\<`TRowData`, `TKey`\>

#### Docid

### ~~expandedRowKeys?~~

> `optional` **expandedRowKeys**: `TKey`[]

#### Docid

#### Default

```ts
[]
```

#### Fires

dxTreeListOptions.onOptionChanged

### ~~expandNodesOnFiltering?~~

> `optional` **expandNodesOnFiltering**: `boolean`

#### Docid

#### Default

```ts
true
@public
```

### ~~filterMode?~~

> `optional` **filterMode**: [`TreeListFilterMode`](TreeListFilterMode.md)

#### Docid

#### Default

```ts
"withAncestors"
@public
```

### ~~hasItemsExpr?~~

> `optional` **hasItemsExpr**: `string` \| `Function`

#### Docid

### ~~itemsExpr?~~

> `optional` **itemsExpr**: `string` \| `Function`

#### Docid

#### Default

```ts
"items"
@public
```

### ~~keyExpr?~~

> `optional` **keyExpr**: `string` \| `Function`

#### Docid

#### Default

```ts
"id"
@public
```

### ~~onAIColumnRequestCreating()?~~

> `optional` **onAIColumnRequestCreating**: (`e`) => `void`

#### Parameters

##### e

[`AIColumnRequestCreatingEvent`](AIColumnRequestCreatingEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
null
@type_function_param1 e:{ui/tree_list:AIColumnRequestCreatingEvent}
```

#### Action

### ~~onCellClick()?~~

> `optional` **onCellClick**: (`e`) => `void`

#### Parameters

##### e

[`CellClickEvent`](CellClickEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:CellClickEvent}

#### Default

```ts
null
```

#### Action

### ~~onCellDblClick()?~~

> `optional` **onCellDblClick**: (`e`) => `void`

#### Parameters

##### e

[`CellDblClickEvent`](CellDblClickEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:CellDblClickEvent}

#### Default

```ts
null
```

#### Action

### ~~onCellHoverChanged()?~~

> `optional` **onCellHoverChanged**: (`e`) => `void`

#### Parameters

##### e

[`CellHoverChangedEvent`](CellHoverChangedEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:CellHoverChangedEvent}

#### Default

```ts
null
```

#### Action

### ~~onCellPrepared()?~~

> `optional` **onCellPrepared**: (`e`) => `void`

#### Parameters

##### e

[`CellPreparedEvent`](CellPreparedEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:CellPreparedEvent}

#### Default

```ts
null
```

#### Action

### ~~onContextMenuPreparing()?~~

> `optional` **onContextMenuPreparing**: (`e`) => `void`

#### Parameters

##### e

[`ContextMenuPreparingEvent`](ContextMenuPreparingEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:ContextMenuPreparingEvent}

#### Default

```ts
null
```

#### Action

### ~~onEditingStart()?~~

> `optional` **onEditingStart**: (`e`) => `void`

#### Parameters

##### e

[`EditingStartEvent`](EditingStartEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:EditingStartEvent}

#### Default

```ts
null
```

#### Action

### ~~onEditorPrepared()?~~

> `optional` **onEditorPrepared**: (`options`) => `void`

#### Parameters

##### options

[`EditorPreparedEvent`](EditorPreparedEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:EditorPreparedEvent}

#### Default

```ts
null
```

#### Action

### ~~onEditorPreparing()?~~

> `optional` **onEditorPreparing**: (`e`) => `void`

#### Parameters

##### e

[`EditorPreparingEvent`](EditorPreparingEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:EditorPreparingEvent}

#### Default

```ts
null
```

#### Action

### ~~onFocusedCellChanged()?~~

> `optional` **onFocusedCellChanged**: (`e`) => `void`

#### Parameters

##### e

[`FocusedCellChangedEvent`](FocusedCellChangedEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:FocusedCellChangedEvent}

#### Default

```ts
null
```

#### Action

### ~~onFocusedCellChanging()?~~

> `optional` **onFocusedCellChanging**: (`e`) => `void`

#### Parameters

##### e

[`FocusedCellChangingEvent`](FocusedCellChangingEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:FocusedCellChangingEvent}

#### Default

```ts
null
```

#### Action

### ~~onFocusedRowChanged()?~~

> `optional` **onFocusedRowChanged**: (`e`) => `void`

#### Parameters

##### e

[`FocusedRowChangedEvent`](FocusedRowChangedEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:FocusedRowChangedEvent}

#### Default

```ts
null
```

#### Action

### ~~onFocusedRowChanging()?~~

> `optional` **onFocusedRowChanging**: (`e`) => `void`

#### Parameters

##### e

[`FocusedRowChangingEvent`](FocusedRowChangingEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:FocusedRowChangingEvent}

#### Default

```ts
null
```

#### Action

### ~~onNodesInitialized()?~~

> `optional` **onNodesInitialized**: (`e`) => `void`

#### Parameters

##### e

[`NodesInitializedEvent`](NodesInitializedEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:NodesInitializedEvent}

#### Default

```ts
null
```

#### Action

### ~~onRowClick()?~~

> `optional` **onRowClick**: (`e`) => `void`

#### Parameters

##### e

[`RowClickEvent`](RowClickEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:RowClickEvent}

#### Default

```ts
null
```

#### Action

### ~~onRowDblClick()?~~

> `optional` **onRowDblClick**: (`e`) => `void`

#### Parameters

##### e

[`RowDblClickEvent`](RowDblClickEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:RowDblClickEvent}

#### Default

```ts
null
```

#### Action

### ~~onRowPrepared()?~~

> `optional` **onRowPrepared**: (`e`) => `void`

#### Parameters

##### e

[`RowPreparedEvent`](RowPreparedEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/tree_list:RowPreparedEvent}

#### Default

```ts
null
```

#### Action

### ~~paging?~~

> `optional` **paging**: [`Paging`](Paging.md)

#### Docid

### ~~parentIdExpr?~~

> `optional` **parentIdExpr**: `string` \| `Function`

#### Docid

#### Default

```ts
"parentId"
@public
```

### ~~remoteOperations?~~

> `optional` **remoteOperations**: \{ `filtering?`: `boolean`; `grouping?`: `boolean`; `sorting?`: `boolean`; \} \| [`Mode`](Mode.md)

#### Type Declaration

\{ `filtering?`: `boolean`; `grouping?`: `boolean`; `sorting?`: `boolean`; \}

[`Mode`](Mode.md)

#### Docid

#### Default

```ts
"auto"
@public
```

### ~~rootValue?~~

> `optional` **rootValue**: `TKey`

#### Docid

#### Default

```ts
0
@public
```

### ~~scrolling?~~

> `optional` **scrolling**: [`Scrolling`](../interfaces/Scrolling.md)

#### Docid

### ~~selection?~~

> `optional` **selection**: [`Selection`](../interfaces/Selection.md)

#### Docid

### ~~toolbar?~~

> `optional` **toolbar**: [`Toolbar`](Toolbar.md)

#### Docid

#### Default

```ts
undefined
@public
```

## Type Parameters

### TRowData

`TRowData` = `any`

### TKey

`TKey` = `any`

## Deprecated

use Properties instead
 DevExpress.ui

## Docid
