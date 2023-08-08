---
title: GCD of two numbers   GFG
date: 2020-08-31 09:54:52
tags: GeeksforGeeks
categories: GeeksforGeeks
keywords: GeeksforGeeks, GeeksforGeeks practice solution in Python3 C++ Java, GCD of two numbers - GFG solution
cover: /assets/img/gfg.webp
---


# GCD of two numbers
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Given two positive integers A and B, find GCD of A and B.</span></p>

<p><br>
<span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> A = 3, B = 6
<strong>Output:</strong> 3
<strong>Explanation:</strong> GCD of 3 and 6 is 3</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong> A = 1, B = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> GCD of 1 and 1 is 1</span></pre>

<p><br>
<span style="font-size:18px"><strong>Your Task: &nbsp;</strong><br>
You don't need to read input or print anything. Complete the function <strong>gcd()</strong> which takes two positive integers as input parameters and returns an integer.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(log(min(A, B)))<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(1) </span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ A, B ≤ 10<sup>9</sup></span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

 // } Driver Code Ends
//User function Template for C++
class Solution
{
	public:
    int gcd(int A, int B) 
	{ 
	    // code here
	    if(B == 0)
	    return A;
	    return gcd(B, A % B);
	} 
};

// { Driver Code Starts.

int main() 
{
   	int t;
    cin >> t;
    while (t--)
    {
        int A, B;
        cin >> A >> B;
        Solution ob;
       	cout <<  ob.gcd(A, B) << "\n";
    }
    return 0;
}  // } Driver Code Ends
```
