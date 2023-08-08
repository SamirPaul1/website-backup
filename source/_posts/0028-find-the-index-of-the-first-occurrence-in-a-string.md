---
title: 0028 find the index of the first occurrence in a string
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0028-find-the-index-of-the-first-occurrence-in-a-string solution
description: 0028 find the index of the first occurrence in a string LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/">28. Find the Index of the First Occurrence in a String</a></h2><h3>Medium</h3><hr><div><p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> haystack = "sadbutsad", needle = "sad"
<strong>Output:</strong> 0
<strong>Explanation:</strong> "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> haystack = "leetcode", needle = "leeto"
<strong>Output:</strong> -1
<strong>Explanation:</strong> "leeto" did not occur in "leetcode", so we return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code></li>
	<li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li>
</ul>
</div>

---




```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        h = len(haystack); n = len(needle)
        for i in range(h):
            if haystack[i] == needle[0] and haystack[i:i+n] == needle: return i
        
        return -1
```
