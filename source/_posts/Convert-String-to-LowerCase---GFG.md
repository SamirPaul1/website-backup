---
title: Convert String to LowerCase   GFG
date: 2020-08-31 09:54:52
tags: GeeksforGeeks
categories: GeeksforGeeks
keywords: GeeksforGeeks, GeeksforGeeks practice solution in Python3 C++ Java, Convert String to LowerCase - GFG solution
cover: /assets/img/gfg.webp
---


# Convert String to LowerCase
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given a string <strong>S</strong>. The task is to convert characters of string to <strong>lowercase</strong>.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: S</strong> = "ABCddE</span><span style="font-size:18px">"
<strong>Output:</strong> "abcdde</span><span style="font-size:18px">"
<strong>Explanation: </strong>A, B, C and E are converted to</span>
<span style="font-size:18px">a, b, c and E thus&nbsp;all uppercase characters 
of the string converted to lowercase letter.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input: S</strong> = "LMNOppQQ</span><span style="font-size:18px">"
<strong>Output:</strong> "lmnoppqq</span><span style="font-size:18px">"
<strong>Explanation: </strong>L, M, N, O, and Q are 
converted to l, m, n, o and q thus&nbsp;
all uppercase characters of the 
string converted to lowercase letter.</span></pre>

<p><span style="font-size:18px"><strong>Your Task: &nbsp;</strong><br>
You dont need to read input or print anything. Complete the function <strong>toLower()&nbsp;</strong>which takes S&nbsp;as input parameter and returns the converted string.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>O(n)<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1)&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= |S|&nbsp;&lt;= 1000</span></p>

<p><span style="font-size:18px">Input only contains lowercase/uppercase English alphabets.</span></p>
</div>

---




```cpp
//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    string toLower(string S) {
        // code here
        for(int i = 0; i < S.size(); i++){
            if(S[i] < 97) {
                S[i] = S[i] + 32;
            }
        }
        return S;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) 
    {
        string S;
        cin >> S;
        Solution ob;
        cout << ob.toLower(S) << endl;
    }
    return 0;
}

// } Driver Code Ends
```
