---
title: Addition of Two Numbers   GFG
date: 2020-08-31 09:54:52
tags: GeeksforGeeks
categories: GeeksforGeeks
keywords: GeeksforGeeks, GeeksforGeeks practice solution in Python3 C++ Java, Addition of Two Numbers - GFG solution
cover: assets/img/gfg.webp
---


# Addition of Two Numbers
## Easy
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two numbers <strong>A&nbsp;</strong>and <strong>B</strong>. Your task is to return the sum of A and B.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
A = 1, B = 2
<strong>Output:</strong>
3
<strong>Explanation:</strong>
Addition of 1 and 2 is 3.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:</strong>
A = 10, B = 20
<strong>Output:</strong>
30
<strong>Explanation:</strong>
Addition os 10 and 20 is 30.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong></span></p>

<p><span style="font-size:18px">You don't need to read input or print anything. Your task is to complete the function addition() which takes two numbers A and B and returns the sum of A and B.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= A, B&nbsp;&lt;= 10<sup>18</sup></span></p>
</div>

---




```cpp
//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends
class Solution{   
public:
    int addition(int A, int B){
        // code here 
        int sum = A + B;
        return sum;
    }
};

//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int A, B;
        cin >> A >> B;
        Solution ob;
        cout << ob.addition(A,B) << endl;
    }
    return 0; 
} 

// } Driver Code Ends
```
