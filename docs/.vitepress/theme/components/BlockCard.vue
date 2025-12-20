<template>
  <div :class="['block-card-container', size]">
    <template v-for="(card, index) in formattedCards" :key="index">
      <component 
        :is="card.link ? 'a' : 'div'" 
        :href="card.link" 
        :class="['block-card', { 'has-link': card.link }]"
      >
        <div class="card-content">
          <iconify-icon 
            v-if="card.icon" 
            :icon="card.icon" 
            class="card-icon"
          ></iconify-icon>
          
          <div class="text-wrapper" v-html="card.htmlContent"></div>
        </div>
      </component>
    </template>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

// ENABLE HTML SUPPORT HERE
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export default {
  name: 'BlockCard',
  props: {
    cards: { type: Array, required: true },
    size: { type: String, default: 'medium' }
  },
  computed: {
    formattedCards() {
      return this.cards.map(card => ({
        ...card,
        htmlContent: md.render(card.content || '')
      }));
    }
  }
}
</script>

<style scoped>
.block-card-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}

.block-card-container.small .block-card { width: calc(25% - 16px); }
.block-card-container.medium .block-card { width: calc(33.333% - 16px); }
.block-card-container.big .block-card { width: calc(50% - 16px); }

@media (max-width: 768px) {
  .block-card-container.small .block-card,
  .block-card-container.medium .block-card,
  .block-card-container.big .block-card {
    width: calc(100% - 16px);
  }
}

.block-card {
  margin: 8px;
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
  background-color: #1b1b1f; 
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1); 
  transition: transform 0.25s ease, border-color 0.25s ease;
  height: auto;
  overflow: hidden;
}

.block-card:hover {
  transform: translateY(-5px);
}

.block-card.has-link {
  border-color: #a8b1ff;
  cursor: pointer;
}

.block-card.has-link:hover {
  border-color: #c4cbff;
}

.card-content {
  padding: 28px;
  color: #ebebef;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}

.card-icon {
  font-size: 3.5rem;
  color: #a8b1ff;
  flex-shrink: 0;
}

.text-wrapper {
  width: 100%;
}

:deep(.card-content h3) {
  margin: 0 0 8px 0;
  color: #ffffff;
}

/* This allows your <span> colors to work without being overridden */
:deep(.card-content span) {
  color: inherit; 
}

:deep(.card-content p) {
  margin: 0;
  color: #ebebef;
}
</style>