---
title: boats to save people
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, boats-to-save-people solution
description: boats to save people LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


[Discussion Post (created on 3/1/2021 at 15:28)](https://leetcode.com/problems/boats-to-save-people/discuss/1047775/Two-Pointers-or-C%2B%2B)  
<h2>881. Boats to Save People</h2><h3>Medium</h3><hr><div><p>You are given an array <code>people</code> where <code>people[i]</code> is the weight of the <code>i<sup>th</sup></code> person, and an <strong>infinite number of boats</strong> where each boat can carry a maximum weight of <code>limit</code>. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most <code>limit</code>.</p>

<p>Return <em>the minimum number of boats to carry every given person</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> people = [1,2], limit = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> 1 boat (1, 2)
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> people = [3,2,2,1], limit = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> 3 boats (1, 2), (2) and (3)
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> people = [3,5,3,4], limit = 5
<strong>Output:</strong> 4
<strong>Explanation:</strong> 4 boats (3), (3), (4), (5)
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= people.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= people[i] &lt;= limit &lt;= 3 * 10<sup>4</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        int n=people.size();
        sort(people.begin(),people.end());
        int ans=0;
        int i=0,j=n-1;
        while(i<=j){
            if(people[i]+people[j]<=limit){
               ans++;
                i++;
                j--;
            }
            else if(people[i]+people[j]>limit){
                ans++;
                j--;
            }
        }
        return ans;
    }
};
```
