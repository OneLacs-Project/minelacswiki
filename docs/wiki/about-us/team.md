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
      avatar: 'https://api.mineatar.io/face/0c81442c240b4087851ff50f3d8fd589?scale=3',
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
      avatar: 'https://api.mineatar.io/face/ceb1b631-d2ff-4166-8458-e4c8498e1248?scale=3',
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
      avatar: 'https://api.mineatar.io/face/d2b496f0-c2b0-4849-8dee-a6bda731a7eb?scale=3',
      name: 'Nub4ik1',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/733200455324401676' },
        { icon: 'youtube', link: 'https://www.youtube.com/@nub4ik142/videos' },
        { icon: 'twitch', link: 'https://www.twitch.tv/nub4ik1' }
      ]
    },
    {
      avatar: 'https://api.mineatar.io/face/2b4b6a4e-dfc1-41b4-926a-6cd0e18fb786?scale=3',
      name: 'm1nus1k',
      title: 'Хелпер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/911320367618998332' }
      ]
    },
  ]

  const beta_testers = [
    {
      avatar: 'https://api.mineatar.io/face/9806b0b5-baa2-48c6-b70e-64af239a78eb?scale=3',
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




