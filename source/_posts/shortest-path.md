---
title: 最短路模板
abbrlink: 9487
donate: true
date: 2017-12-05 14:47:00
cover: false
tags: 
	- Template
	- 最短路

categories: Olympiad in Informatics
---
>SPFA 堆优化迪杰斯特拉
>C++模板

<!--more-->

### SPFA

[Luogu P3371](https://www.luogu.org/problemnew/show/P3371)

```cpp
#pragma G++ optimize (3)

#include <cstdio>

const int ELAS = 1<<14;
static char buf[ELAS],*p1=buf,*p2=buf;
inline char gc()
{
	return (p1==p2)&&(p2=(p1=buf)+fread(buf,1,ELAS,stdin),p1==p2)?EOF:*p1++;
}
inline long long read ()
{
	register long long x = 0; register char c = gc(); register bool m = false;
	while ((c < '0' || c > '9') && c ^ '-') c = gc();
	if (c == '-') m = true, c = gc();
	while (c>='0'&&c<='9') x = (x<<3) + (x<<1) + (c^'0'), c = gc();
	return m? -x:x;
}
static void write (long long x)
{
	if (x > 9) write (x / 10);
	putchar (x % 10 + 48);
}
inline const int& min (const int& a, const int& b) {return a<b? a:b;}

#define Re register
#define maxn 10001
#define maxm 500001

int head[maxn], nxt[maxm], too[maxm], ecnt;
long long wei[maxm], dis[maxn];
int que[maxm*100 + 100];
bool vis[maxn];

signed main ()
{
	register int n = read (), m = read (), sta = read ();
	for (Re int i = 1; i <= n; ++ i) dis[i] = 2147483647;
	register int fr, to, va;
	while (m --)
	{
		fr = read (), to = read (), va = read ();
		nxt[++ ecnt] = head[fr], head[fr] = ecnt, too[ecnt] = to, wei[ecnt] = va;
	}
	dis[sta] = 0;
	
	register int hd = 0, tl = 1; que[tl] = sta;
	while (hd < tl)
	{
		fr = que[++ hd], vis[fr] = false;
		for (Re int i = head[fr]; i; i = nxt[i])
		{
			to = too[i], va = wei[i];
			if (dis[to] > dis[fr] + va)
			{
				dis[to] = dis[fr] + va;
				if (!vis[to]) vis[to] = true, que[++ tl] = to;
			}
		}
	}
	for (Re int i = 1; i <= n; ++ i)
	{
		if (dis[i]<0) dis[i] = -dis[i], putchar ('-');
		write (dis[i]), putchar (' ');
	}
	return 0;
}
```

### 堆优化迪杰斯特拉

[Luogu P4779](https://www.luogu.org/problemnew/show/P4779)

#### OLD (2017)

```cpp
#pragma G++ optimize (3)
#pragma GCC optimize ("Ofast", 3)
#pragma GCC target ("avx","sse2")

#include <stdio.h>
#include <ctype.h>
#include <ext/pb_ds/priority_queue.hpp>

using namespace std;
using namespace __gnu_pbds;

#define maxn 100001
#define maxm 200001
#define inff 2147483647


inline int read () {
    int x = 0; char c = getchar(); bool m = false;
    while (!isdigit(c) && c != '-') c = getchar();
    if (c == '-') c = getchar(), m = true;
    while (isdigit(c)) x = x * 10 + c - 48, c = getchar();
    if (m) return -x;
    else return x;
}

inline void fastwrite (int x) {
    if(x < 0) x = -x, putchar('-');
    if(x > 9) fastwrite(x / 10);
    putchar(x%10 + '0');
}
inline void fastwritespace (int x) {
    fastwrite(x);
    putchar(' ');
}

struct node {
    int val, name;
};

struct cmp {
    inline bool operator() (const node& aa, const node& bb) {
        return aa.val > bb.val;
    }
};

int n, m, s, fro, to, w;
int dis[maxn];
bool visit[maxn];
vector <pair <int, int> > data[maxn];
__gnu_pbds::priority_queue <node, cmp, pairing_heap_tag> nico;

int main () {
    n = read (), m = read (), s = read ();

    for (int i = 1; i <= m; i ++)
    {
        fro = read (), to = read (), w = read ();
        data[fro].push_back (make_pair (to, w));
    }

    for (int i = 1; i <= n; i ++) dis[i] = inff;
    dis[s] = 0;
    nico.push ((node) {
        0, s
    });
    
    while (!nico.empty ()) {
        fro = nico.top ().name;
        nico.pop ();
        if (visit[fro]) continue;
        visit[fro] = true;
        for (int i = 0; i < data[fro].size (); i ++) {
            to = data[fro][i].first;
            w = data[fro][i].second;
            if (!visit[to] && dis[fro] + w < dis[to]) {
                dis[to] = dis[fro] + w;
                nico.push ((node) {
                    dis[to], to
                });
            }
        }
    }

    for (int i = 1; i <= n; i ++) fastwritespace (dis[i]);

    return 0;
}
```

#### NEW(2018/11/5)

```c++

#pragma G++ optimize (3)

#include <cstdio>
#include <cstring>
#include <queue>

using std::priority_queue;

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
static void write (int x)
{
	if (x > 9) write (x / 10);
	putchar (x % 10 + 48);
}
static void nwrite (int x) {write (x); putchar (' ');}

#define maxn 100001
#define maxm 200001
#define Re register

struct node {
	int id, val;
	friend bool operator < (node a, node b) {
		return a.val > b.val;
	}
};

priority_queue <node> que;
int head[maxn], wei[maxm], too[maxm], nxt[maxm], ecnt;
bool vis[maxn];
int dis[maxn];

signed main ()
{
	register int n = read (), m = read (), sta = read ();
	register int fr, to, va;
	while (m --)
	{
		fr = read (), nxt[++ ecnt] = head[fr],\
		head[fr] = ecnt, too[ecnt] = read (), wei[ecnt] = read ();
	}
	
	memset (dis, 0x3f3f3f3f, sizeof dis); dis[sta] = 0;
	que.push ({sta, 0});
	
	while (!que.empty ())
	{
		fr = que.top ().id, que.pop ();
		if (!vis[fr])
		{
			vis[fr] = true;
			for (Re int i = head[fr]; i; i = nxt[i])
			{
				to = too[i], va = wei[i];
				if (dis[fr] + va < dis[to])
				{
					dis[to] = dis[fr] + va;
					que.push ({to, dis[to]}); 
				}
			}
		}
	}
	
	for (Re int i = 1; i <= n; ++ i) nwrite (dis[i]);
	return 0;
}
```