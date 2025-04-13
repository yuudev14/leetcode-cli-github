class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prod_prefix, prod_suffix = 1, 1
        prod_suffix_list, prod_prefix_list = [], []
        result = []
        for i in range(len(nums)):
            prod_prefix = prod_prefix * nums[i]
            prod_suffix = prod_suffix * nums[len(nums) - 1 - i]
            prod_prefix_list.append(prod_prefix)
            prod_suffix_list.insert(0, prod_suffix)


        for i in range(len(nums)):
            preLeft = prod_prefix_list[i - 1] if i > 0 else 1
            preRight = prod_suffix_list[i + 1] if i < len(nums) - 1 else 1
            result.append(preLeft * preRight)
        return result