[**DevExtreme React Chat API v26.1.0**](../../../../README.md)

***

[DevExtreme React Chat API](../../../../globals.md) / [ChatTypes](../README.md) / dxChatOptions

# ~~Interface: dxChatOptions~~

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:355

**`Namespace`**

## Deprecated

use Properties instead
 DevExpress.ui

## Docid

## Extends

- `WidgetOptions`\<`dxChat`\>

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

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:361

#### Docid

#### Default

```ts
true
@public
```

#### Overrides

`WidgetOptions.activeStateEnabled`

***

### ~~alerts?~~

> `optional` **alerts**: [`Alert`](../type-aliases/Alert.md)[]

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:442

#### Docid

#### Default

```ts
[]
@public
```

***

### ~~dataSource?~~

> `optional` **dataSource**: `DataSourceLike`\<[`Message`](../type-aliases/Message.md)\>

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:424

#### Docid

#### Default

```ts
null
@public
```

***

### ~~dayHeaderFormat?~~

> `optional` **dayHeaderFormat**: `Format`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:430

#### Docid

#### Default

```ts
'shortdate'
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

`WidgetOptions.disabled`

***

### ~~editing?~~

> `optional` **editing**: `object`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:397

#### ~~allowDeleting?~~

> `optional` **allowDeleting**: `boolean` \| (`options`) => `boolean`

##### Docid

##### Default

```ts
false
@public
```

#### ~~allowUpdating?~~

> `optional` **allowUpdating**: `boolean` \| (`options`) => `boolean`

##### Docid

##### Default

```ts
false
@public
```

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

`WidgetOptions.elementAttr`

***

### ~~emptyViewTemplate?~~

> `optional` **emptyViewTemplate**: `template` \| (`data`, `itemElement`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:417

#### Docid

#### Default

```ts
null
@type_function_return string|Element|jQuery
@public
```

***

### ~~fileUploaderOptions?~~

> `optional` **fileUploaderOptions**: `Omit`\<`FileUploaderOptions`, `"dialogTrigger"` \| `"showFileList"` \| `"uploadMode"` \| `"value"`\>

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:368

#### Docid

#### Default

```ts
null
```

***

### ~~focusStateEnabled?~~

> `optional` **focusStateEnabled**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:374

#### Docid

#### Default

```ts
true
@public
```

#### Overrides

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

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:380

#### Docid

#### Default

```ts
true
@public
```

#### Overrides

`WidgetOptions.hoverStateEnabled`

***

### ~~items?~~

> `optional` **items**: [`Message`](../type-aliases/Message.md)[]

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:392

#### Docid

#### Fires

dxChatOptions.onOptionChanged

***

### ~~messageTemplate?~~

> `optional` **messageTemplate**: `template` \| (`data`, `messageBubbleElement`) => `string` \| `Element`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:449

#### Docid

#### Default

```ts
null
@type_function_return string|Element|jQuery
@public
```

***

### ~~messageTimestampFormat?~~

> `optional` **messageTimestampFormat**: `Format`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:455

#### Docid

#### Default

```ts
'shorttime'
@public
```

***

### ~~onAttachmentDownloadClick()?~~

> `optional` **onAttachmentDownloadClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:493

#### Parameters

##### e

[`AttachmentDownloadClickEvent`](../type-aliases/AttachmentDownloadClickEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:AttachmentDownloadClickEvent}
```

#### Action

***

### ~~onContentReady()?~~

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxChat`\>

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

`EventInfo`\<`dxChat`\>

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

### ~~onMessageDeleted()?~~

> `optional` **onMessageDeleted**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:533

#### Parameters

##### e

[`MessageDeletedEvent`](../type-aliases/MessageDeletedEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:MessageDeletedEvent}
```

#### Action

***

### ~~onMessageDeleting()?~~

> `optional` **onMessageDeleting**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:525

#### Parameters

##### e

[`MessageDeletingEvent`](../type-aliases/MessageDeletingEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:MessageDeletingEvent}
```

#### Action

***

### ~~onMessageEditCanceled()?~~

> `optional` **onMessageEditCanceled**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:549

#### Parameters

##### e

[`MessageEditCanceledEvent`](../type-aliases/MessageEditCanceledEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:MessageEditCanceledEvent}
```

#### Action

***

### ~~onMessageEditingStart()?~~

> `optional` **onMessageEditingStart**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:541

#### Parameters

##### e

[`MessageEditingStartEvent`](../type-aliases/MessageEditingStartEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:MessageEditingStartEvent}
```

#### Action

***

### ~~onMessageEntered()?~~

> `optional` **onMessageEntered**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:501

#### Parameters

##### e

[`MessageEnteredEvent`](../type-aliases/MessageEnteredEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:MessageEnteredEvent}
```

#### Action

***

### ~~onMessageUpdated()?~~

> `optional` **onMessageUpdated**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:565

#### Parameters

##### e

[`MessageUpdatedEvent`](../type-aliases/MessageUpdatedEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:MessageUpdatedEvent}
```

#### Action

***

### ~~onMessageUpdating()?~~

> `optional` **onMessageUpdating**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:557

#### Parameters

##### e

[`MessageUpdatingEvent`](../type-aliases/MessageUpdatingEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:MessageUpdatingEvent}
```

#### Action

***

### ~~onOptionChanged()?~~

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxChat`\>

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

### ~~onTypingEnd()?~~

> `optional` **onTypingEnd**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:517

#### Parameters

##### e

[`TypingEndEvent`](../type-aliases/TypingEndEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:TypingEndEvent}
```

#### Action

***

### ~~onTypingStart()?~~

> `optional` **onTypingStart**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:509

#### Parameters

##### e

[`TypingStartEvent`](../type-aliases/TypingStartEvent.md)

#### Returns

`void`

#### Docid

#### Default

```ts
undefined
@type_function_param1 e:{ui/chat:TypingStartEvent}
```

#### Action

***

### ~~reloadOnChange?~~

> `optional` **reloadOnChange**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:436

#### Docid

#### Default

```ts
true
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

`WidgetOptions.rtlEnabled`

***

### ~~showAvatar?~~

> `optional` **showAvatar**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:479

#### Docid

#### Default

```ts
true
@public
```

***

### ~~showDayHeaders?~~

> `optional` **showDayHeaders**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:467

#### Docid

#### Default

```ts
true
@public
```

***

### ~~showMessageTimestamp?~~

> `optional` **showMessageTimestamp**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:485

#### Docid

#### Default

```ts
true
@public
```

***

### ~~showUserName?~~

> `optional` **showUserName**: `boolean`

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:473

#### Docid

#### Default

```ts
true
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

`WidgetOptions.tabIndex`

***

### ~~typingUsers?~~

> `optional` **typingUsers**: [`User`](../type-aliases/User.md)[]

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:461

#### Docid

#### Default

```ts
[]
@public
```

***

### ~~user?~~

> `optional` **user**: [`User`](../type-aliases/User.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/chat.d.ts:386

#### Docid

#### Default

```ts
{ id: new Guid().toString() }
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
