<script setup lang="ts">
import { components } from '~/slices';

const prismic = usePrismic();
const route = useRoute();

// Fetch page data with proper error handling and fetchLinks
const { data: page, error } = await useAsyncData(
  `page:${route.params.uid}`,
  () => prismic.client.getByUID('page', route.params.uid as string, { 
    fetchLinks: [
      'case_study.company',
      'case_study.description',
      'case_study.cover',
    ] 
  }),
  {
    default: () => null
  }
);

// Handle 404 case
if (error.value || !page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  });
}

// Use the reusable SEO composable
usePrismicSeo(page.value?.data);
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
