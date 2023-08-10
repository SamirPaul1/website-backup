---
title: greatest common divisor
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, greatest common divisor solution
description: greatest common divisor Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Greatest Common Divisor

https://www.interviewbit.com/problems/greatest-common-divisor


## Solution

```cpp
int Solution::gcd(int A, int B) {
    if (B==0)
        return A;
    return gcd(B, A % B);
}

/*
int Solution::gcd(int A, int B) {
    if(A<B) swap(A,B);

    while(B) {
        int tmp = B;
        B = A%B;
        A = tmp;
    }

    return A;
}
*/
```