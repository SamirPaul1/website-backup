---
title: trapping rain water
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, trapping-rain-water solution
description: trapping rain water LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2>42. Trapping Rain Water</h2><h3>Hard</h3><hr><div><p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png" style="width: 412px; height: 161px;">
<pre><strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> height = [4,2,0,3,2,5]
<strong>Output:</strong> 9
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == height.length</code></li>
	<li><code>0 &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int trap(vector<int>& height) {
        int n=height.size();
        //int l=0, r=n-1;
        int ans=0;
        if(n==0)
            return 0;
        int l[n],r[n];
        l[0]=height[0];
        r[n-1]=height[n-1];
        for(int i=1;i<n;i++)
            l[i]=max(height[i], l[i-1]);
        for(int i=n-2;i>=0;i--)
            r[i]=max(height[i], r[i+1]);
        for(int i=1;i<n-1;i++)
            ans+=min(l[i],r[i])-height[i];
        return ans;
    }
};
```
