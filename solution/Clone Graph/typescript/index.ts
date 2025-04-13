/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */


const cloneGraph = (node: Node | null, map: Map<number, Node> = new Map()): Node | null => {
  if (node === null) return null
  if (map.has(node.val)) return map.get(node.val)!
  return dfs(node, map)
};


const dfs = (node: Node | null, map: Map<number, Node> = new Map()): Node | null => {
  if (node === null) return null

  const copy = new Node(node.val)
  map.set(copy.val, copy);
  for (let x of node.neighbors) {

      const c = cloneGraph(x, map);
  
      copy.neighbors.push(c!)
    
  }

  return copy

};
