---
title: map sum pairs
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, map-sum-pairs solution
description: map sum pairs LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


<h2>677. Map Sum Pairs</h2><h3>Medium</h3><hr><div><p>Implement the <code>MapSum</code> class:</p>

<ul>
	<li><code>MapSum()</code> Initializes the&nbsp;<code>MapSum</code> object.</li>
	<li><code>void insert(String key, int val)</code> Inserts the <code>key-val</code> pair into the map. If the <code>key</code> already existed, the original <code>key-value</code> pair will be overridden to the new one.</li>
	<li><code>int sum(string prefix)</code> Returns&nbsp;the sum of all the pairs' value whose <code>key</code> starts with the <code>prefix</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input</strong>
["MapSum", "insert", "sum", "insert", "sum"]
[[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
<strong>Output</strong>
[null, null, 3, null, 5]

<strong>Explanation</strong>
MapSum mapSum = new MapSum();
mapSum.insert("apple", 3);  
mapSum.sum("ap");           // return 3 (<u>ap</u>ple = 3)
mapSum.insert("app", 2);    
mapSum.sum("ap");           // return 5 (<u>ap</u>ple + <u>ap</u>p = 3 + 2 = 5)
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= key.length, prefix.length &lt;= 50</code></li>
	<li><code>key</code> and <code>prefix</code> consist of only lowercase English letters.</li>
	<li><code>1 &lt;= val &lt;= 1000</code></li>
	<li>At most <code>50</code> calls will be made to <code>insert</code> and <code>sum</code>.</li>
</ul>
</div>

---




```cpp
struct TrieNode{
        TrieNode* child[26];
        int sum;
        TrieNode(){
            sum=0;
            for(int i=0;i<26;i++)
                child[i]=NULL;
        }
    };

class MapSum {
public:
    /** Initialize your data structure here. */
    
    unordered_map<string, int> m;
    TrieNode* root;
    
    MapSum() {
        root=new TrieNode();
    }
    
    void insert(string key, int val) {
        int diff=val-m[key];
        TrieNode* curr=root;
        for(char ch: key){
            ch-='a';
            if(curr->child[ch]==NULL)
                curr->child[ch]=new TrieNode();
            curr=curr->child[ch];
            curr->sum+=diff;
        }
        m[key]=val;
    }
    
    int sum(string prefix) {
        TrieNode* curr=root;
        for(char ch: prefix){
            ch-='a';
            if(curr->child[ch]==NULL)
                return 0;
            curr=curr->child[ch];
        }
        return curr->sum;
    }
};

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum* obj = new MapSum();
 * obj->insert(key,val);
 * int param_2 = obj->sum(prefix);
 */
```
