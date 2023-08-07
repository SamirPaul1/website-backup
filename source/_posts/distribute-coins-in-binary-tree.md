---
title: distribute coins in binary tree
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, distribute-coins-in-binary-tree solution
description: distribute coins in binary tree LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




[Discussion Post (created on 11/1/2021 at 12:29)](https://leetcode.com/problems/distribute-coins-in-binary-tree/discuss/1060344/DFS-or-C%2B%2B)  
<h2>979. Distribute Coins in Binary Tree</h2><h3>Medium</h3><hr><div><p>You are given the <code>root</code> of a binary tree with <code>n</code> nodes where each <code>node</code> in the tree has <code>node.val</code> coins and there are <code>n</code> coins total.</p>

<p>In one move, we may choose two adjacent nodes and move one coin from one node to another. (A move may be from parent to child, or from child to parent.)</p>

<p>Return the number of moves required to make every node have exactly one coin.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/18/tree1.png" style="width: 150px; height: 142px;">
<pre><strong>Input:</strong> root = [3,0,0]
<strong>Output:</strong> 2
<strong>Explanation: </strong>From the root of the tree, we move one coin to its left child, and one coin to its right child.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/18/tree2.png" style="width: 150px; height: 142px;">
<pre><strong>Input:</strong> root = [0,3,0]
<strong>Output:</strong> 3
<strong>Explanation: </strong>From the left child of the root, we move two coins to the root [taking two moves].  Then, we move one coin from the root of the tree to the right child.
</pre>

<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/18/tree3.png" style="width: 150px; height: 142px;">
<pre><strong>Input:</strong> root = [1,0,2]
<strong>Output:</strong> 2
</pre>

<p><strong>Example 4:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/18/tree4.png" style="width: 155px; height: 156px;">
<pre><strong>Input:</strong> root = [1,0,0,null,3]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is <code>n</code>.</li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>0 &lt;= Node.val &lt;= n</code></li>
	<li>The sum of <code>Node.val</code> is <code>n</code>.</li>
</ul>
</div>

---




```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int ans;
    
    int solve(TreeNode* root){
        if(root==NULL)
            return 0;
        int l=solve(root->left);
        int r=solve(root->right);
        ans+=abs(l)+abs(r);
        return root->val+l+r-1;
    }
    
    int distributeCoins(TreeNode* root) {
        ans=0;
        if(root==NULL)
            return ans;
        solve(root);
        return ans;
    }
};
```
