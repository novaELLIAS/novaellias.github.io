---
title: GSS1 - Can you answer these queries I
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

> GSS1 - Can you answer these queries I

<!--more-->

[Luogu SP1043](https://www.luogu.org/problemnew/show/SP1043)
[Vjudge](https://vjudge.net/problem/SPOJ-GSS1)

``` cpp
#pragma GCC optimize ("-fdelete-null-pointer-checks,inline-functions-called-once,-funsafe-loop-optimizations,-fexpensive-optimizations,-foptimize-sibling-calls,-ftree-switch-conversion,-finline-small-functions,inline-small-functions,-frerun-cse-after-loop,-fhoist-adjacent-loads,-findirect-inlining,-freorder-functions,no-stack-protector,-fpartial-inlining,-fsched-interblock,-fcse-follow-jumps,-fcse-skip-blocks,-falign-functions,-fstrict-overflow,-fstrict-aliasing,-fschedule-insns2,-ftree-tail-merge,inline-functions,-fschedule-insns,-freorder-blocks,-fwhole-program,-funroll-loops,-fthread-jumps,-fcrossjumping,-fcaller-saves,-fdevirtualize,-falign-labels,-falign-loops,-falign-jumps,unroll-loops,-fsched-spec,-ffast-math,Ofast,inline,-fgcse,-fgcse-lm,-fipa-sra,-ftree-pre,-ftree-vrp,-fpeephole2", 3)
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

#define lson rt<<1,l,mid
#define rson rt<<1|1,mid+1,r
#define rint register int

int n, m, x, y, in;
struct node {
    int sum, lmax, rmax, dat;
} tr[200001];
namespace FastIO {
    const int str=1<<20;
    const char* endl="\n";
    struct Reader {
        char buf[str],*s,*t;
        bool EOF_FLG;
        Reader():s(buf),t(buf),EOF_FLG(false) {};
        inline char gt() {
            return s==t&&((t=(s=buf)+fread(buf,1,str,stdin))==s)?EOF:(*s++);
        }
        template<typename T>Reader&operator>>(T&x) {
            if(EOF_FLG)return *this;
            register char c=0,d;
            while(c!=EOF&&(c<'0'||c>'9'))d=c,c=gt();
            if(c==EOF) {
                EOF_FLG=true;
                return *this;
            } else x=0;
            while(c>='0'&&c<='9')x=(x<<3)+(x<<1)+c-'0',c=gt();
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
inline const int& max(const int& x,const int& y) {
    return x>y?x:y;
}
inline void update (int rt) {
    tr[rt].sum =tr[rt<<1].sum + tr[rt<<1|1].sum;
    tr[rt].lmax= max (tr[rt<<1].lmax, tr[rt<<1].sum + tr[rt<<1|1].lmax);
    tr[rt].rmax= max (tr[rt<<1|1].rmax, tr[rt<<1|1].sum + tr[rt<<1].rmax);
    tr[rt].dat = max (max(tr[rt<<1].dat, tr[rt<<1|1].dat), tr[rt<<1].rmax + tr[rt<<1|1].lmax);
}
inline void build (int rt,int l,int r) {
    if(l==r) {
        FastIO::cin>>in;
        tr[rt].dat = tr[rt].sum = tr[rt].lmax = tr[rt].rmax = in;
        return;
    }
    int mid = (l+r)>>1;
    build (lson);
    build (rson);
    update (rt);
}
inline node query (int rt, int l, int r, int ql, int qr) {
    if (ql <= l && qr >= r) return tr[rt];
    int mid = (l+r)>>1;
    if (ql >  mid) return query (rson, ql, qr);
    if (qr <= mid) return query (lson, ql, qr);
    else {
        node ans,a,b;
        a = query (lson,ql,qr);
        b = query (rson,ql,qr);
        ans.sum = a.sum + b.sum;
        ans.dat = max (a.dat, a.rmax + b.lmax), ans.dat = max (ans.dat, b.dat);
        ans.lmax= max (a.lmax, a.sum + b.lmax);
        ans.rmax= max (b.rmax, b.sum + a.rmax);
        return ans;
    }
}
using namespace FastIO;
int main() {
    //freopen ("nico.in","r",stdin);
    FastIO::cin>>n;
    build (1, 1, n);
    FastIO::cin>>m;
    while (m --) {
        FastIO::cin>>x>>y;
        FastIO::cout<<query(1, 1, n, x, y).dat<<endl;
    }
    return 0;
}
```