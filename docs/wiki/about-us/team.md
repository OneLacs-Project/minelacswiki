---
outline: deep
lastUpdated: false
layout: page
---

<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
  } from 'vitepress/theme'

  const members = [
    {
      avatar: 'https://cdn.discordapp.com/avatars/803639665960681502/4d4e3df8ded89d6e3e4aeaac8723b8a7.webp?size=1024&format=webp&width=428&height=428',
      name: 'SawaDawa177_',
      title: 'Создатель',
      links: [
        { icon: 'github', link: 'https://github.com/notsawadawa177' },
        { icon: 'discord', link: 'https://discord.com/users/803639665960681502' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/508385398666297383/6f15fdd4d00b3efa48de4dc486753713?size=1024',
      name: 'GreatShow6102',
      title: 'Администратор, Редактор Вики',
      links: [
        { icon: 'github', link: 'https://github.com/VGSS6102/' },
        { icon: 'discord', link: 'https://discord.com/users/508385398666297383' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/733200455324401676/7a7c34a3bb0fa3e1d730b82087625cb2.webp?size=1024&format=webp&width=428&height=428',
      name: 'Nub4ik1',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/733200455324401676' }
      ]
    },
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title> Наша команда </template>
    <!-- <template #lead>
      Разработкой VitePress руководит международная команда, некоторые члены
      которой представлены ниже.
    </template> -->
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
