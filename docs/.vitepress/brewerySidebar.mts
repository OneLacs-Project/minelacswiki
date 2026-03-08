// .vitepress/themeConfig1.mjs
export const brewerySidebar = {
  themeConfig: {

    sidebar: {
      '/brewery/': [
        { text: '🔙 Назад', link: '/wiki/how-to-join'},
        { text: '❔ Что это такое', link: '/brewery/index'},
        {
          text: '⚙️ Механики',
          items: [
            { text: 'Основы', link: '/brewery/mechanics/basics'},
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
        { text: 'Рецепты сезона', 
          items:[
          { text: '🍸 Свой рецепт', link: '/brewery/mechanics/your-recipe'},
          // { text: '🍷 Алкогольные напитки', link: '/brewery/default/alcoholic-drinks'},
          // { text: '📖 Неалкогольные напитки', link: '/brewery/default/non-alcoholic-drinks'},
        
          { text: '🍷 Алкогольные напитки', link: '/brewery/ml-world/alcoholic-drinks'},
          { text: '📖 Неалкогольные напитки', link: '/brewery/ml-world/non-alcoholic-drinks'},
        ]},

        // { text: '🧪 Особые напитки ', link: '/brewery/default/special-drinks'},
        { text: 'Архив', // collapsed: false, 
          items: [
          { text: 'Рецепты ML-Plus', collapsed: true,
            items: [
              { text: '🍷 Алкогольные напитки', link: '/brewery/ml-plus/alcoholic-drinks'},
              { text: '📖 Неалкогольные ', link: '/brewery/ml-plus/non-alcoholic-drinks'},
              { text: '🧪 Особые напитки ', link: '/brewery/ml-plus/special-drinks'},
          ]},
          { text: 'Рецепты ML-Legacy', collapsed: true,
            items: [
              { text: '🍷 Алкогольные напитки', link: '/brewery/ml-legacy/alcoholic-drinks'},
              { text: '📖 Неалкогольные ', link: '/brewery/ml-legacy/non-alcoholic-drinks'},
              { text: '🧪 Особые напитки ', link: '/brewery/ml-legacy/special-drinks'},
          ]}
        ]},
      ],
    },
  }
}
    

  