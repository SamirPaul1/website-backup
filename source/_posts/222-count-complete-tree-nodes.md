---
title: 222 count complete tree nodes
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 222-count-complete-tree-nodes solution
description: 222 count complete tree nodes LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/count-complete-tree-nodes/">222. Count Complete Tree Nodes</a></h2><h3>Medium</h3><hr><div><p>Given the <code>root</code> of a <strong>complete</strong> binary tree, return the number of the nodes in the tree.</p>

<p>According to <strong><a href="http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees" target="_blank">Wikipedia</a></strong>, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between <code>1</code> and <code>2<sup>h</sup></code> nodes inclusive at the last level <code>h</code>.</p>

<p>Design an algorithm that runs in less than&nbsp;<code data-stringify-type="code">O(n)</code>&nbsp;time complexity.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/14/complete.jpg" style="width: 372px; height: 302px;">
<pre><strong>Input:</strong> root = [1,2,3,4,5,6]
<strong>Output:</strong> 6
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> root = []
<strong>Output:</strong> 0
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> root = [1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 5 * 10<sup>4</sup>]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 5 * 10<sup>4</sup></code></li>
	<li>The tree is guaranteed to be <strong>complete</strong>.</li>
</ul>
</div>

---




```python
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        lh = self.leftHeight(root)
        rh = self.rightHeight(root)
        if lh == rh:
            return 2 ** lh - 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
    
    
    def leftHeight(self, root):
        height = 0
        while root:
            height += 1
            root = root.left
        return height
    
    def rightHeight(self, root):
        height = 0
        while root:
            height += 1
            root = root.right
        return height
```
