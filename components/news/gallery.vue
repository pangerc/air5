<template>
  <ul
    role="list"
    class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    <li v-for="file in files" :key="file.source" class="relative">
      <div
        class="group aspect-square block w-full overflow-hidden rounded-lg bg-gray-800 focus-within:ring-2 focus-within:ring-lime focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
      >
        <img
          :src="file.thumbnail"
          :alt="file.title"
          class="pointer-events-none object-cover group-hover:opacity-75"
        />
        <button
          type="button"
          class="absolute inset-0 focus:outline-none"
          @click="viewDetails(file)"
        >
          <span class="sr-only">View details for {{ file.title }}</span>
        </button>
        <div
          class="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          @click.stop="downloadFile(file)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white bg-gray-800 bg-opacity-50 rounded-full p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>
      </div>
      <p
        class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300"
      >
        {{ file.title }}
      </p>
      <p class="pointer-events-none block text-sm font-medium text-gray-500">
        {{ file.format }}
      </p>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const files = ref([
  {
    title: "Portrait of Jeff Brown",
    format: "JPG",
    source: "/media/jeff.jpg",
    thumbnail: "/media/jeff_thumb.jpg",
  },
  {
    title: "Air5 tech diagram",
    format: "PNG",
    source: "/media/air5tech.png",
    thumbnail: "/media/air5tech_thumb.png",
  },
  {
    title: "AIR5 logo, white and lime",
    format: "SVG",
    source: "/media/logo/Air5_143.svg",
    thumbnail: "/media/logo/143.svg",
  },
  {
    title: "AIR5 logo, lime",
    format: "SVG",
    source: "/media/logo/Air5_144.svg",
    thumbnail: "/media/logo/144.svg",
  },
  {
    title: "AIR5 logo, white",
    format: "SVG",
    source: "/media/logo/Air5_145.svg",
    thumbnail: "/media/logo/145.svg",
  },
  {
    title: "AIR5 logo, black and lime",
    format: "SVG",
    source: "/media/logo/Air5_146.svg",
    thumbnail: "/media/logo/146.svg",
  },
  {
    title: "AIR5 logo, lime",
    format: "SVG",
    source: "/media/logo/Air5_147.svg",
    thumbnail: "/media/logo/147.svg",
  },
  {
    title: "AIR5 logo, black",
    format: "SVG",
    source: "/media/logo/Air5_148.svg",
    thumbnail: "/media/logo/148.svg",
  },
]);

const viewDetails = (file) => {
  // Implement view details logic
  console.log("View details for:", file.title);
};

const downloadFile = (file) => {
  // Implement download logic
  console.log("Downloading:", file.source);

  // Example download implementation (you might want to use a more robust method)
  const link = document.createElement("a");
  link.href = file.source;
  link.download = file.title;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
