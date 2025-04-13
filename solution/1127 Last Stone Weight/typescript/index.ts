class Heap {
  public heap: number[];
  constructor(nums?: number[]) {
    this.heap = [];
    if (nums && nums.length > 0) {
      this.heapify(nums);
    } else {
      this.heap = [0];
    }
  }

  public heapify(nums: number[]) {
    /**
     Procedures:
      - push the first element in the last.
      - set first element to 0.
      - assign the new array in the this.heap
      - get the middle index in the array
      - for each index until the current index is 0, porcalate down to fix the order of the heap
    */
    nums.push(nums[0]);
    this.heap = nums;
    this.heap[0] = 0;

    let curr = Math.floor((nums.length - 1) / 2);

    while (curr > 0) {
      let i = curr;
      this.porcalate_down(i);
      --curr;
    }

    return this.heap;
  }

  public push(num: number) {
    this.heap.push(num);
    /**
     Procedures:
      - porcalate up.
      - Try to check the parent element, if the parent element is larger, switch the two.
      - set i to the parent's index
      - do this until i is less than 0 and if parent element is not less than the current index
    */
    let i = this.heap.length - 1;
    this.porcalate_up(i);

    return num;
  }

  public pop() {
    /**
     * Procedures:
     * - if length of the heap is 1, that means there's nothing to pop
     * - if length of the heap is 2, then we only need to pop
     * - if length of heap is greater than 2, pop the value and assign to the 1st element the value that you popped
     * - we need to porculate down until these conditions are met:
     *    1. if current node has children
     *    2. if the current node has a right child and right child is less that the left child and right child is less than the current node
     *    3. if the left child is less than the current node
     */

    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    const popped = this.heap[1];

    this.heap[1] = this.heap.pop() as number;
    let i = 1;

    // porcalate down
    this.porcalate_down(i);
    return popped;
  }

  public porcalate_up(i: number) {
    while (
      i > 1 &&
      this.heap[Math.floor(i / 2)] < this.heap[i]
    ) {
      const temp = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = this.heap[i];
      this.heap[i] = temp;
      i = Math.floor(i / 2);
    }
  }

  public porcalate_down(i: number) {
    // porcalate down
    while (i * 2 < this.heap.length) {
      if (
        i * 2 + 1 < this.heap.length &&
        this.heap[Math.floor(i * 2 + 1)] >
          this.heap[Math.floor(i * 2)] &&
        this.heap[i] < this.heap[Math.floor(i * 2 + 1)]
      ) {
        const temp = this.heap[Math.floor(i * 2 + 1)];
        this.heap[Math.floor(i * 2 + 1)] = this.heap[i];
        this.heap[i] = temp;
        i = i * 2 + 1;
      } else if (
        this.heap[i] < this.heap[Math.floor(i * 2)]
      ) {
        const temp = this.heap[Math.floor(i * 2)];
        this.heap[Math.floor(i * 2)] = this.heap[i];
        this.heap[i] = temp;
        i = i * 2;
      } else {
        break;
      }
    }
  }
}

function lastStoneWeight(stones: number[]): number {
  const heap = new Heap(stones);
  console.log(heap.heap)

  while (heap.heap.length > 2) {
    const x = heap.pop() as number;
    const y = heap.pop() as number;

    if (x !== y) {
      heap.push(x - y);
    }

  }
  if (heap.heap.length === 1) return 0

  return heap.heap[1];
}