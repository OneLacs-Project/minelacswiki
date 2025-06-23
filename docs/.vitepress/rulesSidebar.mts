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
            { text: '1. Основные', link: '/rules/categories/1-general'},
            { text: '2. Игровой процесс', link: '/rules/categories/2-gameplay'},
            { text: '3. Взаимодействие', link: '/rules/categories/3-interactions'},
            { text: '4. Аккаунт', link: '/rules/categories/4-account'},
            { text: '5. Администрация', link: '/rules/categories/5-administration'},
            { text: '6. Правила Суда', link: '/rules/categories/6-court-rules'},
          ]
        },
        {
          text: 'Прочие Правила',
          items: [
            { text: 'Запрещенные моды', link: '/rules/other/prohibited-mods'},
            { text: 'Судебный процесс', link: '/rules/other/judicial-process'},
            { text: 'Градостроение', link: '/rules/other/town-development'},
          ]
        },
      ],
    },
  }
}
    

  