<template>
  <div 
    class="progress-bar-container"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ 'hover-effect': isHovered }"
  >
    <div
      class="progress-bar"
      :style="{ width: progressPercentage + '%', backgroundColor: barColor, boxShadow: '0 0 15px ' + barColor }"
    ></div>
    <div
      class="progress-text"
      :class="{
        'text-dark': progressPercentage < 50,
        'text-light': progressPercentage >= 50,
      }"
      :style="{ opacity: showPercentage || isHovered ? 1 : 0 }"
    >
      {{ progressPercentage }}%
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startDate: {
      type: Date,
      default: null,
    },
    endDate: {
      type: Date,
      default: null,
    },
    maxNumber: {
      type: Number,
      default: null,
    },
    currentNumber: {
      type: Number,
      default: null,
    },
    updateInterval: {
      type: Number,
      default: 3600000, // 1 hour in milliseconds
    },
    barColor: {
      type: String,
      default: '#4caf50', // Default color green
    },
    showPercentage: {
      type: Boolean,
      default: true, // Show percentage by default
    },
  },
  data() {
    return {
      progressPercentage: 0,
      isHovered: false,
    };
  },
  mounted() {
    this.updateProgress();
    setInterval(this.updateProgress, this.updateInterval); // Use milliseconds for the interval
  },
  methods: {
    calculateJDN(year, month, day) {
      if (month <= 2) {
        year -= 1;
        month += 12;
      }
      const A = Math.floor(year / 100);
      const B = 2 - A + Math.floor(A / 4);
      return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
    },
    updateProgress() {
      const now = new Date();
      if (this.startDate && this.endDate) {
        const totalJDNStart = this.calculateJDN(this.startDate.getFullYear(), this.startDate.getMonth() + 1, this.startDate.getDate());
        const totalJDNEnd = this.calculateJDN(this.endDate.getFullYear(), this.endDate.getMonth() + 1, this.endDate.getDate());
        const totalDays = totalJDNEnd - totalJDNStart;

        const currentJDN = this.calculateJDN(now.getFullYear(), now.getMonth() + 1, now.getDate());
        const elapsedDays = currentJDN - totalJDNStart;

        const progress = (elapsedDays / totalDays) * 100;
        this.progressPercentage = Math.min(progress, 100).toFixed(2);
      } else if (this.maxNumber !== null && this.currentNumber !== null) {
        const progress = (this.currentNumber / this.maxNumber) * 100;
        this.progressPercentage = Math.min(progress, 100).toFixed(2);
      }
    },
  },
};
</script>

<style scoped>
.progress-bar-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
  padding: 0; /* Ensure no padding around the container */
  box-sizing: border-box; /* Ensure box-sizing to include padding */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */
  box-shadow: none; /* No shadow by default */
}
.progress-bar {
  height: 20px;
  width: 0%;
  transition: width 0.3s ease, box-shadow 0.3s ease;
  background-clip: padding-box; /* Ensure no white edges are visible */
  border-radius: 8px; /* Rounded corners on all sides */
  box-shadow: 0 0 15px var(--barColor); /* Add constant glow effect */
}
.progress-text {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
  left: 0;
  height: 20px;
  line-height: 20px;
  font-size: 0.9rem;
  transition: opacity 0.3s ease; /* Smooth transition for text visibility */
}
.text-light {
  color: #fff;
}
.text-dark {
  color: #000;
}
.hover-effect {
  transform: scale(1.05); /* Slight size increase on hover */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Shadow around the block */
}
</style>
