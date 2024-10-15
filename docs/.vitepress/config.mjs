import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MineLacs Wiki",
  description: "Вики Сервера MineLacs",
  base: '/minelacswiki/',
  themeConfig: {
    sitetitle: "MineLacs Wiki",
    logo: 'https://cdn.discordapp.com/attachments/1248795602259677225/1248795603572363345/image.png?ex=670fb149&is=670e5fc9&hm=97f174ca66d41b8855e71f81a4d895d5225614f8d9d210aab6039de6f7ccd48d&',
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
