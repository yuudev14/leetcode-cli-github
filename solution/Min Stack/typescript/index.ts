class MinStack {
    private stack: number[]
    private minStack: number[]

    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        this.stack.push(val)
        const minStackVal = this.top(this.minStack)
        if (minStackVal >= val || !this.minStack.length) {
            this.minStack.push(val)
        }
    }

    pop(): void {
        const x = this.stack.pop()
        if (x === this.getMin()) {
            this.minStack.pop()
        }
    }

    top(stack = this.stack): number {
        return stack.length ? stack[stack.length - 1] : null
    }

    getMin(stack = this.minStack): number {
        return this.top(stack)

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */