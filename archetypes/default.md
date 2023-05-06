---
title: "{{ replace .Name "-" " " | title }}"
summary: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: "{{ replace .Name "-" " " | title }}"
tags: [blog, coding, computer-science]
cover:
  image: "https://samirpaulb.github.io/assets/blog-featured-image-samirpaul-in-blog.webp"
  alt: "{{ replace .Name "-" " " | title }}"
  caption: "{{ replace .Name "-" " " | title }}"

images:
  - https://samirpaulb.github.io/assets/blog-featured-image-samirpaul-in-blog.webp

# videos:
#   - filename01.mov
#   - filename02.avi

draft: false
author: "Samir Paul"
authorLink: "https://twitter.com/intent/follow?screen_name=SamirPaulb"
license: "CC BY 4.0"
draft: false

# editPost:
#   URL: "https://github.com/SamirPaul1/blog"
#   Text: "Suggest Changes" # edit text
#   appendFilePath: true # to append file path to Edit link

---
