---
title: jump game iii
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, jump-game-iii solution
description: jump game iii LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2>1306. Jump Game III</h2><h3>Medium</h3><hr><div><p>Given an array of non-negative integers <code>arr</code>, you are initially positioned at <code>start</code>&nbsp;index of the array. When you are at index <code>i</code>, you can jump&nbsp;to <code>i + arr[i]</code> or <code>i - arr[i]</code>, check if you can reach to <strong>any</strong> index with value 0.</p>

<p>Notice that you can not jump outside of the array at any time.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [4,2,3,0,3,1,2], start = 5
<strong>Output:</strong> true
<strong>Explanation:</strong> 
All possible ways to reach at index 3 with value 0 are: 
index 5 -&gt; index 4 -&gt; index 1 -&gt; index 3 
index 5 -&gt; index 6 -&gt; index 4 -&gt; index 1 -&gt; index 3 
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [4,2,3,0,3,1,2], start = 0
<strong>Output:</strong> true 
<strong>Explanation: 
</strong>One possible way to reach at index 3 with value 0 is: 
index 0 -&gt; index 4 -&gt; index 1 -&gt; index 3
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [3,0,2,1,2], start = 2
<strong>Output:</strong> false
<strong>Explanation: </strong>There is no way to reach at index 1 with value 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= arr[i] &lt;&nbsp;arr.length</code></li>
	<li><code>0 &lt;= start &lt; arr.length</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<int> adj[50005];
    
    bool canReach(vector<int>& arr, int start) {
        int n=arr.size();
        if(arr[start]==0)
            return true;
        bool vis[n];
        for(int i=0;i<n;i++)
        {
            adj[i].push_back(i+arr[i]);
            adj[i].push_back(i-arr[i]);
            vis[i]=false;
        }
        queue<int> q;
        q.push(start);
        while(!q.empty()){
            int curr=q.front();
            q.pop();
            if(arr[curr]==0)
                return true;
            if(curr+arr[curr]<n && !vis[curr+arr[curr]]){
                q.push(curr+arr[curr]);
                vis[curr+arr[curr]]=true;
            }
                
            if(curr-arr[curr]>=0 && !vis[curr-arr[curr]]){
                q.push(curr-arr[curr]);
                vis[curr-arr[curr]]=true;
            }
        }
        return false;
    }
};
```
