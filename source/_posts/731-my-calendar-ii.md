---
title: 731 my calendar ii
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 731-my-calendar-ii solution
description: 731 my calendar ii LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---






---




```python
class MyCalendarTwo:

    def __init__(self):
        self.calendar = []
        self.overlaps = []

    def book(self, start: int, end: int) -> bool:
        for s, e in self.overlaps:
            if s < end and start < e: return False
        
        for s, e in self.calendar:
            if s < end and start < e:
                self.overlaps.append([max(s, start), min(e, end)])
        
        self.calendar.append([start, end])
        return True


# Time: O(N)
# Space: O(N)
```
