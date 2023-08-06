---
title: count of range sum
tags: LeetCode
categories: LeetCode
keywords: LeetCode, leetcode solution in Python3 C++ Java, count-of-range-sum solution
description: count of range sum LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---


<h2>327. Count of Range Sum</h2><h3>Hard</h3><hr><div><p>Given an integer array <code>nums</code>, return the number of range sums that lie in <code>[lower, upper]</code> inclusive.<br>
Range sum <code>S(i, j)</code> is defined as the sum of the elements in <code>nums</code> between indices <code>i</code> and <code>j</code> (<code>i</code> ≤ <code>j</code>), inclusive.</p>

<p><b>Note:</b><br>
A naive algorithm of <i>O</i>(<i>n</i><sup>2</sup>) is trivial. You MUST do better than that.</p>

<p><b>Example:</b></p>

<pre><strong>Input: </strong><i>nums</i> = <code>[-2,5,-1]</code>, <i>lower</i> = <code>-2</code>, <i>upper</i> = <code>2</code>,
<strong>Output: </strong>3 
<strong>Explanation: </strong>The three ranges are : <code>[0,0]</code>, <code>[2,2]</code>, <code>[0,2]</code> and their respective sums are: <code>-2, -1, 2</code>.
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 10^4</code></li>
</ul>
</div>

---




```cpp
class Solution {
public:
    int countRangeSum(vector<int>& nums, int lower, int upper) {
        map<long long, long long> m;
        long long n=nums.size(),c=0,sum=0;
        for(int i=0;i<n;i++){
            sum+=nums[i];
            for(int j=lower;j<=upper;j++){
                if(sum==j)
                    c++;
                c+=m[sum-j];
            }
            m[sum]++;
        }
        return c;
    }
};

```
