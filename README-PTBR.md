# 🧩 15-Puzzle com BFS

Este projeto implementa o algoritmo **Busca em Largura (BFS)** para resolver o clássico problema do **15-puzzle**, explorando o espaço de estados de forma sistemática.

## 📌 Sobre o Problema

O 15-puzzle consiste em um tabuleiro 4x4 com 15 peças numeradas e um espaço vazio. O objetivo é reorganizar as peças até alcançar o estado final ordenado, utilizando apenas movimentos válidos:

- Cima (UP)
- Baixo (DOWN)
- Esquerda (LEFT)
- Direita (RIGHT)

O problema é modelado como um **grafo de estados**, onde:
- Cada configuração do tabuleiro representa um nó
- Cada movimento possível representa uma transição

---

## ⚙️ Algoritmo Utilizado

### 🔹 Busca em Largura (BFS)

A BFS é uma estratégia de busca **não informada**, que explora os estados por níveis.

### ✔ Características:
- Completa (sempre encontra solução, se existir)
- Ótima (menor número de movimentos)
- Utiliza estrutura de fila (FIFO)

---

## 🚀 Como Executar

### ✔ Pré-requisitos
- Node.js instalado

### ✔ Executar

```bash
node breadthFirstSearch.js
