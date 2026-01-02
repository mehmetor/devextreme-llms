[**DevExtreme React TreeList API v26.1.0**](../../../../README.md)

***

[DevExtreme React TreeList API](../../../../globals.md) / [TreeListTypes](../README.md) / Editing

# Interface: Editing\<TRowData, TKey\>

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_list.d.ts:1186

## Docid

dxTreeListEditing

## Extends

- `EditingBase`\<`TRowData`, `TKey`\>

## Type Parameters

### TRowData

`TRowData` = `any`

### TKey

`TKey` = `any`

## Properties

### allowAdding?

> `optional` **allowAdding**: `boolean` \| (`options`) => `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_list.d.ts:1195

#### Docid

dxTreeListOptions.editing.allowAdding

#### Default

```ts
false
```

***

### allowDeleting?

> `optional` **allowDeleting**: `boolean` \| (`options`) => `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_list.d.ts:1204

#### Docid

dxTreeListOptions.editing.allowDeleting

#### Default

```ts
false
```

***

### allowUpdating?

> `optional` **allowUpdating**: `boolean` \| (`options`) => `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_list.d.ts:1213

#### Docid

dxTreeListOptions.editing.allowUpdating

#### Default

```ts
false
```

***

### changes?

> `optional` **changes**: [`DataChange`](../type-aliases/DataChange.md)\<`TRowData`, `TKey`\>[]

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1027

#### Docid

GridBaseOptions.editing.changes

#### Default

```ts
[]
```

#### Fires

GridBaseOptions.onOptionChanged

#### Inherited from

`EditingBase.changes`

***

### confirmDelete?

> `optional` **confirmDelete**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1019

#### Docid

GridBaseOptions.editing.confirmDelete

#### Default

```ts
true
@public
```

#### Inherited from

`EditingBase.confirmDelete`

***

### editColumnName?

> `optional` **editColumnName**: `string`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1034

#### Docid

GridBaseOptions.editing.editColumnName

#### Default

```ts
null
```

#### Fires

GridBaseOptions.onOptionChanged

#### Inherited from

`EditingBase.editColumnName`

***

### editRowKey?

> `optional` **editRowKey**: `TKey`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1041

#### Docid

GridBaseOptions.editing.editRowKey

#### Default

```ts
null
```

#### Fires

GridBaseOptions.onOptionChanged

#### Inherited from

`EditingBase.editRowKey`

***

### form?

> `optional` **form**: `dxFormOptions`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1047

#### Docid

GridBaseOptions.editing.form

#### Inherited from

`EditingBase.form`

***

### mode?

> `optional` **mode**: [`GridsEditMode`](../type-aliases/GridsEditMode.md)

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1053

#### Docid

GridBaseOptions.editing.mode

#### Default

```ts
"row"
@public
```

#### Inherited from

`EditingBase.mode`

***

### popup?

> `optional` **popup**: `Properties`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1059

#### Docid

GridBaseOptions.editing.popup

#### Inherited from

`EditingBase.popup`

***

### refreshMode?

> `optional` **refreshMode**: [`GridsEditRefreshMode`](../type-aliases/GridsEditRefreshMode.md)

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1065

#### Docid

GridBaseOptions.editing.refreshMode

#### Default

```ts
"full"
@public
```

#### Inherited from

`EditingBase.refreshMode`

***

### selectTextOnEditStart?

> `optional` **selectTextOnEditStart**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1071

#### Docid

GridBaseOptions.editing.selectTextOnEditStart

#### Default

```ts
false
@public
```

#### Inherited from

`EditingBase.selectTextOnEditStart`

***

### startEditAction?

> `optional` **startEditAction**: [`StartEditAction`](../type-aliases/StartEditAction.md)

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1077

#### Docid

GridBaseOptions.editing.startEditAction

#### Default

```ts
"click"
@public
```

#### Inherited from

`EditingBase.startEditAction`

***

### texts?

> `optional` **texts**: [`EditingTexts`](../type-aliases/EditingTexts.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/tree\_list.d.ts:1219

#### Docid

dxTreeListOptions.editing.texts

#### Overrides

`EditingBase.texts`

***

### useIcons?

> `optional` **useIcons**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:1091

#### Docid

GridBaseOptions.editing.useIcons

#### Default

```ts
true &for(Material)
```

#### Default

```ts
true &for(Fluent)
```

#### Default

```ts
false
@public
```

#### Inherited from

`EditingBase.useIcons`
