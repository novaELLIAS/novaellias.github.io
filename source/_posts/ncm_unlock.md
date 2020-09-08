---
title: 网易云VIP歌曲NCM格式解密
tags:
	- Trick
mathjax: true
cover: false
donate: true
categories: Trick
date: 2020-01-11 16:08:00
---

> Windows Android ncmdump 网易云

<!--more-->

#### INTRODUCTION

当发现从网易云音乐下载的 VIP 音乐成了这副样子

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ncm/3.png)

</fancybox>

不禁要吐槽:

这真是太(    ),太(    )了. (中文填空,每空2字)

本文将提供几种 NCM 格式的解密方案.

#### Web

##### Dev Tools

在官网播放页"偷"缓存,发现了看起来对劲的东西,果断下载+转码,用 mp3tag 加入封面及歌曲信息,大功告成.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ncm/4.png)

</fancybox>

##### 音乐解锁 - By IXarea

[unlock-music on GitHub](https://github.com/ix64/unlock-music)

音乐解锁用于移除已购音乐的加密保护.目前支持网易云音乐(ncm) QQ音乐(qmc,mflac,mgg,tkm)以及其他格式,并使用 MIT 许可协议开放源代码.其使用浏览器对本地文件进行操作,不需要将文件上传.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ncm/1.png)

</fancybox>

#### Windows

使用 [ncmdump](https://github.com/yoki123/ncmdump) 或 [ncmdump-gui](https://github.com/anonymous5l/ncmdump-gui).链接指向对应的GitHub仓库.

考虑到 GitHub 要"夜缒而出",给出一定版本的下载地址:

[Release.zip, ncmdump-gui@25Jan2019](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/download/ncm/Release.zip)

> 大小: 219129 字节
> 
> MD5: D90B1FDFCEC35DD3E5BDE912AB35C436
>  
> SHA1: B57308A46244823EC44996E62AD45FE5DD32BF26
> 
> CRC32: 36B0CD33

[ncmdump-gui-lastest.tar.gz, ncmdump-gui@25Jan2019](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/download/ncm/ncmdump-gui-lastest.tar.gz)

> 大小: 72943 字节
> 
> MD5: D21AC64AFD09270C0ABFFADD62D50ECF
>  
> SHA1: 87186625F385E70102DE58E5B8414F99EF1653F6
> 
> CRC32: 7A91F3AE

[ncmdump-windows-amd64.zip, ncmdump@v0.3.0](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/download/ncm/ncmdump-windows-amd64.zip)

> 大小: 3318258 字节
> 
> MD5: 9720D5EE3523D377E7F0F7D499665043
>  
> SHA1: 9E4F216562B7CED2533A098255FC16794AAC05CE
> 
> CRC32: 17FC5336

[ncmdump-darwin-amd64.zip, ncmdump@v0.3.0](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/download/ncm/ncmdump-darwin-amd64.zip)

> 大小: 3461822 字节
> 
> MD5: 0CD5CB0A46DE5532CCCD62CD22261E3F
>  
> SHA1: A8DDFDA576D703E90F7491BCF6D2A907934534A2
> 
> CRC32: A2F413A9

[ncmdump-0.3.0.tar.gz, ncmdump@v0.3.0](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/download/ncm/ncmdump-0.3.0.tar.gz)

> 大小: 104499 字节
> 
> MD5: 23896D0FEDE39F976003661ACFEF810D
>  
> SHA1: 85EE97C5CD995FA88616A8523E6862A1836D9D08
> 
> CRC32: B142A5B6

#### Android

##### DroidNCM

安卓版的 ncmdump.GitHub 页面: [https://github.com/bunnyblueair/DroidNCM](https://github.com/bunnyblueair/DroidNCM)

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ncm/2.png)

</fancybox>

下载地址:

[ncm-release.apk, DroidNCM@v2.1.1](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/download/ncm/ncm-release.apk)

> 大小: 3054417 字节
> 
> MD5: 4F42A5244E817B485C1DE1CA0FE4E8F6
>  
> SHA1: B70F7A1401A9DBC858C1E1CF87AF49E9442977D0
> 
> CRC32: B3D2E106

[DroidNCM-2.1.1.tar.gz, DroidNCM@v2.1.1](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/download/ncm/DroidNCM-2.1.1.tar.gz)

> 大小: 9360077 字节
> 
> MD5: 073D92EA36E3EE388E95C0651D3886DA
>  
> SHA1: F8C50937C661C00D225C00E954F1DA96065A6D38
> 
> CRC32: F99D094B

> 据说这个软件兼容性不是很好,建议下载源码自行编译.

##### 铃声(操作繁琐,不推荐)

在客户端中将歌曲设置为铃声

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ncm/5.jpg)

</fancybox>

每次截取60s,直到全部截取

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ncm/6.jpg)

</fancybox>

在如图所示的目录中会生成解密后的文件

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ncm/7.jpg)

</fancybox>

加.mp3后缀,使用格式工厂拼接即可.



