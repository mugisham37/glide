<script lang="ts" setup>
import gsap from "gsap"

interface Props {
  gridSize?: [number, number];
  className?: string;
  animationDelay?: number;
  loopDelay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  gridSize: () => [14, 30],
  className: '',
  animationDelay: 0,
  loopDelay: 12
});

const gridRef = ref<SVGElement>();
const timelineRef = ref<gsap.core.Timeline>();

onMounted(() => {
  if (!gridRef.value) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set(gridRef.value, { opacity: 1 });
    gsap.set('.glide-grid-item', {
      opacity: 0.2,
      scale: 1
    });
    return;
  }

  // Initialize grid items
  gsap.set('.glide-grid-item', {
    opacity: 0,
    transformOrigin: 'center',
    color: '#fff'
  });

  gsap.set(gridRef.value, { opacity: 1 });

  const tl = gsap.timeline({ delay: props.animationDelay });
  timelineRef.value = tl;

  // Entrance Animation
  tl.to('.glide-grid-item', {
    keyframes: [
      {
        opacity: 0,
        duration: 0
      },
      {
        opacity: 0.4,
        rotate: '+=180',
        color: '#0284c7',
        scale: 3,
        duration: 0.6,
        stagger: {
          amount: 2,
          grid: props.gridSize,
          from: 'center'
        }
      },
      {
        opacity: 0.2,
        rotate: '+=180',
        color: '#fff',
        scale: 1,
        delay: -2,
        duration: 0.6,
        stagger: {
          amount: 3,
          grid: props.gridSize,
          from: 'center'
        }
      }
    ]
  });

  // Loop Animation
  tl.to('.glide-grid-item', {
    delay: props.loopDelay,
    repeat: -1,
    repeatDelay: props.loopDelay,
    keyframes: [
      {
        opacity: 0.4,
        rotate: '+=180',
        color: '#0284c7',
        scale: 3,
        duration: 0.6,
        stagger: {
          amount: 2,
          grid: props.gridSize,
          from: 'center'
        }
      },
      {
        opacity: 0.2,
        rotate: '+=180',
        color: '#fff',
        scale: 1,
        delay: -2,
        duration: 0.6,
        stagger: {
          amount: 3,
          grid: props.gridSize,
          from: 'center'
        }
      }
    ]
  });
});

onUnmounted(() => {
  if (timelineRef.value) {
    timelineRef.value.kill();
  }
});

// Computed classes for flexibility
const containerClasses = computed(() => {
  return [
    'absolute -left-2 -top-14 -z-10',
    props.className
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <svg
    ref="gridRef"
    id="glide-grid"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 935 425"
    :class="containerClasses"
    opacity="0"
    style="mask-image: linear-gradient(black, transparent);"
    role="img"
    aria-label="Animated background grid pattern"
  >
    <g class="glide-grid-group">
      <template v-for="i in gridSize[0]" :key="`row-${i}`">
        <path
          v-for="j in gridSize[1]"
          :key="`cell-${i}-${j}`"
          fill="currentColor"
          opacity=".2"
          class="glide-grid-item"
          :d="`M${(j - 1) * 32 + 5},${(i - 1) * 32 + 10}l1.806,-2.951l-5,2.951l3.936,1.049l-0.742,-1.049z`"
        />
      </template>
    </g>
  </svg>
</template>
