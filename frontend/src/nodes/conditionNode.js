// Conditional Node

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'value > 0');

  return (
    <BaseNode
      id={id}
      title="Condition"
      icon="🔀"
      headerColor="linear-gradient(135deg, #f46b45 0%, #eea849 100%)"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[{ id: 'true', label: 'true' }, { id: 'false', label: 'false' }]}
    >
      <div className="node-field">
        <label className="node-label">If</label>
        <input
          className="node-input"
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 0"
        />
      </div>
    </BaseNode>
  );
};
