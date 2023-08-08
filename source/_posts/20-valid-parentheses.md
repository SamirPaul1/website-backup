---
title: 20 valid parentheses
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 20-valid-parentheses solution
description: 20 valid parentheses LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/valid-parentheses/">20. Valid Parentheses</a></h2><h3>Easy</h3><hr><div><p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
</ol>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "()"
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "()[]{}"
<strong>Output:</strong> true
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "(]"
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li>
</ul>
</div>

---




```python
class Solution:
    def isValid(self, s: str) -> bool:
        openP = {"(", "{", "["}
        closeP = {")", "}", "]"}
        
        stack = []
        
        for i in s:
            if i in openP or not stack:
                stack.append(i)
            else:
                if ((i == ")" and stack[-1] == "(") or 
                    (i == "}" and stack[-1] == "{") or 
                    (i == "]" and stack[-1] == "[")):
                        stack.pop()
                else:
                    stack.append(i)
        
        return len(stack) == 0
                
```
