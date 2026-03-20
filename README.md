# VectorShift Frontend Technical Assessment

A drag-and-drop pipeline builder built with React and FastAPI. Create pipelines by connecting nodes on a canvas, then submit to analyze the graph structure.

---

## Tech Stack

- **Frontend:** React, ReactFlow, Zustand
- **Backend:** Python, FastAPI, Uvicorn

---

## Project Structure

```
vectorshift-assessment/
├── frontend/
│   ├── public/
│   └── src/
│       ├── nodes/
│       │   ├── BaseNode.js        # Reusable node abstraction
│       │   ├── inputNode.js
│       │   ├── outputNode.js
│       │   ├── llmNode.js
│       │   ├── textNode.js        # Dynamic resize + variable handles
│       │   ├── apiNode.js
│       │   ├── conditionNode.js
│       │   ├── noteNode.js
│       │   ├── transformNode.js
│       │   └── databaseNode.js
│       ├── App.js
│       ├── ui.js                  # ReactFlow canvas
│       ├── toolbar.js             # Node palette
│       ├── submit.js              # Backend integration
│       ├── store.js               # Zustand state
│       └── index.css              # Global styles
└── backend/
    └── main.py                    # FastAPI + DAG detection
```

---

## Getting Started

### Prerequisites
- Node.js v16+
- Python 3.8+
- npm

### 1. Run the Backend

```bash
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

Backend runs at `http://127.0.0.1:8000`

### 2. Run the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs at `http://localhost:3000`

> Make sure both servers are running before clicking Submit.

---

## Features

### Part 1 — Node Abstraction
Created a `BaseNode` component that serves as the foundation for all nodes. It accepts `title`, `icon`, `headerColor`, `inputs`, and `outputs` as props — eliminating repeated code across nodes. Five new nodes were built using this abstraction: **API Call**, **Condition**, **Note**, **Transform**, and **Database**.

### Part 2 — Styling
Full dark-themed UI built from scratch using CSS variables. Features include gradient headers unique to each node type, color-coded draggable node pills in the toolbar, styled ReactFlow handles and edges, a color-coded minimap, and a clean toolbar/canvas/submit layout.

### Part 3 — Text Node Logic
The Text node supports two enhanced behaviors:
- **Auto-resize:** The node width and textarea height grow dynamically as the user types
- **Variable handles:** Typing `{{variableName}}` inside the text field dynamically creates a new input handle on the left side of the node, one per unique variable name

### Part 4 — Backend Integration
The Submit button sends the current pipeline (nodes + edges) as JSON to the `/pipelines/parse` endpoint. The backend calculates the number of nodes and edges, and checks whether the pipeline forms a **Directed Acyclic Graph (DAG)** using Kahn's algorithm. The result is displayed in an alert on the frontend.

**API Response format:**
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true
}
```

---

## Usage

1. Drag nodes from the toolbar onto the canvas
2. Connect nodes by dragging from one handle to another
3. Use the **Text node** and type `{{variable}}` to create dynamic input handles
4. Click **Submit Pipeline** to analyze the graph
5. An alert will display node count, edge count, and DAG status
