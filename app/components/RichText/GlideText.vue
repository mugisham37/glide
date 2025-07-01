<script lang="ts" setup>
interface Props {
  as?: 'span' | 'div' | 'p';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'span',
  size: 'md',
  className: ''
});

// Size classes mapping for glide text
const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl'
};

// Computed classes for the glide text styling
const textClasses = computed(() => {
  return [
    'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium',
    sizeClasses[props.size],
    props.className
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <Component 
    :is="as" 
    :class="textClasses"
  >
    <slot />
  </Component>
</template>
