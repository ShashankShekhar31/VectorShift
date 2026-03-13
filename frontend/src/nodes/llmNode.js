// Prompt Connecting Node
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon="🤖"
      headerColor="linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)"
      inputs={[
        { id: 'system', label: 'system' },
        { id: 'prompt', label: 'prompt' },
      ]}
      outputs={[{ id: 'response', label: 'response' }]}
    >
      <div className="node-field">
        <span className="node-description">Large Language Model node. Connect a system prompt and user prompt, then read the response.</span>
      </div>
    </BaseNode>
  );
};
