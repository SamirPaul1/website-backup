---
title: single number iii
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, single-number-iii solution
description: single number iii LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




[Discussion Post (created on 16/0/2021 at 22:21)](https://leetcode.com/problems/single-number-iii/discuss/1019894/O(1)-space-or-Bit-Manipulation-or-C%2B%2B)  
<h2>260. Single Number III</h2><h3>Medium</h3><hr><div><p>Given an integer array <code>nums</code>, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in <strong>any order</strong>.</p>

<p><strong>Follow up:&nbsp;</strong>Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,1,3,2,5]
<strong>Output:</strong> [3,5]
<strong>Explanation: </strong> [5, 3] is also a valid answer.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [-1,0]
<strong>Output:</strong> [-1,0]
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> [1,0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li>Each integer in <code>nums</code> will appear twice, only two integers will appear once.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        int n=nums.size();
        long long xorr=0;
        for(auto i: nums)
            xorr^=i;
        vector<int> ans(2);
        xorr &= -xorr;
        int p=0,q=0;
        for(auto i: nums){
            if(i&xorr)
                p^=i;
            else
                q^=i;
        }
        ans[0]=p;
        ans[1]=q;
        return ans;
    }
};
```
