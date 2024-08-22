<template>
  <section class="py-32 bg-cover">
    <div class="container mx-auto max-w-7xl">
      <h2>Why 5G in Cable</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-24 mx-4"
      >
        <div v-for="(item, index) in items" :key="index" class="relative">
          <div
            class="absolute top-0 left-0 text-lime text-6xl md:text-7xl font-n27 font-medium"
          >
            {{ padNumber(index + 1) }}
          </div>
          <div class="pl-20 md:pl-24">
            <h3 class="text-left text-white mb-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-300 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: "DOCSIS IS FACING ITS LIMITS",
    description:
      "Risk of fragmentation and operators overbuilding themselves with fiber could dilute.",
  },
  {
    title: "A BIGGER PIE",
    description:
      "The current spend on 5G and 6G is massive. Extending the technology to cable will bring new vendors into the space.",
  },
  {
    title: "BIGGER INNOVATION SPACE",
    description:
      "Adding the substantial capabilities of the cable ecosystem to the 5G ecosystem would create a powerhouse for innovation.",
  },

  {
    title: "BETTER SERVING THE CUSTOMER",
    description:
      "Synergizing the wired and wireless worlds on a single standard will allow maximum flexibility to innovate, design and deploy solutions to address consumer and business needs.",
  },
  {
    title: "CABLE'S ADVANTAGE OVER WIRELESS",
    description:
      "5G is faster over HFC and can deliver more than over wireless networks",
  },
];

const padNumber = (num) => {
  return num.toString().padStart(2, "0");
};
</script>

<style scoped>
section {
  background-image: url(/img/tower.png);
}
</style>
