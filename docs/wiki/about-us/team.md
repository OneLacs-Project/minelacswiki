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
import { onMounted } from 'vue'

const members = [
  {
    avatar: '/skin-viewer-sawadawa.html',
    name: 'SawaDawa177_',
    title: 'Создатель',
    links: [
      { icon: 'github', link: 'https://github.com/notsawadawa177' },
      { icon: 'discord', link: 'https://discord.com/users/803639665960681502' }
    ]
  },
  {
    avatar: '/skin-viewer-greatshow.html',
    name: 'GreatShow6102',
    title: 'Администратор, Редактор Вики',
    links: [
      { icon: 'github', link: 'https://github.com/VGSS6102/' },
      { icon: 'discord', link: 'https://discord.com/users/508385398666297383' }
    ]
  },
  {
    avatar: '/skin-viewer-nub4ik.html',
    name: 'Nub4ik1',
    title: 'Модератор',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/733200455324401676' }
    ]
  },
]
</script>

<style>
.avatar-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.vp-doc iframe {
  border-radius: 50%;
}
</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Наша команда</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
