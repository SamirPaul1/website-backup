---
title: 0224 basic calculator
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0224-basic-calculator solution
description: 0224 basic calculator LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


<h2><a href="https://leetcode.com/problems/basic-calculator/">224. Basic Calculator</a></h2><h3>Hard</h3><hr><div><p>Given a string <code>s</code> representing a valid expression, implement a basic calculator to evaluate it, and return <em>the result of the evaluation</em>.</p>

<p><strong>Note:</strong> You are <strong>not</strong> allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code>eval()</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "1 + 1"
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = " 2-1 + 2 "
<strong>Output:</strong> 3
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "(1+(4+5+2)-3)+(6+8)"
<strong>Output:</strong> 23
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 3 * 10<sup>5</sup></code></li>
	<li><code>s</code> consists of digits, <code>'+'</code>, <code>'-'</code>, <code>'('</code>, <code>')'</code>, and <code>' '</code>.</li>
	<li><code>s</code> represents a valid expression.</li>
	<li><code>'+'</code> is <strong>not</strong> used as a unary operation (i.e., <code>"+1"</code> and <code>"+(2 + 3)"</code> is invalid).</li>
	<li><code>'-'</code> could be used as a unary operation (i.e., <code>"-1"</code> and <code>"-(2 + 3)"</code> is valid).</li>
	<li>There will be no two consecutive operators in the input.</li>
	<li>Every number and running calculation will fit in a signed 32-bit integer.</li>
</ul>
</div>

---




```python
class Solution:
    def calculate(self, s: str) -> int:
        stack = []; sign = 1
        i = 0
        while i < len(s): 
            if s[i] == ' ': 
                i += 1
                continue
            elif s[i] == '+': sign = 1
            elif s[i] == '-': sign = -1
            elif s[i] == '(': 
                stack.append(sign)
                stack.append(s[i])
                sign = 1
            elif s[i].isdigit(): 
                num = 0; j = i
                while j < len(s) and s[j].isdigit():
                    num = num * 10 + int(s[j])
                    j += 1
                i = j if i < j else j+1
                stack.append(sign * num)
                i -= 1
            else: # ch == ')'
                tmp = 0
                while stack:
                    top = stack.pop()
                    if top == '(': break
                    tmp += top
                sign = stack.pop()
                stack.append(sign * tmp)
            i += 1
            # print(stack)
        return sum(stack)
```
