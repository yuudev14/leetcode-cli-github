/**


piles = [3,6,7,11], h = 8
k = 1 to 11 bananas per hours

k = 1,
3/1 + 6/1 + 7/1 + 11/1 = 3 + 6 + 7 + 11 = 27hrs > 8 hrs = Not enough time

k = 2,
3/2 + 6/2 + 7/2 + 11/2 = 2 + 3 + 4 + 6 = 15 hrs > 8 hrs = Not enough time

k = 3,
3/3 + 6/3 + 7/3 + 11/3 = 1+ 2+ 3 + 4 = 10hrs > 8 hrs = Not enough time

k = 4,
3/4 + 6/4 + 7/4 + 11/4 = 1 + 2 + 2 + 3 = 8hrs = GOOD

k = 5,
3/5 + 6/5 + 7/5 + 11/5 = 1 + 2 + 2 + 3 = 8hrs = GOOD, but not the minimum k

k = 6,
3/6 + 6/6 + 7/6 + 11/6 = 1 + 1 + 2 + 2 = 4hrs = GOOD, but not the minimum k
.
.
.
So the answer is k=4 .

 */

function minEatingSpeed(piles: number[], h: number): number {
   let l = 0;
   let r = Math.max(...piles)
   let min = r

   while(l <= r) {
    const k = Math.floor((l + r) / 2)
    let time = 0
    for(const pile of piles) {
        time += Math.ceil(pile / k)
    }
    if (h >= time) {
        min = k
         r = k - 1
    } else {
         l = k + 1
    }
   }

   return min
};