---
title: HEXO博客的基本搭建
tags: HEXO
mathjax: true
cover: false
date: 2017-11-13 11:10:00
categories: HEXO
---

> HEXO 博客的基本搭建
> 安装 初始化 部署

<!--more-->

## 事前准备

### 准备仓库

在 [GitHub](https://github.com/) 上注册账号并创建仓库 yourname.github.io

### 安装必要环境

安装 [node.js](https://nodejs.org/) 及 [git](https://git-scm.com/)

完成后在命令窗口分别输入

``` bash
node -v
npm -v
git- version
```

如显示正确版本号即为成功.

### SSH授权

在目录下右键,git bash

``` bash
ssh-keygen -t rsa
```

在C盘用户目录下用记事本打开公钥,复制内容添加到 GitHub.

在 git bash 中输入

```bash
ssh -T git@github.com
```

测试是否成功.


## 安装及运行

### 安装和初始化 [HEXO](https://hexo.io/)

``` bash
$ npm install hexo-cli -g
$ hexo init
$ hexo g
$ hexo s
```

### HEXO 命令一览

```bash
Commands:
  clean     Remove generated files and cache.
  config    Get or set configurations.
  deploy    Deploy your website.
  generate  Generate static files.
  help      Get help on a command.
  init      Create a new Hexo folder.
  list      List the information of the site
  migrate   Migrate your site from other system to Hexo.
  new       Create a new post.
  publish   Moves a draft post from _drafts to _posts folder.
  render    Render files with renderer plugins.
  server    Start the server.
  version   Display version information.

Global Options:
  --config  Specify config file instead of using _config.yml
  --cwd     Specify the CWD
  --debug   Display all verbose messages in the terminal
  --draft   Display draft posts
  --safe    Disable all plugins and scripts
  --silent  Hide output on console
```