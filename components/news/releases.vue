<!-- pages/newsroom/press-releases.vue -->
<template>
  <div class="mx-4 md:mx-auto">
    <article
      v-for="post in posts"
      :key="post.id"
      class="flex max-w-2xl flex-col items-start justify-between"
    >
      <div class="flex items-center gap-x-1 text-xs text-gray-400">
        {{ post.location }},
        <time :datetime="post.datetime">{{ post.date }}</time>
      </div>
      <div class="group relative">
        <h3
          class="mt-3 text-lg font-medium leading-6 text-gray-300 group-hover:text-lime"
        >
          <NuxtLink :to="`/newsroom/${post.slug}`">
            <span class="absolute inset-0" />
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p
          class="mt-2 text-sm leading-6 text-gray-300 mb-4"
          v-html="post.description"
        />

        <NuxtLink
          :to="`/newsroom/${post.slug}`"
          class="flex items-center text-lime text-xs cursor-pointer"
          >FULL ARTICLE <img src="/img/arrow_up.svg" class="w-3 h-3 ml-1"
        /></NuxtLink>
      </div>
    </article>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    slug: "air5-announces-5g-standards-based-architecture",
    title:
      "AIR5 ANNOUNCES 5G-STANDARDS-BASED ARCHITECTURE DESIGNED FOR CABLE AND WIRELESS OPERATORS TO HARMONIZE BROADBAND ECOSYSTEMS, JEFF BROWN AS CEO, AND WORLD-RENOWNED TECHNOLOGY TEAM",
    description: `<p class="italic">Patent-pending 5G-standards-based solution to empower the next wave of innovation for cable operators, aid in customer growth and retention, and forge alignment with technology that is driving the mobile ecosystem for wireless operators.</p>
            <p class="italic">New architecture development is led by Air5 co-founders, Jan Uddenfeldt and Lorenz Glatz, technologists behind the design of today's leading technology standards used across the wireless and cable industries.</p>
            <p>
            Air5, a new Silicon Valley based technology company focused on aligning wired
            and wireless networks, named wireless veteran Jeff Brown, its CEO and
            introduced its disruptive patent-pending 5G-standards-based network
            architecture that will, for the first time, effectively harmonize disparate
            broadband infrastructures. The innovative new concept allows a 5G-based
            network architecture to seamlessly share cable’s hybrid fiber coaxial (HFC)
            infrastructure with the industry’s current DOCSIS standard.
          </p>
          <p>
            The company also announced it has attracted a prestigious executive team and
            advisory board consisting of esteemed global C-level technologists and
            business luminaries from world-renowned cable, wireless, and tech companies,
            such as Liberty Global, Ericsson, Vodafone, Cisco, Charter, Comcast, Motorola
            and AT&T. The group, responsible for transforming their industries, will
            participate in the continued development and execution of Air5’s vision.
          </p>`,

    date: "Aug 22, 2024",
    datetime: "2024-08-22",
    location: "Palo Alto",
  },
  // More posts...
];
</script>
