/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
     return function(n: number): number {
        let l = 1
        let r = n
        let bad = 0


        while(l <= r) {
            const pivot = Math.floor((l + r) / 2)
            const result = isBadVersion(pivot)
            if (result) {
                r = pivot - 1
                bad = pivot
            } else {
                l = pivot + 1
            } 
        }
        return bad
     }
    

};