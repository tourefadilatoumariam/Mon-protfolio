<template>
  <!--STATS RIBBON  -->
  <div class="bg-[#1a1419] border-y border-white/5 px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
    <div
      v-for="(stat, i) in stats"
      :key="stat.label"
      v-reveal="{ delay: i * 80 }"
      class="text-center"
    >
      <div class="font-serif text-3xl md:text-4xl text-rose transition-transform duration-300 hover:scale-110">{{ stat.value }}</div>
      <div class="text-[10px] md:text-xs tracking-widest uppercase text-white/35 mt-1">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { stats } from '../data/portfolio.js'
</script>
