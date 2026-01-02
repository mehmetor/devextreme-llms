[**DevExtreme React SpeechToText API v26.1.0**](../../../../README.md)

***

[DevExtreme React SpeechToText API](../../../../globals.md) / [SpeechToTextTypes](../README.md) / Properties

# Interface: Properties

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:155

## Docid

dxSpeechToTextOptions

## Extends

- `WidgetOptions`\<`dxSpeechToText`\>

## Properties

### accessKey?

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

### activeStateEnabled?

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

### customSpeechRecognizer?

> `optional` **customSpeechRecognizer**: [`CustomSpeechRecognizer`](../type-aliases/CustomSpeechRecognizer.md)

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:160

#### Docid

dxSpeechToTextOptions.customSpeechRecognizer

***

### disabled?

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

### elementAttr?

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

### focusStateEnabled?

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

### height?

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

### hint?

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

### hoverStateEnabled?

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

### onContentReady()?

> `optional` **onContentReady**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/widget/ui.widget.d.ts:66

#### Parameters

##### e

`EventInfo`\<`dxSpeechToText`\>

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

### onDisposing()?

> `optional` **onDisposing**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:62

#### Parameters

##### e

`EventInfo`\<`dxSpeechToText`\>

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

### onEnd()?

> `optional` **onEnd**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:253

#### Parameters

##### e

[`EndEvent`](../type-aliases/EndEvent.md)

#### Returns

`void`

#### Docid

dxSpeechToTextOptions.onEnd

#### Default

```ts
undefined
@type_function_param1 e:{ui/speech_to_text:EndEvent}
```

#### Action

***

### onError()?

> `optional` **onError**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:244

#### Parameters

##### e

[`ErrorEvent`](../type-aliases/ErrorEvent.md)

#### Returns

`void`

#### Docid

dxSpeechToTextOptions.onError

#### Default

```ts
undefined
@type_function_param1 e:{ui/speech_to_text:ErrorEvent}
```

#### Action

***

### onInitialized()?

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

### onOptionChanged()?

> `optional` **onOptionChanged**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/core/dom\_component.d.ts:71

#### Parameters

##### e

`OptionChangedEventInfo`\<`dxSpeechToText`\>

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

### onResult()?

> `optional` **onResult**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:235

#### Parameters

##### e

[`ResultEvent`](../type-aliases/ResultEvent.md)

#### Returns

`void`

#### Docid

dxSpeechToTextOptions.onResult

#### Default

```ts
undefined
@type_function_param1 e:{ui/speech_to_text:ResultEvent}
```

#### Action

***

### onStartClick()?

> `optional` **onStartClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:217

#### Parameters

##### e

[`StartClickEvent`](../type-aliases/StartClickEvent.md)

#### Returns

`void`

#### Docid

dxSpeechToTextOptions.onStartClick

#### Default

```ts
undefined
@type_function_param1 e:{ui/speech_to_text:StartClickEvent}
```

#### Action

***

### onStopClick()?

> `optional` **onStopClick**: (`e`) => `void`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:226

#### Parameters

##### e

[`StopClickEvent`](../type-aliases/StopClickEvent.md)

#### Returns

`void`

#### Docid

dxSpeechToTextOptions.onStopClick

#### Default

```ts
undefined
@type_function_param1 e:{ui/speech_to_text:StopClickEvent}
```

#### Action

***

### rtlEnabled?

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

### speechRecognitionConfig?

> `optional` **speechRecognitionConfig**: [`SpeechRecognitionConfig`](../type-aliases/SpeechRecognitionConfig.md) \| \{\[`key`: `string`\]: `any`; \}

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:208

#### Docid

dxSpeechToTextOptions.speechRecognitionConfig

***

### startIcon?

> `optional` **startIcon**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:188

#### Docid

dxSpeechToTextOptions.startIcon

#### Default

```ts
'micoutline'
@public
```

***

### startText?

> `optional` **startText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:167

#### Docid

dxSpeechToTextOptions.startText

#### Default

```ts
""
@public
```

***

### stopIcon?

> `optional` **stopIcon**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:195

#### Docid

dxSpeechToTextOptions.stopIcon

#### Default

```ts
'stopfilled'
@public
```

***

### stopText?

> `optional` **stopText**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:174

#### Docid

dxSpeechToTextOptions.stopText

#### Default

```ts
""
@public
```

***

### stylingMode?

> `optional` **stylingMode**: `ButtonStyle`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:181

#### Docid

dxSpeechToTextOptions.stylingMode

#### Default

```ts
'contained'
@public
```

***

### tabIndex?

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

### type?

> `optional` **type**: `string`

Defined in: devextreme/artifacts/npm/devextreme/ui/speech\_to\_text.d.ts:202

#### Docid

dxSpeechToTextOptions.type

#### Default

```ts
'normal'
@public
```

***

### visible?

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

### width?

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
