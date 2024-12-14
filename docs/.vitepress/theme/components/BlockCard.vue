<template>
  <div :class="['block-card-container', size]">
    <div v-for="(card, index) in formattedCards" :key="index" :class="['block-card', { 'has-link': card.link }]" @mouseover="card.link && hoverIn(card)" @mouseleave="card.link && hoverOut(card)">
      <a v-if="card.link" :href="card.link" class="card-content" v-html="card.htmlContent"></a>
      <div v-else class="card-content" v-html="card.htmlContent"></div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export default {
  name: 'BlockCard',
  props: {
    cards: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    formattedCards() {
      return this.cards.map(card => ({
        ...card,
        htmlContent: md.render(card.content)
      }));
    }
  }
}
</script>

<style scoped>
.block-card-container {
  display: flex;
  flex-wrap: wrap;
}
.block-card-container.medium .block-card {
  width: calc(33.333% - 10px);
  margin: 5px;
  flex-grow: 0; /* Prevent horizontal stretching */
}
.block-card-container.big .block-card {
  width: calc(50% - 10px);
  margin: 5px;
  flex-grow: 0; /* Prevent horizontal stretching */
}
.block-card {
  border: 1px solid #ddd; /* Slightly dimmer border */
  border-radius: 10px; /* Rounded edges */
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the left */
  justify-content: flex-start;
  aspect-ratio: 3 / 2; /* Maintain 1:1 aspect ratio */
  height: auto; /* Allow vertical stretching */
}
.block-card.has-link:hover {
  border-color: #007BFF;
}
.block-card .card-content {
  text-decoration: none;
  color: inherit;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  text-align: left;
}
.block-card a {
  text-decoration: none;
  color: inherit;
}
</style>
