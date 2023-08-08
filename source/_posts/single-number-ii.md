---
title: single number ii
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, single-number-ii solution
description: single number ii LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




[Discussion Post (created on 13/2/2021 at 14:21)](https://leetcode.com/problems/single-number-ii/submissions/)  
[Discussion Post (created on 16/0/2021 at 22:3)](https://leetcode.com/problems/single-number-ii/discuss/1019874/Simple-C%2B%2B-Solution)  
<h2>137. Single Number II</h2><h3>Medium</h3><hr><div><p>Given an integer array <code>nums</code> where&nbsp;every element appears <strong>three times</strong> except for one, which appears <strong>exactly once</strong>. <em>Find the single element and return it</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,3,2]
<strong>Output:</strong> 3
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,0,1,0,1,99]
<strong>Output:</strong> 99
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li>Each element in <code>nums</code> appears exactly <strong>three times</strong> except for one element which appears <strong>once</strong>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong>&nbsp;Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?</p>
</div>

---




```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int n=nums.size();
        vector<int> v(32);
        int ans=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<32;j++){
                  if((1<<j) & nums[i])
                      v[j]++;
              }  
        }
        for(int j=0;j<32;j++){
             if(v[j]%3==1)
                 ans+=(1<<j);
        }
        return ans;
    }
};
```
