---
title: max continuous series of 1s my
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, max continuous series of 1s my solution
description: max continuous series of 1s my Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Max Continuous Series Of 1s My

https://www.interviewbit.com/problems/max-continuous-series-of-1s-my


## Solution

```cpp
vector<int> Solution::maxone(vector<int> &arr, int m) {

    int n = arr.size();
    int i = 0, j = 0;
    int ofs = 0, w = 0;
    int zeros = 0;

    while (j < n) {
        if (zeros <= m) {
            if (arr[j] == 0)
                zeros++;
            j++;
        }
        if (zeros > m) {
            if (arr[i] == 0)
                zeros--;
            i++;
        }
        if (j - i > w) {
            w = j - i;
            ofs = i;
        }
    }

    vector<int> best(w);
    iota(best.begin(), best.end(), ofs);

    return best;
}
```