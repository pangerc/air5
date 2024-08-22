<template>
  <div class="bg-black relative">
    <Nav />
    <div class="relative overflow-hidden">
      <!-- Video Element -->
      <video
        class="w-full h-auto"
        autoplay
        muted
        loop
        playsinline
        ref="videoRef"
        id="herohero"
      >
        <source :src="currentVideoSource" type="video/mp4" />
      </video>
      <!-- Overlay Content -->
      <!-- <div
        class="absolute inset-0 flex items-center justify-center px-4 md:px-8 pb-10 md:pb-8 lg:pb-16"
      >
        <div class="max-w-5xl text-center space-y-4 flex flex-col items-center">
          <h1
            :class="[
              currentTextColor,
              'text-4xl',
              'md:text-5xl',
              'lg:text-7xl',
              'italic',
              'font-n27',
              'font-medium',
            ]"
          >
            Inventing the <br />
            <span class="text-lime">Future Of Cable</span>
          </h1>
          <p
            :class="[
              currentTextColor,
              'text-base md:text-xl lg:text-2xl max-w-3xl font-light',
            ]"
          >
            of <span class="text-lavender-lighter">wired</span> and
            <span class="text-lime-lighter">wireless</span>
            network convergence
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from "vue";
import Nav from "@/components/nav.vue";

const videoRef = ref(null);
const videoPairs = [
  {
    desktop: "/video/Air5WebsiteHeaderFINAL.mp4",
    mobile: "/video/Air5WebsiteHeaderMobile.mp4",
    textColor: "text-white",
  },
];

const isMobile = ref(false);
const currentPairIndex = ref(0);
const currentPair = computed(() => videoPairs[currentPairIndex.value]);
const currentVideoSource = computed(() =>
  isMobile.value ? currentPair.value.mobile : currentPair.value.desktop
);
const currentTextColor = computed(() => currentPair.value.textColor);

const updateVideoSource = () => {
  if (videoRef.value) {
    videoRef.value.load();
    videoRef.value
      .play()
      .catch((error) => console.error("Error playing video:", error));
  }
};

onMounted(() => {
  const mediaQuery = window.matchMedia("(max-width: 640px)");
  isMobile.value = mediaQuery.matches;

  const handleMediaQueryChange = (event) => {
    isMobile.value = event.matches;
  };

  mediaQuery.addEventListener("change", handleMediaQueryChange);

  watchEffect(() => {
    updateVideoSource();
  });

  // Cleanup
  onUnmounted(() => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  });
});
</script>
