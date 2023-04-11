// Challenge-3

export const findLessCostPath = (board: number[][]) => {
  const rows = board.length;
  const cols = board[0].length;

  const bdArray: number[][] = [...Array(rows)].map(() => Array(cols).fill(Infinity));
  bdArray[0][0] = board[0][0];
  const q: number[][] = [[board[0][0], 0, 0]];
  const dir: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  while (q.length > 0) {
    const [cost, i, j]: number[] = q.shift()!;

    for (const [di, dj] of dir) {

      const ni: number = i + di;
      const nj: number = j + dj;

      if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
        const nCost: number = cost + board[ni][nj];

        if (nCost < bdArray[ni][nj]) {
          bdArray[ni][nj] = nCost;
          q.push([nCost, ni, nj]);
        }
      }
    }

    if (i === rows - 1 && j === cols - 1) {
      return cost;
    }
    q.sort((a, b) => a[0] - b[0]);
  }
  return -1;
}
