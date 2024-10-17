import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",

  themeConfig: {
    banner: {
      enable: true,
      title: "观星站",
    },
    bg_image: {
      enable: true,
      url: "https://github.com/ViewStarts/ViewStarBlog/blob/main/image/%E6%98%9F%E7%A9%BA%E5%B0%91%E5%A5%B3.png?raw=true",
      opacity: 1,
    },

    pages: [
      {
        name: "友链",
        url: "/links/",
        icon: "",
        color: "dodgerblue",
      },
    ],

    footer: {
      since: 2020,
      beian: {
        enable: true,
        icp: "",
      },
    },
  },

  unocss: { safelist },
});
