import { defineConfig } from 'vitepress';
import { wikiThemeConfig } from './wikiThemeConfig.mts';
// import '@theojs/lumen/theme'

import { figure } from '@mdit/plugin-figure';

import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'


// import {defineConfig} from '@lando/vitepress-theme-default-plus/config';
// import tabsMarkdownPlugin from '@lando/vitepress-theme-default-plus/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,

  title: "MineLacs Wiki",
  description: "Вики Сервера MineLacs",
  lang: 'ru',
  base: '/', 
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mlwiki-logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/mlwiki-logo.png' }],
    ['link', { rel: 'icon', href: '/base/favicon.ico' }]
  ],
  cleanUrls: true,

  markdown: {
    config: (md) => { 
      md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true }),
      md.use(tabsMarkdownPlugin)
    }

    // image: {
    //   // image lazy loading is disabled by default
    //   lazyLoading: false
    // }
  },
  
  

  appearance: 'force-dark',

  themeConfig: {
    // sitetitle: "MineLacs Wiki",
    
    logo:'/mlwiki-logo.svg',

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
            
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
            // prefix: false,
            fuzzy: 0.2,
            
          }
        }
      }
    },



    // https://vitepress.dev/reference/default-theme-config

    outline: { label: 'Содержание страницы' },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    lastUpdated: {
      text: 'Обновлено'
    },

    externalLinkIcon: true,


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
