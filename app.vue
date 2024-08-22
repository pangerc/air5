<template>
  <main class="bg-scuro">
    <NuxtPage />
  </main>
</template>
<style>
h2 {
  @apply font-n27 text-3xl md:text-4xl lg:text-5xl italic text-white  text-center;
}
h3 {
  @apply font-n27 text-lime text-lg italic;
}
h4 {
  @apply font-n27 text-white pt-4 font-thin text-base md:text-lg;
}
p {
  @apply font-strawford text-white text-sm font-light;
}
.rounded-left {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-right {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>
