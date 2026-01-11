import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "404 Blog",  // 网站名
	subtitle: "技术探索与分享",
	lang: "zh_CN", // 语言代码
	themeColor: {
		hue: 40, // 主题色色调
		fixed: true, // 是否对访客隐藏主题色选择器
	},
	banner: {
		enable: false, // 可以设置为 true 并在 public 目录添加 banner.png
		src: "assets/images/demo-banner.png", // 相对于 /src 目录
		position: "center", // 支持 'top', 'center', 'bottom'
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录显示的最大标题深度
	},
	favicon: [
		// 保持为空使用默认favicon
	],
};

//export const navBarConfig: NavBarConfig = {
//	links: [
//		LinkPreset.Home,
//		LinkPreset.Archive,
//		LinkPreset.About,
//		{
//			name: "GitHub",
//			url: "https://github.com/FateGodI/fuwari", // 更新为您的GitHub仓库地址
//			external: true, // 显示外部链接图标并在新标签页打开
//		},
//	],
//};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 头像
	name: "404 Blog", // 昵称
	bio: "技术探索、代码分享与日常思考", // 个人简介
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github", // GitHub图标
			url: "https://github.com/FateGodI", // GitHub主页地址
		},
		// 社交链接：
		// {
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter",
		// 	url: "https://twitter.com/yourusername",
		// },
		// {
		// 	name: "Email",
		// 	icon: "fa6-solid:envelope",
		// 	url: "mailto:support@404bbs.com",
		// },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark", // 代码块主题
};
