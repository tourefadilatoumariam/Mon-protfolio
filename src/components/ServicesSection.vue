<template>
  <!-- ─── SERVICES ─────────────────────────────────────────── -->
  <section id="services" class="px-6 sm:px-10 py-20 md:py-28">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <p class="sec-label">Ce que je fais</p>
      <h2 class="sec-title">Mes Services</h2>
      <div class="sec-divider"></div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="svc in services"
          :key="svc.title"
          class="group animate-card-in relative overflow-hidden bg-[#1a1419]/40 border border-white/5 rounded-2xl p-7
                 hover:-translate-y-2 hover:border-rose/25 hover:bg-[#1a1419]/75
                 hover:shadow-[0_20px_60px_rgba(212,160,176,0.05)]
                 transition-all duration-300 cursor-default backdrop-blur-sm"
        >
          <span class="pointer-events-none absolute inset-y-0 -left-24 w-20 rotate-12 bg-white/10 blur-md transition-transform duration-700 group-hover:translate-x-[420px]"></span>
          <div
            class="w-11 h-11 rounded-xl bg-rose/10 border border-rose/10 flex items-center justify-center
                   mb-6 text-rose group-hover:bg-rose/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
          >
            <svg v-if="svc.icon === 'web'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 21h12m-6-4v4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else-if="svc.icon === 'mobile'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="2" width="14" height="20" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="18" r="1" fill="currentColor"/>
            </svg>
            <svg v-else-if="svc.icon === 'design'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else-if="svc.icon === 'backend'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h4 class="font-semibold text-white text-[15px] mb-3">{{ svc.title }}</h4>
          <p class="text-white/40 text-sm leading-relaxed">{{ svc.desc }}</p>
          <span class="mt-5 text-xs font-semibold text-rose flex items-center gap-1
                       group-hover:gap-2 transition-all">
            En savoir plus <span>→</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from '../data/portfolio.js'
</script>
