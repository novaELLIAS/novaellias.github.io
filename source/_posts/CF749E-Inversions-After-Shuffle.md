---
title: CF749E Inversions After Shuffle
mathjax: true
cover: false
donate: true
date: 2018-08-14 13:24:30
categories: Olympiad in Informatics
---

> CF749E Inversions After Shuffle
> 给出一个1~n的排列,从中等概率抽取一个连续的片段,并对其进行等概率全排列,求排列后整个序列的逆序对的期望个数.

<!--more-->

### problem

给出一个1~n的排列,从中等概率抽取一个连续的片段,并对其进行等概率全排列,求排列后整个序列的逆序对的期望个数.

### solution

设所选的区间长度为l,考虑一个有序数对 ${a_i,a_j (i<j)}$ 并计算其贡献.
这样一来,就有两种情况:

1. ${a_i,a_j}$在所选的连续段中
2. ${a_i,a_j}$在所选的连续段之外

对于情况2,当${a_i<a_j}$时,很显然他们不会对答案有贡献.对于${a_i>a_j}$,对于区间 ${[1,j-1],[i+1,n]}$ 才会有贡献.但很显然地看到,区间 ${[i+1,j-1]}$ 被重复计算,要在计算概率时将其剪掉.如果使用 ${O(n^2)}$暴力显然会超时,可以将其用树状数组维护.

对于情况1就很简单,满足全排列概率为${\frac{1}{2}}$,满足连续段包含关系的概率为 ${2*\frac{i*(n-j+1)}{n*(n+1)}}$,概率相乘结果

$${P_{i,j}=\frac{i*(n-j+1)}{n*(n+1)}}$$

那么总期望为

$${P=\sum_{i=1}^n\sum_{j=i+1}^n \frac{i*(n-j+1)}{n*(n+1)}}$$


$${P=\frac{1}{2}\sum_{i=1}^n \frac{i*(n-i)*(n-i+1)}{n*(n+1)}}$$

### code

加入操作

```cpp
inline void add (int x, int w, ll *c)
{
	while (x) { c[x] += w, x &= x-1;}
}
```

询问操作

```cpp
inline ll query (int x, ll *c)
{
	long long ret = 0;
	while (x<=n) {
		ret += c[x], x += lowbit(x);
	}
	return ret;
}
```

主程序

```cpp
static int main ()
{
	n = read();
	for (register int i = 1; i <= n; ++ i)
	{
		a = read();
		tmp += query (a+1, c1);
		ans -= (double)query(a+1, c2)*(n-i+1);
		ans += (double)(n-i+1)*i*(i-1)/4.0;
		add (a, 1, c1); add (a, i, c2);
	}
	printf ("%.20lf", (double)(tmp+ans/((double)n*(n+1)/2.0)));
	return 0;
}
```