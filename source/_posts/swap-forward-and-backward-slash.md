---
title: swap forward and backward slash
tags: interviewbit
categories: interviewbit
keywords: interviewbit, interviewbit solution in Python3 C++ Java, swap forward and backward slash solution
description: swap forward and backward slash Interviewbit Solution Explained
cover: /assets/img/interviewbit-cover.jpg
---

# Swap Forward And Backward Slash

https://www.interviewbit.com/problems/swap-forward-and-backward-slash/

Write a bash script to replace all the occurrences of / with \ and \ with / in a text file named input.

For simplicity sake, you may assume:

input contains only either forward slash / or backward slash \

Example:

Assume that input has the following content:

```
\\//
```
Your script should output the following:

```
//\\
```

## Hint 
Use sed command

## Solution Approach
Note that the input cannot contain #
Replace \ with # first, then replace / with \ and then finally # with /


## Solution

### Editorial
```bash
cat input | sed 's/\\/\#/g' | sed 's/\//\\/g' | sed 's/\#/\//g'

(or)

cat input | tr '/\\' '\\/'
```

### Mine
```bash
cat input|tr '\' 'x'|tr '/' '\'|tr 'x' '/'
```


