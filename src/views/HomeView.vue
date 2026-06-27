<template>
  <div class="font-sans bg-[#0e0c0d] text-white overflow-x-hidden relative">

    <AppNav :activeSection="activeSection" @open-cv="cvModalOpen = true" />
    <HeroSection @open-cv="cvModalOpen = true" />
    <StatsRibbon />
    <ServicesSection />
    <PortfolioSection />
    <AboutSection @open-cv="cvModalOpen = true" />
    <BlogSection />
    <ContactSection />
    <AppFooter @open-cv="cvModalOpen = true" />

    <!-- Floating CV Button -->
    <button
      @click="cvModalOpen = true"
      class="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-rose text-[#0e0c0d] font-bold text-sm shadow-xl shadow-rose/20 hover:bg-rose2 hover:-translate-y-0.5 active:scale-95 transition-all no-print animate-pulse-slow"
      aria-label="Voir mon CV"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span>Mon CV</span>
    </button>

    <!-- Global CV Modal -->
    <InteractiveCvModal :isOpen="cvModalOpen" @close="cvModalOpen = false" />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import AppNav          from '../components/AppNav.vue'
import HeroSection     from '../components/HeroSection.vue'
import StatsRibbon     from '../components/StatsRibbon.vue'
import ServicesSection from '../components/ServicesSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import AboutSection    from '../components/AboutSection.vue'
import BlogSection     from '../components/BlogSection.vue'
import ContactSection  from '../components/ContactSection.vue'
import AppFooter       from '../components/AppFooter.vue'
import InteractiveCvModal from '../components/InteractiveCvModal.vue'

// ── Active section tracking (passed to AppNav)
const activeSection = ref('home')
const cvModalOpen = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) activeSection.value = e.target.id
      })
    },
    { threshold: 0.4 }
  )
  document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
})
onUnmounted(() => observer?.disconnect())
</script>
