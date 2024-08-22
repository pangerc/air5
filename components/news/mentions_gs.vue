<template>
  <div class="mx-4 md:mx-auto">
    <article
      v-for="post in displayedPosts"
      :key="post.url"
      class="flex max-w-xl flex-col items-start justify-between mb-4"
    >
      <div class="flex items-center gap-x-4 text-xs">
        <time :datetime="post.date" class="text-gray-500">{{ post.date }}</time>
        <div
          class="relative z-10 rounded-full bg-gray-500 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-100"
        >
          {{ post.publication }}
        </div>
      </div>
      <div class="group relative">
        <h3
          class="mt-3 text-base font-medium leading-6 text-gray-300 group-hover:text-gray-600"
        >
          <a
            :href="post.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-lime"
          >
            <span class="absolute inset-0" />
            {{ post.title }}
          </a>
        </h3>
        <!-- Remove description if not available in your Google Sheet -->
      </div>
    </article>
    <div v-if="showReadMore" class="mt-4">
      <NuxtLink
        to="/newsroom/media-mentions"
        class="text-lime hover:text-white font-n27 text-sm uppercase flex items-center"
      >
        More <img src="/img/arrow_up.svg" class="w-3 h-3 ml-1" alt="More" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useGoogleSheets } from "~/composables/useGoogleSheets";

const props = defineProps({
  limit: {
    type: Number,
    default: Infinity,
  },
});

const { fetchSheetData } = useGoogleSheets();

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const sheetId = "1izPvLPl744unOOhCdgGDOeuibUgwesIVpi7l4MjC5EM";
    posts.value = await fetchSheetData(sheetId);
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
  }
};

// Fetch posts when component is mounted
fetchPosts();

const displayedPosts = computed(() => {
  return posts.value.slice(0, props.limit);
});

const showReadMore = computed(() => {
  return posts.value.length > props.limit;
});
</script>
