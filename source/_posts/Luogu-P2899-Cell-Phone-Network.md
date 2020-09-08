---
title: 洛谷 P2899 [USACO08JAN]手机网络Cell Phone Network
tags:
	- 贪心
mathjax: true
cover: false
donate: true
date: 2018-06-28 15:31:29
categories: Olympiad in Informatics
---

> 树状贪心
> 洛谷 P2899 [USACO08JAN]手机网络Cell Phone Network

<!--more-->
    
#### 题目

Farmer John has decided to give each of his cows a cell phone in hopes to encourage their social interaction. This, however, requires him to set up cell phone towers on his N (1 ≤ N ≤ 10,000) pastures (conveniently numbered 1..N) so they can all communicate.

Exactly N-1 pairs of pastures are adjacent, and for any two pastures A and B (1 ≤ A ≤ N; 1 ≤ B ≤ N; A ≠ B) there is a sequence of adjacent pastures such that A is the first pasture in the sequence and B is the last. Farmer John can only place cell phone towers in the pastures, and each tower has enough range to provide service to the pasture it is on and all pastures adjacent to the pasture with the cell tower.

Help him determine the minimum number of towers he must install to provide cell phone service to each pasture.

#### 分析

本题要求使用最少的电磁塔, 把所有的节点覆盖掉. 由 N-1 条边我们可以了解到, 这是一棵树. 从树的叶子节点向上看, 显然在儿子节点摆电磁塔是不合算的. 所以很显然地, 从最后一层向上搜索, 每遇到一个儿子节点没有被覆盖, 就在他父亲上摆一个电磁塔. 很显然, 从下向上枚举, 对于本题的数据这种方法是成立的.
    
#### 代码

``` cpp
#pragma GCC optimize ("Ofast")

#include "iostream"
#include "stdio.h"
#include "vector"

#define rint register int

using namespace std;

inline int read()
{
    int x=0ll,t=1ll;
    char ch=getchar();
    while((ch<'0'||ch>'9')&&ch!='-')ch=getchar();
    if(ch=='-')t=-1,ch=getchar();
    while(ch<='9'&&ch>='0')x=x*10+ch-48,ch=getchar();
    return x*t;
}

bool check[10001];
int n, fa[10001], ans, mxdp;
vector <int> mp[10001], fl[10001];

inline void dfs (int u, int de)
{
	mxdp = max (mxdp, de);
	fl[de].push_back (u);
	int v;
	for (rint i = 0; i < mp[u].size (); ++ i)
	{
		v = mp[u][i];
		if (!(v ^ fa[u])) continue;
		fa[v] = u;
		dfs (v, de + 1);
	}
}

inline void work (int u)
{
	check[u] = true;
	for (rint i = 0; i < mp[u].size (); ++ i) check[mp[u][i]] = true;
}

signed main ()
{
	n = read ();
	int u, v;
	for (rint i = 1; i < n; ++ i)
	{
		u = read (), v = read ();
		mp[u].push_back (v);
		mp[v].push_back (u);
	}
	
	dfs (1, 0);
	
	for (rint i = mxdp; i >= 0; -- i)
	{
		for (rint j = 0; j < fl[i].size (); ++ j)
		{
			u = fl[i][j], v = fa[u];
			if (check[u]) continue;
			ans ++;
			work (v);
		}
	}
	printf ("%d", ans);
}
```