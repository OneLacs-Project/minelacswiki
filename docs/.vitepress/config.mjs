import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "MineLacs Wiki",
  description: "Вики Сервера MineLacs",
  base: '/minelacswiki/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mlwiki-logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/mlwiki-logo.png' }],
  ],
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
      { text: 'Вики', link: '/how-to-join' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Как зайти?', link: '/how-to-join'},
          { text: 'Сайт', link: 'https://minelacs.ru'}
        ]
      },
      { // Категория сезонов
        text: 'Сезон',
        items: [
          { text: 'ML Magic', link: '/season/ml-magic'},
          { 
            text: 'ML Ванила 2', 
            link: 'season/ml-vanila-2', 
            collapsed: true,
            items: [
              { text: 'Доп Механики', link: 'season/sub-ml-vanila-2/additional-mechanics' },
              { text: 'Загрузка Ресурспаков', link: '' },
              { text: 'Изображения на мапах', link: '' },
              { text: 'Пластинки', link: '' },
              { text: 'FlectoneChat', link: '' },
              { text: 'Онлайн Карта', link: '' },
              { text: 'Brewery', link: '' },
            ]
          },
          { text: 'ML Pixel', link: 'season/ml-pixel'},
          { text: 'Саварубка', link: 'season/sawarubka'}
        ]
      },
      { // Категория о нас
        text: 'О нас',
        items: [
          { text: 'Команда', link: 'about-us/team'},
          { text: 'Проект', link: 'about-us/project'}
        ]
      },
      { // Категория архив
        text: 'Архив'
      }
    ],

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
