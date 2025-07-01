<script lang="ts" setup>
interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  maxWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h2',
  size: 'xl',
  alignment: 'center',
  className: '',
  maxWidth: 'max-w-3xl'
});

// Size classes mapping
const sizeClasses = {
  sm: 'text-3xl font-medium md:text-4xl',
  md: 'text-4xl font-medium md:text-5xl',
  lg: 'text-5xl font-medium md:text-6xl',
  xl: 'text-5xl font-medium md:text-7xl'
};

// Alignment classes mapping
const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};

// Computed classes for flexibility
const headingClasses = computed(() => {
  return [
    'text-balance',
    props.maxWidth,
    sizeClasses[props.size],
    alignmentClasses[props.alignment],
    props.className
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <Component 
    :is="as" 
    :class="headingClasses"
  >
    <slot />
  </Component>
</template>
