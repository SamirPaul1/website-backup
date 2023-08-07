---
title: 3 longest substring without repeating characters
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 3-longest-substring-without-repeating-characters solution
description: 3 longest substring without repeating characters LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">3. Longest Substring Without Repeating Characters</a></h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "bbbbb"
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is "b", with the length of 1.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "pwwkew"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>
</div>

---




```python
# https://youtu.be/qtVh-XEpsJo
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        track = set()
        l = 0
        res = 0
        
        for r in range(len(s)):
            while s[r] in track:
                track.remove(s[l])
                l += 1                
            res = max(res, r-l+1)
            track.add(s[r])
        
        return res

# Time Complexity: O(N)   
# Space Complexity: O(len(set(s)))  # number of unique charecters
```
