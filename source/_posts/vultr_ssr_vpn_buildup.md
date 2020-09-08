---
title: 珂学上网 基于VultrVPS的SSR服务器的基本搭建
tags:
  - VPN
	- VPS
mathjax: false
cover: false
donate: true
categories: VPN
date: 2020-03-02 06:08:23
---

> Vultr SSR VPS 锐速 CentOS VPN GoogleBBR 防火墙

<!--more-->

### 购买 VPS 服务器

我们应该选择国外的 VPS(Virtual Private Server) 提供商,这里推荐 [Vultr](https://www.vultr.com/),性价比较高,最低有 $2.5/m 的,但其只支持 IPv6 ,所以个人搭建推荐 $3.5/m.

目前新账号充值 $10 可赠送 $50,是相当划算的.如果想要通过注册多个账号来减少资费,请务必注意 IP 地址及 GPS 定位.

### VPS服务器的搭建和连接

#### 服务器搭建

在 Product 页点击加号新建服务器.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/1.png)

</fancybox>

选择 Cloud Compute.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/2.png)

</fancybox>

选择自己熟悉的 OS.这里以 CentOS 为例. CentOS 版本建议选6以上,否则也许会出现未知的问题.

Vultr 提供多个地区的服务器,建议一次性搭建多台之后逐个测试速度,速度较慢的删除即可.服务器按照小时计费,不需要担心资费浪费问题.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/3.png)

</fancybox>

扩展功能按需要选择.这里建议勾选 Enable IPv6.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/4.png)

</fancybox>

服务器搭建完成后可以在 Products 页面看到.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/5.png)

</fancybox>

#### 服务器连接

在服务器页面,我们需要记下服务器的 IP 用户名 密码.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/6.png)

</fancybox>

我们需要终端用 SSH 来连接 VPS.在 Windows 操作系统上推荐 Xshell. Vultr 网站上也提供了命令行,但不推荐使用.

##### 在Xshell上连接

文件->新建

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/7.png)

</fancybox>

在连接中填写相关内容.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/8.png)

</fancybox>

在用户身份验证中填写用户名和密码.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/9.png)

</fancybox>

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/15.png)

</fancybox>

连接即可.

##### 在终端连接

``` bash
ssh your_username@server_IP -p 22 (22是你VPS的SSH端口)
```

端口可以省略.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/22.jpg)

</fancybox>

### 相关内容安装

#### 安装SSR

安装 wegt

``` bash
yum -y install wget
```

安装 SSR

> 该脚本由 www.qcgzxw.cn 提供.

``` bash
wget --no-check-certificate https://freed.ga/github/shadowsocksR.sh; bash shadowsocksR.sh
```

SSR 相关配置依需要而定.

搭建成功后会显示 IP,端口,密码,协议等,用于填写 ShadowsocksR 配置信息.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/12.png)

</fancybox>

#### 使用锐速为 SSR 加速

锐速模块依赖于内核,基本原理是对丢包情况进行评估,并重发可能丢的数据包,即锐速多倍发包,在一定程度上能够提高 VPN 速度.

首先查询系统内核版本

```bash 
uname -r
```

如返回值以 2 开头,说明服务器为 CentOS6,可直接安装锐速.

如返回值以 3 开头,需要对内核降级.

另: 如果已经安装过 Google BBR 拥塞控制算法,那么无法安装锐速.

CentOS6 安装锐速:

``` bash
wget --no-check-certificate -O appex.sh https://raw.githubusercontent.com/0oVicero0/serverSpeeder_Install/master/appex.sh && bash appex.sh install '2.6.32-642.el6.x86_64'
```

更高版本使用以下命令对内核降级:

``` bash
wget --no-check-certificate -O rskernel.sh https://raw.githubusercontent.com/uxh/shadowsocks_bash/master/rskernel.sh && bash rskernel.sh
```

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/13.png)

</fancybox>

如图所示,系统为 CentOS7,更换内核后系统重启.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/14.png)

</fancybox>

重新连接后使用如下指令安装锐速:

``` bash
yum install net-tools -y && wget --no-check-certificate -O appex.sh https://raw.githubusercontent.com/0oVicero0/serverSpeeder_Install/master/appex.sh && bash appex.sh install
```

在过程中图示的三个选项默认即可.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/16.png)

</fancybox>

下图为安装运行成功.与锐速相关的指令会在文末给出.

<fancybox>

![](https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/ssr_basic_setup/17.png)

</fancybox>

#### 使用 Google BBR 为 SSR 加速

这是一个 TCP 拥塞控制算法.Google BBR 的 github 页面: [https://github.com/google/bbr](https://github.com/google/bbr)


> 警告: Google BBR 需要升级内核,锐速需要降级内核,二者不可兼得.

卸载原版内核 headers.

``` bash
yum remove kernel-headers
```

安装高版本内核 headers.

```bash
yum --enablerepo=elrepo-kernel -y install kernel-ml-headers
```

升级 CentOS 系统内核.

``` bash
yum -y install kernel-ml kernel-ml-devel
```

升级 headers.

``` bash
yum -y install kernel-ml-headers
```

对于 CentOS6
``` bash
sed -i 's/^default=.*/default=0/g' /boot/grub/grub.conf
```

对于更高版本
``` bash
grub2-set-default 0
```

使用安装脚本安装 Google BBR.

``` bash
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```

> 这个脚本由 [秋水逸冰](https://teddysun.com/) 提供.

安装后重启服务器,检查 BBR 是否启动.

``` bash
lsmod | grep bbr
```

返回值有 tcp_bbr 模块即说明 BBR 已启动.并不是所有的 VPS 都会有此返回值,若没有也属正常.

### SSR多端口配置

使用 Vim 打开配置文件
``` bash
vi /etc/shadowsocks.json
```

原有内容大致如下:

``` json
{
    "server": "0.0.0.0",
    "server_ipv6": "::",
    "server_port": 25565,
    "local_address": "127.0.0.1",
    "local_port": 1081,
    "password": "www.qcgzxw.cn",
    "timeout": 120,
    "udp_timeout": 60,
    "method": "aes-256-cfb",
    "protocol": "auth_sha1_v4_compatible",
    "protocol_param": "",
    "obfs": "http_simple_compatible",
    "obfs_param": "",
    "dns_ipv6": false,
    "connect_verbose_info": 1,
    "redirect": "",
    "fast_open": false,
    "workers": 1
}
```

删除原有的 `server_port` 及 `password` ,新增 `port_password` ,前面是端口,后面是密码,需要注意格式问题.

示例更改后如下:

``` json
{
    "server": "0.0.0.0",
    "server_ipv6": "::",
    "local_address": "127.0.0.1",
    "local_port": 1081,
    "port_password":
    {
        "1096":"hanyuu",
        "1919":"senpai",
        "2020":"evolution",
        "417":"morsunhy",
        "2333":"morsun",
        "11451":"niconiconi",
        "10960":"hanyuu"
    },
    "timeout": 120,
    "udp_timeout": 60,
    "method": "aes-256-cfb",
    "protocol": "auth_sha1_v4_compatible",
    "protocol_param": "",
    "obfs": "http_simple_compatible",
    "obfs_param": "",
    "dns_ipv6": false,
    "connect_verbose_info": 1,
    "redirect": "",
    "fast_open": false,
    "workers": 1
}
```

保存后修改防火墙配置:

``` bash
vi /etc/firewalld/zones/public.xml
```

原有内容大致如下:

``` xml
<?xml version="1.0" encoding="utf-8"?>
<zone>
  <short>Public</short>
  <description>For use in public areas. You do not trust the other computers on networks to not harm your computer. Only selected incoming connections are accepted.</description>
  <service name="dhcpv6-client"/>
  <service name="ssh"/>
  <port protocol="tcp" port="25565"/>
  <port protocol="udp" port="25565"/>
</zone>
```

加入新加入的端口,一行 tcp,一行 udp.

修改后内容大致如下:

``` xml
<?xml version="1.0" encoding="utf-8"?>
<zone>
  <short>Public</short>
  <service name="dhcpv6-client"/>
  <service name="ssh"/>
  <port protocol="tcp" port="1096"/>
  <port protocol="udp" port="1096"/>
  <port protocol="tcp" port="1919"/>
  <port protocol="udp" port="1919"/>
  <port protocol="tcp" port="2020"/>
  <port protocol="udp" port="2020"/>
  <port protocol="tcp" port="2333"/>
  <port protocol="udp" port="2333"/>
  <port protocol="tcp" port="11451"/>
  <port protocol="udp" port="11451"/>
  <port protocol="tcp" port="417"/>
  <port protocol="udp" port="417"/>
  <port protocol="tcp" port="10960"/>
  <port protocol="udp" port="10960"/>
</zone>
```

重启 SSR.

``` bash
/etc/init.d/shadowsocks restart
```

重启防火墙.

``` bash
firewall-cmd --reload
```

也可以参考下文的指令按照类似流程安装.

### SSR的使用

下载客户端,配置并连接即可.

Shadowsocks:  [https://shadowsocks.org/](https://shadowsocks.org/)

ShadowsocksR: [https://github.com/Anankke/SSRR-Windows/](https://github.com/Anankke/SSRR-Windows/)

### 相关指令扩展

#### SSR
``` bash
#启动SSR
/etc/init.d/shadowsocks start

#停止SSR
/etc/init.d/shadowsocks stop

#重启SSR
/etc/init.d/shadowsocks restart

#状态SSR
/etc/init.d/shadowsocks status

#卸载SSR
./shadowsocks-all.sh uninstall

#更改配置参数
vim /etc/shadowsocks-r/config.json
```

#### 锐速
``` bash
#查看运行状态
/appex/bin/serverSpeeder.sh status
  
#启动锐速
/appex/bin/serverSpeeder.sh start
  
#停止锐速
/appex/bin/serverSpeeder.sh stop
  
#重启锐速
/appex/bin/serverSpeeder.sh restart
  
#卸载锐速
/appex/bin/serverSpeeder.sh uninstall
```

#### 防火墙
##### CentOS7之前版本 iptables 命令
``` bash
#查看已经开放的端口:
/etc/init.d/iptables status

#开启端口
/sbin/iptables -I INPUT -p tcp --dport 端口 -j ACCEPT

#保存设置
/etc/rc.d/init.d/iptables save

#启动防火墙(永久)
chkconfig iptables on

#停止防火墙(永久)
chkconfig iptables off

#启动防火墙(暂时,重启失效)
service iptables start

#关闭防火墙(暂时,重启失效)
service iptables stop
```
##### CentOS7 firewall 命令
``` bash
#启动防火墙
systemctl start firewalld

#查看防火墙状态
systemctl status firewalld

#查看已经开放的端口
firewall-cmd --list-ports

#开启端口(永久)
firewall-cmd --zone=public --add-port=端口/tcp --permanent

#重启防火墙
firewall-cmd --reload

#停止防火墙
systemctl stop firewalld.service 

#禁止开机启动
systemctl disable firewalld.service 
```
