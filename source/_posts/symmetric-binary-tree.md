---
title: symmetric binary tree
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, symmetric binary tree solution
description: symmetric binary tree Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Symmetric Binary Tree

https://www.interviewbit.com/problems/symmetric-binary-tree


## Solution

```cpp
bool symmetric(TreeNode* a, TreeNode* b) {
    if (!a || !b)
        return a == b;
    if (a->val != b->val)
        return false;
    return symmetric(a->left, b->right) && symmetric(a->right, b->left);
}

int Solution::isSymmetric(TreeNode* A) {
    return !A || symmetric(A->left, A->right);
}

```