<script lang="ts" setup>
import type { Content } from "@prismicio/client";

interface Props {
  settings?: Content.SettingsDocument;
}

defineProps<Props>();

const isOpen = ref(false);

// Close mobile menu on escape key
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false;
  }
};

// Handle mobile menu toggle
const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
};

// Add/remove escape key listener when mobile menu opens/closes
watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('keydown', handleEscape);
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  } else {
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
  }
});

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<template>
  <header class="p-4 md:p-6">
    <nav
      class="mx-auto flex max-w-6xl flex-col justify-between py-2 md:flex-row md:items-center font-medium text-white"
      aria-label="Main navigation"
    >
      <div class="flex items-center justify-between">
        <NuxtLink 
          to="/" 
          class="z-50 transition-opacity hover:opacity-80 focus:opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded" 
          @click="closeMobileMenu"
          aria-label="Go to homepage"
        >
          <GlideLogo />
          <span class="sr-only">{{ settings?.data.site_title }} home page</span>
        </NuxtLink>

        <button
          type="button"
          class="block md:hidden p-2 text-3xl text-white transition-colors hover:text-teal-300 focus:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded"
          :aria-expanded="isOpen"
          :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="toggleMobileMenu"
        >
          <Icon :name="isOpen ? 'ph:x-bold' : 'ph:list-bold'" />
        </button>
      </div>

      <!-- Mobile Nav -->
      <div
        class="md:hidden fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out"
        :class="isOpen ? 'translate-x-0' : 'translate-x-[100%]'"
        :aria-hidden="!isOpen"
      >
        <button
          type="button"
          class="block md:hidden p-2 text-3xl text-white transition-colors hover:text-teal-300 focus:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded"
          :aria-expanded="isOpen"
          aria-label="Close navigation menu"
          @click="closeMobileMenu"
        >
          <Icon name="ph:x-bold" />
        </button>
        
        <ul class="grid justify-items-end gap-8" role="list">
          <li v-for="link in settings?.data.navigation" :key="link.key">
            <PrismicLink
              :field="link"
              class="block min-h-11 px-3 text-3xl first:mt-8 transition-colors hover:text-teal-300 focus:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded"
              :class="{ buttonLink: link.variant === 'Button' }"
              @click="closeMobileMenu"
            />
          </li>
        </ul>
      </div>

      <!-- Desktop Nav -->
      <ul class="hidden gap-6 md:flex" role="list">
        <li v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink
            :field="link"
            class="inline-flex min-h-11 items-center transition-colors hover:text-teal-300 focus:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-2"
            :class="{ buttonLink: link.variant === 'Button' }"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>
