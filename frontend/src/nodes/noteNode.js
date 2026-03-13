// Sticky Note Node

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || 'Add a note...');

  return (
    <BaseNode
      id={id}
      title="Note"
      icon="🗒️"
      headerColor="linear-gradient(135deg, #f9d423 0%, #f83600 100%)"
    >
      <div className="node-field">
        <textarea
          className="node-textarea"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="Write a note..."
        />
      </div>
    </BaseNode>
  );
};
