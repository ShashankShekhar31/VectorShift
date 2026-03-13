import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-brand">
        <span className="toolbar-logo">⚡</span>
        <span className="toolbar-title">VectorShift</span>
      </div>
      <div className="toolbar-nodes">
        <span className="toolbar-section-label">NODES</span>
        <div className="toolbar-grid">
          <DraggableNode type='customInput' label='Input' icon='📥' color='#11998e' />
          <DraggableNode type='customOutput' label='Output' icon='📤' color='#f5576c' />
          <DraggableNode type='llm' label='LLM' icon='🤖' color='#8e54e9' />
          <DraggableNode type='text' label='Text' icon='📝' color='#f7971e' />
          <DraggableNode type='api' label='API Call' icon='🌐' color='#0083b0' />
          <DraggableNode type='condition' label='Condition' icon='🔀' color='#f46b45' />
          <DraggableNode type='note' label='Note' icon='🗒️' color='#f9d423' />
          <DraggableNode type='transform' label='Transform' icon='⚙️' color='#4286f4' />
          <DraggableNode type='database' label='Database' icon='🗄️' color='#0f3460' />
        </div>
      </div>
    </div>
  );
};
