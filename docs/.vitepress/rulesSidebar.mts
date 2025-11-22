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
            { text: '3. Экономика ✨', link: '/rules/categories/3-economy'},
            { text: '4. Общение', link: '/rules/categories/4-communication'},
            { text: '5. Аккаунт', link: '/rules/categories/5-account'},
            { text: '6. Персонал', link: '/rules/categories/6-administration'},
            { text: '7. Суд', link: '/rules/categories/7-court'},
          ]
        },
        {
          text: 'Прочие Правила',
          items: [
            { text: 'Запрещенные моды', link: '/rules/other/prohibited-mods'},
            { text: 'Судебный процесс', link: '/rules/other/judicial-process'},
            { text: 'Правила Боевых Действий✨', link: '/rules/other/warfare'},
            { text: 'Градостроение ✨', link: '/rules/other/town-development'},
          ]
        },
      ],
    },
  }
}
    

  