---
title: Nescafé17 守卫者的挑战
tags:
	- contest
	- DP
mathjax: true
abbrlink: 1074
cover: false
donate: true
date: 2018-11-02 10:08:23
categories: Olympiad in Informatics
---

>Nescafé17 守卫者的挑战

<!--more-->

## 守卫者的挑战 



### [Description]

打开了黑魔法师Vani的大门,队员们在迷宫般的路上漫无目的地搜寻着关押applepi的监狱的所在地.突然,眼前一道亮光闪过.“我,Nizem,是黑魔法圣殿的守卫者.如果你能通过我的挑战,那么你可以带走黑魔法圣殿的地图……”瞬间,队员们被传送到了一个擂台上,最初身边有一个容量为K的包包.

擂台赛一共有项挑战,各项挑战依次进行.第项挑战有一个属性ai,如果ai≥0,表示这次挑战成功后可以再获得一个容量为ai的包包；如果ai = -1,则表示这次挑战成功后可以得到一个大小为 1 的地图残片.地图残片必须装在包包里才能带出擂台,包包没有必要全部装满,但是队员们必须把获得的所有的地图残片都带走（没有得到的不用考虑,只需要完成所有N项挑战后背包容量足够容纳地图残片即可）,才能拼出完整的地图.并且他们至少要挑战成功L次才能离开擂台.

队员们一筹莫展之时,善良的守卫者Nizem帮忙预估出了每项挑战成功的概率,其中第i项挑战成功的概率为pi%.现在，请你帮忙预测一下，队员们能够带上他们获得的地图残片离开擂台的概率.

### [Data Size]

对于 100% 的数据,保证 $ 0≤K≤2000$ , $ 0≤N≤200$ , $-1≤ai≤1000$ , $0≤L≤N$ , $0≤pi≤100$ .

### [Solution]

刚看到此题时,我被那个概率吓得半死.但看了数据范围,此题就是一道很简单的水题了.

对于可以赢l把以上并且背包不会溢出的概率 $P_0$ ,通过枚举结束时的背包容量和赢的次数快速求出:

$$ P_0=\sum_{i=l}^{n}\sum_{j=0}^{K}P_{i, j} $$

而 $P_{i, j}$ 可以通过刷表法 $O(n^2K)≈8*10^7$ 地求出:

定义状态 $dp[i][j][k]$ 代表达到第$i$场胜$j$场背包容量为$k$时的概率,转移方程很显然为本次成功的概率和本次失败的概率之和:

```C++
	dp[i][j][k] += dp[i-1][j][k] * (1 - dat[i].dat);
	if ((tmp = min (K + dat[i].opt, n)) < 0) continue;
	dp[i][j+1][tmp] += dp[i-1][j][k] * dat[i].dat;
```

这个时间复杂度看起来很悬,未免会有稍作优化的想法.本题K的范围2000,但是真的需要2000吗?共有N项挑战,对于每一项挑战最多可以获得一块地图残片,所以背包实际的最大容量就是N次挑战中所有类型-1的数量,极限情况下是n,这样复杂度就会降到 $O(n^3)$, 较为稳妥.

### [Code]

考场代码,写得略丑,请谅解.

```cpp
#pragma G++ optimize (3)

#include <cstdio>
#include <algorithm>

const int ELAS = 1<<14;
static char buf[ELAS],*p1=buf,*p2=buf;
inline char gc()
{
    return (p1==p2)&&(p2=(p1=buf)+fread(buf,1,ELAS,stdin),p1==p2)?EOF:*p1++;
}
inline int read ()
{
	register int x = 0; register char c = gc(); register bool m = false;
	while ((c < '0' || c > '9') && (c ^ '-')) c = gc();
	if (c == '-') m = true, c = gc ();
	while (c>='0'&&c<='9') x = (x<<3) + (x<<1) + (c^'0'), c = gc();
	return m? -x:x;
}
inline double getdou ()
{
	register double x=0; register char c = gc ();
	while (c < '0' || c > '9') c = gc();
	while (c>='0'&&c<='9') x = x * 10 + (c^'0'), c = gc();
	if (c == '.')
	{
		register double s = 0.1, c = gc ();
		while (c>='0'&&c<='9') x = x + (c-'0')*s, s/=10, c = gc ();
	}
	return x;
}

inline const int& min (const int& a, const int& b){return a<b? a:b;}

#define Re register

struct node {
	int opt;
	double dat;
} dat[201];

inline bool cmp (node a, node b) {return a.opt > b.opt;}
double dp[201][201][201];

signed main ()
{
	freopen ("guard.in", "r", stdin);
	freopen ("guard.out","w",stdout);
	
	register int n = read (), l = read (), k = read (), tmp;
	for (Re int i = 1; i <= n; ++ i) dat[i].dat = getdou()/100;
	for (Re int i = 1; i <= n; ++ i) dat[i].opt = read ();
	std::sort (dat + 1, dat + n + 1, cmp);
	
	dp[0][0][min(n, k)] = 1.0;
	for (Re int i = 1; i <= n; ++ i)
	{
		for (Re int j = 0; j <= i; ++ j)
		{
			for (Re int K = 0; K <= n; ++ K)
			{
				dp[i][j][K] += dp[i-1][j][K] * (1 - dat[i].dat);
				if ((tmp = min (K + dat[i].opt, n)) < 0) continue;
				dp[i][j+1][tmp] += dp[i-1][j][K] * dat[i].dat;
			}
		}
	}
	
	register double ans = 0.0;
	for (Re int i = l; i <= n; ++ i)
		for (Re int j = 0; j <= n; ++ j)
			ans += dp[n][i][j];
	printf ("%.6lf", ans);
	
	fclose (stdin), fclose (stdout);
	return 0;
}
```

Cena评测$0.03s$,效率还是可以的.
![guard](https://novaellias.files.wordpress.com/2018/11/guard.png)