---
title: 140 word break ii
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, 140-word-break-ii solution
description: 140 word break ii LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




<h2><a href="https://leetcode.com/problems/word-break-ii/">140. Word Break II</a></h2><h3>Hard</h3><hr><div><p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, add spaces in <code>s</code> to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in <strong>any order</strong>.</p>

<p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
<strong>Output:</strong> ["cats and dog","cat sand dog"]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
<strong>Output:</strong> ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
<strong>Explanation:</strong> Note that you are allowed to reuse a dictionary word.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 20</code></li>
	<li><code>1 &lt;= wordDict.length &lt;= 1000</code></li>
	<li><code>1 &lt;= wordDict[i].length &lt;= 10</code></li>
	<li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li>
	<li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li>
</ul>
</div>

---




```python
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        n = len(s)
        dic = {i : [] for i in range(n+1)}
        
        for i in range(n-1, -1, -1):
            for word in wordDict:
                if i+len(word) <= n and s[i:i+len(word)] == word:
                    dic[i].append(word)
        
        if len(dic[0]) == 0: return []
        
        def solve(j, tmp):
            if j >= n: 
                res.append(tmp)
            for i in range(len(dic[j])): 
                solve(j+len(dic[j][i]), tmp + " " + dic[j][i])
        
        res = []
        for i in range(len(dic[0])):
            j = len(dic[0][i])
            tmp = dic[0][i]
            solve(j, tmp)
        
        return res
```
