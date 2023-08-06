---
title: 2091 removing minimum and maximum from array
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 2091-removing-minimum-and-maximum-from-array solution
description: 2091 removing minimum and maximum from array LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




---




```python
class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)
        maxi = max(nums)
        maxInd = nums.index(maxi)
        
        mini = min(nums)
        minInd = nums.index(mini)
        
        both = min(maxInd, minInd) + 1 + n - max(maxInd, minInd)       
        back = n - min(maxInd, minInd)
        front = max(maxInd, minInd) + 1
        
        return min(both, back, front)
```
