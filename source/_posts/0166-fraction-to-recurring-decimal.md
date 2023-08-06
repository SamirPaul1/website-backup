---
title: 0166 fraction to recurring decimal
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0166-fraction-to-recurring-decimal solution
description: 0166 fraction to recurring decimal LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




---




```python
class Solution:
    def fractionToDecimal(self, n: int, d: int) -> str:
        res = ''
        if n < 0 and d < 0: n = abs(n); d = abs(d)
        if n < 0 or d < 0: n = abs(n); d = abs(d); res += '-'
        res += str(n//d)
        n = n%d
        res += '.'
        rem_ind = {}
        while n:
            n *= 10
            res += str(n//d)
            n = n%d
            if n in rem_ind:
                res = res[:rem_ind[n]] + '(' + res[rem_ind[n]:] + ')'
                break
            rem_ind[n] = len(res)
        if res[-1] == '.': 
            res = res[:-1]
        if res == "-0": return "0"
        return res 
```
