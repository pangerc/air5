<template>
  <div class="bg-gray-900">
    <Nav />
    <div class="flex flex-col">
      <!-- Background Video Container -->
      <div
        class="relative w-full overflow-hidden aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9"
      >
        <!-- Video Element -->
        <video
          class="absolute top-0 left-0 w-full h-full object-cover"
          autoplay
          muted
          loop
          ref="videoRef"
          id="herohero"
        >
          <source :src="videoSource" type="video/mp4" />
        </video>

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 flex items-end justify-center px-4 md:px-8 pb-10 md:pb-8 lg:pb-16 w-full"
        >
          <div class="max-w-5xl text-center space-y-4" :key="textColor.value">
            <h1
              :class="[
                textColor,
                'text-5xl',
                'md:text-6xl',
                'lg:text-8xl',
                'italic',
                'font-n27',
              ]"
            >
              Inventing the Future<br />
              Of Cable
            </h1>
            <p :class="`${textColor} text-lg md:text-2xl max-w-3xl`">
              of wired and wireless network convergence
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Nav from "@/components/nav.vue";

let videoRef = ref(null);
let textColor = ref("text-white");

const videoPairs = [
  {
    desktop: "/video/Air5_Hero_Desktop.mp4",
    mobile: "/video/Air5_Hero_Mobile.mp4",
    textColor: "text-white",
  },
];
const getRandomVideoPair = () => {
  const randomPair = videoPairs[Math.floor(Math.random() * videoPairs.length)];
  textColor.value = randomPair.textColor; // Assuming each pair object now has a 'textColor' field.
  return randomPair;
};
let videoSource = ref(""); // Initialize as empty or set to a default video path if you prefer

onMounted(() => {
  videoSource.value = getRandomVideoPair().desktop; // Initialize here

  const mediaQuery = window.matchMedia("(max-width: 640px)");

  const changeVideoSource = () => {
    const randomPair = getRandomVideoPair();
    videoSource.value = mediaQuery.matches
      ? randomPair.mobile
      : randomPair.desktop;
    videoRef.value.load();

    const video = document.getElementById("herohero");
    video.play();
  };

  mediaQuery.addEventListener("change", changeVideoSource);
  changeVideoSource();
});

onUnmounted(() => {
  const mediaQuery = window.matchMedia("(max-width: 640px)");
  mediaQuery.removeEventListener("change", changeVideoSource);
});
</script>
