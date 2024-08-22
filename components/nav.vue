<template>
  <header class="absolute z-10 w-full">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Air5</span>
          <img class="h-8 w-auto" src="/img/air5.svg" alt="Air5" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lime"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="getNavigationLink(item)"
          @click="handleNavClick($event, item)"
          class="text-xs font-n27 font-light leading-6 text-gray-200 uppercase"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="mailto:info@air5.io"
          class="text-xs font-medium tracking-wide text-black bg-lime px-4 py-2 rounded-full uppercase hover:bg-lime-lighter"
        >
          Contact Us
        </a>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="closeMobileMenu"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-scuro px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Air5</span>
            <img class="h-8 w-auto" src="/img/air5.svg" alt="Air" />
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-300"
            @click="closeMobileMenu"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-300/10">
            <div class="space-y-2 py-6 text-center flex flex-col">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="getNavigationLink(item)"
                @click="handleNavClick($event, item)"
                class="text-xs font-n27 font-light leading-6 text-gray-200 uppercase"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
            <div class="py-6">
              <a
                href="mailto:info@air5.io"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-n27 leading-7 text-white hover:bg-gray-50 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const router = useRouter();

const navigation = [
  { name: "Solution", href: "#solution" },
  { name: "Team", href: "#team" },
  { name: "Company", href: "#company" },
  { name: "Newsroom", href: "/newsroom" },
];

const mobileMenuOpen = ref(false);

const isHomePage = computed(() => route.path === "/");

const getNavigationLink = (item) => {
  if (item.href.startsWith("#")) {
    return isHomePage.value ? item.href : `/${item.href}`;
  }
  return item.href;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const handleNavClick = (event, item) => {
  closeMobileMenu();

  if (item.href.startsWith("#")) {
    event.preventDefault();
    const targetId = item.href.substring(1);

    if (isHomePage.value) {
      scrollToElement(targetId);
    } else {
      router.push({ path: "/", hash: `#${targetId}` });
    }
  }
};

const scrollToElement = (targetId) => {
  setTimeout(() => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, 100); // Small delay to ensure DOM is ready
};

// Watch for route changes
router.afterEach((to) => {
  if (to.hash) {
    scrollToElement(to.hash.slice(1));
  }
});
</script>
