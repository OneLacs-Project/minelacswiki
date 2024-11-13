// .vitepress/themeConfig1.mjs
export const wikiThemeConfig = {
    themeConfig: {

      sidebar: {
        '/wiki/': [
        {
          text: '',
          items: [
            { text: '❓ Как зайти?', link: '/wiki/how-to-join'},
            { text: '🌐 Сайт', link: 'https://minelacs.ru'}
          ]
        },
        { // Категория сезонов
          text: 'Сезон',
          items: [
            { text: '🔮 ML Magic', 
              link: '/wiki/season/ml-magic',
              colapsed: true,
              items: [
                { text: '📦 Сборка', link: '/wiki/season/sub-ml-magic/modpack'},
              ]
            },
            { text: '🧑‍🎨 ML Pixel', link: '/wiki/season/ml-pixel'},
            { text: '🥩 Саварубка', link: '/wiki/season/sawarubka'}
          ]
        },
        { // Категория о нас
          text: 'О нас',
          items: [
            { text: 'Команда', link: '/wiki/about-us/team'},
            { text: 'Проект', link: '/wiki/about-us/project'}
          ]
        },
        { // Категория архив
          text: 'Архив',
          items: [
            { text: '🗃️ ML Ванила 2', 
              link: '/wiki/archive/ml-vanila-2', 
              collapsed: true,
              items: [
                { text: '🖼️ Галерея', link: '/wiki/archive/sub-ml-vanila-2/gallery'},
                { text: '📑 Документации / Ресурсы', collapsed: true, items: [
                  { text: '⚙️ Доп Механики', link: '/wiki/archive/sub-ml-vanila-2/sub-docs-and-resources/additional-mechanics' },
                  { text: '🎨 Загрузка Ресурспаков', link: '/wiki/archive/sub-ml-vanila-2/sub-docs-and-resources/resourcepack-load' },
                  { text: '✏️ Изображения на мапах', link: '/wiki/archive/sub-ml-vanila-2/sub-docs-and-resources/images-on-maps' },
                  { text: '🎵 Пластинки', link: '/wiki/archive/sub-ml-vanila-2/sub-docs-and-resources/music-discs' },
                  { text: '💬 FlectoneChat', link: '/wiki/archive/sub-ml-vanila-2/sub-docs-and-resources/flectone-chat' },
                  ]
                }
              ]
            },
            { text: '🗃️ ML Create 2', link: '/wiki/archive/ml-create-2', collapsed: true, items: [
                { text: '📥 Карта Сервера', link: '/wiki/archive/sub-ml-create-2/server-map'},
                { text: '🖼️ Галерея', link: '/wiki/archive/sub-ml-create-2/gallery'},
                { text: '📦 Сборка', link: '/wiki/archive/sub-ml-create-2/modpack'},
                { text: '💬 FlectoneChat', link: '/wiki/archive/sub-ml-create-2/flectone-chat'},
              ]
            },
            { text: '🗃️ ML Ванила', link: '/wiki/archive/ml-vanila', collapsed: true, items: [
                { text: '🖼️ Галерея', link: '/wiki/archive/sub-ml-vanila/gallery'},
                { text: '📑 Документации / Ресурсы', collapsed: true, items: [
                    { text: '💬 FlectoneChat', link: '/wiki/archive/sub-ml-vanila/sub-docs-and-resources/flectone-chat'},
                    { text: '🎵 Пластинки', link: '/wiki/archive/sub-ml-vanila/sub-docs-and-resources/music-discs'},
                    { text: '🖌️ Мап Арты', link: '/wiki/archive/sub-ml-vanila/sub-docs-and-resources/map-arts'},
                    { text: '🧩 Поделится Ресурспаком', link: '/wiki/archive/sub-ml-vanila/sub-docs-and-resources/share-resourcepack'},
                    { text: '🍷 Brewery', link: ''},
                    { text: '🗺️ Онлайн Карта Сервера'},
                  ]
                }  
              ]
            },
            { text: '🗃️ ML Create', link: '/wiki/archive/ml-create', collapsed: true, items: [
                { text: '🖼️ Галерея', link: '/wiki/archive/sub-ml-create/gallery'},
                { text: '✨ Хайлайты', link: '/wiki/archive/sub-ml-create/highlights'},
                { text: 'MineMusic Mod', link: '/wiki/archive/sub-ml-create/minemusic-mod'},
              ]
            },
          ]
        }
      ],
    },
  }
}
    

  