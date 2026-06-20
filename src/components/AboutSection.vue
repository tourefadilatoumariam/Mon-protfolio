<template>
  <section id="about" class="px-6 sm:px-10 py-20 md:py-28">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-start">
      <div v-reveal="{ direction: 'left' }">
        <p class="sec-label">Technologies</p>
        <h2 class="sec-title">Competences</h2>
        <div class="sec-divider"></div>

        <div class="flex flex-wrap gap-2 mb-8">
          <button
            v-for="cat in skillCategories"
            :key="cat"
            @click="activeCategory = cat"
            class="px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200"
            :class="activeCategory === cat
              ? 'bg-rose/10 border-rose/30 text-rose'
              : 'border-white/10 text-white/35 hover:border-white/20 hover:text-white/60'"
          >
            {{ cat }}
          </button>
        </div>

        <TransitionGroup
          tag="div"
          class="grid grid-cols-2 sm:grid-cols-3 gap-3"
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 absolute"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-for="skill in filteredSkills"
            :key="skill.name"
            class="bg-[#1a1419]/60 border border-white/5 rounded-xl p-4 hover:-translate-y-1 hover:border-rose/25 hover:bg-[#1a1419]/80 hover:shadow-[0_8px_30px_rgba(212,160,176,0.03)] transition-all duration-300 flex items-center gap-3.5"
          >
            <div class="w-9 h-9 rounded-[10px] bg-rose/10 flex items-center justify-center text-lg text-rose shrink-0 transition-transform duration-300 hover:scale-110">
              <i v-if="skill.icon.startsWith('devicon-')" :class="skill.icon"></i>
              <svg v-else-if="skill.icon === 'powerpoint'" class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                <path d="M10 8h3.5a2 2 0 0 1 0 4H10V8z" fill="currentColor"/>
                <path d="M10 12v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg v-else-if="skill.icon === 'word'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M7 8l3.5 8L12 11l1.5 5L17 8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="skill.icon === 'canva'" class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3a9 9 0 0 0-9 9c0 1.5.4 3 1.1 4.3l-1 2.8 2.9-1a9 9 0 1 0 6-15.1zm0 15a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/>
              </svg>
              <svg v-else-if="skill.icon === 'api'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="6" rx="1.5"/>
                <rect x="2" y="13" width="20" height="6" rx="1.5"/>
                <circle cx="6" cy="8" r="1" fill="currentColor"/>
                <circle cx="6" cy="16" r="1" fill="currentColor"/>
                <path d="M18 8h-4m4 8h-4" stroke-linecap="round"/>
              </svg>
              <svg v-else-if="skill.icon === 'microservices'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="6" height="6" rx="1"/>
                <rect x="15" y="3" width="6" height="6" rx="1"/>
                <rect x="9" y="15" width="6" height="6" rx="1"/>
                <path d="M6 9v3h6m0 0h3v-3m-3 3v3" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span v-else>{{ skill.icon }}</span>
            </div>
            <div class="min-w-0">
              <p class="text-[13px] font-medium text-white/90 leading-tight truncate">{{ skill.name }}</p>
              <p class="text-[10px] text-white/30 tracking-wide mt-0.5">{{ skill.cat }}</p>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <div v-reveal="{ direction: 'right', delay: 100 }">
        <p class="sec-label">A propos</p>
        <h2 class="sec-title">
          Developpeuse<br>
          <em class="text-rose not-italic">orientee produit</em>
        </h2>
        <div class="sec-divider"></div>

        <p class="text-white/80 text-[15px] leading-[1.85] mb-4 font-light">
          Etudiante en informatique, je m'interesse au developpement web, aux APIs et aux interfaces qui rendent un service simple a utiliser. J'aime comprendre le besoin avant de coder, puis avancer avec methode.
        </p>
        <p class="text-white/80 text-[15px] leading-[1.85] font-light">
          Je recherche une opportunite de stage, d'alternance ou de premier emploi pour contribuer sur des projets concrets, renforcer mes pratiques professionnelles et progresser au contact d'une equipe.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
          <div class="bg-[#1a1419]/50 rounded-xl p-4 border border-white/5 hover:border-rose/20 transition-all duration-300">
            <div class="text-[10px] text-white/30 uppercase tracking-widest mb-1 font-semibold">Localisation</div>
            <div class="text-sm font-medium text-white/80">Abidjan, Cote d'Ivoire</div>
          </div>
          <div class="bg-[#1a1419]/50 rounded-xl p-4 border border-white/5 hover:border-rose/20 transition-all duration-300">
            <div class="text-[10px] text-white/30 uppercase tracking-widest mb-1 font-semibold">Disponibilite</div>
            <div class="text-sm font-medium text-emerald-400">Disponible maintenant</div>
          </div>
          <div class="bg-[#1a1419]/50 rounded-xl p-4 border border-white/5 hover:border-rose/20 transition-all duration-300">
            <div class="text-[10px] text-white/30 uppercase tracking-widest mb-1 font-semibold">Recherche</div>
            <div class="text-sm font-medium text-white/80">Stage, alternance, junior</div>
          </div>
          <div class="bg-[#1a1419]/50 rounded-xl p-4 border border-white/5 hover:border-rose/20 transition-all duration-300">
            <div class="text-[10px] text-white/30 uppercase tracking-widest mb-1 font-semibold">Mode</div>
            <div class="text-sm font-medium text-white/80">Sur site ou teletravail</div>
          </div>
        </div>

        <button
          @click="downloadCV"
          class="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-rose text-[#0e0c0d] rounded-full text-sm font-bold cursor-pointer hover:bg-rose2 hover:shadow-[0_8px_25px_rgba(212,160,176,0.3)] active:scale-95 transition-all duration-300"
        >
          Telecharger le CV <span aria-hidden="true">-&gt;</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { skills, skillCategories } from '../data/portfolio.js'
import { downloadCV } from '../utils/cv.js'

const activeCategory = ref('Tous')
const filteredSkills = computed(() =>
  activeCategory.value === 'Tous'
    ? skills
    : skills.filter(s => s.cat === activeCategory.value)
)
</script>
