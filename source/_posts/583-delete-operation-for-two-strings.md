---
title: 583 delete operation for two strings
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 583-delete-operation-for-two-strings solution
description: 583 delete operation for two strings LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/delete-operation-for-two-strings/">583. Delete Operation for Two Strings</a></h2><h3>Medium</h3><hr><div><p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of <strong>steps</strong> required to make</em> <code>word1</code> <em>and</em> <code>word2</code> <em>the same</em>.</p>

<p>In one <strong>step</strong>, you can delete exactly one character in either string.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> word1 = "sea", word2 = "eat"
<strong>Output:</strong> 2
<strong>Explanation:</strong> You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> word1 = "leetcode", word2 = "etco"
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word1.length, word2.length &lt;= 500</code></li>
	<li><code>word1</code> and <code>word2</code> consist of only lowercase English letters.</li>
</ul>
</div>

---




```python
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        dp = [[0]*(len(word2)+1) for i in range(len(word1)+1)]
        
        for i in range(1, len(word1)+1):
            for j in range(1, len(word2)+1):
                if word1[i-1] == word2[j-1]:
                    dp[i][j] = 1 + dp[i-1][j-1]
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        
        return len(word1) + len(word2) - 2 * dp[-1][-1]
```
