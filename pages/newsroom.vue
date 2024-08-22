<!-- pages/newsroom.vue -->
<template>
  <main class="bg-scuro min-h-screen flex flex-col justify-between">
    <Nav />
    <section class="pt-64 container mx-auto">
      <h1
        class="text-5xl md:text-6xl font-n27 font-light italic text-white text-center"
      >
        Air5 Newsroom
      </h1>
      <div class="flex justify-center mt-12">
        <span class="font-n27 uppercase text-gray-300 border-b border-gray-700">
          <NuxtLink
            to="/newsroom/press-releases"
            class="inline-flex items-center px-4 py-2 text-sm hover:text-lime w-full sm:w-fit"
            active-class="text-lime border-b-2 border-lime"
          >
            Press Releases
          </NuxtLink>
          <NuxtLink
            to="/newsroom/media-mentions"
            class="relative -ml-px inline-flex items-center px-4 py-2 text-sm hover:text-lime w-full sm:w-fit"
            active-class="text-lime border-b-2 border-lime"
          >
            Media Mentions
          </NuxtLink>
          <NuxtLink
            to="/newsroom/library"
            class="relative -ml-px inline-flex items-center px-4 py-2 text-sm hover:text-lime w-full sm:w-fit"
            active-class="text-lime border-b-2 border-lime"
          >
            Library
          </NuxtLink>
        </span>
      </div>
      <div class="mt-8">
        <NuxtPage />
      </div>
    </section>
    <Footer />
  </main>
</template>

<script setup>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";
</script>
