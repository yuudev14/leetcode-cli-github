function isValid(s: string): boolean {
    const arr: string[] = []
    const hashmap: Record<string, string> = {
        "[": "]",
        "(": ")",
        "{": "}"
    }

    for(let i = 0; i < s.length; i++) {
        const character = s[i]
        if (character in hashmap) {
            arr.push(character)
        }else {
            const popped = arr.pop() as string
            if (popped === undefined) return false
            if (hashmap[popped] !== character) return false
        }
    }

    return arr.length === 0
    
};