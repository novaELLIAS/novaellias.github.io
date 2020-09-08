---
title: FAIOJ 101 左偏树 可并堆 STL简单实现
date: 2020-08-11 13:14:11
tags: [Template]
cover: false
mathjax: true
donate: true
categories: Olympiad in Informatics
---

> [FAIOJ #101](http://faioj.brynhild.online/problem/101)
> [洛谷 P3377](https://www.luogu.com.cn/problem/P3377)

<!--more-->

使用了 `ext/pb_ds/priority_queue.hpp`.


由于使用结构体或者pair同时存数和编号较为繁琐, 由于本题数据不大, 故使用 $data*(n+1)+i$ 来同时存储数据和编号.

```cpp
#pragma GCC optimize (2)
#pragma G++ optimize (2)
#pragma GCC optimize (3)
#pragma G++ optimize (3)
#pragma GCC optimize ("Ofast")
#pragma GCC target ("sse3","sse2","sse")
#pragma GCC target ("avx","sse4","sse4.1","sse4.2","ssse3")
#pragma GCC target ("f16c")
#pragma G++ target ("sse3","sse2","sse")
#pragma G++ target ("avx","sse4","sse4.1","sse4.2","ssse3")
#pragma G++ target ("f16c")

#include <cstdio>
#include <ext/pb_ds/priority_queue.hpp>

using namespace std;

const int ELAS = 1<<14;
static char buf[ELAS],but[ELAS],*_p1=buf,*_p2=buf,*_p3=but,*_p4=but+ELAS;
static int bit[20];
#define gc() ((_p1==_p2)&&(_p2=(_p1=buf)+fread(buf,1,ELAS,stdin),_p1==_p2)?EOF:*_p1++)
inline void pt(char c) {
	(_p3==_p4)?(fwrite(_p3=but, 1, ELAS, stdout), *_p3++=c):(*_p3++=c);
}
inline long long read () {
	register long long x=0; register char c=gc(); register bool m=false;
	while ((c < '0' || c > '9') && (c ^ '-')) c = gc();
	if (!(c ^ '-')) c = gc(), m = true;
	while (c>='0'&&c<='9') x = (x << 3) + (x << 1) + (c ^ '0'), c = gc();
	return m? -x:x;
}
inline unsigned long long readu () {
	register unsigned long long x=0; register char c=gc();
	while (c < '0' || c > '9') c = gc();
	while (c >='0' && c <='9') x = (x << 3) + (x << 1) + (c ^ '0'), c = gc();
	return x;
}
inline void write (long long x) {
	if (!x) {putchar('0'); return;}
	register long long pos=0;
	if (x < 0) x = -x, pt ('-');
	for (; x; x/=10) bit[++ pos] = x%10;
	for (register long long i=pos; i; --i) pt(bit[i]^'0');
}

#define maxn 100001

long long fa[maxn];

inline long long find (long long x) {
	return (!(x^fa[x]))? x:fa[x]=find(fa[x]);
}

__gnu_pbds::priority_queue<long long, greater <long long>, __gnu_pbds::binomial_heap_tag> que[maxn];

signed main ()
{
	register long long n=readu()+1, m=readu(), opt, x, y;
	register bool del[maxn];
	for (register long long i=1; i^n; ++i) fa[i]=i, del[i]=false, que[i].push(read()*n+i);
	while (m --) {
		opt = read(), x = read();
		if (opt^2) {
			y = read ();
			if (del[x] || del[y]) continue;
			if ((x=find(x))^(y=find(y))) {
				fa[y]=x, que[x].join(que[y]);
			}
		} else {
			if (del[x]) pt('-'), pt('1'), pt('\n');
			else {
				write ((opt=que[y=find(x)].top())/n), pt ('\n');
				que[y].pop(), del[opt%n] = true;
			}
		}
	}
	return fwrite (but, 1, _p3-but, stdout), 0;
}

```