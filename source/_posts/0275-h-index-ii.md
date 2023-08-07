---
title: 0275 h index ii
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 0275-h-index-ii solution
description: 0275 h index ii LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




https://leetcode.com/problems/h-index-ii/

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations is sorted in an ascending order, return compute the researcher's h-index.

According to the definition of h-index on Wikipedia: A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no more than h citations each.

If there are several possible values for h, the maximum one is taken as the h-index.

You must write an algorithm that runs in logarithmic time.

Example 1:
```
Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
```


---




```python
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        l = 0; r = len(citations)-1; n = len(citations)
        while l <= r:
            mid = l + (r - l) // 2
            if citations[mid] == n - mid: return citations[mid]
            elif citations[mid] > n-mid: 
                r = mid - 1
            else:
                l = mid + 1
        
        return n - l
```
