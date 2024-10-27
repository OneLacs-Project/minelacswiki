import { defineConfig } from 'vitepress'
import { wikiThemeConfig } from './wikiThemeConfig.mjs'
import { breweryThemeConfig } from './breweryThemeCofig.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "MineLacs Wiki",
  description: "Вики Сервера MineLacs",
  base: '/minelacswiki/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mlwiki-logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/mlwiki-logo.png' }],
    ['link', { rel: 'icon', href: '/base/favicon.ico' }]
  ],
  cleanUrls: true,


  themeConfig: {
    sitetitle: "MineLacs Wiki",

    logo: { src: '/mlwiki-logo.svg'},

    // https://vitepress.dev/reference/default-theme-config
    outline: { label: 'Содержание страницы' },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    lastUpdated: {
      text: 'Обновлено'
    },

    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Вики', link: '/wiki/how-to-join', activeMatch: '/wiki/'},
      { text: 'Наши ссылки', activeMatch: '/wiki/about-us/project', items: [
          { text: 'Discord', link: 'https://discord.gg/B6ywHB7ftP'},
          { text: 'Telegram', link: 'https://t.me/minelacs'},
          { text: 'Boosty', link: 'https://boosty.to/minelacs'},
          { text: 'Сайт', link: 'https://minelacs.ru/'}
        ]
      }
    ],

    sidebar: { 
          ...wikiThemeConfig.themeConfig.sidebar,
          ...breweryThemeConfig.themeConfig.sidebar
          
        },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/6u47fz6dCP' },
      { icon: 'github', link: 'https://github.com/VGSS6102/minelacswiki' }
    ],

    footer: {
      message:
        'Not an official Minecraft product. We are in no way affiliated with or endorsed by Mojang Synergies AB, Microsoft Corporation or other rightsholders.',
      copyright:
        '© 2024 MineLacs. Все права защищены.'
    }
  }
})
