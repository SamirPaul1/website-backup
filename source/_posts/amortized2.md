---
title: amortized2
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, amortized2 solution
description: amortized2 Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

---
title: amortized2
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, amortized2 solution
description: amortized2 Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# AMORTIZED2

https://www.interviewbit.com/problems/amortized2/

What is the time complexity of the following code :

```
int j = 0;
for(i = 0; i < n; ++i) {
    while(j < n && arr[i] < arr[j]) {
        j++;
    }
}
```

## Solution
```
O(n)
```
