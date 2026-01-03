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
      avatar: 'https://cdn.discordapp.com/avatars/803639665960681502/ae8b067bdda1b5b558982884b709827f.webp?size=1024',
      name: 'SawaDawa177_',
      title: 'Создатель',
      links: [
        { icon: 'github', link: 'https://github.com/notsawadawa177' },
        { icon: 'discord', link: 'https://discord.com/users/803639665960681502' },
        { icon: 'youtube', link: 'https://www.youtube.com/@MineLacs/videos' },
        { icon: 'twitch', link: 'https://www.twitch.tv/sawadawa177' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/508385398666297383/6f15fdd4d00b3efa48de4dc486753713.webp?size=1024',
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
      avatar: 'https://cdn.discordapp.com/avatars/733200455324401676/9525d70a15098f7cd6367feca3eac58e.webp?size=1024',
      name: 'Nub4ik1',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/733200455324401676' },
        { icon: 'youtube', link: 'https://www.youtube.com/@nub4ik142/videos' },
        { icon: 'twitch', link: 'https://www.twitch.tv/nub4ik1' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/648913024031129615/a2bdfd26b847fcce1227420419ba9a37.webp?size=1024',
      name: 'Inuki659',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/648913024031129615' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/911320367618998332/d8c0e2e79c5649250713371ac387e3d4.webp?size=1024',
      name: 'm1nus1k',
      title: 'Хелпер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/911320367618998332' }
      ]
    },
  ]

  const beta_testers = [
    {
      avatar: 'https://cdn.discordapp.com/avatars/506820120694358036/e8343e4f1564f128691385004741b924.webp?size=1024',
      name: 'DVD314',
      title: 'Бета-тестер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/506820120694358036' }
      ]
    },
  ]

  const other = [
    {
      avatar: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
      name: 'Google Gemini',
      links: [
        {icon: 'googlegemini', link: 'https://gemini.google.com/'}
      ]
    }
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
<VPTeamMembers size="medium" :members="moderators" />
<br/>
<center>

# Бета-тестеры 

<VPTeamMembers size="small" :members="beta_testers" />
</center>
<br/>
<center>

# Другие
<VPTeamMembers size="small" :members="other" />
</center>
</VPTeamPage>




