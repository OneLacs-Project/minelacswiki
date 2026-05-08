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
            { text: '1. Основа', link: '/rules/categories/1-general'},
            { text: '2. Общение', link: '/rules/categories/2-communication'},
            { text: '3. Безопасность', link: '/rules/categories/3-safety'},
            { text: '4. Игровой Процесс', link: '/rules/categories/4-gameplay'},
            { text: '5. Взаемодействия Игроков', link: '/rules/categories/5-interactions'},
            { text: '6. Территории', link: '/rules/categories/6-territories'},
            { text: '7. Экономика', link: '/rules/categories/7-economy'},
            { text: '8. Социальные Структуры', link: '/rules/categories/8-everything-else'},
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
    

  