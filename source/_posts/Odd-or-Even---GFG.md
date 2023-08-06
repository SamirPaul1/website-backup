---
title: Odd or Even   GFG
date: 2020-08-31 09:54:52
tags: GeeksforGeeks
categories: GeeksforGeeks
keywords: GeeksforGeeks, GeeksforGeeks practice solution in Python3 C++ Java, Odd or Even - GFG solution
cover: assets/img/gfg.webp
---


# Odd or Even
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given a positive integer N, determine whether it is odd or even.</span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong>
<span style="font-size:18px">N = 1</span>
<strong><span style="font-size:18px">Output:</span></strong>
<span style="font-size:18px">odd</span>
<strong><span style="font-size:18px">Explanation:</span></strong>
<span style="font-size:18px">The output is self-</span>
<span style="font-size:18px">explanatory.</span></pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><strong><span style="font-size:18px">Input:</span></strong>
<span style="font-size:18px">N = 2</span>
<strong><span style="font-size:18px">Output:</span></strong>
<span style="font-size:18px">even</span>
<strong><span style="font-size:18px">Explanation:</span></strong>
<span style="font-size:18px">The output is self-</span>
<span style="font-size:18px">explanatory.</span></pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Your Task:</span></strong></p>

<p><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function oddEven() which takes the integer N and return "even" is number is even and "odd" if the number is odd.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
0 &lt;= N &lt;= 10000</span></p>

<p>&nbsp;</p>
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
    string oddEven(int N){
        // code here 
        for(int i = 0; i < N; i++) {
            if(N % 2 == 0){
                return "even";
            }else {
                return "odd";
            }
        }
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
        cin >> N;
        Solution ob;
        cout << ob.oddEven(N) << endl;
    }
    return 0; 
}   // } Driver Code Ends
```
