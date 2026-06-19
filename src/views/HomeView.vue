<template>
  <div class="font-sans bg-[#0e0c0d] text-white overflow-x-hidden">

    <AppNav    :activeSection="activeSection" />
    <HeroSection />
    <StatsRibbon />
    <ServicesSection />
    <PortfolioSection />
    <AboutSection />
    <BlogSection />
    <ContactSection />
    <AppFooter />

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

// ── Active section tracking (passed to AppNav)
const activeSection = ref('home')
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
