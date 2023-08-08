---
title: 0605 can place flowers
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0605-can-place-flowers solution
description: 0605 can place flowers LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---






---




```python
class Solution:
    def canPlaceFlowers(self, fb: List[int], n: int) -> bool:
        fb = [0] + fb + [0]
        i, cnt = 1, 0
        for i in range(1, len(fb)-1):
            if fb[i-1] == fb[i] == fb[i+1] == 0:
                fb[i] = 1
                cnt += 1
        return cnt >= n        
```
