[**DevExtreme React Diagram API v26.1.0**](../../../../README.md)

***

[DevExtreme React Diagram API](../../../../globals.md) / [DiagramTypes](../README.md) / RequestEditOperationEvent

# Type Alias: RequestEditOperationEvent

> **RequestEditOperationEvent** = `EventInfo`\<`dxDiagram`\> & `object`

Defined in: devextreme/artifacts/npm/devextreme/ui/diagram.d.ts:191

## Type Declaration

### allowed?

> `optional` **allowed**: `boolean`

#### Docid

_ui_diagram_RequestEditOperationEvent.allowed

### args

> `readonly` **args**: `dxDiagramAddShapeArgs` \| `dxDiagramAddShapeFromToolboxArgs` \| `dxDiagramDeleteShapeArgs` \| `dxDiagramDeleteConnectorArgs` \| `dxDiagramChangeConnectionArgs` \| `dxDiagramChangeConnectorPointsArgs` \| `dxDiagramBeforeChangeShapeTextArgs` \| `dxDiagramChangeShapeTextArgs` \| `dxDiagramBeforeChangeConnectorTextArgs` \| `dxDiagramChangeConnectorTextArgs` \| `dxDiagramResizeShapeArgs` \| `dxDiagramMoveShapeArgs`

#### Docid

_ui_diagram_RequestEditOperationEvent.args

### operation

> `readonly` **operation**: `"addShape"` \| `"addShapeFromToolbox"` \| `"deleteShape"` \| `"deleteConnector"` \| `"changeConnection"` \| `"changeConnectorPoints"`

#### Docid

_ui_diagram_RequestEditOperationEvent.operation

### reason

> `readonly` **reason**: [`RequestEditOperationReason`](RequestEditOperationReason.md)

#### Docid

_ui_diagram_RequestEditOperationEvent.reason

## Docid

_ui_diagram_RequestEditOperationEvent

## Inherits

EventInfo
