<script lang="ts" setup>
interface PrismicSettings {
  data: {
    site_title?: string
    meta_description?: string
    meta_image?: {
      url?: string
      alt?: string
    }
  }
}

interface Props {
  settings?: PrismicSettings
}

const props = withDefaults(defineProps<Props>(), {
  settings: undefined
})

const prismic = usePrismic()

// Fetch settings if not provided
const { data: settingsData } = await useAsyncData("settings", () =>
  prismic.client.getSingle('settings')
)

const settings = computed(() => props.settings || settingsData.value)

// SEO Meta configuration
useSeoMeta({
  title: computed(() => settings.value?.data.site_title),
  ogTitle: computed(() => settings.value?.data.site_title),
  description: computed(() => settings.value?.data.meta_description),
  ogDescription: computed(() => settings.value?.data.meta_description),
  ogImage: computed(() => prismic.asImageSrc(settings.value?.data.meta_image)),
})
</script>

<template>
  <div class="min-h-screen">
    <AppHeader :settings="settings" />
    <main>
      <slot />
    </main>
    <AppFooter :settings="settings" />
  </div>
</template>
