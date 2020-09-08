---
title: SP2885 WORDRING - Word Rings
mathjax: true
cover: false
donate: true
date: 2018-10-19 13:57:54
categories: Olympiad in Informatics
---

> SP2885 WORDRING - Word Rings

<!--more-->

本题求平均环长,可以将每个字符串的前后两个字符看做点,这两个点存在于一个字符串的关系视为一条边,接着二分枚举答案(单调性是很显然的),用队列优化BellmanFord判断即可.

关键代码:

```cpp
static bool __fastcall spfa_dfs (Re int fr, Re double mid)
{
	vis[fr] = true;
	register int to;
	for (Re int i = head[fr]; i; i = nxt[i])
	{
		to = too[i];
		if (dis[fr] + wei[i] - mid > dis[to])
		{
			dis[to] = dis[fr] + wei[i] - mid;
			if (vis[to] || spfa_dfs(to, mid))
				{vis[fr] = false; return true;}
		}
	}
	vis[fr] = false; return false;
}
```

```cpp
inline bool judge (register double mid)
{
	memset (dis, 0, sizeof dis);
	for (Re int i = 1; i <= hhsh; ++ i)
		if (spfa_dfs (i, mid)) return true;
	return false;
}
```

```cpp
while (true)
	{
		n = read (); if (!n) return 0;
		memset (head, 0, sizeof head);
		memset (hash, 0, sizeof hash);
		ecnt = hhsh = 0;
		while (n --)
		{
			c = gc(), len = 0;
			while (c == '\n' || c == '\r') c = gc ();
			while ((c != '\n') && (c != '\r')) s[++ len] = c, c = gc();
			fr = calc(s[1], s[2]), to = calc(s[len-1], s[len]);
			if (!hash[fr]) hash[fr] = ++ hhsh;
			if (!hash[to]) hash[to] = ++ hhsh;
			addedge (hash[fr], hash[to], len);
		}
		l = 0.0, r = 1000.0;
		while (r - l >= eps)
		{
			mid = (l + r) / 2;
			if (judge(mid)) l = mid;
			else r = mid;
		}
		if (l == 0) puts ("No solution.");
		else printf ("%.2lf\n", l);
	}
```

祝大家 ```RP++``` !