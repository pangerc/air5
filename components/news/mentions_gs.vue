<template>
  <div class="mx-4 md:mx-auto">
    <article
      v-for="post in displayedPosts"
      :key="post.url"
      class="flex max-w-xl flex-col items-start justify-between mb-6"
    >
      <div class="flex items-center gap-x-4 text-xs">
        <time :datetime="post.date" class="text-gray-500">{{
          formatDate(post.date)
        }}</time>
      </div>
      <div class="group relative">
        <h3
          class="mt-1 text-base font-medium leading-6 text-gray-300 group-hover:text-gray-600"
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
        <div
          class="font-light text-xs text-gray-300 mt-2 uppercase italic flex"
        >
          {{ post.publication }}
          <img src="/img/arrow_up_w.svg" class="w-3 h-3 ml-1" />
        </div>
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

const props = defineProps({
  limit: {
    type: Number,
    default: Infinity,
  },
});

const posts = ref([]);

const { data: fetchedPosts, error } = await useFetch("/api/mentions");

if (error.value) {
  console.error("Error fetching mentions:", error.value);
} else {
  posts.value = fetchedPosts.value;
}

const displayedPosts = computed(() => {
  return posts.value.slice(0, props.limit);
});

const showReadMore = computed(() => {
  return posts.value.length > props.limit;
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
</script>
