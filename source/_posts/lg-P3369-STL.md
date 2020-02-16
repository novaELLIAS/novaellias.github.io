---
title: STL 洛谷P3369 普通平衡树
tags:
	- Template
	- STL
mathjax: true
cover: false
categories: Olympiad in Informatics
donate: true
date: 2018-10-30 16:31:14
---

[luogu P3369 普通平衡树](https://www.luogu.org/problemnew/show/P3369)

<!--more-->

``` cpp
// luogu-judger-enable-o2
#include <cstdio>
#include <vector>
#include <algorithm>

using namespace std;

const int ELAS = 1<<14;
static char buf[ELAS],*p1=buf,*p2=buf;
inline char gc()
{
    return (p1==p2)&&(p2=(p1=buf)+fread(buf,1,ELAS,stdin),p1==p2)?EOF:*p1++;
}
inline int read ()
{
    register int x = 0; register char c = gc(); register bool m = false;
    while ((c < '0' || c > '9') && c ^ '-') c = gc();
    if (c == '-') m = true, c = gc();
    while (c>='0'&&c<='9') x = (x<<3) + (x<<1) + (c^'0'), c = gc();
    return m? -x:x;
}
static void write (int x)
{
    if (x > 9) write (x / 10);
    putchar (x % 10 + 48);
}
static void writelen (int x) {if(x<0) x=-x, putchar('-');write (x);putchar ('\n');}

vector <int> eli;

signed main ()
{
    register int n = read (), x, opt;
    while (n --)
    {
        opt = read (), x = read ();
        if (opt == 1) eli.insert(upper_bound(eli.begin(), eli.end(), x), x);
        else if (opt == 2) eli.erase(lower_bound(eli.begin(), eli.end(), x));
        else if (opt == 3) writelen(lower_bound(eli.begin(), eli.end(), x)-eli.begin()+1);
        else if (opt == 4) writelen(eli[x - 1]);
        else if (opt == 5) writelen(*--lower_bound(eli.begin(), eli.end(), x));
        else if (opt == 6) writelen(*upper_bound(eli.begin(), eli.end(), x));
    }
    return 0;
}
```