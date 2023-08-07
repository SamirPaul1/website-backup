---
title: find n unique integers sum up to zero
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, find-n-unique-integers-sum-up-to-zero solution
description: find n unique integers sum up to zero LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2>1304. Find N Unique Integers Sum up to Zero</h2><h3>Easy</h3><hr><div><p>Given an integer <code>n</code>, return <strong>any</strong> array containing <code>n</code> <strong>unique</strong> integers such that they add up to <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> [-7,-1,1,3,4]
<strong>Explanation:</strong> These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> [-1,0,1]
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> sumZero(int n) {
        vector<int> ans;
        if(n%2==1)
            ans.push_back(0);
        for(int i=1;i<=n/2;i++)
            ans.push_back(i);
        for(int i=1;i<=n/2;i++)
            ans.push_back(-i);
        return ans;
    }
};
```
