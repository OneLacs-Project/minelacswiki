<template>
    <div :class="['minecraft-bottle-container', size]">
      <!-- Bottle texture as the foreground -->
      <div
        class="minecraft-bottle"
        :style="{ backgroundImage: `url('${texture}')` }"
      ></div>
      <!-- Liquid as a separate element behind the bottle -->
      <div
        class="liquid"
        :style="{ backgroundColor: color, clipPath: liquidClipPath }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      color: {
        type: String,
        required: true, // HEX color for the liquid
      },
      size: {
        type: String,
        default: 'medium', // Accepts 'big', 'medium', or 'small'
        validator: (value) => ['big', 'medium', 'small'].includes(value),
      },
      texture: {
        type: String,
        default: '/minecraft/items/minecraft_bottle_texture.png', // Path to the bottle image
      },
      liquidFill: {
        type: Number,
        default: 50, // Percentage of how full the bottle is (0 to 100)
        validator: (value) => value >= 0 && value <= 100,
      },
    },
    computed: {
      liquidClipPath() {
        // Clip the liquid to simulate a filled area (adjust for the bottle's shape)
        return `inset(${100 - this.liquidFill}% 25% 12.5% 31.4%)`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container for better positioning */
  .minecraft-bottle-container {
    position: relative;
    display: inline-block;
    width: 128px; /* Match the image's native width */
    height: 128px; /* Match the image's native height */
    overflow: hidden; /* Ensure nothing spills outside */
  }
  
  /* Bottle texture in the foreground */
  .minecraft-bottle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%; /* Scale to fit container */
    z-index: 2; /* Place it above the liquid */
  }
  
  /* Liquid positioned behind the bottle */
  .minecraft-bottle-container .liquid {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    z-index: 1; /* Place it behind the bottle */
    clip-path: inset(50% 0 0 0); /* Default clip for 50% fill */
    transition: clip-path 0.3s ease; /* Smooth transition for fill changes */
  }
  </style>
  