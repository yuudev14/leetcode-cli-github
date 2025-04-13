
var MyQueue = function() {
    this.array = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    
    this.array = [...this.array, x];
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const temp = this.array[0];
    this.array = this.array.slice(1)
    return temp
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.array[0]
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.array.length === 0 ? true : false;
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */