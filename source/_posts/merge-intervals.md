---
title: merge intervals
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, merge-intervals solution
description: merge intervals LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2>56. Merge Intervals</h2><h3>Medium</h3><hr><div><p>Given an array&nbsp;of <code>intervals</code>&nbsp;where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return <em>an array of the non-overlapping intervals that cover all the intervals in the input</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> intervals = [[1,3],[2,6],[8,10],[15,18]]
<strong>Output:</strong> [[1,6],[8,10],[15,18]]
<strong>Explanation:</strong> Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> intervals = [[1,4],[4,5]]
<strong>Output:</strong> [[1,5]]
<strong>Explanation:</strong> Intervals [1,4] and [4,5] are considered overlapping.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>
	<li><code>intervals[i].length == 2</code></li>
	<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& a) {
        int n=a.size();
        if(n==1)
            return a;
        vector<vector<int>> ans;
        sort(a.begin(), a.end());
        ans.push_back(a[0]);
        int st=a[0][0];
        int end=a[0][1];
        for(int i=1;i<n;i++){
            if(a[i][0]<=end){
                if(a[i][1]>end){
                    ans.pop_back();
                    end=a[i][1];
                    ans.push_back({st, end});
                }
            }
            else{
               st=a[i][0];
               ans.push_back(a[i]); 
            }
                 
            end=max(a[i][1], end);
        }
        return ans;
    }
};
```
