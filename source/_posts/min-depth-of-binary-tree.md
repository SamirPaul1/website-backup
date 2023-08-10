---
title: min depth of binary tree
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, min depth of binary tree solution
description: min depth of binary tree Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Min Depth Of Binary Tree

https://www.interviewbit.com/problems/min-depth-of-binary-tree

```cpp
/*
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x): val(x), left(NULL), right(NULL) {}
 * };
 */

// editorial

int Solution::minDepth(TreeNode *root) {
    if (!root) return 0;
    if (!root->left && !root->right) return 1;
    if (!root->left) return 1 + minDepth(root->right);
    if (!root->right) return 1 + minDepth(root->left);
    return 1 + min(minDepth(root->left), minDepth(root->right));
}



// mine

int depth(TreeNode *root) {
    if (!root)
        return INT_MAX;
    if (!root->left && !root->right)
        return 1;
    return 1 + min(depth(root->left), depth(root->right));
}
 
int Solution::minDepth(TreeNode* A) {
    if (!A)
        return 0;
    else if (!A->left && !A->right)
        return 1;
    return depth(A);
}
```
