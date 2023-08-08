---
title: perfect squares
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, perfect-squares solution
description: perfect squares LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2>279. Perfect Squares</h2><h3>Medium</h3><hr><div><p>Given an integer <code>n</code>, return <em>the least number of perfect square numbers that sum to</em> <code>n</code>.</p>

<p>A <strong>perfect square</strong> is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, <code>1</code>, <code>4</code>, <code>9</code>, and <code>16</code> are perfect squares while <code>3</code> and <code>11</code> are not.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 12
<strong>Output:</strong> 3
<strong>Explanation:</strong> 12 = 4 + 4 + 4.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 13
<strong>Output:</strong> 2
<strong>Explanation:</strong> 13 = 4 + 9.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int numSquares(int n) {
        int q=sqrt(n);
        int dp[n+1];
        dp[0]=0;
        dp[1]=1;
       // for(int i=0;i<=q;i++)
         //   dp[i*i]=1;
        for(int i=1;i<=n;i++){
            int mini=INT_MAX;
            for(int j=1;j*j<=i;j++){
                mini=min(mini, dp[i-j*j]);
            }
            dp[i]=mini+1;
        }
        return dp[n];
    }
};
```
