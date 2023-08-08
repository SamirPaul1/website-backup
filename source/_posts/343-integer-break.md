---
title: 343 integer break
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 343-integer-break solution
description: 343 integer break LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/integer-break/">343. Integer Break</a></h2><h3>Medium</h3><hr><div><p>Given an integer <code>n</code>, break it into the sum of <code>k</code> <strong>positive integers</strong>, where <code>k &gt;= 2</code>, and maximize the product of those integers.</p>

<p>Return <em>the maximum product you can get</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 1
<strong>Explanation:</strong> 2 = 1 + 1, 1 × 1 = 1.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 10
<strong>Output:</strong> 36
<strong>Explanation:</strong> 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 58</code></li>
</ul>
</div>

---




```python
class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [0, 1]
        
        for m in range(2, n+1):
            r = m-1
            l = 1
            val = 0
            while r >= l:
                val = max(val, max(r, dp[r])*max(l, dp[l]))
                r -= 1
                l += 1
            dp.append(val)
        
        return dp[-1]
```
