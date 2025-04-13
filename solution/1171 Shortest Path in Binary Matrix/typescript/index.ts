function shortestPathBinaryMatrix(
  grid: number[][]
): number {
  // grid size is 0 return -1
  if (grid.length === 0) return -1;
  if (grid[0][0] === 1) return -1
  const [row, col] = [grid.length, grid[0].length];
  const visit: Set<string> = new Set();

  const queue: [number, number][] = [];

  queue.push([0, 0]);
  visit.add([0, 0].toString());
  let path = 1;

  while (queue.length > 0) {
    for (let cell of [...queue]) {
      queue.shift();
      const [x, y] = cell;

      if (x === row - 1 && y === col - 1) {
        return path;
      }

      const paths = [
        [x, y + 1],
        [x + 1, y],
        [x, y - 1],
        [x - 1, y],
        [x + 1, y + 1],
        [x + 1, y - 1],
        [x - 1, y + 1],
        [x - 1, y - 1],
      ];
      for (let path of paths) {
        if (
          Math.min(path[0], path[1]) < 0 ||
          path[0] >= row ||
          path[1] >= col ||
          visit.has([path[0], path[1]].toString()) ||
          grid[path[0]][path[1]] === 1
        ) {
          continue;
        }
        queue.push([path[0], path[1]]);
        visit.add([path[0], path[1]].toString());
      }
    }
    path += 1;
  }
  return -1;
}
