function maxArea(height: number[]): number {
    // loop trough the array
    // used 2 pointer approach
    // if left > 

    let area = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        area = Math.max(area, (right - left) * Math.min(height[right], height[left]))
        if (height[right] >= height[left]) {
            left++
        } else {
            right--
        }
    }
    return area

};