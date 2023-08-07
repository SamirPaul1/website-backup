---
title: Diameter of a Binary Tree   GFG
tags: leetcode
categories: leetcode
keywords: LeetCode, leetcode solution in Python3 C++ Java, Diameter of a Binary Tree - GFG solution
description: Diameter of a Binary Tree   GFG LeetCode Solution Explained
cover: /assets/img/leetcode-cover-img.webp
---




# Diameter of a Binary Tree
## Medium
<div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two end nodes. The diagram below shows two trees each with diameter nine, the leaves that form the ends of the longest path are shaded (note that there is more than one path in each tree of length nine, but no path longer than nine nodes).&nbsp;</span></p>

<p><span style="font-size:18px"><a href="http://geeksforgeeks.org/wp-content/uploads/tree_diameter.GIF"><img alt="" class="aligncenter size-full wp-image-5737" src="https://contribute.geeksforgeeks.org/wp-content/uploads/diameter.jpg" style="height:319px; width:635px" title="tree_diameter"></a></span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>&nbsp;&nbsp;&nbsp;&nbsp;   1
 &nbsp;&nbsp;&nbsp; /&nbsp;&nbsp;\
 &nbsp;&nbsp; 2 &nbsp;&nbsp; 3
<strong>Output: </strong>3</span>
</pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /&nbsp;&nbsp; \
 &nbsp;&nbsp;&nbsp;&nbsp; 20&nbsp;&nbsp;&nbsp; 30
 &nbsp;&nbsp; /&nbsp;&nbsp; \ 
&nbsp;&nbsp; 40&nbsp;&nbsp; 60
<strong>Output: </strong>4
</span></pre>

<p><strong><span style="font-size:18px">Your Task:</span></strong><br>
<span style="font-size:18px">You need to <strong>complete </strong>the <strong>function diameter()&nbsp;</strong>that takes <strong>root&nbsp;</strong>as <strong>parameter </strong>and <strong>returns </strong>the <strong>diameter</strong>.<br>
<br>
<strong>Expected Time Complexity:&nbsp;</strong>O(N).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(Height of the Tree).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= Number of nodes &lt;= 10000<br>
1 &lt;= Data of a node &lt;= 1000</span></p>

<p dir="ltr">&nbsp;</p>
</div>

---




```python
#User function Template for python3



class Solution:
    
    #Function to return the diameter of a Binary Tree.
    def diameter(self,root):
        # Code here
        self.res = 0
        def solve(root):
            if not root: return 0
            l = solve(root.left)
            r = solve(root.right)
            tmp = 1 + max(l, r)
            self.res = max(self.res, 1 + l + r)
            return tmp
        solve(root)
        return self.res
        
        
        
        


#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Contributed by Sudarshan Sharma
from collections import deque
import sys
sys.setrecursionlimit(50000)
# Tree Node
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None



# Function to Build Tree   
def buildTree(s):
    #Corner Case
    if(len(s)==0 or s[0]=="N"):           
        return None
        
    # Creating list of strings from input 
    # string after spliting by space
    ip=list(map(str,s.split()))
    
    # Create the root of the tree
    root=Node(int(ip[0]))                     
    size=0
    q=deque()
    
    # Push the root to the queue
    q.append(root)                            
    size=size+1 
    
    # Starting from the second element
    i=1                                       
    while(size>0 and i<len(ip)):
        # Get and remove the front of the queue
        currNode=q[0]
        q.popleft()
        size=size-1
        
        # Get the current node's value from the string
        currVal=ip[i]
        
        # If the left child is not null
        if(currVal!="N"):
            
            # Create the left child for the current node
            currNode.left=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.left)
            size=size+1
        # For the right child
        i=i+1
        if(i>=len(ip)):
            break
        currVal=ip[i]
        
        # If the right child is not null
        if(currVal!="N"):
            
            # Create the right child for the current node
            currNode.right=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.right)
            size=size+1
        i=i+1
    return root
    
    
if __name__=="__main__":
    t=int(input())
    for _ in range(0,t):
        s=input()
        root=buildTree(s)
        k=Solution().diameter(root)
        print(k)



# } Driver Code Ends
```
