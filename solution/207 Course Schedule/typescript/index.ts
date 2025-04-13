const generateGraph = (
  prerequisites: [number, number][]
): Record<number, number[]> => {
  const obj: Record<number, number[]> = {};
  for (let num of prerequisites) {
    if (num[0] in obj) {
      if (obj[num[0]].indexOf(num[1]) === -1)
        obj[num[0]].push(num[1]);
    } else {
      obj[num[0]] = [num[1]];
    }

    if (!(num[1] in obj)) {
      obj[num[1]] = [];
    }
  }
  return obj;
};

function canFinish(
  numCourses: number,
  prerequisites: [number, number][]
): boolean {
  if (prerequisites.length === 0) return true;
  const graph = generateGraph(prerequisites);
  const start = prerequisites[0][0];
  const seen = new Set();

  const acyclical = (curr: number): boolean => {
    if (seen.has(curr)) return true;
    if (graph[curr].length === 0) return false;
    seen.add(curr);
    for (let node of graph[curr]) {
      if (acyclical(node)) {
        return true;
      }
    }
    seen.delete(curr)
    graph[curr] = [];
    return false;
  };

  for (let x in graph){
    if (acyclical(Number(x))) {
      return false
    }

  }
  return true;
}