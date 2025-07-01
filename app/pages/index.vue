<script setup lang="ts">
import { components } from '~/slices';

const prismic = usePrismic();

// Fetch home page data with proper error handling and fetchLinks
const { data: page, error } = await useAsyncData(
  'home-page',
  () => prismic.client.getByUID('page', 'home', { 
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

// Handle error case - home page should always exist
if (error.value || !page.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Home page not found - please check your Prismic configuration'
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
