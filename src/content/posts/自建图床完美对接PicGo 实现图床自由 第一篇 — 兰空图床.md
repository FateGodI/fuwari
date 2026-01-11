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

![870d06ba5e300c2f9563c7ca8d4bd95d.png](C:\Users\Lenovo\AppData\Roaming\marktext\images\4df8d56ac976ee00437ea322883526fa62c83cfd.png)

然后按照要求进行接口请求，大家可以使用Reqable这款国产网络高级测试工具进行接口请求 软件官网：[https://reqable.com/zh-CN/](https://reqable.com/zh-CN/) 
如下图编写请求体

![PixPin_2024-11-04_05-30-28.png](C:\Users\Lenovo\AppData\Roaming\marktext\images\1fff07a543da1191594d6d4487782375467b3995.png)

编辑好后点击发送即可获得如下图类似的返回信息：

![PixPin_2024-11-04_05-32-27.png](C:\Users\Lenovo\AppData\Roaming\marktext\images\c575a75efaafc24aefcc8c29afa598930313d9d3.png)

然后再PicGo中点击插件设置 然后再搜索栏输入

picgo-plugin-lankong 进行搜索并安装插件 插件GITHUB：

[https://github.com/hellodk34/picgo-plugin-lankong](https://github.com/hellodk34/picgo-plugin-lankong)

安装后点击左侧 lankong 然后点击小齿轮进行配置如下图：

![PixPin_2024-11-04_05-38-10.png](C:\Users\Lenovo\AppData\Roaming\marktext\images\6fce7e1298998128db661e5eb51eec6509fff6e7.png)

![PixPin_2024-11-04_05-38-33.png](C:\Users\Lenovo\AppData\Roaming\marktext\images\4f2ecc5267055e5ece8f17a048185d40cdb05466.png)



配置完后即可进行图床链接测试并上传文件，非常简单！