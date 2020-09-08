---
title: SP2916 GSS5 - Can you answer these queries V
tags:
	- GSS
	- segment tree
mathjax: true
abbrlink: 1074
categories: Olympiad in Informatics
cover: false
donate: true
date: 2018-11-02 10:08:23
---

> GSS4 - Can you answer these queries V
> [Luogu](https://www.luogu.org/problemnew/show/SP2916)
> [Vjudge](https://vjudge.net/problem/SPOJ-GSS5)

<!--more-->

``` cpp
#pragma GCC optimize (2)
#pragma G++ optimize (2)
#pragma GCC optimize (3)
#pragma G++ optimize (3)
#pragma GCC optimize ("Ofast")
#pragma GCC target ("sse3","sse2","sse")
#pragma GCC target ("avx","sse4","sse4.1","sse4.2","ssse3")
#pragma GCC target ("f16c")
#pragma G++ target ("sse3","sse2","sse")
#pragma G++ target ("avx","sse4","sse4.1","sse4.2","ssse3")
#pragma G++ target ("f16c")

#include <cstdio>

const int ELAS = 1<<14;
static char buf[ELAS], *p1 = buf, *p2 = buf;
inline char gc()
{
    return (p1==p2)&&(p2=(p1=buf)+fread(buf,1,ELAS,stdin),p1==p2)?EOF:*p1++;
}
inline long long read ()
{
    register long long x = 0; register char c = gc(); register bool m = 0;
    while (c < '0' || c > '9') {if (c == '-') m = true; c = gc();}
    while (c>='0'&&c<='9') x = (x << 3) + (x << 1) + (c ^ '0'), c = gc();
    return m? -x:x;
}
static void write (long long x)
{
    if (x > 9) write (x / 10);
    putchar (x % 10 + 48);
}
static void writelen (long long x)
{
    if (x < 0ll) putchar('-'), x = -x;
    write (x), putchar ('\n');
}

#define Re register
#define maxn 10001
#define dmax 40001
#define swap(x,y) ((y)^=(x)^=(y)^=(x)) 

struct node {
    int l, r;
    long long sum, lmax, rmax, dat;
} tr[dmax], null;

inline const long long& max (const long long& x,const long long& y) {return x>y? x:y;}

inline void update (int rt)
{
    register int lson = rt<<1, rson = rt<<1|1;
    tr[rt].sum = tr[lson].sum + tr[rson].sum;
    tr[rt].lmax= max (tr[lson].lmax, tr[lson].sum + tr[rson].lmax);
    tr[rt].rmax= max (tr[rson].rmax, tr[rson].sum + tr[lson].rmax);
    tr[rt].dat = max (max(tr[lson].dat, tr[rson].dat), tr[lson].rmax + tr[rson].lmax);
}

static void build (int rt, int l, int r) {
    tr[rt].l = l, tr[rt].r = r;
    if (l == r) {tr[rt].dat = tr[rt].sum = tr[rt].lmax = tr[rt].rmax = read (); return;}
    register int mid = (l + r) >> 1;
    build (rt<<1, l, mid), build (rt<<1|1, mid + 1, r);
    update (rt);
}

static node query (int rt, int ql, int qr) {
    register int l = tr[rt].l, r = tr[rt].r;
    if (ql > qr) return null;
    if (ql <= l && qr >= r) return tr[rt];
    register int mid = (l + r) >> 1;
    if (ql >  mid) return query (rt<<1|1,ql,qr);
    if (qr <= mid) return query (rt<<1, ql, qr);
    else
    {
        register node ret, a, b;
        a = query (rt<<1, ql, qr), b = query (rt<<1|1, ql, qr);
        ret.sum = a.sum + b.sum;
        ret.dat = max (a.dat, a.rmax + b.lmax), ret.dat = max (ret.dat, b.dat);
        ret.lmax= max (a.lmax, a.sum + b.lmax), ret.rmax= max (b.rmax, b.sum + a.rmax);
        return ret;
    }
}

static void modify (int rt, int to, long long val)
{
    if (tr[rt].l == tr[rt].r) {tr[rt].sum = tr[rt].lmax = tr[rt].rmax = tr[rt].dat = val; return;}
    register int mid = (tr[rt].l + tr[rt].r) >> 1;
    if (to <= mid) modify (rt<<1, to, val);
    else modify (rt<<1|1, to, val);
    update(rt);
}

int main() {
    register int _ = read ();
    register int x1, y1, x2, y2;
    register int n, m;
    register node a, b, c;
    register long long tmp;
    register char opt;
    while (_ --)
    {
        n = read ();//, m = read ();
        build (1, 1, n);
        m = read ();
        while (m --)
        {
            //opt = 'z';
            //while ((opt ^ 'C') && (opt ^ 'Q')) opt = gc();
            //if (opt ^ 'C')
            {
                x1 = read (), y1 = read (), x2 = read (), y2 = read ();
                if (y1<x1) swap(x1,y1); if (y2<x2) swap(x2,y2);
                if (x1>y2) swap(x1,x2), swap(y1,y2);
                if (y1 < x2) {
                    writelen (max(query(1,x1,y1-1).rmax, 0) + query(1,y1,x2).sum + max(query(1,x2+1,y2).lmax, 0));
                } else {
                    a = query (1, x2, y1), b = query(1,x1,x2-1), c = query(1,y1+1,y2);
                    tmp = a.dat;
                    tmp = max (tmp, a.lmax + b.rmax);
                    tmp = max (tmp, c.lmax + a.rmax);
                    tmp = max (tmp, a.sum + max(0, b.rmax) + max(0, c.lmax));
                    writelen (tmp);
                }
            } //else {x1 = read (), tmp = read (); modify (1, x1, tmp);}
        }
    }
    
    
    return 0;
}
```