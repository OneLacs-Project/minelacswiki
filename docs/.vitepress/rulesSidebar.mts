// .vitepress/themeConfig1.mjs
export const rulesSidebar = {
    themeConfig: {

      sidebar: {
        '/rules/': [
        {
          text: '',
          items: [
            { text: '🔙 Назад', link: '/wiki/how-to-join'},
            { text: 'Вступление', link: '/rules/index'},
            { text: 'Термины', link: '/rules/terms'},
          ]
        },
        {
          text: 'Правила',
          items: [
            { text: '1. Общение/Комьюнити', link: '/rules/categories/1-community'},
            { text: '2. Игровой мир/Стройка', link: '/rules/categories/2-gameworld'},
            { text: '3. Геймплей/Честная игра', link: '/rules/categories/3-gameplay'},
            { text: '4. Экономика', link: '/rules/categories/4-economy'},
            { text: '5. Города, Суды и Войны', link: '/rules/categories/5-public-relations'},
            { text: '6. Администрация', link: '/rules/categories/6-administration'},
            // { text: '7. Суд', link: '/rules/categories/7-court'},
          ]
        },
        {
          text: 'Прочие Правила',
          items: [
            { text: 'Запрещенные моды', link: '/rules/other/prohibited-mods'},
            // { text: 'Судебный процесс', link: '/rules/other/judicial-process'},
            // { text: 'Правила Боевых Действий', link: '/rules/other/warfare'},
            // { text: 'Градостроение', link: '/rules/other/town-development'},
          ]
        },
      ],
    },
  }
}
    

  