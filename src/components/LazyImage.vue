<template>
  <div
    class="relative overflow-hidden h-full"
    :style="{ width: fullWidth ? '100%' : undefined, height: height || undefined }"
  >
    <!-- Skeleton loader -->
    <div
      v-if="!loaded && !error"
      class="absolute inset-0 skeleton"
      :style="{ background: placeholderBg || undefined }"
    ></div>

    <img
      v-if="!error"
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :class="[
        'transition-opacity duration-500',
        loaded ? 'opacity-100' : 'opacity-0',
        cover ? 'img-cover' : '',
        rounded ? 'rounded-' + rounded : ''
      ]"
      @load="onLoad"
      @error="onError"
    />

    <!-- Fallback when image fails to load -->
    <div
      v-if="error"
      class="img-placeholder flex items-center justify-center text-white/20"
      :class="[cover ? 'absolute inset-0' : '', rounded ? 'rounded-' + rounded : '']"
      :style="{ background: placeholderBg || 'linear-gradient(135deg, #1a1419 0%, #2a1f26 100%)' }"
    >
      <svg
        v-if="!fallbackText"
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 opacity-40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
        />
      </svg>
      <span v-else class="text-xs opacity-60">{{ fallbackText }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  lazy: { type: Boolean, default: true },
  cover: { type: Boolean, default: true },
  rounded: { type: String, default: '' },
  height: { type: String, default: '' },
  fullWidth: { type: Boolean, default: false },
  placeholderBg: { type: String, default: '' },
  fallbackText: { type: String, default: '' },
})

const emit = defineEmits(['load', 'error'])

const loaded = ref(false)
const error = ref(false)

function onLoad() {
  loaded.value = true
  emit('load')
}

function onError() {
  error.value = true
  loaded.value = true
  emit('error')
}
</script>

<style scoped>
/* scoped styles handled by utility classes */
</style>
