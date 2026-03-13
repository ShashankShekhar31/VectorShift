// Base Node Component for ReactFlow
import { Handle, Position } from 'reactflow';

/**
 * Props:
 *  - id: Node id
 *  - title: Displayed header label With Tables
 *  - inputs: Array of {id, label, style?} — left-side target handles
 *  - outputs: Array of {id, label, style?} — right-side source handles
 *  - children: To Do Any Custom Fields rendered in the body
 *  - style: Extra styles on the wrapper
 *  - headerColor: Color string for the header
 *  - icon: To Shown Icon in header
 */
export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  style = {},
  headerColor,
  icon,
}) => {
  const defaultHeader = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';

  return (
    <div className="base-node" style={style}>
      {/* Left handles (inputs/targets) */}
      {inputs.map((handle, i) => (
        <div key={handle.id}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${handle.id}`}
            style={{
              top: inputs.length === 1 ? '50%' : `${((i + 1) / (inputs.length + 1)) * 100}%`,
              ...handle.style,
            }}
          />
          {handle.label && (
            <span
              className="handle-label handle-label-left"
              style={{
                top: inputs.length === 1 ? '50%' : `${((i + 1) / (inputs.length + 1)) * 100}%`,
              }}
            >
              {handle.label}
            </span>
          )}
        </div>
      ))}

      {/* Node Header */}
      <div
        className="node-header"
        style={{ background: headerColor || defaultHeader }}
      >
        {icon && <span className="node-icon">{icon}</span>}
        <span className="node-title">{title}</span>
      </div>

      {/* Node Body */}
      <div className="node-body">{children}</div>

      {/* Right Handles(outputs/sources)*/}
      {outputs.map((handle, i) => (
        <div key={handle.id}>
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${handle.id}`}
            style={{
              top: outputs.length === 1 ? '50%' : `${((i + 1) / (outputs.length + 1)) * 100}%`,
              ...handle.style,
            }}
          />
          {handle.label && (
            <span
              className="handle-label handle-label-right"
              style={{
                top: outputs.length === 1 ? '50%' : `${((i + 1) / (outputs.length + 1)) * 100}%`,
              }}
            >
              {handle.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
