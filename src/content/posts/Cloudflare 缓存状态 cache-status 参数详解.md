---
title: Cloudflare 缓存状态 cache-status 参数详解
published: 2026-01-12
updated: 2026-01-12
description: CloudFlare cache-status 五种状态及补充
tags:
  - 教程-笔记
category: 记录
draft: false
---
**cache-status 五种状态及补充**

**cf-cache-status : HIT**

这是最喜欢的状态，你的文件已经命中 CloudFlare 缓存。这表示用户获取文件的方式途径为从 CloudFlare 缓存服务器中获取而非你的源服务器，不消耗你的服务器资源。

**cf-cache-status : MISS**

CloudFlare 已经在缓存服务器中查找了你所请求的文件，但是并没有找到，CloudFlare 的缓存服务器将会回源至你的服务器中获取该文件，当下次请求时该文件就会显示 HIT 命中。

**cf-cache-status : BYPASS**

CloudFlare 已经被要求不缓存该文件，用户将直接从网站源服务器中获取文件，这个通常是因为请求的文件响应了 NO-Cache header。

**cf-cache-status:EXPIRED**

自上次缓存之后，文件的缓存期限已经过期，CloudFlare将会再度回源至网站源服务器进行获取文件，当下次请求时该文件就会显示 HIT 命中。

**cf-cache-status : DYNAMIC**

这个文件默认不会缓存，也没有对应的缓存配置，用户将从网站源服务器获取该文件。 了解了 CloudFlare 缓存的5种状态，就好处理了，可以根据自己设置的页面规则来配置自己的网站缓存。

**cf-cache-status : NONE/UNKNOWN**

资源不符合缓存条件，原因可能包括：Worker 生成了没有子请求的响应、Worker 主请求未命中缓存，但子请求有独立缓存状态、触发了 WAF 自定义规则，导致请求被阻止、重定向或“始终使用 HTTPS”规则，导致响应在到达缓存前被重定向。

**cf-cache-status : REVALIDATED**

资源在缓存中，但已失效。资源通过 If-Modified-Since 或 If-None-Match 头重新验证。（注：在 Cloudflare 缓存中，REVALIDATED 状态出现的原因是缓存内容已过期，但在再次提供给用户前，Cloudflare 通过 If-Modified-Since 或 If-None-Match 头验证该资源是否在源服务器有更新。这个过程通常避免重复请求，即使存在多次访问同一资源的情况，Cloudflare也会只向源服务器发送一次请求，我在 PHP 项目中有时会遇到这个情况，在客户端强制刷新后成功 HIT.​）

**cf-cache-status : UPDATING**

资源在缓存中过期，且源服务器正在更新该资源，通常出现在非常热门的缓存资源上。