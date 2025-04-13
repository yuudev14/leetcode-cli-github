class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1

        while top <= bottom:
            mid = (top + bottom ) // 2
            if target < matrix[mid][0]:
                bottom = mid - 1
            elif target > matrix[mid][len(matrix[0]) - 1]:
                top = mid + 1
            else:
                break

        if top > bottom:
            return False

        nums = matrix[(top + bottom ) // 2]

        while left <= right:
            mid = (left + right ) // 2
            if target > nums[mid]:
                left = mid + 1
            elif target < nums[mid]:
                right = mid - 1
            else:
                return True

        return False
        