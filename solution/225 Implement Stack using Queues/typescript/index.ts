class MyStack {
    list: number[]
    constructor() {
        this.list = []
    }

    push(x: number): void {
        this.list.unshift(x)

    }

    pop(): number {
        return this.list.shift()

    }

    top(): number {
        return this.list[0]

    }

    empty(): boolean {
        return this.list.length === 0

    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */