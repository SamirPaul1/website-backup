---
title: 0877 stone game
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0877-stone-game solution
description: 0877 stone game LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---






---




```python
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        dp = {}
        def dfs(l, r):
            if l > r: return 0
            if (l,r) in dp: return dp[(l,r)]
            even = True if (r-l)%2 else False
            left = piles[l] + dfs(l+1, r) if even else dfs(l+1, r)
            right = piles[r] + dfs(l, r-1) if even else dfs(l, r-1)
            dp[(l,r)] = max(left, right)
            return dp[(l,r)]
        
        return dfs(0, len(piles)-1)
```
