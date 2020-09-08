---
title: 洛谷 P1654 OSU!
mathjax: true
cover: false
donate: true
date: 2018-07-27 19:18:52
categories: Olympiad in Informatics
---

> 洛谷 P1654 OSU! 滚动数组

<!--more-->

### 本题可以使用滚动数组进一步优化空间.

>空间多精贵.

#### 订正一下本题题干:

小H和小Z正在玩一个取石子游戏。 取石子游戏的规则是这样的，每个人每次可以从一堆石子中取出若干个石子，每次取石子的个数有限制，谁不能取石子时就会输掉游戏。 小H先进行操作，他想问你他是否有必胜策略，如果有，第一步如何取石子。

### 优化分析

看到楼下大佬的代码，用庞大的数组会造成大量的内存浪费. 从算法中可以看到，一个状态只从它前一个状态转移而来，就可以使用滚动数组节约空间.

第一次使用数组取 `0` 位， 每次转移将 `pos ^ 1`. 代码如下

``` cpp
	for (register int i = 1; i <= n; ++ i, pos ^= 1)
	{
		exp = !pos, k = getdou ();
		x[pos] = (x[exp] + 1) * k;
		y[pos] = (y[exp] + 2*x[exp] + 1) * k;
		v[pos] = v[exp] + (3*x[exp] + 3*y[exp]+1) * k;
	}

```