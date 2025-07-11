<script lang="ts" setup>
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'auto',
  className: ''
});

// Size classes mapping
const sizeClasses = {
  sm: 'h-24 w-auto',
  md: 'h-28 w-auto',
  lg: 'h-32 w-auto',
  xl: 'h-40 w-auto',
  auto: 'h-32 w-auto'
};

// Computed classes for flexibility
const logoClasses = computed(() => {
  return [
    sizeClasses[props.size],
    props.className
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <svg 
    :class="logoClasses" 
    width="386" 
    height="310" 
    viewBox="0 0 386 310" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Glide animated logo"
  >
    <!-- Background glow effect -->
    <path 
      d="M384.038 19.8678C387.192 14.7992 386.488 8.23404 382.332 3.94888C378.176 -0.336293 371.635 -1.23999 366.473 1.75761L6.47265 210.79C1.91982 213.433 -0.589102 218.562 0.118297 223.779C0.825697 228.996 4.60973 233.271 9.70214 234.607L293.057 308.929C298.36 310.32 303.965 308.235 307.069 303.717C310.174 299.199 310.111 293.219 306.911 288.767L258.571 221.511L384.038 19.8678Z" 
      fill="white" 
      fill-opacity="0.1"
    />
    
    <!-- Stroke outline -->
    <path 
      d="M258.147 221.247L257.97 221.531L258.165 221.803L306.505 289.059C309.582 293.339 309.643 299.09 306.657 303.434C303.672 307.778 298.282 309.783 293.184 308.446L9.829 234.123C4.93245 232.839 1.29395 228.728 0.613763 223.712C-0.0664285 218.695 2.34599 213.764 6.72371 211.222L366.724 2.19C371.688 -0.692308 377.977 0.176636 381.973 4.29699C385.97 8.41734 386.646 14.73 383.614 19.6036L258.147 221.247Z" 
      stroke="white" 
      stroke-opacity="0.2"
    />
    
    <!-- Main logo with base color -->
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M145.613 256.816L296.354 296.355L242.934 222.032L267.502 182.548H191.982L145.613 256.816ZM203.583 163.968H279.063L372.999 13L255.098 81.4586L203.583 163.968ZM220.736 101.411L181.678 163.968H112.999L220.736 101.411ZM170.078 182.548L126.791 251.879L12.999 222.032L80.9987 182.548H170.078Z" 
      fill="#082F49"
    />
    
    <!-- Radial gradient overlays for animation effect -->
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M145.613 256.816L296.354 296.355L242.934 222.032L267.502 182.548H191.982L145.613 256.816ZM203.583 163.968H279.063L372.999 13L255.098 81.4586L203.583 163.968ZM220.736 101.411L181.678 163.968H112.999L220.736 101.411ZM170.078 182.548L126.791 251.879L12.999 222.032L80.9987 182.548H170.078Z" 
      fill="url(#paint0_radial_2006_7283)"
    />
    
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M145.613 256.816L296.354 296.355L242.934 222.032L267.502 182.548H191.982L145.613 256.816ZM203.583 163.968H279.063L372.999 13L255.098 81.4586L203.583 163.968ZM220.736 101.411L181.678 163.968H112.999L220.736 101.411ZM170.078 182.548L126.791 251.879L12.999 222.032L80.9987 182.548H170.078Z" 
      fill="url(#paint1_radial_2006_7283)"
    />
    
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M145.613 256.816L296.354 296.355L242.934 222.032L267.502 182.548H191.982L145.613 256.816ZM203.583 163.968H279.063L372.999 13L255.098 81.4586L203.583 163.968ZM220.736 101.411L181.678 163.968H112.999L220.736 101.411ZM170.078 182.548L126.791 251.879L12.999 222.032L80.9987 182.548H170.078Z" 
      fill="url(#paint2_radial_2006_7283)" 
      fill-opacity="0.75"
    />
    
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M145.613 256.816L296.354 296.355L242.934 222.032L267.502 182.548H191.982L145.613 256.816ZM203.583 163.968H279.063L372.999 13L255.098 81.4586L203.583 163.968ZM220.736 101.411L181.678 163.968H112.999L220.736 101.411ZM170.078 182.548L126.791 251.879L12.999 222.032L80.9987 182.548H170.078Z" 
      fill="url(#paint3_radial_2006_7283)"
    />
    
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M145.613 256.816L296.354 296.355L242.934 222.032L267.502 182.548H191.982L145.613 256.816ZM203.583 163.968H279.063L372.999 13L255.098 81.4586L203.583 163.968ZM220.736 101.411L181.678 163.968H112.999L220.736 101.411ZM170.078 182.548L126.791 251.879L12.999 222.032L80.9987 182.548H170.078Z" 
      fill="url(#paint4_radial_2006_7283)"
    />
    
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M145.613 256.816L296.354 296.355L242.934 222.032L267.502 182.548H191.982L145.613 256.816ZM203.583 163.968H279.063L372.999 13L255.098 81.4586L203.583 163.968ZM220.736 101.411L181.678 163.968H112.999L220.736 101.411ZM170.078 182.548L126.791 251.879L12.999 222.032L80.9987 182.548H170.078Z" 
      fill="url(#paint5_radial_2006_7283)"
    />
    
    <defs>
      <!-- Primary blue gradient -->
      <radialGradient 
        id="paint0_radial_2006_7283" 
        cx="0" 
        cy="0" 
        r="1" 
        gradientUnits="userSpaceOnUse" 
        gradientTransform="translate(347.5 43.5) rotate(121.018) scale(633.602 428.586)"
      >
        <stop stop-color="#0284C7"/>
        <stop offset="1" stop-color="#082F49" stop-opacity="0"/>
      </radialGradient>
      
      <!-- Secondary blue gradient -->
      <radialGradient 
        id="paint1_radial_2006_7283" 
        cx="0" 
        cy="0" 
        r="1" 
        gradientUnits="userSpaceOnUse" 
        gradientTransform="translate(27 224.5) rotate(-4.64899) scale(228.251 154.395)"
      >
        <stop stop-color="#0284C7"/>
        <stop offset="1" stop-color="#082F49" stop-opacity="0"/>
      </radialGradient>
      
      <!-- Light blue highlight -->
      <radialGradient 
        id="paint2_radial_2006_7283" 
        cx="0" 
        cy="0" 
        r="1" 
        gradientUnits="userSpaceOnUse" 
        gradientTransform="translate(8 247.5) rotate(13.9972) scale(355.557 145.01)"
      >
        <stop stop-color="#E0F2FE"/>
        <stop offset="1" stop-color="#E0F2FE" stop-opacity="0"/>
      </radialGradient>
      
      <!-- Top right highlight -->
      <radialGradient 
        id="paint3_radial_2006_7283" 
        cx="0" 
        cy="0" 
        r="1" 
        gradientUnits="userSpaceOnUse" 
        gradientTransform="translate(424.5 23.5) rotate(120.452) scale(211.123 111.174)"
      >
        <stop stop-color="#E0F2FE"/>
        <stop offset="1" stop-color="#E0F2FE" stop-opacity="0"/>
      </radialGradient>
      
      <!-- Left side highlight -->
      <radialGradient 
        id="paint4_radial_2006_7283" 
        cx="0" 
        cy="0" 
        r="1" 
        gradientUnits="userSpaceOnUse" 
        gradientTransform="translate(139.5 78.5) rotate(-30.6126) scale(167.9 103.188)"
      >
        <stop stop-color="#E0F2FE"/>
        <stop offset="1" stop-color="#E0F2FE" stop-opacity="0"/>
      </radialGradient>
      
      <!-- Center accent -->
      <radialGradient 
        id="paint5_radial_2006_7283" 
        cx="0" 
        cy="0" 
        r="1" 
        gradientUnits="userSpaceOnUse" 
        gradientTransform="translate(137.5 147.5) rotate(-97.0899) scale(101.274 177.003)"
      >
        <stop stop-color="#075985"/>
        <stop offset="1" stop-color="#082F49" stop-opacity="0"/>
      </radialGradient>
    </defs>
  </svg>
</template>
