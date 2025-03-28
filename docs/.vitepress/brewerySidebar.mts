// .vitepress/themeConfig1.mjs
export const brewerySidebar = {
  themeConfig: {

    sidebar: {
      '/brewery/': [
        { text: '🔙 Назад', link: '/wiki/season/ml-plus'},
        { text: '❔ Что это такое', link: '/brewery/intropage'},
        {
          text: '⚙️ Механики',
          items: [
            { text: 'Основны', link: '/brewery/mechanics/basics'},
            { text: 'Ферментация', link: '/brewery/mechanics/fermentation'},
            { text: 'Дистилляция', link: '/brewery/mechanics/distillation'},
            { text: 'Настойка', link: '/brewery/mechanics/infusion', collapsed: true,
              items: [
                { text: 'Процесс настойки', link: '/brewery/mechanics/infusion-process'},
              ]
            },
            { text: 'Употребление', link: '/brewery/mechanics/consumption'},
            { text: 'Дополнительно', link: '/brewery/mechanics/additional'},
            // { text: '🍸 Свой рецепт', link: '/brewery/mechanics/your-recipe'},
          ]
        },
        { text: '🍸 Свой рецепт', link: '/brewery/mechanics/your-recipe'},
        { text: '🍷 Алкогольные напитки', link: '/brewery/ml-plus/alcoholic-drinks'},
        { text: '📖 Не Алкогольные напитки', link: '/brewery/ml-plus/non-alcoholic-drinks'},
      ],
    },
  }
}
    

  