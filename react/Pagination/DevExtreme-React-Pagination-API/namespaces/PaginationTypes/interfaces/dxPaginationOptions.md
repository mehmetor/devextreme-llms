[**DevExtreme React Pagination API v26.1.0**](../../../../README.md)

***

[DevExtreme React Pagination API](../../../../globals.md) / [PaginationTypes](../README.md) / dxPaginationOptions

# ~~Interface: dxPaginationOptions~~

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:75

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Inherits

PagerBase

## Extends

- `PagerBase`.`WidgetOptions`\<`dxPagination`\>

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

`WidgetOptions.accessKey`

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

`WidgetOptions.activeStateEnabled`

***

### ~~allowedPageSizes?~~

> `optional` **allowedPageSizes**: [`PageSize`](../type-aliases/PageSize.md)[]

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:101

#### Docid

#### Default

```ts
[5, 10]
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

`WidgetOptions.disabled`

***

### ~~displayMode?~~

> `optional` **displayMode**: [`DisplayMode`](../type-aliases/DisplayMode.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:30

#### Docid

#### Default

```ts
"adaptive"
```

#### Inherited from

`PagerBase.displayMode`

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

`WidgetOptions.elementAttr`

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

`WidgetOptions.focusStateEnabled`

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

`WidgetOptions.height`

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

`WidgetOptions.hint`

***

### ~~hoverStateEnabled?~~

> `optional` **hoverStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:59

#### Docid

#### Default

```ts
false
@public
```

#### Inherited from

`WidgetOptions.hoverStateEnabled`

***

### ~~infoText?~~

> `optional` **infoText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:36

#### Docid

#### Default

```ts
"Page {0} of {1} ({2} items)"
```

#### Inherited from

`PagerBase.infoText`

***

### ~~itemCount?~~

> `optional` **itemCount**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:94

#### Docid

#### Default

```ts
1
```

***

### ~~label?~~

> `optional` **label**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:60

#### Docid

#### Default

```ts
"Page Navigation"
```

#### Inherited from

`PagerBase.label`

***

### ~~onContentReady()?~~

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxPagination`\>

#### Returns

`void`

#### Docid

#### Default

```ts
null
```

#### Action

#### Inherited from

`WidgetOptions.onContentReady`

***

### ~~onDisposing()?~~

> `optional` **onDisposing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:62

#### Parameters

##### e

`EventInfo`\<`dxPagination`\>

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

`WidgetOptions.onDisposing`

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

`WidgetOptions.onInitialized`

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxPagination`\>

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

`WidgetOptions.onOptionChanged`

***

### ~~pageIndex?~~

> `optional` **pageIndex**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:81

#### Docid

#### Fires

Properties.onOptionChanged

#### Default

```ts
1
```

***

### ~~pageSize?~~

> `optional` **pageSize**: `number`

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:88

#### Docid

#### Fires

Properties.onOptionChanged

#### Default

```ts
5
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

`WidgetOptions.rtlEnabled`

***

### ~~showInfo?~~

> `optional` **showInfo**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:42

#### Docid

#### Default

```ts
false
```

#### Inherited from

`PagerBase.showInfo`

***

### ~~showNavigationButtons?~~

> `optional` **showNavigationButtons**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:48

#### Docid

#### Default

```ts
false
```

#### Inherited from

`PagerBase.showNavigationButtons`

***

### ~~showPageSizeSelector?~~

> `optional` **showPageSizeSelector**: `boolean` \| `"auto"`

Defined in: devextreme/artifacts/npm/devextreme/ui/pagination.d.ts:54

#### Docid

#### Default

```ts
"auto"
```

#### Inherited from

`PagerBase.showPageSizeSelector`

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

`WidgetOptions.tabIndex`

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

`WidgetOptions.visible`

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

`WidgetOptions.width`
