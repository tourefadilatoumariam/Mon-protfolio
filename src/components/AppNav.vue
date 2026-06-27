<template>
  <!-- NAVBAR-->
  <nav
    class="fixed top-0 inset-x-0 z-50 flex items-center justify-between
           px-6 md:px-10 transition-all duration-300"
    :class="isScrolled 
      ? 'h-[56px] bg-[#0e0c0d]/95 backdrop-blur-lg border-b border-rose/15 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
      : 'h-[64px] bg-[#0e0c0d]/80 backdrop-blur-md border-b border-white/5'"
  >
    <!-- Logo -->
    <a href="#home" class="font-serif text-xl tracking-tight shrink-0">
      <span class="text-rose">portfolio</span><span class="text-white/30">.</span>dev
    </a>

    <!-- Desktop links -->
    <ul class="hidden md:flex gap-7">
      <li v-for="link in navLinks" :key="link.href">
        <a
          :href="link.href"
          class="text-sm text-white/45 hover:text-white transition-colors tracking-wide"
          :class="{ '!text-white font-medium': activeSection === link.id }"
        >{{ link.label }}</a>
      </li>
    </ul>

    <!-- CTA + burger -->
    <div class="flex items-center gap-3">
      <a
        href="#contact"
        class="hidden sm:inline-flex text-sm font-medium px-5 py-2 rounded-full
               border border-rose/40 text-rose hover:bg-rose/10 transition-all"
      >Me contacter</a>

      <!-- Burger (mobile) -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-1 relative z-50"
        @click="toggleMenu"
        aria-label="Menu"
        :aria-expanded="menuOpen"
      >
        <span
          class="block w-5 h-px bg-white/60 transition-all duration-300"
          :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block w-5 h-px bg-white/60 transition-all duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block w-5 h-px bg-white/60 transition-all duration-300"
          :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </div>

    <!-- Mobile overlay -->
    <div
      class="nav-overlay md:hidden"
      :class="{ active: menuOpen }"
      @click="menuOpen = false"
    ></div>

    <!-- Mobile drawer -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="absolute top-full inset-x-0 bg-[#130f12] border-b border-white/5
               flex flex-col px-6 py-5 gap-4 md:hidden"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm text-white/50 hover:text-white transition-colors py-1"
          @click="closeMenu"
        >{{ link.label }}</a>
        <a
          href="#contact"
          class="mt-2 text-center text-sm font-medium px-5 py-2.5 rounded-full
                 bg-rose/15 text-rose border border-rose/30"
          @click="closeMenu"
        >Me contacter</a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '../data/portfolio.js'

defineProps({ activeSection: { type: String, default: 'home' } })

const menuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.classList.toggle('menu-open', menuOpen.value)
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.classList.remove('menu-open')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  if (menuOpen.value) {
    document.body.classList.remove('menu-open')
  }
})

function handleResize() {
  if (menuOpen.value && window.innerWidth >= 768) {
    closeMenu()
  }
}
</script>
