<template>
  <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
    <ul
      role="list"
      :class="[
        'mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none',
        people.length === 4
          ? 'lg:grid-cols-4 gap-x-8'
          : 'lg:grid-cols-3 gap-x-16 lg:px-24',
      ]"
    >
      <li v-for="person in people" :key="person.name">
        <img
          class="mx-auto h-36 w-36 rounded-full"
          :src="person.imageUrl"
          :alt="person.name"
        />
        <h3
          class="mt-6 text-lg font-normal font-n27 leading-7 tracking-tight text-lime"
        >
          {{ person.name }}
        </h3>
        <p class="text-white font-n27 font-light">
          {{ person.role }}
        </p>
        <p class="text-xs leading-6 text-white font-strawford pt-4">
          {{ person.bio }}
        </p>
        <ul
          v-if="person.linkedinUrl"
          role="list"
          class="mt-3 flex justify-center gap-x-3"
        >
          <li>
            <a
              :href="person.linkedinUrl"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">LinkedIn</span>
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  people: {
    type: Array,
    required: true,
  },
});
</script>
