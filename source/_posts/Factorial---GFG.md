---
title: Factorial   GFG
date: 2020-08-31 09:54:52
tags: GeeksforGeeks
categories: GeeksforGeeks
keywords: GeeksforGeeks, GeeksforGeeks practice solution in Python3 C++ Java, Factorial - GFG solution
cover: assets/img/gfg.webp
---


# Factorial
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a positive integer,&nbsp;<strong>N</strong>. Find the factorial of <strong>N</strong>.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
<strong>Output:</strong>
120
<strong>Explanation:</strong>
5*4*3*2*1 = 120</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 4
<strong>Output:</strong>
24
<strong>Explanation:</strong>
4*3*2*1 = 24
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>factorial()</strong>&nbsp;which takes&nbsp;an integer <strong>N</strong>&nbsp;as input parameters&nbsp;and returns an integer, the factorial&nbsp;of N.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(N)<br>
<strong>Expected Space Complexity:</strong> O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
0 &lt;= N &lt;= 18</span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include<bits/stdc++.h> 
using namespace std;

 // } Driver Code Ends
class Solution{
public:
    long long int factorial(int N){
        //code here
        if(N == 0)
        return 1;
        return N*factorial(N-1);
    }
};

// { Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin>>N;
        Solution ob;
        cout << ob.factorial(N) << endl;
    }
    return 0; 
}  // } Driver Code Ends
```
