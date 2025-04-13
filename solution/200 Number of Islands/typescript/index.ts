const dfs = (
  r: number,
  c: number,
  grid: string[][],
  visit: Set<string>
) => {
  const ROW = grid.length;
  const COL = grid[0].length;

  /**
   * check if:
   * - any of the row and column is negative
   * - if row exceeds number of rows
   * - if col exceeds number of col
   * - if already visited
   * - if grid[r][c] is 0
   */

  if (
    Math.min(r, c) < 0 ||
    r >= ROW ||
    c >= COL ||
    visit.has([r, c].toString()) ||
    grid[r][c] === "0"
  ) {
    return;
  }
  visit.add([r, c].toString());
  const directions = [
    [-1, 0], // going to left
    [1, 0], // going to right
    [0, -1], // going up
    [0, 1], //going down
  ];
  for (const i of directions) {
    dfs(r + i[0], c + i[1], grid, visit);
  }
};

function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0
  const ROW = grid.length;
  const COL = grid[0].length;

  const visit: Set<string> = new Set();
  let island = 0;

  for (let x = 0; x < ROW; x++) {
    for (let y = 0; y < COL; y++) {
      if (
        !visit.has([x, y].toString()) &&
        grid[x][y] === "1"
      ) {
        island += 1;
        dfs(x, y, grid, visit);
      }
    }
  }

  return island;
}