---
title: 214 shortest palindrome
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 214-shortest-palindrome solution
description: 214 shortest palindrome LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


<h2><a href="https://leetcode.com/problems/shortest-palindrome/">214. Shortest Palindrome</a></h2><h3>Hard</h3><hr><div><p>You are given a string <code>s</code>. You can convert <code>s</code> to a palindrome by adding characters in front of it.</p>

<p>Return <em>the shortest palindrome you can find by performing this transformation</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aacecaaa"
<strong>Output:</strong> "aaacecaaa"
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abcd"
<strong>Output:</strong> "dcbabcd"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of lowercase English letters only.</li>
</ul>
</div>

---




```python
class Solution:
    def shortestPalindrome(self, s: str) -> str:
        m = len(s)-1
        for i in range(len(s)-1, -1, -1):
            if s[:i+1] == s[:i+1][::-1]:
                m = i
                break
        
        return s[m+1:][::-1] + s
```
