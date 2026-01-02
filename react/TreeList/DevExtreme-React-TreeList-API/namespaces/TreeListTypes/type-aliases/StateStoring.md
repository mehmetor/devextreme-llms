[**DevExtreme React TreeList API v26.1.0**](../../../../README.md)

***

[DevExtreme React TreeList API](../../../../globals.md) / [TreeListTypes](../README.md) / StateStoring

# Type Alias: StateStoring

> **StateStoring** = `object`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:3290

**`Namespace`**

## Docid

DevExpress.common.grids

## Properties

### customLoad()?

> `optional` **customLoad**: () => `PromiseLike`\<`any`\>

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:3296

#### Returns

`PromiseLike`\<`any`\>

#### Docid

GridBaseOptions.stateStoring.customLoad

***

### customSave()?

> `optional` **customSave**: (`gridState`) => `any`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:3302

#### Parameters

##### gridState

`any`

#### Returns

`any`

#### Docid

GridBaseOptions.stateStoring.customSave
@type_function_param1 gridState:object
@type_function_return void

***

### enabled?

> `optional` **enabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:3307

#### Docid

GridBaseOptions.stateStoring.enabled

#### Default

```ts
false
```

***

### savingTimeout?

> `optional` **savingTimeout**: `number`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:3312

#### Docid

GridBaseOptions.stateStoring.savingTimeout

#### Default

```ts
2000
```

***

### storageKey?

> `optional` **storageKey**: `string`

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:3317

#### Docid

GridBaseOptions.stateStoring.storageKey

#### Default

```ts
null
```

***

### type?

> `optional` **type**: [`StateStoreType`](StateStoreType.md)

Defined in: devextreme/artifacts/npm/devextreme/common/grids.d.ts:3322

#### Docid

GridBaseOptions.stateStoring.type

#### Default

```ts
"localStorage"
```
