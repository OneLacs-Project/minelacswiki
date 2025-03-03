---
lastUpdated: false
aside: false
layout: doc
---

<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
  } from 'vitepress/theme'

  const admins = [
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
  ]

  const moderators = [
    {
      avatar: 'https://cdn.discordapp.com/avatars/733200455324401676/7a7c34a3bb0fa3e1d730b82087625cb2.webp?size=1024&format=webp&width=428&height=428',
      name: 'Nub4ik1',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/733200455324401676' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/791373241549586443/455753fb239e4f6aa7bcd8a6e90a5eed.webp?size=1024&format=webp&width=410&height=410',
      name: 'Mr_Frying',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/791373241549586443' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/780060596456390706/a4cea1a98d812c6a33be6cdad09348d9.webp?size=1024&format=webp&width=410&height=410',
      name: 'bruuhhh_',
      title: 'Хелпер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/780060596456390706' }
      ]
    },
  ]

  const beta_testers = [
    {
      avatar: 'https://cdn.discordapp.com/avatars/1025547812945006592/96c579d8c701244247a3d5b29add4379.webp?size=1024&format=webp&width=410&height=410',
      name: 'Gurman',
      title: 'Бета-тестер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/1025547812945006592' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/677146664657485840/39411aeaef2292ec8833dd50a106c5b8.webp?size=1024&format=webp&width=410&height=410',
      name: 'LeoVinchi454',
      title: 'Бета-тестер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/677146664657485840' }
      ]
    },
    {
      avatar: 'https://discord.com/assets/320d5a40d309f942.png?size=1024&format=webp&quality=lossless&width=410&height=410',
      name: 'spafis',
      title: 'Бета-тестер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/1246851449024151598' }
      ]
    },
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title> Администрация  </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="admins" />
<br/>
<center>

# Модерация

</center>
<VPTeamMembers size="small" :members="moderators" />
<br/>
<center>

# Бета-тестеры 
</center>
<VPTeamMembers size="small" :members="beta_testers" />
</VPTeamPage>




