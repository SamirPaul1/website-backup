---
title: remove nth element
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, remove nth element solution
description: remove nth element Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Remove Nth Element

https://www.interviewbit.com/problems/remove-nth-element


## Solution

```cpp
ListNode* Solution::removeNthFromEnd(ListNode* A, int B) {
    ListNode *head = A, *a, *b, *prev = 0;

    for (a = head; a && B; a = a->next) {
        B--;
    }

    for (b = head; a && b; a = a->next) {
        prev = b;
        b = b->next;
    }

    if (prev && b) {
        prev->next = b->next;
    } else {
        head = head->next;
    }

    return head;
}

```