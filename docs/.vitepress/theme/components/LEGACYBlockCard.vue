<template>
  <div class="block-card-container">
    <div v-for="(card, index) in cards" :key="index" :class="['block-card', sizeClass]" @click="handleClick(card.link)">
      <div v-if="card.field1 && !isImageUrl(card.field1)" class="field">{{ card.field1 }}</div>
      <img v-if="card.field1 && isImageUrl(card.field1)" :src="card.field1" alt="" class="card-image" />
      <div v-if="card.field2 && !isImageUrl(card.field2)" class="field">{{ card.field2 }}</div>
      <img v-if="card.field2 && isImageUrl(card.field2)" :src="card.field2" alt="" class="card-image" />
      <div v-if="card.field3 && !isImageUrl(card.field3)" class="field">{{ card.field3 }}</div>
      <img v-if="card.field3 && isImageUrl(card.field3)" :src="card.field3" alt="" class="card-image" />
      <div v-if="card.field4 && !isImageUrl(card.field4)" class="field">{{ card.field4 }}</div>
      <img v-if="card.field4 && isImageUrl(card.field4)" :src="card.field4" alt="" class="card-image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

interface Card {
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  link?: string;
}

export default defineComponent({
  name: 'BlockCard',
  props: {
    cards: {
      type: Array as () => Card[],
      required: true,
    },
    size: {
      type: String,
      default: 'medium' // 'big' or 'medium'
    }
  },
  setup(props) {
    const sizeClass = computed(() => (props.size === 'big' ? 'big' : 'medium'))
    const handleClick = (link?: string) => {
      if (link) {
        window.location.href = link
      }
    }
    const isImageUrl = (url: string) => {
      return /\.(jpeg|jpg|gif|png|webp|svg)$/.test(url)
    }
    return { sizeClass, handleClick, isImageUrl }
  }
})
</script>

<style scoped>
.block-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start; /* Ensure cards are aligned from the start */
}

.block-card {
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the left */
  padding: 15px;
  border: 1px solid #9c9ea5;
  border-radius: 8px;
  background-color: var(--vp-bg-dark);
  transition: transform 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
}

.block-card:hover {
  transform: scale(1.02);
}

.card-image {
  max-width: 100%;
  border-radius: 8px;
}

.field {
  margin-bottom: 8px;
  text-align: left; /* Align text to the left */
}

.big {
  flex: 0 0 calc(50% - 16px); /* Ensure big cards take up 50% of the width */
}

.medium {
  flex: 0 0 calc(33.33% - 16px); /* Ensure medium cards take up 33.33% of the width */
}

@media (max-width: 1024px) {
  .medium {
    flex: 0 0 calc(50% - 16px); /* Adjust medium cards to take up 50% on smaller screens */
  }
}

@media (max-width: 768px) {
  .block-card {
    flex: 0 0 100%;
  }
}
</style>
