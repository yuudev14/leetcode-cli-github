function calPoints(operations: string[]): number {
    let points: number[] = []
    for (let i = 0; i < operations.length; i++) {
        const len = points.length - 1
        if(operations[i] === "+") {   
            points.push(points[len - 1] + points[len])
        }else if (operations[i] === "C") {
            points.pop()
        }else if (operations[i] === "D") {
            points.push(points[len] * 2)
        } else {
            points.push(Number(operations[i]))
        }
    }

    return points.reduce((prev, curr) => prev + curr, 0)
    
};