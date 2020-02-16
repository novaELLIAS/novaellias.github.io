---
title: 倍增 洛谷P1967 货车运输
tags: [Template,倍增,生成树,并查集]
mathjax: true
cover: false
donate: true
date: 2018-11-09 21:20:49
categories: Olympiad in Informatics
---

NOIp2018 day-1
RP倍增祈愿
[luogu P1967](https://www.luogu.org/problemnew/show/P1967)

<!--more-->

```cpp
// luogu-judger-enable-o2
#pragma GCC optimize ("inline")
#pragma GCC optimize ("-fgcse")
#pragma GCC optimize ("-fgcse-lm")
#pragma GCC optimize ("-fipa-sra")
#pragma GCC optimize ("-ftree-pre")
#pragma GCC optimize ("-ftree-vrp")
#pragma GCC optimize ("-fpeephole2")
#pragma GCC optimize ("-ffast-math")
#pragma GCC optimize ("-fsched-spec")
#pragma GCC optimize ("unroll-loops")
#pragma GCC optimize ("-falign-jumps")
#pragma GCC optimize ("-falign-loops")
#pragma GCC optimize ("-falign-labels")
#pragma GCC optimize ("-fdevirtualize")
#pragma GCC optimize ("-fcaller-saves")
#pragma GCC optimize ("-fcrossjumping")
#pragma GCC optimize ("-fthread-jumps")
#pragma GCC optimize ("-funroll-loops")
#pragma GCC optimize ("-freorder-blocks")
#pragma GCC optimize ("-fschedule-insns")
#pragma GCC optimize ("inline-functions")
#pragma GCC optimize ("-ftree-tail-merge")
#pragma GCC optimize ("-fschedule-insns2")
#pragma GCC optimize ("-fstrict-aliasing")
#pragma GCC optimize ("-falign-functions")
#pragma GCC optimize ("-fcse-follow-jumps")
#pragma GCC optimize ("-fsched-interblock")
#pragma GCC optimize ("-fpartial-inlining")
#pragma GCC optimize ("no-stack-protector")
#pragma GCC optimize ("-freorder-functions")
#pragma GCC optimize ("-findirect-inlining")
#pragma GCC optimize ("-fhoist-adjacent-loads")
#pragma GCC optimize ("-frerun-cse-after-loop")
#pragma GCC optimize ("inline-small-functions")
#pragma GCC optimize ("-finline-small-functions")
#pragma GCC optimize ("-ftree-switch-conversion")
#pragma GCC optimize ("-foptimize-sibling-calls")
#pragma GCC optimize ("-fexpensive-optimizations")
#pragma GCC optimize ("inline-functions-called-once")
#pragma GCC optimize ("-fdelete-null-pointer-checks")
#pragma GCC optimize ("Ofast", 3)
#pragma GCC target ("sse3","sse2","sse")
#pragma GCC target ("avx","sse4","sse4.1","sse4.2","ssse3")
#pragma GCC target ("f16c")

#include <cstdio>
#include <algorithm>

using std::sort;

#define Re register
#define maxn 100001
#define maxe 50001
#define swap(x,y) ((x)^=(y)^=(x)^=(y))

const int ELAS = 1<<14;
static char buf[ELAS],*p1=buf,*p2=buf;
inline char gc()
{
    return (p1==p2)&&(p2=(p1=buf)+fread(buf,1,ELAS,stdin),p1==p2)?EOF:*p1++;
}
inline int read ()
{
    register int x = 0; register char c = gc(); register bool m = 0;
    while ((c < '0' || c > '9') && (c ^ '-')) c = gc();
    if (c == '-') c = gc(), m = true;
    while (c>='0'&&c<='9') x = (x << 3) + (x << 1) + (c ^ '0'), c = gc();
    return m? -x:x;
}
static void write (int x)
{
    if (x > 9) write (x / 10);
    putchar (x % 10 + 48);
}
static void writelen (int x) {if(x<0)x=-x,putchar('-'); write (x); putchar ('\n');}

inline const int& min (const int& a, const int& b) {return a<b? a:b;}

struct node {
    int fr, to, va;
} edge[maxe];

inline bool cmp (node a, node b)
{
    return a.va > b.va;
}

int head[maxn], nxt[maxn], too[maxn], wei[maxn], ecnt;

inline void addedge_d (Re int fr, Re int to, Re int va)
{
    nxt[++ ecnt]=head[fr], head[fr]=ecnt, too[ecnt]=to, wei[ecnt]=va;
    nxt[++ ecnt]=head[to], head[to]=ecnt, too[ecnt]=fr, wei[ecnt]=va;
}

int fa[maxn];

inline int find (register int x)
{
    while (x ^ fa[x]) x = fa[x] = fa[fa[x]];
    return x;
}

inline void Kruskal (Re int n, Re int m)
{
    register int i, j, fr, to, va, ffr, fto;
    for (i=1; i<=m; ++i)
    {
        fr=edge[i].fr, to=edge[i].to, ffr=find(fr), fto=find(to);
        if (ffr ^ fto) addedge_d (fr, to, edge[i].va), fa[ffr]=fto;
    }
}

int fl[maxn];
int ex[maxn][18], ew[maxn][18];

static void build_tree (Re int x, Re int dep)
{
    register int i, j, to, va;
    if (!fl[x])
    {
        fl[x] = dep;
        for (i=head[x]; i; i=nxt[i])
        {
            to=too[i], va=wei[i];
            if (!fl[to])
            {
                ex[to][0] = x, ew[to][0] = va;
                build_tree (to, dep + 1);
            }
        }
    }
}

inline void build_forest (Re int n)
{
    register int i, j, fr, to, va;
    for (i=1; i<=n; ++i)
        if (!fl[i]) {
            ew[i][0] = 0x3f3f3f3f, ex[i][0] = i;
            build_tree (i, 1);
        }
}

inline void lca_init (Re int n)
{
    register int i, j;
    for (i=1; i<=17; ++i)
    {
        for (j=1; j<=n; ++j)
        {
            ex[j][i] = ex[ex[j][i-1]][i-1];
            ew[j][i] = min (ew[ex[j][i-1]][i-1], ew[j][i-1]);
        }
    }
}

inline int get_lca (Re int fr, Re int to)
{
    if (find(fr) ^ find(to)) return -1;
    register int ret=0x3f3f3f3f, i, j;
    if (fl[fr] > fl[to]) swap (fr, to);
    
    for (i=17; i>=0; --i)
        if (fl[ex[to][i]] >= fl[fr])
            ret=min (ret, ew[to][i]), to=ex[to][i];
    
    if (fr == to) return ret;
    
    for (i=17; i>=0; --i)
    {
        if (ex[fr][i] ^ ex[to][i])
        {
            ret = min (ret, min (ew[to][i], ew[fr][i]));
            to=ex[to][i], fr=ex[fr][i];
        }
    }
    
    ret=min(ret,min(ew[fr][0], ew[to][0]));
    
    return ret;
}

signed main ()
{
    register int i, j, fr, to, va;
    register int n=read(), m=read();
    for (i=1; i<=n; ++i) fa[i] = i;
    for (i=1; i<=m; ++i)
    {
        fr=read(), to=read(), va=read();
        edge[i] = {fr, to, va};
    } sort (edge+1, edge+m+1, cmp);
    Kruskal (n, m);
    build_forest (n);
    lca_init (n);
    register int _ = read ();
    while (_ --) writelen (get_lca(read(), read()));
    return 0;
}
```