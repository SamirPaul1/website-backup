---
title: 0646 maximum length of pair chain
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0646-maximum-length-of-pair-chain solution
description: 0646 maximum length of pair chain LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


<h2><a href="https://leetcode.com/problems/maximum-length-of-pair-chain/">646. Maximum Length of Pair Chain</a></h2><h3>Medium</h3><hr><div><p>You are given an array of <code>n</code> pairs <code>pairs</code> where <code>pairs[i] = [left<sub>i</sub>, right<sub>i</sub>]</code> and <code>left<sub>i</sub> &lt; right<sub>i</sub></code>.</p>

<p>A pair <code>p2 = [c, d]</code> <strong>follows</strong> a pair <code>p1 = [a, b]</code> if <code>b &lt; c</code>. A <strong>chain</strong> of pairs can be formed in this fashion.</p>

<p>Return <em>the length longest chain which can be formed</em>.</p>

<p>You do not need to use up all the given intervals. You can select pairs in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> pairs = [[1,2],[2,3],[3,4]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The longest chain is [1,2] -&gt; [3,4].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> pairs = [[1,2],[7,8],[4,5]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The longest chain is [1,2] -&gt; [4,5] -&gt; [7,8].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == pairs.length</code></li>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
	<li><code>-1000 &lt;= left<sub>i</sub> &lt; right<sub>i</sub> &lt;= 1000</code></li>
</ul>
</div>

---




```python
class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort()
        left = pairs[0]
        res = 1
        for i in range(1, len(pairs)):
            if left[1] < pairs[i][0]:
                left = pairs[i]
                res += 1
            elif left[1] > pairs[i][1]:
                left = pairs[i]
        
        return res
```
