---
title: 洛谷 线段树模板
tags: 
	- Template
	- segment tree
abbrlink: 36827
donate: true
cover: false
date: 2018-6-08 19:29:26
categories: Olympiad in Informatics
---
>洛谷 线段树1 线段树2 模板

<!--more-->

### P3372 [模板] 线段树 1

[Luogu P3372 线段树加](https://www.luogu.org/problemnew/show/P3372)

```cpp
#pragma GCC optimize (2)
//...略
#pragma GCC target ("f16c")

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
	while ((c < '0' || c > '9') && (c ^ '-')) c = gc();
	if (c == '-') m = true, c = gc ();
	while (c>='0'&&c<='9') x = (x<<3) + (x<<1) + (c^'0'), c = gc();
	return m? -x:x;
}
static void write (long long x)
{
	if (x > 9) write (x / 10);
	putchar (x % 10 + 48);
}
static void writelen (long long x) {if(x<0)x=-x,putchar('-'); write (x); putchar ('\n');}

#define Re register
#define maxn 100001
#define dmax 400001
typedef long long ll;
#define swap(x,y) ((x)^=(y)^=(x)^=(y))

struct SMT {
	int l, r;
	long long sum, tag;
} tr[dmax];

inline void update (Re int rt) {
	tr[rt].sum = tr[rt<<1].sum + tr[rt<<1|1].sum;
}

static void build (Re int rt, Re int l, Re int r)
{
	tr[rt].l = l, tr[rt].r = r;
	if (l == r) {tr[rt].sum = read(); return;}
	register int mid = (l + r) >> 1;
	build (rt<<1, l, mid), build (rt<<1|1, mid+1, r);
	update (rt);
}

inline void pushdown (Re int rt)
{
	if (rt > 200000 || !tr[rt].tag) return;
	register int ls = rt<<1, rs = rt<<1|1;
	tr[ls].tag += tr[rt].tag, tr[rs].tag += tr[rt].tag;
	tr[ls].sum += tr[rt].tag * (tr[ls].r - tr[ls].l + 1),
	tr[rs].sum += tr[rt].tag * (tr[rs].r - tr[rs].l + 1);
	tr[rt].tag = 0;
}

static void modify (Re int rt, Re int l, Re int r, Re ll val)
{
	register int L = tr[rt].l, R = tr[rt].r;
	if (l <= L && R <= r) {
		tr[rt].sum += val * (R - L + 1), tr[rt].tag += val;
		return;
	} register int mid = (L + R) >> 1; pushdown (rt);
	if (l <= mid) modify (rt<<1, l, r, val);
	if (r  > mid) modify (rt<<1|1,l,r, val);
	update (rt);
}

static long long query (Re int rt, Re int l, Re int r)
{
	register int L = tr[rt].l, R = tr[rt].r;
	if (l <= L && R <= r) return tr[rt].sum;
	pushdown (rt); register int mid = (L+R)>>1;
	register long long ret = 0;
	if (l <= mid) ret  = query (rt<<1, l, r);
	if (r  > mid) ret += query (rt<<1|1,l,r);
	return ret;
}

signed main ()
{
	register int n=read(), m=read();
	register int opt, x, y;
	register long long z;
	build (1, 1, n);
	while (m --)
	{
		opt=read(), x=read(), y=read();
		if (x > y) swap (x, y);
		if (opt == 2) writelen (query (1, x, y));
		else z = read (), modify (1, x, y, z);
	}
	return 0;
}
```

### P3373 [模板]线段树 2

[Luogu P3372 加 乘](https://www.luogu.org/problemnew/show/P3373)

```cpp
#pragma GCC optimize (2)
//..略
#pragma GCC target ("f16c")

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
	while ((c < '0' || c > '9') && (c ^ '-')) c = gc();
	if (c == '-') m = true, c = gc ();
	while (c>='0'&&c<='9') x = (x<<3) + (x<<1) + (c^'0'), c = gc();
	return m? -x:x;
}
static void write (long long x)
{
	if (x > 9) write (x / 10);
	putchar (x % 10 + 48);
}
static void writelen (long long x) {if(x<0)x=-x,putchar('-'); write (x); putchar ('\n');}

inline long long mul_mod (register long long a,register long long b,register long long mo) {
	register long long ret;
	__asm__ __volatile__ ("\tmull %%ebx\n\tdivl %%ecx\n" : "=d"(ret):"a"(a),"b"(b),"c"(mo));
	return ret;
}

#define Re register
#define maxn 100001
#define dmax 400001
typedef long long ll;
#define swap(x,y) ((x)^=(y)^=(x)^=(y))
#define mod(x) (((x)%modn+modn)%modn)
long long modn;

struct SMT {
	int l, r;
	long long sum, add, mul;
} tr[dmax];

inline void update (Re int rt) {
	tr[rt].sum = tr[rt<<1].sum + tr[rt<<1|1].sum;
}

static void build (Re int rt, Re int l, Re int r)
{
	tr[rt] = {l, r, 0ll, 0ll, 1ll};
	if (l == r) {tr[rt].sum = read()%modn; return;}
	register int mid = (l + r) >> 1;
	build (rt<<1, l, mid), build (rt<<1|1, mid+1, r);
	update (rt);
}

inline void pushdown (Re int rt)
{
	if (rt > 200000 || (!tr[rt].add && tr[rt].mul == 1ll)) return;
	register int ls = rt << 1, rs = rt << 1 | 1;
	tr[ls].mul = mul_mod (tr[ls].mul, tr[rt].mul, modn);
	tr[rs].mul = mul_mod (tr[rs].mul, tr[rt].mul, modn);
	tr[ls].add = mod (mul_mod (tr[ls].add , tr[rt].mul, modn) + tr[rt].add);
	tr[rs].add = mod (mul_mod (tr[rs].add, tr[rt].mul, modn) + tr[rt].add);
	tr[ls].sum = mod (mul_mod (tr[ls].sum, tr[rt].mul, modn) + mul_mod (tr[rt].add, (tr[ls].r - tr[ls].l + 1), modn));
	tr[rs].sum = mod (mul_mod (tr[rs].sum, tr[rt].mul, modn) + mul_mod (tr[rt].add, (tr[rs].r - tr[rs].l + 1), modn));
	tr[rt].add = 0ll, tr[rt].mul = 1ll;
}

// opt==1: mul opt==2: add
static void modify (Re int rt, Re int l, Re int r, Re ll val, Re int opt)
{
	register int L = tr[rt].l, R = tr[rt].r;
	if (l <= L && R <= r) {
		if (opt == 2) {
			tr[rt].add = mod (tr[rt].add + val),\
			tr[rt].sum = mod (tr[rt].sum + mul_mod (val, (R - L + 1), modn));
			return;
		} else {
			tr[rt].mul = mul_mod (tr[rt].mul, val, modn),\
			tr[rt].sum = mul_mod (tr[rt].sum, val, modn),\
			tr[rt].add = mul_mod (tr[rt].add, val, modn);
			return;
		}
	} pushdown (rt); register int mid = (L + R) >> 1;
	if (l <= mid) modify (rt<<1, l, r, val, opt);
	if (r  > mid) modify (rt<<1|1,l,r, val, opt);
	update (rt);
}

static long long query (Re int rt, Re int l, Re int r)
{
	register int L = tr[rt].l, R = tr[rt].r;
	if (l <= L && R <= r) return tr[rt].sum;
	pushdown (rt); register int mid = (L+R)>>1;
	register long long ret = 0;
	if (l <= mid) ret  = query (rt<<1, l, r);
	if (r  > mid) ret += query (rt<<1|1,l,r);
	return ret % modn;
}

signed main ()
{
	register int n=read(), m=read(); modn=read();
	register int opt, x, y;
	register long long z;
	build (1, 1, n);
	while (m --)
	{
		opt=read(), x=read(), y=read();
		if (x > y) swap (x, y);
		if (opt == 3) writelen (query (1,x,y));
		else z=read()%modn,modify(1,x,y,z,opt);
	}
	return 0;
}
```

