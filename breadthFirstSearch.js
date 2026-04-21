const SIZE = 4;
const GOAL = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 0
];

function boardToString(board) {
    return board.join(",");
}

function getNeighbors(board) {
    const neighbors = [];
    const zeroIndex = board.indexOf(0);

    const row = Math.floor(zeroIndex / SIZE);
    const col = zeroIndex % SIZE;

    const moves = [
        { dr: -1, dc: 0, name: "UP" },
        { dr: 1, dc: 0, name: "DOWN" },
        { dr: 0, dc: -1, name: "LEFT" },
        { dr: 0, dc: 1, name: "RIGHT" }
    ];

    for (const move of moves) {
        const newRow = row + move.dr;
        const newCol = col + move.dc;

        if (newRow >= 0 && newRow < SIZE && newCol >= 0 && newCol < SIZE) {
            const newBoard = [...board];
            const newIndex = newRow * SIZE + newCol;
            
            const temp = newBoard[zeroIndex];
            newBoard[zeroIndex] = newBoard[newIndex];
            newBoard[newIndex] = temp;

            neighbors.push({
                board: newBoard,
                move: move.name
            });
        }
    }

    return neighbors;
}

function reconstructPath(node) {
    const path = [];

    while (node.parent !== null) {
        path.push(node.move);
        node = node.parent;
    }

    return path.reverse();
}

function bfs(start, goal = GOAL) {
    const queue = [];
    const visited = new Set();

    queue.push({
        board: start,
        parent: null,
        move: null
    });

    visited.add(boardToString(start));

    let nodesVisited = 0;
    let head = 0;

    while (head < queue.length) {
        const current = queue[head++];
        nodesVisited++;

        if (boardToString(current.board) === boardToString(goal)) {
            console.log("Nós visitados:", nodesVisited);
            return reconstructPath(current);
        }

        for (const neighbor of getNeighbors(current.board)) {
            const key = boardToString(neighbor.board);

            if (!visited.has(key)) {
                visited.add(key);

                queue.push({
                    board: neighbor.board,
                    parent: current,
                    move: neighbor.move
                });
            }
        }
    }

    return null;
}

function logBfs(start) {
    console.log('\n');
    const startTime = performance.now();
    const solution = bfs(start);
    const endTime = performance.now();
    const duration = endTime - startTime;


    console.log('-------------------------------------');
    if (solution) {
        console.log("Solução encontrada:");
        console.log(solution);
    } else {
        console.log("Sem solução");
    }

    console.log('-------------------------------------');
    console.log("Tempo de execução:", duration.toFixed(2), "ms");
    console.log('\n');
};

const startA = [
    5, 1, 3, 4,
    9, 0, 6, 8,
    13, 2, 7, 12,
    14, 10, 11, 15
];
const startB = [
    1, 2, 4, 8,
    7, 10, 3, 11,
    5, 13, 6, 15,
    9, 0, 14, 12
];

logBfs(startA);
logBfs(startB);
