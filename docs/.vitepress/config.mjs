import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MineLacs Wiki",
  description: "Вики Сервера MineLacs",
  base: '/minelacswiki/',
  themeConfig: {
    sitetitle: "MineLacs Wiki",
    logo: '/mlWIKILOGO.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/6u47fz6dCP' },
      { icon: 'github', link: 'https://github.com/VGSS6102/minelacswiki' }
    ]
  }
})
