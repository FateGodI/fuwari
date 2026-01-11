---
title: 自建图床完美对接PicGo 实现图床自由 第一篇 — 兰空图床
published: 2026-01-12
updated: 2026-01-12
description: 兰空图床对接PicGo
tags:
  - 教程-笔记
category: 记录
draft: false
---
兰空图床是一款开源极简便捷式图床，集大能与一体，可以说是非常好用，搭建简单，使用方便！ 
兰空图床分为：**开源版 | 企业版 | 付费版** 
兰空图床企业版本，企业版和开源的 V 2.x 版本是相同的架构，但在功能和定位上是完全不同的，企业版本除了在功能上做了进一步加强，还对性能以及产品健壮性做了针对优化，使其可以商业化。 
官方GITHUB开源地址：[https://github.com/lsky-org/lsky-pro](https://github.com/lsky-org/lsky-pro) 
官方手册地址：[https://docs.lsky.pro/](https://docs.lsky.pro/) 
将图床搭建好后，进入后台，点击系统设置，启用接口

![](https://oxxg-img.pages.dev/file/1730668980129_870d06ba5e300c2f9563c7ca8d4bd95d.png)

然后按照要求进行接口请求，大家可以使用Reqable这款国产网络高级测试工具进行接口请求 软件官网：[https://reqable.com/zh-CN/](https://reqable.com/zh-CN/) 
如下图编写请求体

![](https://oxxg-img.pages.dev/file/1730669456090_PixPin_2024-11-04_05-30-28.png)

编辑好后点击发送即可获得如下图类似的返回信息：

![](https://oxxg-img.pages.dev/file/1730669600642_PixPin_2024-11-04_05-32-27.png)

然后再PicGo中点击插件设置 然后再搜索栏输入

picgo-plugin-lankong 进行搜索并安装插件 插件GITHUB：

[https://github.com/hellodk34/picgo-plugin-lankong](https://github.com/hellodk34/picgo-plugin-lankong)

安装后点击左侧 lankong 然后点击小齿轮进行配置如下图：

![](https://oxxg-img.pages.dev/file/1730669934478_PixPin_2024-11-04_05-38-10.png)

![](https://oxxg-img.pages.dev/file/1730669930809_PixPin_2024-11-04_05-38-33.png)

配置完后即可进行图床链接测试并上传文件，非常简单！