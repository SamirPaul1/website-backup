---
title: number of longest increasing subsequence
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, number-of-longest-increasing-subsequence solution
description: number of longest increasing subsequence LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




[Discussion Post (created on 10/0/2021 at 19:20)](https://leetcode.com/problems/number-of-longest-increasing-subsequence/discuss/1010535/2D-DP-or-C%2B%2B)  
<h2>673. Number of Longest Increasing Subsequence</h2><h3>Medium</h3><hr><div><p>Given an integer array&nbsp;<code>nums</code>, return <em>the number of longest increasing subsequences.</em></p>

<p><strong>Notice</strong> that the sequence has to be <strong>strictly</strong> increasing.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,3,5,4,7]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [2,2,2,2,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2000</code></li>
	<li><code>-10<sup>6</sup> &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int findNumberOfLIS(vector<int>& nums) {
        int n=nums.size();
        if(n==1)
            return 1;
        int dp[n];
        int count[n];
        for(int i=0;i<n;i++)
        {
            dp[i]=1;
            count[i]=1;
        }
        int ans=0;
        for(int i=1;i<n;i++){
            for(int j=0;j<=i;j++){
                if(dp[j]+1>dp[i] && nums[j]<nums[i]){
                    dp[i]=dp[j]+1;
                    count[i]=count[j];
                }
                else if(dp[j]+1==dp[i] && nums[j]<nums[i])
                    count[i]+=count[j];
            }
        }
        for(int i=0;i<n;i++)
            ans=max(ans, dp[i]);
        int c=0;
        for(int i=0;i<n;i++){
            if(ans==dp[i])
                c+=count[i];
        }
        return c;
    }
};
```
