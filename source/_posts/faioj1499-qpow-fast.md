---
title: FAIOJ 1499 快速幂取模 (加强版)
date: 2020-07-26 13:38:42
tags: [Template]
cover: false
mathjax: true
donate: true
categories: Olympiad in Informatics
---

> 扩展欧拉定理
> [题目链接](http://faioj.brynhild.online/problem/1499)

<!--more-->

$$ {a}^b\ mod\ p = {a}^{b\ mod\ φp + φp}\ mod\ p $$

```cpp
#pragma G++ optimize("Ofast", 3)
#pragma GCC optimize("Ofast", 3)
#pragma GCC target("sse3", "sse2", "sse")
#pragma GCC target("avx", "sse4", "sse4.1", "sse4.2", "ssse3")
#pragma GCC target("f16c")
#pragma G++ target("sse3", "sse2", "sse")
#pragma G++ target("avx", "sse4", "sse4.1", "sse4.2", "ssse3")
#pragma G++ target("f16c")

#include <cstdio>
#include <cstring>

#define Re register
using namespace std;
typedef long long ll;

inline long long mul_mod (register long long a,register long long b,register long long mo) {
	register long long ret;
	__asm__ __volatile__ ("\tmull %%ebx\n\tdivl %%ecx\n" : "=d"(ret):"a"(a),"b"(b),"c"(mo));
	return ret;
}

inline long long qpow(Re ll a, Re ll t, Re ll m) {
	register long long base = a % m, ret = 1ll;
	while (t) {
		if (t & 1)
			ret = mul_mod (ret, base, m);
		base = mul_mod (base, base, m), t >>= 1;
	}
	return ret % m;
}

char aa[101], bb[101];

signed main() {
	register long long a = 0ll, b = 0ll, m, mm, phi;
	scanf("%s %s %lld", aa, bb, &m);

	mm = phi = m;
	for (register ll i = 2ll; i * i <= mm; ++i) {
		if (!(mm % i)) {
			phi = phi / i * (i - 1);
			while (!(mm % i)) mm /= i;
		}
	}
	if (mm > 1) phi = phi / mm * (mm - 1);

	register int la = strlen(aa), lb = strlen(bb);
	for (register int i = 0; i < la; ++i) a = (a * 10 + (aa[i] ^ '0')) % m;
	for (register int i = 0; i < lb; ++i) b = (b * 10 + (bb[i] ^ '0')) % phi;

	printf("%lld", qpow(a, b > phi? (b % phi + phi) : b % phi, m));
	return 0;
}

```