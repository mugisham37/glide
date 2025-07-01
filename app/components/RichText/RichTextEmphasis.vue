<script lang="ts" setup>
interface Props {
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  gradientFrom: 'from-teal-400',
  gradientTo: 'to-sky-400'
});

// Computed classes for flexibility
const emphasisClasses = computed(() => {
  return [
    'bg-gradient-to-b bg-clip-text not-italic text-transparent',
    props.gradientFrom,
    props.gradientTo,
    props.className
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <em :class="emphasisClasses">
    <slot />
  </em>
</template>
