<template>
  <div
    class="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden wallpaper bg-cover"
  >
    <div class="absolute top-5 left-5">
      <img src="/img/air5.svg" class="h-8 w-auto" />
    </div>
    <div class="absolute top-8 right-5">
      <a
        href="mailto:info@air5.io"
        class="bg-lime text-black px-6 py-2 text-sm rounded-2xl font-n27 uppercase hover:bg-lime-lighter"
        >Contact Us</a
      >
    </div>
    <div
      class="text-center text-white font-n27 italic text-5xl md:text-8xl relative z-10"
    >
      <p>INVENTING THE</p>
      <p class="text-lime">FUTURE OF CABLE</p>
    </div>
    <div class="absolute bottom-0 flex w-full h-1/3 items-end px-10 space-x-1">
      <div
        v-for="(bar, index) in bars"
        :key="index"
        :class="barClasses(index)"
        :style="barStyle(index)"
      ></div>
    </div>
  </div>
</template>

<script setup>
const bars = [1, 2, 3, 4, 5];

const barClasses = (index) => {
  return ["bg-lime", "w-1/5", "min-h-64", "animate-bar-wave"];
};

const barStyle = (index) => {
  const delay = index * 0.5; // Increasing delay for wave effect
  const height = 200 + Math.random() * 100; // More varied height between 200px and 300px
  return {
    animationDelay: `${delay}s`,
    height: `${height}px`,
  };
};
</script>

<style scoped>
@keyframes barWave {
  0%,
  150% {
    transform: scaleY(1);
  }
  70% {
    transform: scaleY(2); /* Scale up to twice the size */
  }
}

.animate-bar-wave {
  animation: barWave 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

.wallpaper {
  background-image: url(/img/bg.svg);
}
</style>
