[**DevExtreme React DataGrid API v26.1.0**](../../../../README.md)

***

[DevExtreme React DataGrid API](../../../../globals.md) / [DataGridTypes](../README.md) / dxDataGridOptions

# ~~Type Alias: dxDataGridOptions\<TRowData, TKey\>~~

> **dxDataGridOptions**\<`TRowData`, `TKey`\> = `Omit`\<`GridBaseOptions`\<`dxDataGrid`\<`TRowData`, `TKey`\>, `TRowData`, `TKey`\>, `OverriddenKeys`\> & `object`

Defined in: devextreme/artifacts/npm/devextreme/ui/data\_grid.d.ts:1180

**`Namespace`**

## Type Declaration

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

@type_function_param1 columns:Array<dxDataGridColumn>

### ~~dataRowTemplate?~~

> `optional` **dataRowTemplate**: `template` \| (`rowElement`, `rowInfo`) => `any`

#### Docid

@type_function_param2 rowInfo:object
@type_function_param2_field key:any
@type_function_param2_field data:any
@type_function_param2_field values:Array<any>
@type_function_param2_field columns:Array<dxDataGridColumn>

### ~~editing?~~

> `optional` **editing**: [`Editing`](Editing.md)\<`TRowData`, `TKey`\>

#### Docid

### ~~export?~~

> `optional` **export**: [`Export`](Export.md)

#### Docid

### ~~grouping?~~

> `optional` **grouping**: [`Grouping`](Grouping.md)

#### Docid

### ~~groupPanel?~~

> `optional` **groupPanel**: [`GroupPanel`](GroupPanel.md)

#### Docid

### ~~keyExpr?~~

> `optional` **keyExpr**: `string` \| `string`[]

#### Docid

#### Default

```ts
undefined
@public
```

### ~~masterDetail?~~

> `optional` **masterDetail**: [`MasterDetail`](MasterDetail.md)\<`TRowData`, `TKey`\>

#### Docid

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
@type_function_param1 e:{ui/data_grid:AIColumnRequestCreatingEvent}
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

@type_function_param1 e:{ui/data_grid:CellClickEvent}

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

@type_function_param1 e:{ui/data_grid:CellDblClickEvent}

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

@type_function_param1 e:{ui/data_grid:CellHoverChangedEvent}

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

@type_function_param1 e:{ui/data_grid:CellPreparedEvent}

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

@type_function_param1 e:{ui/data_grid:ContextMenuPreparingEvent}

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

@type_function_param1 e:{ui/data_grid:EditingStartEvent}

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

@type_function_param1 e:{ui/data_grid:EditorPreparedEvent}

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

@type_function_param1 e:{ui/data_grid:EditorPreparingEvent}

#### Default

```ts
null
```

#### Action

### ~~onExporting()?~~

> `optional` **onExporting**: (`e`) => `void`

#### Parameters

##### e

[`ExportingEvent`](ExportingEvent.md)\<`TRowData`, `TKey`\>

#### Returns

`void`

#### Docid

@type_function_param1 e:{ui/data_grid:ExportingEvent}

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

@type_function_param1 e:{ui/data_grid:FocusedCellChangedEvent}

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

@type_function_param1 e:{ui/data_grid:FocusedCellChangingEvent}

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

@type_function_param1 e:{ui/data_grid:FocusedRowChangedEvent}

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

@type_function_param1 e:{ui/data_grid:FocusedRowChangingEvent}

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

@type_function_param1 e:{ui/data_grid:RowClickEvent}

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

@type_function_param1 e:{ui/data_grid:RowDblClickEvent}

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

@type_function_param1 e:{ui/data_grid:RowPreparedEvent}

#### Default

```ts
null
```

#### Action

### ~~remoteOperations?~~

> `optional` **remoteOperations**: `boolean` \| \{ `filtering?`: `boolean`; `grouping?`: `boolean`; `groupPaging?`: `boolean`; `paging?`: `boolean`; `sorting?`: `boolean`; `summary?`: `boolean`; \} \| [`Mode`](Mode.md)

#### Type Declaration

`boolean`

\{ `filtering?`: `boolean`; `grouping?`: `boolean`; `groupPaging?`: `boolean`; `paging?`: `boolean`; `sorting?`: `boolean`; `summary?`: `boolean`; \}

[`Mode`](Mode.md)

#### Docid

#### Default

```ts
"auto"
@public
```

### ~~rowTemplate?~~

> `optional` **rowTemplate**: `template` \| (`rowElement`, `rowInfo`) => `any`

#### Docid

@type_function_param2 rowInfo:object
@type_function_param2_field key:any
@type_function_param2_field data:any
@type_function_param2_field values:Array<any>
@type_function_param2_field columns:Array<dxDataGridColumn>

#### Deprecated

dxDataGridOptions.dataRowTemplate

### ~~scrolling?~~

> `optional` **scrolling**: [`Scrolling`](Scrolling.md)

#### Docid

### ~~selection?~~

> `optional` **selection**: [`Selection`](Selection.md)

#### Docid

### ~~selectionFilter?~~

> `optional` **selectionFilter**: `string` \| `any`[] \| `Function`

#### Docid

#### Default

```ts
[]
```

#### Fires

dxDataGridOptions.onOptionChanged

### ~~sortByGroupSummaryInfo?~~

> `optional` **sortByGroupSummaryInfo**: [`SortByGroupSummaryInfoItem`](SortByGroupSummaryInfoItem.md)[]

#### Docid

#### Default

```ts
undefined
@public
```

### ~~summary?~~

> `optional` **summary**: [`Summary`](Summary.md)\<`TRowData`, `TKey`\>

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
