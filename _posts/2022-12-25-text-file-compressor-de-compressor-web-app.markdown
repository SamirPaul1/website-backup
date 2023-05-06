---
layout: post
title: Text File Compressor De-compressor Web App
description: Text File Compressor De-compressor Web App
image:
  path: /assets/img/text-file-compressor-de-compressor-web-app-preview.webp
  width: 661
  height: 132
  alt: Text File Compressor De-compressor Web App
categories: [Projects]
tags: [blog, coding, computer-science, javascript, project, css, html, encoding, encoder, huffman, huffman-coding, huffman-compression-algorithm, txt, lossless-compression-algorithm, file-compression, huffman-encoder, huffman-decoder, huffman-encoding, txt-encode, txt-decode, lossless-compression, github, projects, web-development, lossless-data-compression, online-file-compressor, txt-compressor, algorithm]
published: true
sitemap: true
pin: false
---


- This webapp uses Huffman Coding for Text Compression and De-compression.
- Made with ```JavaScript```, ```HTML5``` and ```CSS3```.
- Live Demo: [**samirpaul1.github.io/txt-compressor**](https://samirpaul1.github.io/txt-compressor/)
- Repository: [github.com/SamirPaul1/txt-compressor](https://github.com/SamirPaul1/txt-compressor)


## About this application:

* An online text(.txt) file compressor, decompressor which uses Huffman Algorithm to encode/compress files by 35% and decode them back to the original size. 
* This tool assigns a variable-length code to the characters of the uploaded file based on the frequency of occurrence. Then converts characters to that special code which takes less size than the original ASCII codes. Huffman code forms a binary tree assigning the most frequent characters with the smallest codes and longer codes for the least frequent characters. 
* A Huffman code is a tree, built bottom up, starting with the list of different characters appearing in a text and their frequency. 
* With this lossless data compression method, this tool can compress the file size by 35 to 40%. 
* As file size gets reduced and original characters get changed to special characters so this encoding also improves security by encrypting the file during file sharing. 
* With the decoding feature, the user can decode the encoded file and get back the original file of the previous size. 
* I have used JavaScript to implement the algorithms so that browser can compile the code and HTML, CSS to make the website responsive. 
* Additional instructions and warnings are provided if steps are not followed correctly. 
* An [Info page](https://samirpaul1.github.io/txt-compressor/info.html) is added to give more information about tecnique of **Lossless Data Compression** with Huffman coding.




## Video Demo: 

<iframe title="Video Demo" src="https://user-images.githubusercontent.com/77569653/172716965-50560f4a-2acf-4013-ae87-8b474b2a09e3.mp4" loading="lazy" width="100%" height = "380" autoplay="autoplay" loop="loop" frameborder="0" allowfullscreen></iframe>



- [x] Landing Page:

![landing-page](/assets/img/text-file-compressor-de-compressor-web-app-landing-page.png) 

- [x] Upload File

![step1](/assets/img/text-file-compressor-de-compressor-web-app-step1.png) 


- [x] Select Action (Compress / De-compress)

![step2](/assets/img/text-file-compressor-de-compressor-web-app-step2.png) 


- [x] Wait for File Download
    * File gets downloaded automatically when selected process is complete.

    * Compression - Compression Ratio is also displayed 

    ![compression](/assets/img/text-file-compressor-de-compressor-web-app-step3.png)
    
    * De-compression

    ![decompression](/assets/img/text-file-compressor-de-compressor-web-app-decompression.png)

- Additional Instructions and Warnings are provided if the above steps are not followed correctly

![noFile](/assets/img/text-file-compressor-de-compressor-web-app-nofile.png) 

![smallFile](/assets/img/text-file-compressor-de-compressor-web-app-verysmallfile.png)



- About the tecnique of Lossless Data Compression with Huffman coding.

![info1](/assets/img/text-file-compressor-de-compressor-web-app-info.jpeg) 
