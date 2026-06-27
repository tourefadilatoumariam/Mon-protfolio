<template>
  <section id="services" class="px-6 sm:px-10 py-20 md:py-28">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl">
        <p class="sec-label">Ce que je fais</p>
        <h2 class="sec-title">Mes Services</h2>
        <div class="sec-divider"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <article
          v-for="(svc, i) in services"
          :key="svc.title"
          v-reveal="{ delay: i * 90 }"
          class="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#1a1419]/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose/25 hover:bg-[#1a1419] hover:shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
        >
          <span class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-rose/15 bg-rose/10 text-rose transition-all duration-300 group-hover:rotate-3 group-hover:bg-rose/20">
            <svg v-if="svc.icon === 'web'" class="h-5 w-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 21h12m-6-4v4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else-if="svc.icon === 'mobile'" class="h-5 w-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="2" width="14" height="20" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="18" r="1" fill="currentColor"/>
            </svg>
            <svg v-else-if="svc.icon === 'design'" class="h-5 w-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else-if="svc.icon === 'backend'" class="h-5 w-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <p class="mb-2 text-[10px] font-semibold uppercase tracking-widest text-rose/80">{{ svc.tag }}</p>
          <h3 class="mb-3 text-[15px] font-semibold text-white">{{ svc.title }}</h3>
          <p class="text-sm leading-relaxed text-white/70">{{ svc.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from '../data/portfolio.js'
</script>
