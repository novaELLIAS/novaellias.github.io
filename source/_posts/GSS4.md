---
title: SP2713 GSS4 - Can you answer these queries IV
tags:
	- GSS
	- segment tree
mathjax: true
abbrlink: 1074
cover: false
donate: true
categories: Olympiad in Informatics
date: 2018-11-02 10:08:23
---

> GSS4 - Can you answer these queries IV
> [Luogu](https://www.luogu.org/problemnew/show/SP2713)
> [Vjudge](https://vjudge.net/problem/SPOJ-GSS4)

<!--more-->

``` cpp
#pragma G++ optimize ("Ofast", 3)
#pragma GCC optimize ("Ofast", 3)
#pragma GCC target ("sse3","sse2","sse")
#pragma GCC target ("avx","sse4","sse4.1","sse4.2","ssse3")
#pragma GCC target ("f16c")
#pragma G++ target ("sse3","sse2","sse")
#pragma G++ target ("avx","sse4","sse4.1","sse4.2","ssse3")
#pragma G++ target ("f16c")

#include <stdio.h>
#include <ctype.h>
#include <math.h>

#define root 1,1,n
#define lson rt<<1,l,mid
#define rson rt<<1|1,mid+1,r
#define swap(x,y) y^=x^=y^=x
#define maxn 100001 
#define dmax 400001
#define rint register int
#define ll long long

namespace fastIO {
    const int str=1<<20;
    const char* endll="\n";
    struct Reader {
        char buf[str],*s,*t;
        bool EOF_FLG;
        Reader():s(buf),t(buf),EOF_FLG(false) {};
        inline char gt() {
            return s==t&&((t=(s=buf)+fread(buf,1,str,stdin))==s)?EOF:(*s++);
        }
        #define gt() getchar() 
        template<typename T>Reader&operator>>(T&x) {
            if(EOF_FLG)return *this;
            register char c=0,d;
            while(c!=EOF&&!isdigit(c))d=c,c=gt();
            if(c==EOF) {
                EOF_FLG=true;
                return *this;
            } else x=0;
            while(isdigit(c))x=(x<<3)+(x<<1)+c-'0',c=gt();
            if(d=='-')x=-x;
            return *this;
        }
    } cin;
    struct Writer {
        char buf[str],*s,*t;
        Writer():s(buf),t(buf+str) {}
        ~Writer() {
            fwrite(buf,1,s-buf,stdout);
        }
        inline void pt(char c) {
            (s==t)?(fwrite(s=buf,1,str,stdout),*s++=c):(*s++=c);
        }
        #define pt(c) putchar(c)
        template<typename T>Writer&operator<<(T x) {
            if(!x)return pt('0'),*this;
            if(x<0)pt('-'),x=-x;
            register char a[30],t=0;
            while(x)a[t++]=x%10,x/=10;
            while(t--)pt(a[t]+'0');
            return *this;
        }
        Writer&operator<<(const char*s) {
            while(*s)pt(*s++);
            return *this;
        }
    } cout;
}

using namespace fastIO;

struct TreeNode {
    int l, r;
    long long sum, mxx;
} dat[dmax];
long long in;

inline const long long& max (const long long& x,const long long& y) {return x>y? x:y;}

inline void update (int rt)
{
    dat[rt].sum = dat[rt<<1].sum + dat[rt<<1|1].sum;
    dat[rt].mxx = max (dat[rt<<1].mxx, dat[rt<<1|1].mxx);
}

inline void build (int rt, int l, int r)
{
    dat[rt].l = l, dat[rt].r = r;
    if (l == r)
    {
        fastIO::cin >> in;
        dat[rt].sum = dat[rt].mxx = in;
        return;
    }
    register int mid = (l + r) >> 1;
    build (lson); build (rson);
    update (rt);
}

inline long long query (int rt, int l, int r)
{
    register int L = dat[rt].l, R = dat[rt].r;
    if (l <= L && R <= r) return dat[rt].sum;
    register int mid = (L + R) >> 1;
    register long long ret = 0ll;
    if (l <=mid) ret  = query (rt<<1, l, r);
    if (mid < r) ret += query (rt<<1|1,l,r);
    return ret;
}

inline void change (int rt, int l, int r)
{
    register int L = dat[rt].l, R = dat[rt].r;
    if (L == R) {
        //cout<<dat[rt].sum<<" -> ";
        dat[rt].sum = sqrt (dat[rt].sum),
        dat[rt].mxx = sqrt (dat[rt].mxx);
        //cout<<dat[rt].sum<<endll;
        return;
    }
    register int mid = (L + R) >> 1;
    if (l<=mid && dat[rt<<1].mxx  >1) change (rt<<1, l, r);
    if (mid< r && dat[rt<<1|1].mxx>1) change (rt<<1|1,l,r);
    update (rt);
}

//using namespace fastIO;

inline void Write (const int& x, const int& y) {cout << query(1, x, y) << endll;}
inline void Change (const int& x, const int& y) {change (1, x, y);}

int main ()
{
    register int _ = 0, n;
    while (scanf ("%d", &n) != EOF)
    {
        fastIO::cout << "Case #" << ++ _ << ":" << endll;
        build (root);
        register int m, x, y, ret;
        register bool opt;
        fastIO::cin >> m;
        while (m --)
        {
            fastIO::cin >> opt >> x >> y;
                if (x > y) swap (x, y);
            opt? Write(x, y):Change (x, y);
        }
            putchar ('\n');
    }
    
    return 0;
}
```