---
title: remove duplicates from sorted list ii
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, remove duplicates from sorted list ii solution
description: remove duplicates from sorted list ii Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Remove Duplicates From Sorted List II

https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list-ii


## Solution

```cpp
ListNode *Solution::deleteDuplicates(ListNode *A) {
    ListNode *head = A, *curr = A, *prev = 0;

    ListNode tmp(0);
    tmp.next = head;
    prev = &tmp;

    while (curr) {
        while (curr->next && curr->val == curr->next->val)
            curr = curr->next;

        if (prev->next == curr)
            prev = prev->next;
        else
            prev->next = curr->next;

        curr = curr->next;
    }

    return tmp.next;
}
```