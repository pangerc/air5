<template>
  <div class="mx-4 md:mx-auto">
    <article
      v-for="post in displayedPosts"
      :key="post.id"
      class="flex max-w-xl flex-col items-start justify-between mb-4"
    >
      <div class="flex items-center gap-x-4 text-xs">
        <time :datetime="post.datetime" class="text-gray-500">{{
          post.date
        }}</time>
        <div
          class="relative z-10 rounded-full bg-gray-500 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-100"
        >
          {{ post.outlet }}
        </div>
      </div>
      <div class="group relative">
        <h3
          class="mt-3 text-base font-medium leading-6 text-gray-300 group-hover:text-gray-600"
        >
          <a :href="post.href" class="hover:text-lime">
            <span class="absolute inset-0" />
            {{ post.title }}
          </a>
        </h3>
        <p class="mt-1 line-clamp-3 text-sm leading-6 text-gray-300">
          {{ post.description }}
        </p>
      </div>
    </article>
    <div v-if="showReadMore" class="mt-4">
      <NuxtLink
        to="/newsroom/media-mentions"
        class="text-lime hover:text-white font-n27 text-sm uppercase flex items-center"
      >
        More <img src="/img/arrow_up.svg" class="w-3 h-3 ml-1" />
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

const posts = ref([
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Aug 22, 2024",
    datetime: "2024-08-22",
    outlet: "WSJ",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2024",
    datetime: "2024-03-10",
    outlet: "TechCrunch",
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    date: "Feb 12, 2024",
    datetime: "2024-02-12",
    outlet: "Forbes",
  },
  // You can add more posts here
]);

const displayedPosts = computed(() => {
  return posts.value.slice(0, props.limit);
});

const showReadMore = computed(() => {
  return posts.value.length > props.limit;
});
</script>
