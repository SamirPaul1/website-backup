---
title: Prime Number   GFG
date: 2020-08-31 09:54:52
tags: GeeksforGeeks
categories: GeeksforGeeks
keywords: GeeksforGeeks, GeeksforGeeks practice solution in Python3 C++ Java, Prime Number - GFG solution
cover: assets/img/gfg.webp
---


# Prime Number
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">For a given number <strong>N</strong> check if it is prime or not. A prime number is a number which is only<strong> divisible by 1 and itself</strong>.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 5
<strong>Output:</strong>
1
<strong>Explanation:</strong>
5 has 2 factors 1 and 5 only.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
N = 25
<strong>Output:</strong>
0
<strong>Explanation:</strong>
25 has 3 factors 1, 5, 25
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>isPrime()</strong>&nbsp;which takes&nbsp;an integer <strong>N</strong>&nbsp;as input parameters&nbsp;and returns an integer, 1 if N is a prime number or 0 otherwise.</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(sqrt(N))<br>
<strong>Expected Space Complexity:</strong> O(1)</span><br>
&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>9</sup></span></p>
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
    int isPrime(int N){
        // code here
        if(N == 0 || N == 1) return 0;
        if(N == 2 || N == 3) return 1;
        if(N % 2 == 0 || N % 3 == 0) return 0;
        for(int i = 5; i*i <= N; i=i+6) {
            if(N % i == 0 || N % (i+2) == 0) 
            return 0;
        }
        return 1;
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
        cout << ob.isPrime(N) << endl;
    }
    return 0; 
}  // } Driver Code Ends
```
