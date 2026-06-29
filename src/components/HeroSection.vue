<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { slides } from '../data/portfolio.js'
import { downloadCV } from '../utils/cv.js'
import InteractiveCvModal from './InteractiveCvModal.vue'
import LazyImage from './LazyImage.vue'

const current = ref(0)
const cvModalOpen = ref(false)
let timer

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 8000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="home" class="relative h-screen min-h-[600px] overflow-hidden">
    <div
      class="flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(.77,0,.175,1)]"
      :style="{ transform: `translateX(-${current * 100}%)` }">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="relative min-w-full h-full flex items-center pt-[72px] lg:pt-[64px]">
       
        <div class="absolute inset-0" :style="{ background: slide.bg }"></div>
        <div class="absolute inset-0 bg-black/40"></div>

        <div
          class="absolute right-0 top-1/2 -translate-y-1/2
                 w-[300px] h-[300px] md:w-[520px] md:h-[520px] rounded-full opacity-10 blur-3xl pointer-events-none animate-soft-pulse"
          :style="{ background: slide.accent }"></div>

        <div class="relative z-10 px-6 sm:px-12 md:px-20 max-w-2xl animate-fade-up">
          <!-- Photo de profil sur mobile -->
          <div class="lg:hidden mb-6">
            <div class="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-white/20 shadow-2xl" :style="{ background: slide.photoGradient }">
              <LazyImage src="/maTof.jpeg" alt="Portrait de Toure Fadilatou Mariam" cover rounded="2xl" lazy/>
            </div>
          </div>

          <p class="text-[10px] lg:text-xs font-semibold tracking-[.2em] uppercase text-rose mb-3 lg:mb-5 flex items-center gap-3 animate-fade-up-delay-1">
            <span class="w-8 h-px bg-rose"></span>{{ slide.tag }}
          </p>
          <h1
            class="font-serif text-2xl sm:text-5xl md:text-6xl leading-[1.1] text-white mb-4 lg:mb-6 animate-fade-up-delay-2 text-balance"
            v-html="slide.title">
          </h1>
          <p class="text-white/80 text-xs sm:text-base md:text-lg leading-relaxed mb-6 lg:mb-10 font-light max-w-md animate-fade-up-delay-3">
            {{ slide.desc }}
          </p>
          <div class="flex flex-wrap gap-3 lg:gap-4 animate-fade-up-delay-4">
            <!-- CTA 1 -->
            <button
              v-if="slide.cta1.download"
              @click="downloadCV"
              class="px-7 py-3.5 rounded-full bg-rose text-white text-sm font-bold cursor-pointer
                     hover:bg-rose2 active:scale-95 transition-all">{{ slide.cta1.label }}</button>
            <button
              v-else-if="slide.cta1.isCv"
              @click="cvModalOpen = true"
              class="px-7 py-3.5 rounded-full bg-rose text-white text-sm font-bold cursor-pointer
                     hover:bg-rose2 active:scale-95 transition-all">{{ slide.cta1.label }}</button>
            <a
              v-else
              :href="slide.cta1.href"
              class="px-7 py-3.5 rounded-full bg-rose text-white text-sm font-bold
                     hover:bg-rose2 active:scale-95 transition-all">{{ slide.cta1.label }}</a>

            <!-- CTA 2 -->
            <button
              v-if="slide.cta2.download"
              @click="downloadCV"
              class="px-7 py-3.5 rounded-full border border-rose/40 text-rose text-sm font-bold cursor-pointer
                     hover:bg-rose/10 active:scale-95 transition-all"
            >{{ slide.cta2.label }}</button>
            <button
              v-else-if="slide.cta2.isCv"
              @click="cvModalOpen = true"
              class="px-7 py-3.5 rounded-full border border-rose/40 text-rose text-sm font-bold cursor-pointer
                     hover:bg-rose/10 active:scale-95 transition-all"
            >{{ slide.cta2.label }}</button>
            <a
              v-else
              :href="slide.cta2.href"
              class="px-7 py-3.5 rounded-full border border-white/25 text-white text-sm font-medium
                     hover:bg-white/8 active:scale-95 transition-all"
            >{{ slide.cta2.label }}</a>
          </div>
        </div>

        <div class="absolute right-8 lg:right-20 top-[calc(50%+115px)] -translate-y-1/2 hidden lg:block animate-float-slow">
          <div
            class="w-64 h-80 xl:w-72 xl:h-[340px] rounded-3xl overflow-hidden
             border border-white/10 shadow-2xl"  :style="{ background: slide.photoGradient }">

              <LazyImage src="/maTof.jpeg" alt="Portrait de Toure Fadilatou Mariam" cover rounded="3xl" lazy/> 
            <!-- <div class="w-full h-full flex flex-col items-center justify-center gap-3 text-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span class="text-[10px] tracking-widest uppercase">Votre photo</span>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    
    <div class="absolute bottom-8 left-6 sm:left-20 flex items-center gap-2 z-10">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="current = i"
        class="h-1.5 rounded-full transition-all duration-300"
        :class="current === i ? 'bg-rose w-6' : 'bg-white/30 w-2'"
        :aria-label="`Slide ${i + 1}`"></button>
    </div>


    <span class="absolute bottom-8 right-6 sm:right-10 text-xs text-white/30 z-10 font-mono">
      {{ String(current + 1).padStart(2, '0') }} / {{ String(slides.length).padStart(2, '0') }}
    </span>
  </section>

  <!-- CV Modal -->
  <InteractiveCvModal :isOpen="cvModalOpen" @close="cvModalOpen = false" />
</template>
