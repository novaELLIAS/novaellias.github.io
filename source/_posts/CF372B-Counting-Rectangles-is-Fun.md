---
title: CF372B Counting Rectangles is Fun
mathjax: true
cover: false
donate: true
date: 2018-09-27 19:21:43
categories: Olympiad in Informatics
---

> CF372B Counting Rectangles is Fun

<!--more-->

### NULL Problem :

#### 题目描述

给定一个${n* m}$的01矩阵, q次询问, 每次询问指定一个子矩形, 求该子矩形种有多少个只包含0的子矩阵.
矩阵从上到下编号1~n, 从左到右编号1~m.

#### 输入格式

第一行三个整数n,m,q. 接下来n行, 每行m个整数描述该矩阵. 接下来q行, 每行四个整数a,b,c,d表示询问的子矩阵左上角为(a,b), 右下角为(c,d).

#### 输出格式

对于每个询问, 输出一个整数表示答案.

### EINS Solution

看到本题很小的数据范围 ${1<=n,m<=40}$ , 内心或许会萌发一些类似于把整张图状压的想法. 但看到时限是 ${4s}$ , 当然会想到本题可以使用暴力求解.

本题要求两个点之间共有多少个全部为0的子矩阵,q的范围高达${3* 10^5}$, 不难想到, 可以通过暴力的dp打出表然后${O(1)}$查询.

令${dp[x1][y1][x2][y2]}$表示从(x1, y1)到(x2, y2)的答案, 不难得到状态转移方程:

约定${x1<=x2, y1<=y2}$

${dp[x1][y1][x2][y2]=dp[x1][y1][x2-1][y2]+dp[x1][y1][x2][y2-1]-dp[x1][y1][x2-1][y2-1]}$

${dp[x1][y1][x2][y2] +=}$ 该区域内能获得的矩形数量

### ZWEI Code

代码就比较好写:

```cpp
register int n = read (), m = read (), _ = read (), nico;
	for (Re int i = 1; i <= n; ++ i)
	{
		for (Re int j = 1; j <= m; ++ j)
		{
			scanf ("%1d", &nico);
			if (nico) lin[i][j] = 0;
			else lin[i][j] = lin[i-1][j] + 1;
		}
	}
	
	for (Re int frx = 1; frx <= n; ++ frx)
	{
		for (Re int fry = 1; fry <= m; ++ fry)
		{
			for (Re int tox = frx; tox <= n; ++ tox)
			{
				for (Re int toy = fry; toy <= m; ++ toy)
				{
					ans[frx][fry][tox][toy] = ans[frx][fry][tox-1][toy] + ans[frx][fry][tox][toy-1] - ans[frx][fry][tox-1][toy-1];
					nico = tox - frx + 1;
					for (Re int k = toy; k >= fry; -- k)
					{
						nico = min (nico, lin[tox][k]);
						ans[frx][fry][tox][toy] += nico;
					}
				}
			}
		}
	}
	
	while (_ --) writelen (ans[read()][read()][read()][read()]);
```