<script lang="ts" setup>
interface Props {
  class?: string
}

withDefaults(defineProps<Props>(), {
  class: 'h-32 w-auto'
})
</script>

<template>
  <svg 
    :class="class" 
    width="386" 
    height="310" 
    viewBox="0 0 386 310" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M384.038 19.8678C387.192 14.7992 386.488 8.23404 382.332 3.94888C378.176 -0.336293 371.635 -1.23999 366.473 1.75761L6.47265 210.79C1.91982 213.433 -0.589102 218.562 0.118297 223.779C0.825697 228.996 4.60973 233.271 9.70214 234.607L293.057 308.929C298.36 310.32 303.965 308.235 307.069 303.717C310.174 299.199 310.111 293.219 306.911 288.767L258.571 221.511L384.038 19.8678Z" fill="white" fill-opacity="0.1"/>
