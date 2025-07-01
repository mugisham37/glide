
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'HelloWorld': typeof import("../app/components/HelloWorld.vue")['default']
    'TheWelcome': typeof import("../app/components/TheWelcome.vue")['default']
    'WelcomeItem': typeof import("../app/components/WelcomeItem.vue")['default']
    'IconsIconCommunity': typeof import("../app/components/icons/IconCommunity.vue")['default']
    'IconsIconDocumentation': typeof import("../app/components/icons/IconDocumentation.vue")['default']
    'IconsIconEcosystem': typeof import("../app/components/icons/IconEcosystem.vue")['default']
    'IconsIconSupport': typeof import("../app/components/icons/IconSupport.vue")['default']
    'IconsIconTooling': typeof import("../app/components/icons/IconTooling.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'PrismicEmbed': typeof import("@prismicio/vue")['PrismicEmbed']
    'PrismicImage': typeof import("@prismicio/vue")['PrismicImage']
    'PrismicLink': typeof import("@prismicio/vue")['PrismicLink']
    'PrismicText': typeof import("@prismicio/vue")['PrismicText']
    'PrismicRichText': typeof import("@prismicio/vue")['PrismicRichText']
    'PrismicTable': typeof import("@prismicio/vue")['PrismicTable']
    'SliceZone': typeof import("@prismicio/vue")['SliceZone']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyHelloWorld': LazyComponent<typeof import("../app/components/HelloWorld.vue")['default']>
    'LazyTheWelcome': LazyComponent<typeof import("../app/components/TheWelcome.vue")['default']>
    'LazyWelcomeItem': LazyComponent<typeof import("../app/components/WelcomeItem.vue")['default']>
    'LazyIconsIconCommunity': LazyComponent<typeof import("../app/components/icons/IconCommunity.vue")['default']>
    'LazyIconsIconDocumentation': LazyComponent<typeof import("../app/components/icons/IconDocumentation.vue")['default']>
    'LazyIconsIconEcosystem': LazyComponent<typeof import("../app/components/icons/IconEcosystem.vue")['default']>
    'LazyIconsIconSupport': LazyComponent<typeof import("../app/components/icons/IconSupport.vue")['default']>
    'LazyIconsIconTooling': LazyComponent<typeof import("../app/components/icons/IconTooling.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyPrismicEmbed': LazyComponent<typeof import("@prismicio/vue")['PrismicEmbed']>
    'LazyPrismicImage': LazyComponent<typeof import("@prismicio/vue")['PrismicImage']>
    'LazyPrismicLink': LazyComponent<typeof import("@prismicio/vue")['PrismicLink']>
    'LazyPrismicText': LazyComponent<typeof import("@prismicio/vue")['PrismicText']>
    'LazyPrismicRichText': LazyComponent<typeof import("@prismicio/vue")['PrismicRichText']>
    'LazyPrismicTable': LazyComponent<typeof import("@prismicio/vue")['PrismicTable']>
    'LazySliceZone': LazyComponent<typeof import("@prismicio/vue")['SliceZone']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const HelloWorld: typeof import("../app/components/HelloWorld.vue")['default']
export const TheWelcome: typeof import("../app/components/TheWelcome.vue")['default']
export const WelcomeItem: typeof import("../app/components/WelcomeItem.vue")['default']
export const IconsIconCommunity: typeof import("../app/components/icons/IconCommunity.vue")['default']
export const IconsIconDocumentation: typeof import("../app/components/icons/IconDocumentation.vue")['default']
export const IconsIconEcosystem: typeof import("../app/components/icons/IconEcosystem.vue")['default']
export const IconsIconSupport: typeof import("../app/components/icons/IconSupport.vue")['default']
export const IconsIconTooling: typeof import("../app/components/icons/IconTooling.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const PrismicEmbed: typeof import("@prismicio/vue")['PrismicEmbed']
export const PrismicImage: typeof import("@prismicio/vue")['PrismicImage']
export const PrismicLink: typeof import("@prismicio/vue")['PrismicLink']
export const PrismicText: typeof import("@prismicio/vue")['PrismicText']
export const PrismicRichText: typeof import("@prismicio/vue")['PrismicRichText']
export const PrismicTable: typeof import("@prismicio/vue")['PrismicTable']
export const SliceZone: typeof import("@prismicio/vue")['SliceZone']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyHelloWorld: LazyComponent<typeof import("../app/components/HelloWorld.vue")['default']>
export const LazyTheWelcome: LazyComponent<typeof import("../app/components/TheWelcome.vue")['default']>
export const LazyWelcomeItem: LazyComponent<typeof import("../app/components/WelcomeItem.vue")['default']>
export const LazyIconsIconCommunity: LazyComponent<typeof import("../app/components/icons/IconCommunity.vue")['default']>
export const LazyIconsIconDocumentation: LazyComponent<typeof import("../app/components/icons/IconDocumentation.vue")['default']>
export const LazyIconsIconEcosystem: LazyComponent<typeof import("../app/components/icons/IconEcosystem.vue")['default']>
export const LazyIconsIconSupport: LazyComponent<typeof import("../app/components/icons/IconSupport.vue")['default']>
export const LazyIconsIconTooling: LazyComponent<typeof import("../app/components/icons/IconTooling.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyPrismicEmbed: LazyComponent<typeof import("@prismicio/vue")['PrismicEmbed']>
export const LazyPrismicImage: LazyComponent<typeof import("@prismicio/vue")['PrismicImage']>
export const LazyPrismicLink: LazyComponent<typeof import("@prismicio/vue")['PrismicLink']>
export const LazyPrismicText: LazyComponent<typeof import("@prismicio/vue")['PrismicText']>
export const LazyPrismicRichText: LazyComponent<typeof import("@prismicio/vue")['PrismicRichText']>
export const LazyPrismicTable: LazyComponent<typeof import("@prismicio/vue")['PrismicTable']>
export const LazySliceZone: LazyComponent<typeof import("@prismicio/vue")['SliceZone']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
