---
title: excel column number
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, excel column number solution
description: excel column number Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Excel Column Number

https://www.interviewbit.com/problems/excel-column-number


## Solution

```cpp
int Solution::titleToNumber(string A) {

    int x = 0, p = 1;
    for (int i=A.length()-1; i>=0; i--) {
        x += int(A[i]-'A'+1) * p;
        p *= 26;
    }

    return x;
}

```