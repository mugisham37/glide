<script lang="ts" setup>
interface Props {
  size?: string | number;
  className?: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'auto',
  className: '',
  color: 'white'
});

// Computed classes for flexibility
const iconClasses = computed(() => {
  const classes = [props.className];
  
  if (typeof props.size === 'string' && props.size !== 'auto') {
    classes.push(props.size);
  }
  
  return classes.filter(Boolean).join(' ');
});

// Computed styles for dynamic sizing
const iconStyles = computed(() => {
  const styles: Record<string, string> = {};
  
  if (typeof props.size === 'number') {
    styles.width = `${props.size}px`;
    styles.height = `${props.size}px`;
  }
  
  return styles;
});
</script>

<template>
  <svg 
    width="155" 
    height="122" 
    viewBox="0 0 155 122" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    :class="iconClasses"
    :style="iconStyles"
    role="img"
    aria-label="Glide icon"
  >
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M57.0979 104.976L122 122L99 90L109.578 73.0001H77.0623L57.0979 104.976ZM82.0571 65.0001H114.556L155 0L104.237 29.4753L82.0571 65.0001ZM89.4424 38.0657L72.6259 65.0001H43.0554L89.4424 38.0657ZM67.6311 73.0001L48.9938 102.851L0 90L29.2776 73.0001H67.6311Z" 
      :fill="color"
    />
  </svg>
</template>
