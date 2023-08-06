---
title: climbing stairs
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, climbing-stairs solution
description: climbing stairs LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


<h2>70. Climbing Stairs</h2><h3>Easy</h3><hr><div><p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 45</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int climbStairs(int n) {
        int a[n+1];
        a[0]=0;
        a[1]=1;
        if(n==1)
            return 1;
        a[2]=2;
        if(n==2)
            return 2;
        for(int i=3;i<=n;i++)
            a[i]=a[i-1]+a[i-2];
        return a[n];
    }
};
```
