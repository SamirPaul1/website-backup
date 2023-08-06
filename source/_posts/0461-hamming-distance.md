---
title: 0461 hamming distance
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0461-hamming-distance solution
description: 0461 hamming distance LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




---




```python
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        res = 0
        for i in range(32):
            if x&(1<<i) != y&(1<<i):
                res += 1
        return res
```
