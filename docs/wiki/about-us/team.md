---
outline: deep
lastUpdated: true
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
      avatar: 'https://cdn.discordapp.com/avatars/803639665960681502/b86f3479921a48042faff52527efa77d?size=1024',
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
      avatar: 'https://cdn.discordapp.com/avatars/733200455324401676/523a3cdb706df3bc7a302438519b6a2f.webp?size=1024&format=webp&width=428&height=428',
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