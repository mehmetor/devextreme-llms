[**DevExtreme React CardView API v26.1.0**](../../../../README.md)

***

[DevExtreme React CardView API](../../../../globals.md) / [CardViewTypes](../README.md) / ColumnProperties

# Type Alias: ColumnProperties\<TCardData, TKey\>

> **ColumnProperties**\<`TCardData`, `TKey`\> = `object`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:266

**`Namespace`**

## Docid

DevExpress.ui.dxCardView

## Type Parameters

### TCardData

`TCardData` = `unknown`

### TKey

`TKey` = `unknown`

## Properties

### alignment?

> `optional` **alignment**: `HorizontalAlignment`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:271

#### Docid

***

### allowEditing?

> `optional` **allowEditing**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:277

#### Docid

#### Default

```ts
true
@public
```

***

### allowFiltering?

> `optional` **allowFiltering**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:283

#### Docid

#### Default

```ts
true
@public
```

***

### allowHeaderFiltering?

> `optional` **allowHeaderFiltering**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:289

#### Docid

#### Default

```ts
true
@public
```

***

### allowHiding?

> `optional` **allowHiding**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:295

#### Docid

#### Default

```ts
true
@public
```

***

### allowReordering?

> `optional` **allowReordering**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:301

#### Docid

#### Default

```ts
true
@public
```

***

### allowSearch?

> `optional` **allowSearch**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:307

#### Docid

#### Default

```ts
true
@public
```

***

### allowSorting?

> `optional` **allowSorting**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:313

#### Docid

#### Default

```ts
true
@public
```

***

### calculateDisplayValue()?

> `optional` **calculateDisplayValue**: (`this`, `cardData`) => `any`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:325

#### Parameters

##### this

[`Column`](Column.md)

##### cardData

`TCardData`

#### Returns

`any`

#### Docid

@type_function_param1 cardData:object

***

### calculateFieldValue()?

> `optional` **calculateFieldValue**: (`this`, `cardData`) => `any`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:319

#### Parameters

##### this

[`Column`](Column.md)

##### cardData

`TCardData`

#### Returns

`any`

#### Docid

@type_function_param1 cardData:object

***

### calculateFilterExpression()?

> `optional` **calculateFilterExpression**: (`this`, `filterValue`, `selectedFilterOperation`, `target`) => `string` \| `any`[] \| `Function`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:330

#### Parameters

##### this

[`Column`](Column.md)

##### filterValue

`any`

##### selectedFilterOperation

`string` | `null`

##### target

`string`

#### Returns

`string` \| `any`[] \| `Function`

#### Docid

***

### calculateSortValue?

> `optional` **calculateSortValue**: `string` \| (`this`, `cardData`) => `any`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:336

#### Docid

@type_function_param1 cardData:object

***

### caption?

> `optional` **caption**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:341

#### Docid

***

### customizeText()?

> `optional` **customizeText**: (`this`, `fieldInfo`) => `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:346

#### Parameters

##### this

[`Column`](Column.md)

##### fieldInfo

`ColumnCustomizeTextArg`

#### Returns

`string`

#### Docid

***

### dataField?

> `optional` **dataField**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:351

#### Docid

***

### dataType?

> `optional` **dataType**: `DataType`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:356

#### Docid

***

### editorOptions?

> `optional` **editorOptions**: `any`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:361

#### Docid

***

### falseText?

> `optional` **falseText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:367

#### Docid

#### Default

```ts
"false"
@public
```

***

### fieldCaptionTemplate?

> `optional` **fieldCaptionTemplate**: `template` \| (`data`, `container`) => `string` \| `UserDefinedElement`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:474

#### Docid

***

### fieldTemplate?

> `optional` **fieldTemplate**: `template` \| (`data`, `container`) => `string` \| `UserDefinedElement`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:469

#### Docid

***

### fieldValueTemplate?

> `optional` **fieldValueTemplate**: `template` \| (`data`, `container`) => `string` \| `UserDefinedElement`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:479

#### Docid

***

### filterType?

> `optional` **filterType**: `FilterType`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:373

#### Docid

#### Default

```ts
"include"
@public
```

***

### filterValue?

> `optional` **filterValue**: `any`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:380

#### Docid

#### Default

```ts
undefined
```

#### Fires

dxCardViewOptions.onOptionChanged

***

### filterValues?

> `optional` **filterValues**: `any`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:386

#### Docid

#### Fires

dxCardViewOptions.onOptionChanged

***

### format?

> `optional` **format**: `Format`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:398

#### Docid

#### Default

```ts
""
@public
```

***

### formItem?

> `optional` **formItem**: `SimpleItem`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:392

#### Docid

***

### headerFilter?

> `optional` **headerFilter**: `ColumnHeaderFilter`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:403

#### Docid

***

### headerItemCssClass?

> `optional` **headerItemCssClass**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:489

#### Docid

***

### headerItemTemplate?

> `optional` **headerItemTemplate**: `template` \| (`data`, `container`) => `string` \| `UserDefinedElement`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:484

#### Docid

***

### name?

> `optional` **name**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:408

#### Docid

***

### setFieldValue()?

> `optional` **setFieldValue**: (`this`, `newData`, `value`, `currentCardData`) => `void` \| `PromiseLike`\<`void`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:416

#### Parameters

##### this

[`Column`](Column.md)

##### newData

`DeepPartial`\<`TCardData`\>

##### value

`any`

##### currentCardData

`TCardData`

#### Returns

`void` \| `PromiseLike`\<`void`\>

#### Docid

@type_function_param1 newData:object
@type_function_param3 currentCardData:object
@type_function_return void|Promise<void>

***

### showInColumnChooser?

> `optional` **showInColumnChooser**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:422

#### Docid

#### Default

```ts
true
@public
```

***

### sortIndex?

> `optional` **sortIndex**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:428

#### Docid

#### Fires

dxCardViewOptions.onOptionChanged

***

### sortingMethod()?

> `optional` **sortingMethod**: (`this`, `value1`, `value2`) => `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:439

#### Parameters

##### this

[`Column`](Column.md)

##### value1

`any`

##### value2

`any`

#### Returns

`number`

#### Docid

***

### sortOrder?

> `optional` **sortOrder**: `SortOrder`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:434

#### Docid

#### Fires

dxCardViewOptions.onOptionChanged

***

### trueText?

> `optional` **trueText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:445

#### Docid

#### Default

```ts
"true"
@public
```

***

### validationRules?

> `optional` **validationRules**: `ValidationRule`[]

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:451

#### Docid

***

### visible?

> `optional` **visible**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:458

#### Docid

#### Default

```ts
true
```

#### Fires

dxCardViewOptions.onOptionChanged

***

### visibleIndex?

> `optional` **visibleIndex**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/card\_view.d.ts:464

#### Docid

#### Fires

dxCardViewOptions.onOptionChanged
