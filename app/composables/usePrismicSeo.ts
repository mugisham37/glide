import type { ImageField, KeyTextField } from '@prismicio/client';

interface SeoData {
  meta_title?: KeyTextField;
  meta_description?: KeyTextField;
  meta_image?: ImageField;
}

/**
 * Composable for handling Prismic SEO meta tags
 * Provides consistent SEO meta tag setup across pages
 */
export const usePrismicSeo = (data: SeoData | null | undefined) => {
  const prismic = usePrismic();

  useSeoMeta({
    title: data?.meta_title ?? undefined,
    ogTitle: data?.meta_title ?? undefined,
    description: data?.meta_description ?? undefined,
    ogDescription: data?.meta_description ?? undefined,
    ogImage: computed(() => 
      data?.meta_image ? prismic.asImageSrc(data.meta_image) : undefined
    ),
  });
};
