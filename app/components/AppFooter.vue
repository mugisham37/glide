<script lang="ts" setup>
import type { Content } from "@prismicio/client";

interface Props {
  settings?: Content.SettingsDocument;
}

defineProps<Props>();
</script>

<template>
  <footer class="border-t border-gray-600">
    <nav
      class="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row"
      aria-label="Footer navigation"
    >
      <NuxtLink 
        to="/" 
        class="transition-opacity hover:opacity-80 focus:opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded"
        aria-label="Go to homepage"
      >
        <GlideLogo />
        <span class="sr-only">{{ settings?.data.site_title }} home page</span>
      </NuxtLink>

      <ul class="flex gap-6" role="list">
        <li v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink 
            :field="link" 
            class="inline-flex min-h-11 items-center transition-colors hover:text-teal-300 focus:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-2"
            :class="{ buttonLink: link.variant === 'Button' }"
          />
        </li>
      </ul>
    </nav>
  </footer>
</template>
