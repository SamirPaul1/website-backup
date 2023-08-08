---
title: 664 strange printer
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 664-strange-printer solution
description: 664 strange printer LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/strange-printer">Strange Printer</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>There is a strange printer with the following two special properties:</p>

<ul>
	<li>The printer can only print a sequence of <strong>the same character</strong> each time.</li>
	<li>At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.</li>
</ul>

<p>Given a string <code>s</code>, return <em>the minimum number of turns the printer needed to print it</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaabbb&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> Print &quot;aaa&quot; first and then print &quot;bbb&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aba&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> Print &quot;aaa&quot; first and then print &quot;b&quot; from the second place of the string, which will cover the existing character &#39;a&#39;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


---




```python
class Solution:
    def strangePrinter(self, s: str) -> int:
        N = len(s)
        @cache
        def calc(left, right): 
            if left >= right: 
                return 0
            best = calc(left + 1, right) + 1
            for index in range(left + 1, right + 1): 
                if s[left] == s[index]: 
                    best = min(best, calc(left, index - 1) + calc(index, right))
            return best
        return calc(0, N - 1) + 1
```
