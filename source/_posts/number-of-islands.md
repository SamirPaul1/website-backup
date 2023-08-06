---
title: number of islands
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, number-of-islands solution
description: number of islands LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


<h2>200. Number of Islands</h2><h3>Medium</h3><hr><div><p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return <em>the number of islands</em>.</p>

<p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
<strong>Output:</strong> 1
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 300</code></li>
	<li><code>grid[i][j]</code> is <code>'0'</code> or <code>'1'</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    
    int n,m;
    bool vis[302][302];
    
    void dfs(vector<vector<char>>& grid, int i, int j){
        if(i>=n || i<0 || j>=m || j<0 || grid[i][j]!='1' || vis[i][j]==true)
            return;
         vis[i][j]=true;
         dfs(grid, i-1, j);
         dfs(grid, i, j-1);
         dfs(grid, i+1, j);
         dfs(grid, i, j+1);
    }
    
    
    
    int numIslands(vector<vector<char>>& grid) {
        n=grid.size();
        m=grid[0].size();
        memset(vis,false,sizeof(vis));
        int c=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(!vis[i][j] && grid[i][j]=='1'){
                    dfs(grid,i,j);
                    c++;
                }
            }
        }
        return c;
    }
};
```
