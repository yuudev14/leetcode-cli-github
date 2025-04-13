class Solution:
    def maxArea(self, height: List[int]) -> int:
        L = 0
        R = len(height) - 1
        area = 0

        while(L < R):
            area = max(area, min(height[L], height[R]) * (R - L))
            if height[L] < height[R]:
                L += 1
            else:
                R -= 1

        return area