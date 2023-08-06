---
title: check if binary string has at most one segment of ones
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, check-if-binary-string-has-at-most-one-segment-of-ones solution
description: check if binary string has at most one segment of ones LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


[Discussion Post (created on 11/2/2021 at 19:17)](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/discuss/1104547/O(n)-or-C%2B%2B)  
<h2>1784. Check if Binary String Has at Most One Segment of Ones</h2><h3>Easy</h3><hr><div><p>Given a binary string <code>s</code> <strong>​​​​​without leading zeros</strong>, return <code>true</code>​​​ <em>if </em><code>s</code><em> contains <strong>at most one contiguous segment of ones</strong></em>. Otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "1001"
<strong>Output:</strong> false
<strong>Explanation: </strong>The ones do not form a contiguous segment.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "110"
<strong>Output:</strong> true</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s[i]</code>​​​​ is either <code>'0'</code> or <code>'1'</code>.</li>
	<li><code>s[0]</code> is&nbsp;<code>'1'</code>.</li>
</ul>
</div>

---




```cpp
class Solution {
public:
    bool checkOnesSegment(string s) {
        int n=s.size();
        int ans=0;
        if(n==1 || n==2)
            return true;
        int idx=-1;
        for(int i=0;i<n;i++){
            if(s[i]!='1'){
                idx=i;
                break;
            }
        }
        if(idx!=-1){
           for(int i=idx+1;i<n;i++){
            if(s[i]=='1')
                return false;
         } 
        }
        
        if(idx==-1 || idx==n-1)
            return true;
        return true;
    }
};
```
