---
title: 0894 all possible full binary trees
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0894-all-possible-full-binary-trees solution
description: 0894 all possible full binary trees LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/all-possible-full-binary-trees/">894. All Possible Full Binary Trees</a></h2><h3>Medium</h3><hr><div><p>Given an integer <code>n</code>, return <em>a list of all possible <strong>full binary trees</strong> with</em> <code>n</code> <em>nodes</em>. Each node of each tree in the answer must have <code>Node.val == 0</code>.</p>

<p>Each element of the answer is the root node of one possible tree. You may return the final list of trees in <strong>any order</strong>.</p>

<p>A <strong>full binary tree</strong> is a binary tree where each node has exactly <code>0</code> or <code>2</code> children.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/22/fivetrees.png" style="width: 700px; height: 400px;">
<pre><strong>Input:</strong> n = 7
<strong>Output:</strong> [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> [[0,0,0]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 20</code></li>
</ul>
</div>

---




```python
# https://leetcode.com/problems/all-possible-full-binary-trees/
# https://youtu.be/nZtrZPTTCAo
'''
Eg. N == 9

left sub-tree can have 1 node and right sub-tree can have 7 nodes
left sub-tree can have 3 node and right sub-tree can have 5 node
left sub-tree can have 5 node and right sub-tree can have 3 node
left sub-tree can have 7 node and right sub-tree can have 1 node
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        dp = {0:[], 1:[TreeNode(0)]}
        def backtrack(n):
            if n in dp:
                return dp[n]
            res = []
            for l in range(1, n):
                r = n - l - 1
                leftTrees = backtrack(l)
                rightTrees = backtrack(r)
                for t1 in leftTrees:
                    for t2 in rightTrees:
                        res.append(TreeNode(0, t1, t2))
            
            dp[n] = res
            return res
        
        return backtrack(n)
```
