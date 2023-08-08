---
title: 628 maximum product of three numbers
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 628-maximum-product-of-three-numbers solution
description: 628 maximum product of three numbers LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/maximum-product-of-three-numbers/">628. Maximum Product of Three Numbers</a></h2><h3>Easy</h3><hr><div><p>Given an integer array <code>nums</code>, <em>find three numbers whose product is maximum and return the maximum product</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 6
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 24
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [-1,-2,-3]
<strong>Output:</strong> -6
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;=&nbsp;10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
</ul>
</div>

---




```python
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        mini = [2**31] * 2
        maxi = [-2**31] * 3
        
        for num in nums:
            if num < mini[1]:
                mini[1] = num
                mini.sort()
            if num > maxi[0]:
                maxi[0] = num
                maxi.sort()
        
        min1, min2 = mini
        max1, max2, max3 = maxi
        return max(min1*min2*max3, max1*max2*max3)
```
