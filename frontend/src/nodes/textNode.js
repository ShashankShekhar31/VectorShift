// Dynamic Resize + Variable Handles Node

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;

function extractVariables(text) {
  const vars = [];
  const seen = new Set();
  let match;
  const re = new RegExp(VARIABLE_REGEX.source, 'g');
  while ((match = re.exec(text)) !== null) {
    if (!seen.has(match[1])) {
      seen.add(match[1]);
      vars.push(match[1]);
    }
  }
  return vars;
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const [nodeSize, setNodeSize] = useState({ width: 220, height: 'auto' });

  useEffect(() => {
    setVariables(extractVariables(currText));

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      const newWidth = Math.max(220, Math.min(500, currText.length * 8 + 80));
      setNodeSize({ width: newWidth });
    }
  }, [currText]);

  return (
    <div style={{ position: 'relative', width: nodeSize.width }}>
      {/* Dynamic variable handles on the left */}
      {variables.map((varName, i) => (
        <div key={varName}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${varName}`}
            style={{ top: `${((i + 1) / (variables.length + 1)) * 100}%` }}
          />
          <span
            className="handle-label handle-label-left"
            style={{ top: `${((i + 1) / (variables.length + 1)) * 100}%` }}
          >
            {varName}
          </span>
        </div>
      ))}

      <div className="base-node" style={{ width: '100%' }}>
        <div
          className="node-header"
          style={{ background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' }}
        >
          <span className="node-icon">📝</span>
          <span className="node-title">Text</span>
        </div>
        <div className="node-body">
          <div className="node-field">
            <label className="node-label">Content</label>
            <textarea
              ref={textareaRef}
              className="node-textarea"
              value={currText}
              onChange={(e) => setCurrText(e.target.value)}
              rows={2}
              placeholder="Type text... use {{variable}} for inputs"
            />
          </div>
          {variables.length > 0 && (
            <div className="node-vars">
              {variables.map((v) => (
                <span key={v} className="node-var-badge">{'{{' + v + '}}'}</span>
              ))}
            </div>
          )}
        </div>

        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-output`}
        />
        <span className="handle-label handle-label-right" style={{ top: '50%' }}>out</span>
      </div>
    </div>
  );
};
