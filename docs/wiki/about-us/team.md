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

onMounted(() => {
  // Заменяем img на iframe для каждой аватарки
  const avatars = document.querySelectorAll('.VPTeamMembersItem .avatar img')
  avatars.forEach(img => {
    const iframe = document.createElement('iframe')
    iframe.src = img.src
    iframe.style.width = '100px'
    iframe.style.height = '100px'
    iframe.style.border = 'none'
    img.parentNode.replaceChild(iframe, img)
  })
})
</script>

<style>
:deep(.VPTeamMembersItem .avatar) {
  border-radius: 50%;
  overflow: hidden;
  width: 100px !important;
  height: 100px !important;
}

:deep(.VPTeamMembersItem .avatar img) {
  display: none;
}

:deep(.VPTeamMembersItem .avatar iframe) {
  width: 100px !important;
  height: 100px !important;
  border: none;
  transform: scale(1.0);
}
</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Наша команда</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
