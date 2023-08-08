---
title: Print 1 To N Without Loop   GFG
date: 2020-08-31 09:54:52
tags: geeksforgeeks
categories: GeeksforGeeks
keywords: GeeksforGeeks, GeeksforGeeks practice solution in Python3 C++ Java, Print 1 To N Without Loop - GFG solution
cover: /assets/img/gfg.webp
---


# Print 1 To N Without Loop
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Print numbers from <strong>1 to N</strong> without the help of loops.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 10
<strong>Output: </strong>1 2 3 4 5 6 7 8 9 10
</span></pre>

<p><br>
<span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 5
<strong>Output: </strong>1 2 3 4 5</span></pre>

<p>&nbsp;</p>

<p><strong><span style="font-size:18px">Your Task:</span></strong><br>
<span style="font-size:18px">This is a function problem. You only need to complete the <strong>function printNos()&nbsp;</strong>that takes <strong>N as parameter</strong> and prints number from <strong>1 to N</strong> recursively. Don't print newline, it will be added by the driver code.</span></p>

<p><br>
<span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(N) (Recursive).</span></p>

<p><br>
<span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>5</sup></span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
class Solution{
    public:
    //Complete this function
    void printNos(int N)
    {
        //Your code here
        if ( N == 0) return;
        printNos(N - 1);
        cout << N << " ";
    }
};

// { Driver Code Starts.
/* Driver program to test printNos */
int main()
{
    int T;
    
    //taking testcases
    cin>>T;
    
    while(T--)
    {
        int N;
        
        //input N
        cin>>N;
        Solution ob;
        //calling printNos() function
        ob.printNos(N);
        cout << "\n";
    }
    return 0;
}
  // } Driver Code Ends
```
