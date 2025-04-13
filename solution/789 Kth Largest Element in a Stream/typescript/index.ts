class KthLargest {
    public heap: number[]
    public k: number
    constructor(k: number, nums: number[]) {
        this.heap = [0]
        this.k = k
        
        // add all the number
        for (let num of nums) {
            this.heapPush(num)
        }
        
        while(this.heap.length-1 > k) {
            this.heapPop()
        }
    
    }

    add(val: number): number {
        this.heapPush(val)
        while(this.heap.length-1 > this.k) {
            this.heapPop()
        }
        return this.heap[1]
    }

    heapPush(val: number) {
        this.heap.push(val)
        
        let i = this.heap.length - 1
        
        // procanate up
        // do this until current index is less than parent element
        while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
            const temp = this.heap[i]
            this.heap[i] = this.heap[Math.floor(i / 2)]
            this.heap[Math.floor(i / 2)] = temp
            i = Math.floor(i / 2)
        }
    }

    heapPop() {
        // if lenth of heap is 1
        if (this.heap.length === 1) return
        // if length of heap is 2
        if (this.heap.length === 2) {
            this.heap.pop()
            return
        }
        
        this.heap[1] = this.heap.pop()
        
        let i = 1
        
        // procanate down
        // do this until you have left child
        while(i *2 < this.heap.length) {
            // do this condition: 
            // 1. if you have right child element
            // 2. if right is less than left
            // 3. if curr is greater than right
            if (i * 2 + 1 < this.heap.length &&
                this.heap[Math.floor(i * 2 + 1)] < this.heap[Math.floor(i * 2)] &&
                this.heap[i] > this.heap[Math.floor(i * 2 + 1)]
            ) {
                const temp = this.heap[i]
                this.heap[i] = this.heap[Math.floor(i * 2 + 1)]
                this.heap[Math.floor(i * 2 + 1)] = temp
                i = Math.floor(i * 2 + 1)
            } else if (this.heap[i] > this.heap[Math.floor(i * 2)]) {
                const temp = this.heap[i]
                this.heap[i] = this.heap[Math.floor(i * 2)]
                this.heap[Math.floor(i * 2)] = temp
                i = Math.floor(i * 2)
            } else {
                break
            }
        }
        
    }
    

}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */