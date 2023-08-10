---
title: amazing subarrays
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, amazing subarrays solution
description: amazing subarrays Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

---
title: amazing subarrays
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, amazing subarrays solution
description: amazing subarrays Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Amazing Subarrays

https://www.interviewbit.com/problems/amazing-subarrays



You are given a string S, and you have to find all the amazing substrings of S.

Amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

## Solution

```cpp

bool isVowel(char c) {
    //return (c=='a' || c=='e' || c=='i' || c=='o' || c=='u' || c=='A' || c=='E' || c=='I' || c=='O' || c=='U');
    return string("aeiouAEIOU").find(c)!=string::npos;
}

int Solution::solve(string A) {
    int sum = 0, n=A.size();
    for (int i = 0; i<n; i++) {
        if (isVowel(A[i]))
            sum += n-i;
    }
    return sum % 10003;
}
```