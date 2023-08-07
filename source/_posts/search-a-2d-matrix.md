---
title: search a 2d matrix
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, search-a-2d-matrix solution
description: search a 2d matrix LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2>74. Search a 2D Matrix</h2><h3>Medium</h3><hr><div><p>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:</p>

<ul>
	<li>Integers in each row are sorted from left to right.</li>
	<li>The first integer of each row is greater than the last integer of the previous row.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;">
<pre><strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg" style="width: 322px; height: 242px;">
<pre><strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li><code>-10<sup>4</sup> &lt;= matrix[i][j], target &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int n=matrix.size();
        int m=matrix[0].size();
        vector<int> v;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                v.push_back(matrix[i][j]);
            }
        }
        int l=0, r=n*m-1;
        while(l<=r){
            int mid=l+(r-l)/2;
            if(v[mid]<target)
                l=mid+1;
            else if(v[mid]>target)
                r=mid-1;
            else 
                return true;
        }
        return false;
    }
};
```
