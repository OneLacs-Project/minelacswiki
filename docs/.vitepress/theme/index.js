// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// import '@theojs/lumen/theme'
import '@theojs/lumen/badge' /* 徽章样式 */
import '@theojs/lumen/doc' /* 文档样式 */
import '@theojs/lumen/doc-blocks' /* 容器(默认):左侧阴影样式 */
import '@theojs/lumen/doc-blocks-border' /* 容器:边框样式 */
import '@theojs/lumen/pic' 
import '@theojs/lumen/icon'
import { DocBox, DocBoxCube, DocLinks, DocPill } from '@theojs/lumen'
import { ShareButton } from '@theojs/lumen'
import { Announcement } from '@theojs/lumen'
import { DocVideoLink } from '@theojs/lumen'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

// import VPLTheme from '@lando/vitepress-theme-default-plus';
 
// import BlockCard from './components/LEGACYBlockCard.vue'
import BlockCard from './components/BlockCard.vue'
// import ProgressBar from './components/ProgressBar.vue';

// import YouTube from './components/vitepress-theme-default-plus/VPLYouTube.vue'

export default {
  // extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-info-before': () => h(Announcement),
      'aside-outline-before': () =>
        h(ShareButton, {
          buttonIcon: 'fas fa-share-alt', 
          buttonText: 'Поделится', 
          copiedIcon: 'fas fa-link', 
          copiedText: 'Скопировано!' 
        })
    })
  },
  enhanceApp({ app, router, siteData}) {
    // DefaultTheme.enhanceApp(ctx);
    app.component('Box', DocBox)
    app.component('Pill', DocPill)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Vid', DocVideoLink) 
    
    app.component('BlockCard', BlockCard)
    // app.component('ProgressBar', ProgressBar);
    enhanceAppWithTabs(app)

    // app.component('YouTube', YouTube);
    // ...
  },
  // markdown: {
  //   config(md) {
  //     md.use(tabsMarkdownPlugin)
  //   }
  // }
} /*satisfies Theme*/
