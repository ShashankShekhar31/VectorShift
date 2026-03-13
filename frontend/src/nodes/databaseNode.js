// Database Query Node
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [query, setQuery] = useState(data?.query || 'SELECT * FROM table');
  const [db, setDb] = useState(data?.db || 'PostgreSQL');

  return (
    <BaseNode
      id={id}
      title="Database"
      icon="🗄️"
      headerColor="linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
      inputs={[{ id: 'params', label: 'params' }]}
      outputs={[{ id: 'rows', label: 'rows' }, { id: 'error', label: 'error' }]}
    >
      <div className="node-field">
        <label className="node-label">Database</label>
        <select className="node-select" value={db} onChange={(e) => setDb(e.target.value)}>
          <option>PostgreSQL</option>
          <option>MySQL</option>
          <option>MongoDB</option>
          <option>SQLite</option>
        </select>
      </div>
      <div className="node-field">
        <label className="node-label">Query</label>
        <textarea
          className="node-textarea"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={2}
        />
      </div>
    </BaseNode>
  );
};
