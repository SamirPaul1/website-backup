---
title: first missing positive
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, first-missing-positive solution
description: first missing positive LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




[Discussion Post (created on 15/0/2021 at 1:39)](https://leetcode.com/problems/first-missing-positive/discuss/1017007/C%2B%2B-or-By-Swapping)  
<h2>41. First Missing Positive</h2><h3>Hard</h3><hr><div><p>Given an unsorted integer array <code>nums</code>, find the smallest missing&nbsp;positive integer.</p>

<p><strong>Follow up:</strong>&nbsp;Could you implement an&nbsp;algorithm that runs in <code>O(n)</code> time and uses constant extra space.?</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,0]
<strong>Output:</strong> 3
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,4,-1,1]
<strong>Output:</strong> 2
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [7,8,9,11,12]
<strong>Output:</strong> 1
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 300</code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n=nums.size();
        int i=0;
        while(i<n){
            if(nums[i]<=0 || nums[i]>n)
                i++;
            else{
                int v=nums[i]-1;
                if(nums[i]!=i+1 && nums[v]!=v+1)
                {
                    swap(nums[i], nums[v]);
                }
                else
                    i++;
            }
        }
        for(int i=0;i<n;i++){
            if(nums[i]!=i+1)
                return i+1;
        }
        return n+1;
    }
};
```
