---
title: UVA1714 Keyboarding
mathjax: true
cover: false
donate: true
date: 2018-08-31 22:41:16
categories: Olympiad in Informatics
---

> ACM-ICPC World Final: UVA1714 Keyboarding

<!--more-->

### NULL

这道题居然是`ACM-ICPC World Final`的题目

#### Description

给定一个r行c列的在屏幕上的“虚拟键盘”，我们需要通过“上，下，左，右，选择”5个控制键来移动屏幕上的光标来打印文本。一开始，光标在键盘的左上 角，每次按方向键，光标总是跳到下一个在该方向上与当前位置不同的字符，若不存在则不移动。每次按选择键，则将光标所在位置的字符打印出来。
现在求打印给定文本（要在结尾打印换行符）的最少按键次数。

#### Input

第一行输入${r,c(1≤r,c≤50)}$

接下来给出一个 ${r* c}$ 的键盘，包括大写字母，数字，横线以及星号（星号代表${Enter}$换行） 最后一行是要打印的文本串s，s的长度不超过10000.

#### Output

输出打印文本（包括结尾换行符）的最少按键次数。保证一定有解。

Sample Input

2 19

ABCDEFGHIJKLMNOPQZY

X*****Y

AZAZ

Sample Output

19


注:　部分内容被省略　数据可能有多组

### EINS

用`nxt[][]`维护向四个方向能到的第一个非当前点字符的位置

BFS容器维护四个值:`nowx` 当前x坐标 `nowy` 当前y坐标 `ste` 当前有效字符长度 `sum` 总步数

先查看当前扩展的字符是否有效,有效则直接入队,判断是否结束,无效则考虑向周围移动.

### ZWEI
直接上代码
* `next` 处理部分
```cpp
for (rint i = 1; i <= n; i ++)
		{
			for (rint j = 1; j <= m; j ++)
			{
				ch = dat[i][j];

				if (dat[i-1][j] != ch) nxt[i][j][0] = make_pair (i-1, j);
				else nxt[i][j][0] = nxt[i-1][j][0];

				for (rint k = i + 1; k <= n; k ++)
				{
					if (dat[k][j] != ch) {nxt[i][j][1] = make_pair (k, j); break;}
				}

				if (dat[i][j-1] != ch) nxt[i][j][2] = make_pair (i, j-1);
				else nxt[i][j][2] = nxt[i][j-1][2];

				for (rint k = j + 1; k <= m; k ++)
				{
					if (dat[i][k] != ch) {nxt[i][j][3] = make_pair (i, k); break;}
				}
			}
		}
```
左和上直接继承,右侧暴力枚举,顺便更新路过的点也可以,但是~~我太菜了~~没写

* 比较基本的BFS
```cpp
		while (!que.empty())
		{
			fr = que.front(), que.pop ();
			nowx = fr.x, nowy = fr.y, nste = fr.ste, nsum = fr.sum;
			if (dat[nowx][nowy] == s[nste + 1])
			{
				que.push ((node) {nowx, nowy, nste + 1, nsum + 1});
				if (nste + 1 == lens) {printf ("%d\n", nsum + 1); break;}
			}
			else
			{
				for (rint i = 0; i <= 3; i ++)
				{
					gox = nxt[nowx][nowy][i].first, goy = nxt[nowx][nowy][i].second;
					if(!gox || !goy) continue;
					if (vis[gox][goy] < nste) { vis[gox][goy] = nste; que.push ((node){gox, goy, nste, nsum + 1});}
				}
			}
		}
```


### DREI
#### 注意事项
* 可能有多组数据
* 最后不要忘记打空格
* 小心字符串的输入和各种换行符
* 留心初始化

### VIER
最后,祝大家 `RP ++`