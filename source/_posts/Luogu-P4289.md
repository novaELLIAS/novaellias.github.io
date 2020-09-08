---
title: Luogu P4289 [HAOI2008]移动玩具
mathjax: true
cover: false
donate: true
date: 2018-08-31 21:17:29
categories: Olympiad in Informatics
---

> Luogu P4289 [HAOI2008]移动玩具

<!--more-->

### NULL

在一个4*4的方框内摆放了若干个相同的玩具，某人想将这些玩具重新摆放成为他心中理想的状态，规定移动时只能将玩具向上下左右四个方向移动，并且移动的位置不能有玩具，请你用最少的移动次数将初始的玩具状态移动到某人心中的目标状态。


### EINS

很显然地发现,这道题搜索树的深度几乎是无穷的,易于想到用BFS求解. ${4 * 4}$的方阵,总共状态的个数不过 ${65535}$ 种,这告诉我们很普通的BFS就能AC本题.看到题目中每个节点的状态只有 ${0, 1}$ 两种,不难想到使用二位(二进制)哈希判重.队列手写,减小一些常数.

### ZWEI

每个状态的容器

```
struct StandNode
{
	bool a[16];

	inline int get_hash ()
	{
		register int ret = a[0];
		for (rint i = 1; i <= 15; i ++) ret = (ret<<1) + a[i];
		return ret;
	}
} nico_STA, nico_FIN;
```

`get_hash()` 用来求解每个状态的哈希值, `nico_STA` 和 `nico_nico_FIN` 存储初始状态和结束状态.

队列元素

```cpp
struct QueueNode
{
	StandNode a;
	int ste;
} que[65537];
```

存储当前状态和步数

主程序

```cpp
int main ()
{
	input ();
	int FIN = nico_FIN.get_hash();

	register int head = 0, tail = 1, diff, xpos, kiana;
	que[tail].a = nico_STA;
	sjb[nico_STA.get_hash()] = true;
	while (head < tail)
	{
		head ++;
		if (que[head].a.get_hash() == FIN)
		{
			printf ("%d", que[head].ste);
			return 0;
		}
		for (rint i = 0; i <= 15; i ++) nico_bfswork (i, i % 4, head, tail);
	}
	puts ("No Solution");
	return 0;
}
```

BFS操作函数

``` cpp
inline void nico_bfswork (register int diff, register int xpos, register int head, register int &tail)
{
	register StandNode ellias; register int kiana;
	if (xpos && !que[head].a.a[diff - 1])
	{
		ellias = que[head].a, swap (ellias.a[diff], ellias.a[diff - 1]);
		kiana = ellias.get_hash ();
		if (!sjb[kiana]) que[++ tail].a = ellias, que[tail].ste = que[head].ste + 1, sjb[kiana] = true;
	}
	if (xpos <= 2 && !que[head].a.a[diff + 1])
	{
		ellias = que[head].a, swap (ellias.a[diff], ellias.a[diff + 1]);
		kiana = ellias.get_hash ();
		if (!sjb[kiana]) que[++ tail].a = ellias, que[tail].ste = que[head].ste + 1, sjb[kiana] = true;
	}
	if (diff >= 4 && !que[head].a.a[diff - 4])
	{
		ellias = que[head].a, swap (ellias.a[diff], ellias.a[diff - 4]);
		kiana = ellias.get_hash ();
		if (!sjb[kiana]) que[++ tail].a = ellias, que[tail].ste = que[head].ste + 1, sjb[kiana] = true;
	}
	if (diff <= 11 && !que[head].a.a[diff + 4])
	{
		ellias = que[head].a, swap (ellias.a[diff], ellias.a[diff + 4]);
		kiana = ellias.get_hash ();
		if (!sjb[kiana]) que[++ tail].a = ellias, que[tail].ste = que[head].ste + 1, sjb[kiana] = true;
	}
}
```

枚举四种方向, 判断是否可行, 加入队列. 特别提醒: `tail` 一定要取地址

### DREI

代码

``` cpp
#pragma GCC optimize ("Ofast", 3)
#pragma G++ optimize ("Ofast", 3)

#include <cstdio>
#include <map>

using namespace std;

#define rint register int
#define swap(x,y) ((y)^=(x)^=(y)^=(x))
#define gc() getchar()

struct StandNode
{
	bool a[16];

	inline int get_hash ()
	{
		register int ret = a[0];
		for (rint i = 1; i <= 15; i ++) ret = (ret<<1) + a[i];
		return ret;
	}
} nico_STA, nico_FIN;

struct QueueNode
{
	StandNode a;
	int ste;
} que[65537];

inline void input ()
{
	register char c[5];
	register int pos = 0;
	for (rint t = 1; t <= 4; t ++)
	{
		scanf ("%s", c);
		for (rint i = 0; i <= 3; i ++) nico_STA.a[pos ++] = c[i] - '0';
	}
	pos = 0;
	for (rint t = 1; t <= 4; t ++)
	{
		scanf ("%s", c);
		for (rint i = 0; i <= 3; i ++) nico_FIN.a[pos ++] = c[i] - '0';
	}
}

map <int, bool> sjb;

inline void nico_bfswork (register int diff, register int xpos, register int head, register int &tail)
{
	register StandNode ellias; register int kiana;
	if (xpos && !que[head].a.a[diff - 1])
	{
		ellias = que[head].a, swap (ellias.a[diff], ellias.a[diff - 1]);
		kiana = ellias.get_hash ();
		if (!sjb[kiana]) que[++ tail].a = ellias, que[tail].ste = que[head].ste + 1, sjb[kiana] = true;
	}
	if (xpos <= 2 && !que[head].a.a[diff + 1])
	{
		ellias = que[head].a, swap (ellias.a[diff], ellias.a[diff + 1]);
		kiana = ellias.get_hash ();
		if (!sjb[kiana]) que[++ tail].a = ellias, que[tail].ste = que[head].ste + 1, sjb[kiana] = true;
	}
	if (diff >= 4 && !que[head].a.a[diff - 4])
	{
		ellias = que[head].a, swap (ellias.a[diff], ellias.a[diff - 4]);
		kiana = ellias.get_hash ();
		if (!sjb[kiana]) que[++ tail].a = ellias, que[tail].ste = que[head].ste + 1, sjb[kiana] = true;
	}
	if (diff <= 11 && !que[head].a.a[diff + 4])
	{
		ellias = que[head].a, swap (ellias.a[diff], ellias.a[diff + 4]);
		kiana = ellias.get_hash ();
		if (!sjb[kiana]) que[++ tail].a = ellias, que[tail].ste = que[head].ste + 1, sjb[kiana] = true;
	}
}

signed main ()
{
	input ();
	int FIN = nico_FIN.get_hash();

	register int head = 0, tail = 1, diff, xpos, kiana;
	que[tail].a = nico_STA;
	sjb[nico_STA.get_hash()] = true;
	while (head < tail)
	{
		head ++;
		if (que[head].a.get_hash() == FIN)
		{
			printf ("%d", que[head].ste);
			return 0;
		}
		for (rint i = 0; i <= 15; i ++) nico_bfswork (i, i % 4, head, tail);
	}
	puts ("No Solution");
	return 0;
}
```