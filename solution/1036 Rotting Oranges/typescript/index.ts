function orangesRotting(grid: number[][]): number {
  const [ROW, COL] = [grid.length, grid[0].length];
  const queue: [number, number][] = [];
  let fresh = 0;
  let time = 0;

  for (let x = 0; x < ROW; x++) {
    for (let y = 0; y < COL; y++) {
      if (grid[x][y] === 1) {
        fresh += 1;
      } else if (grid[x][y] === 2) {
        queue.push([x, y]);
      }
    }
  }

  while (queue.length > 0 && fresh > 0) {
    time++;
    for (const cell of [...queue]) {
      queue.shift();
      const [x, y] = cell;
      const directions: [number, number][] = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ];

      for (const path of directions) {
        const [dx, dy] = path;
        if (
          Math.min(...path) < 0 ||
          dx >= ROW ||
          dy >= COL ||
          grid[dx][dy] !== 1
        ) {
          continue;
        }

        if (grid[dx][dy] === 1) {
          grid[dx][dy] = 2;
          fresh--;
          queue.push(path)
        }
      }
    }
  }

  return fresh > 0 ? -1 : time;
}