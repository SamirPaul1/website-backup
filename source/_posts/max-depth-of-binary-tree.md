---
title: max depth of binary tree
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, max depth of binary tree solution
description: max depth of binary tree Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Max Depth Of Binary Tree

https://www.interviewbit.com/problems/max-depth-of-binary-tree


## Solution

```cpp


/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
 
 int depth(TreeNode *root) {
    if (!root)
        return 0;
    return 1 + max(depth(root->left), depth(root->right));
 }
 
int Solution::maxDepth(TreeNode* A) {
    return depth(A);
}

```