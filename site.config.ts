import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: "generat",
  lang: "zh-CN",
  title: "愿此行，终抵群星",
  subtitle: "May this journey guide us starward",
  author: {
    name: "ViewStar",
    avatar: "https://avatars.githubusercontent.com/u/95892717?v=4",
  },
  description: "ViewStar",
  social: [
    {
      name: "RSS",
      icon: "i-ri-rss-line",
      color: "orange",
    },
    {
      name: "GitHub",
      link: "https://github.com/ViewStarts",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "知乎",
      link: "https://www.zhihu.com/people/your-55-42-19",
      icon: "i-ri-zhihu-line",
      color: "#0084FF",
    },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/43729664",
      icon: "i-ri-bilibili-line",
      color: "#FF8EB3",
    },
    {
      name: "lijunpg@foxmail.com",
      icon: "i-ri-mail-line",
      color: "#8E71C1",
    },
    {
      name: "Travelling",
      link: "https://www.travellings.cn/go.html",
      icon: "i-ri-train-line",
      color: "var(--va-c-text)",
    },
  ],

  search: {
    enable: true,
  },
});
