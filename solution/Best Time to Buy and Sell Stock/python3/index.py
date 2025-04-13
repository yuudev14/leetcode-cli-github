class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        lowest = prices[0]
        price = 0
        for i in range(len(prices)):
            if prices[i] < lowest:
                lowest = prices[i]
                l = i
                continue
            price = max(price, prices[i] - lowest)

        return price
