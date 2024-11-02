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
    avatar: '/skin-viewer.html?player=SawaDawa177_',
    name: 'SawaDawa177_',
    title: 'Создатель',
    links: [
      { icon: 'github', link: 'https://github.com/notsawadawa177' },
      { icon: 'discord', link: 'https://discord.com/users/803639665960681502' }
    ]
  },
  {
    avatar: '/skin-viewer.html?player=GreatShow6102',
    name: 'GreatShow6102',
    title: 'Администратор, Редактор Вики',
    links: [
      { icon: 'github', link: 'https://github.com/VGSS6102/' },
      { icon: 'discord', link: 'https://discord.com/users/508385398666297383' }
    ]
  },
  {
    avatar: '/skin-viewer.html?player=Nub4ik1',
    name: 'Nub4ik1',
    title: 'Модератор',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/733200455324401676' }
    ]
  },
]
</script>

<style>
:deep(.medium-zoom-overlay) {
  z-index: 20;
}

:deep(.medium-zoom-image--opened) {
  z-index: 21;
}

:deep(.VPTeamMembersItem .avatar) {
  border-radius: 50%;
  overflow: hidden;
  width: 100px !important;
  height: 100px !important;
}

:deep(.VPTeamMembersItem .avatar iframe) {
  width: 100px !important;
  height: 100px !important;
  border: none;
}
</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Наша команда</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
