---
title: 线段树 namespace
tags:
    - segment tree
    - Template
mathjax: true
cover: false
donate: true
categories: Olympiad in Informatics
date: 2020-07-26 13:46:23
---

> 线段树 namespace

<!--more-->

``` cpp
namespace Seg_Tree {

#define ls p << 1
#define rs p << 1 | 1
#define mid ((l + r) >> 1)
	
	int mn[N << 2], pos[N << 2], tag[N << 2];

	inline void pushup (int p) { mn[p] = std::min (mn[ls], mn[rs]), pos[p] = !(mn[p]^mn[rs]) ? pos[rs] : pos[ls]; }
	inline void modify (int p, int x) { tag[p] += x, mn[p] -= x; }
	inline void pushdown (int p) {
		if (tag[p]) modify (ls, tag[p]), modify (rs, tag[p]), tag[p] = 0;
	}
	static void build (int p, int l, int r) {
		if (!(l^r)) return mn[p] = wait[l], pos[p] = l, void ();
		else build (ls, l, mid), build (rs, mid + 1, r), pushup (p);
	}
	static void update (int p, int l, int r, int L, int R, int x) {
		if (L > r || l > R || L > R) return;
		else if (L <= l && r <= R) return modify(p, x);
		else pushdown (p), update (ls, l, mid, L, R, x), update (rs, mid + 1, r, L, R, x), pushup (p);
	}
	static int find (int p, int l, int r, int L, int R) {
		if (L > r || l > R || L > R) return 0;
		else if (L <= l && r <= R) return p;
		pushdown(p);
		register int p1 = find (ls, l, mid, L, R), p2 = find (rs, mid + 1, r, L, R);
		return mn[p1] > mn[p2] ? p2 : p1;
	}

#undef ls
#undef rs
#undef mid
}
```
```cpp
using namespace Seg_Tree;
```