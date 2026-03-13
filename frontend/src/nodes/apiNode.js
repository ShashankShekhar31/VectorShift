// Api Node to allow user to make API Calls
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      title="API Call"
      icon="🌐"
      headerColor="linear-gradient(135deg, #00b4db 0%, #0083b0 100%)"
      inputs={[{ id: 'body', label: 'body' }, { id: 'headers', label: 'headers' }]}
      outputs={[{ id: 'response', label: 'response' }, { id: 'status', label: 'status' }]}
    >
      <div className="node-field">
        <label className="node-label">Method</label>
        <select className="node-select" value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </div>
      <div className="node-field">
        <label className="node-label">URL</label>
        <input className="node-input" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
    </BaseNode>
  );
};
