---
title: identical binary trees
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, identical binary trees solution
description: identical binary trees Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Identical Binary Tree

https://www.interviewbit.com/problems/identical-binary-tree


## Solution

```cpp
int Solution::isSameTree(TreeNode* A, TreeNode* B) {
    if (!A && !B)
        return true;
    if (!A || !B)
        return false;
    if (A->val != B->val)
        return false;
    return isSameTree(A->left, B->left) && isSameTree(A->right, B->right);
}

```