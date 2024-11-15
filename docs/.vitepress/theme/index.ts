// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// import '@theojs/lumen/theme'
import { DocBox, DocLinks, DocBoxCube } from '@theojs/lumen'
import { ShareButton } from '@theojs/lumen'
import { Announcement } from '@theojs/lumen'
import '@theojs/lumen/badge' /* 徽章样式 */
import '@theojs/lumen/doc' /* 文档样式 */
import '@theojs/lumen/doc-blocks' /* 容器(默认):左侧阴影样式 */
import '@theojs/lumen/doc-blocks-border' /* 容器:边框样式 */

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
  extends: DefaultTheme,
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
  enhanceApp({ app, router, siteData }) {
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    enhanceAppWithTabs(app)
    // ...
  },
  // markdown: {
  //   config(md) {
  //     md.use(tabsMarkdownPlugin)
  //   }
  // }
} satisfies Theme
