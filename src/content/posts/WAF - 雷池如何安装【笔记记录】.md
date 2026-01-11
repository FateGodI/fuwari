---
title: WAF - 雷池如何安装【笔记记录】
published: 2026-01-12
updated: 2026-01-12
description: 雷池 WAF 安装笔记记录
tags:
  - 教程-笔记
category: 记录
draft: false
---
系统：Debian12 问题1: 执行雷池官网安装命令 
**bash -c "$(curl -fsSLk https://waf-ce.chaitin.cn/release/latest/setup.sh)"** 
无效 报错为 **bash: curl: command not found** 
方法1: 因为没装**curl**导致的报错 
**ubuntu/debian 系统安装 Curl 方法:** 
apt-get update -y && apt-get install curl -y

**centos 系统安装 Curl 方法:** 
yum update -y && yum install curl -y 
安装好 **curl** 之后重新执行安装命令 因为纯净系统没有 docker 使用官方自动安装

安装完成后正常访问尝试即可 我这边访问后出现报错 
**400 Bad Request**
The plain HTTP request was sent to HTTPS port

因为默认http访问的 所以改成https访问 例如https://0.0.0.0:9443/
打开是不安全，点击详细信息继续访问即可 火狐浏览器添加例外后重新访问即可