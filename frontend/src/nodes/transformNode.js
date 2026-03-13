// Data Transform Node

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [script, setScript] = useState(data?.script || 'return input.toUpperCase()');

  return (
    <BaseNode
      id={id}
      title="Transform"
      icon="⚙️"
      headerColor="linear-gradient(135deg, #373b44 0%, #4286f4 100%)"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[{ id: 'output', label: 'output' }]}
    >
      <div className="node-field">
        <label className="node-label">Script</label>
        <textarea
          className="node-textarea"
          value={script}
          onChange={(e) => setScript(e.target.value)}
          rows={2}
          placeholder="return input.toUpperCase()"
        />
      </div>
    </BaseNode>
  );
};
