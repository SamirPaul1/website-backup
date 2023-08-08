---
title: 227 basic calculator ii
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 227-basic-calculator-ii solution
description: 227 basic calculator ii LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/basic-calculator-ii/">227. Basic Calculator II</a></h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code> which represents an expression, <em>evaluate this expression and return its value</em>.&nbsp;</p>

<p>The integer division should truncate toward zero.</p>

<p>You may assume that the given expression is always valid. All intermediate results will be in the range of <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>.</p>

<p><strong>Note:</strong> You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code>eval()</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "3+2*2"
<strong>Output:</strong> 7
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = " 3/2 "
<strong>Output:</strong> 1
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = " 3+5 / 2 "
<strong>Output:</strong> 5
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 3 * 10<sup>5</sup></code></li>
	<li><code>s</code> consists of integers and operators <code>('+', '-', '*', '/')</code> separated by some number of spaces.</li>
	<li><code>s</code> represents <strong>a valid expression</strong>.</li>
	<li>All the integers in the expression are non-negative integers in the range <code>[0, 2<sup>31</sup> - 1]</code>.</li>
	<li>The answer is <strong>guaranteed</strong> to fit in a <strong>32-bit integer</strong>.</li>
</ul>
</div>

---




```python
class Solution:
    def calculate(self, s: str) -> int:
        n = len(s)
        sign = '+'
        stack = []
        
        i = 0
        while i < n:
            if s[i].isdigit():
                num = s[i]
                i += 1
                while i < n and s[i].isdigit():
                    num += s[i]
                    i += 1
                i -= 1
                num = int(num)
                
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                elif sign == '*':
                    newNum = stack.pop() * num
                    stack.append(newNum)
                elif sign == '/':
                    newNum = math.trunc(stack.pop() / num)
                    # or can use newNum = int(stack.pop() / num)
                    # for negative numbers // will not work
                    stack.append(newNum)
                
            elif s[i] != ' ':
                sign = s[i]
            i += 1
        
        return sum(stack)
```
