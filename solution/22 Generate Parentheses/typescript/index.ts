const generateParenthesis = (
    n: number,
    output: string[] = [],
    str: string = "",
    open: number = 0,
    close: number = 0,
) => {
    if (str.length >= n * 2) output.push(str)
    if (open < n) generateParenthesis(n, output, str + "(", open + 1, close)
    if (close < open) generateParenthesis(n, output, str + ")", open, close + 1)
    return output
    
}