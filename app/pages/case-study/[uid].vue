<script setup lang="ts">
import gsap from 'gsap';
import { components } from '~/slices';

const prismic = usePrismic();
const route = useRoute();

// Fetch case study data with proper error handling
const { data: page, error } = await useAsyncData(
  `case-study:${route.params.uid}`,
  () => prismic.client.getByUID('case_study', route.params.uid as string),
  {
    // Add error handling for better UX
    default: () => null
  }
);

// Handle 404 case
if (error.value || !page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Case study not found'
  });
}

// Use the reusable SEO composable
usePrismicSeo(page.value?.data);

// Enhanced animation with better accessibility support
onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set('.case-study__image', { opacity: 1 });
    return;
  }

  // More refined animation with better easing
  gsap.fromTo(
    '.case-study__image',
    {
      opacity: 0,
      y: 100,
      scale: 0.95
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      delay: 0.3,
      ease: 'power2.out'
    }
  );
});
</script>

<template>
  <main>
    <Bounded>
      <header class="relative grid w-full place-items-center text-center">
        <GlideGrid />
        <h1 class="text-5xl font-medium md:text-7xl">
          <PrismicText :field="page?.data.company" />
          <RichTextGlideText class="block text-lg">Case Study</RichTextGlideText>
        </h1>
        <p class="mb-4 mt-8 max-w-xl text-lg text-slate-300">
          <PrismicText :field="page?.data.description" />
        </p>
        <PrismicImage
          v-if="$prismic.isFilled.image(page?.data.cover)"
          :field="page?.data.cover"
          class="case-study__image rounded-lg opacity-0 max-w-4xl w-full"
          loading="eager"
          :alt="page?.data.cover.alt || `${page?.data.company} case study cover`"
        />
      </header>
      <SliceZone
        wrapper="div"
        class="mx-auto mt-12 md:mt-16"
        :slices="page?.data.slices ?? []"
        :components="components"
      />
    </Bounded>
  </main>
</template>
