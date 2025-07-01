<script lang="ts" setup>
interface Props {
  as?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
  as: 'section',
  size: 'lg',
  spacing: 'md'
});

// Size classes mapping
const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl', 
  xl: 'max-w-7xl',
  full: 'max-w-full'
};

// Dynamic classes based on props
const containerClasses = computed(() => {
  const spacingClasses = {
    sm: 'px-4 py-8 md:px-6 md:py-12',
    md: 'px-4 py-14 first:!pt-10 md:px-6 md:py-20 lg:py-24',
    lg: 'px-4 py-20 first:!pt-14 md:px-6 md:py-28 lg:py-32',
    xl: 'px-4 py-24 first:!pt-16 md:px-6 md:py-32 lg:py-40'
  };

  return [
    spacingClasses[props.spacing],
    'w-full'
  ].join(' ');
});

const innerClasses = computed(() => {
  return [
    'mx-auto w-full flex flex-col items-center',
    sizeClasses[props.size]
  ].join(' ');
});
</script>

<template>
  <Component 
    :is="as" 
    :class="containerClasses"
  >
    <div :class="innerClasses">
      <slot />
    </div>
  </Component>
</template>
