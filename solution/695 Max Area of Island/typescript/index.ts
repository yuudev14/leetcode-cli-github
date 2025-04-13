const dfs = (
  r: number,
  c: number,
  grid: number[][],
  visit: Set<String>
): number => {
  const ROW = grid.length;
  const COL = grid[0].length;

  // base case
  if (
    Math.min(r, c) < 0 ||
    r >= ROW ||
    c >= COL ||
    grid[r][c] === 0 ||
    visit.has([r, c].toString())
  ) {
    return 0;
  }

  visit.add([r, c].toString());
  let land = 1;
  const directions = [
    [-1, 0], // going to left
    [1, 0], // going to right
    [0, -1], // going up
    [0, 1], //going down
  ];
  for (const i of directions) {
    land += dfs(r + i[0], c + i[1], grid, visit);
  }

  return land;
};

function maxAreaOfIsland(grid: number[][]): number {
  if (grid.length === 0) return 0;
  const ROW = grid.length;
  const COL = grid[0].length;

  let max = 0;

  const visit: Set<string> = new Set();

  for (let x = 0; x < ROW; x++) {
    for (let y = 0; y < COL; y++) {
      if (!visit.has([x, y].toString())) {
        const res = dfs(x, y, grid, visit)
        max = Math.max(res, max);
      }
    }
  }

  return max;
}