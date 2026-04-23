# 🧩 15-Puzzle with BFS

This project implements the Breadth-First Search (BFS) algorithm to solve the classic 15-puzzle problem, systematically exploring the state space.

## 📌 About the Problem

The 15-puzzle consists of a 4x4 board with 15 numbered pieces and one empty space. The goal is to rearrange the pieces until the final ordered state is reached, using only valid moves:

- Up
- Down
- Left
- Right

The problem is modeled as a **state graph**, where:

- Each board configuration represents a node
- Each possible move represents a transition

---

## ⚙️ Algorithm Used

### 🔹 Breadth-First Search (BFS)

BFS is an **uninformed** search strategy that explores states level by level.

### ✔ Features:

- Complete (always finds a solution, if one exists)
- Optimal (fewest number of moves)

- Uses a queue structure (FIFO)

---

## 🚀 How to Run

### ✔ Prerequisites

- Node.js installed

### ✔ Run

```bash
node breadthFirstSearch.js
