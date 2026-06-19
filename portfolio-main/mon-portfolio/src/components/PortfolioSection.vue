<template>
  <section id="portfolio" class="bg-[#130f12] px-6 sm:px-10 py-20 md:py-28">
    <div class="max-w-6xl mx-auto">
      <p class="sec-label">Mes travaux</p>
      <h2 class="sec-title">Projets selectionnes</h2>
      <div class="sec-divider"></div>

      <div class="flex gap-2 flex-wrap mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="active = cat"
          class="px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all border"
          :class="active === cat
            ? 'bg-rose text-[#0e0c0d] border-rose'
            : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'"
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="(proj, i) in filteredProjects"
          :key="proj.title"
          class="group animate-card-in overflow-hidden rounded-2xl border border-white/8 bg-[#1a1419] transition-all duration-300 hover:-translate-y-1 hover:border-rose/25 hover:shadow-[0_20px_60px_rgba(212,160,176,0.08)]"
          :style="{ animationDelay: `${i * 90}ms` }"
        >
          <a
            :href="projectHref(proj)"
            :target="proj.liveUrl ? '_blank' : undefined"
            :rel="proj.liveUrl ? 'noopener noreferrer' : undefined"
            class="block relative aspect-[16/10] overflow-hidden"
            :aria-label="`Voir ${proj.title}`"
          >
            <img
              :src="proj.image"
              :alt="`Apercu du projet ${proj.title}`"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
            <span class="pointer-events-none absolute inset-y-0 -left-24 w-20 rotate-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[520px]"></span>
            <span class="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
              {{ proj.status }}
            </span>
          </a>

          <div class="flex min-h-[250px] flex-col justify-between p-6">
            <div>
              <div class="mb-5 flex items-center justify-between gap-3">
                <span class="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                  {{ proj.cat }}
                </span>
                <span class="text-[11px] text-white/45">#{{ String(i + 1).padStart(2, '0') }}</span>
              </div>

              <h4 class="mb-3 text-xl font-semibold text-white">{{ proj.title }}</h4>
              <p class="text-sm leading-relaxed text-white/62">{{ proj.desc }}</p>
            </div>

            <div>
              <div class="mb-5 flex flex-wrap gap-2">
                <span
                  v-for="tech in proj.stack"
                  :key="`${proj.title}-${tech}`"
                  class="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70"
                >
                  {{ tech }}
                </span>
              </div>

              <a
                :href="projectHref(proj)"
                :target="proj.liveUrl ? '_blank' : undefined"
                :rel="proj.liveUrl ? 'noopener noreferrer' : undefined"
                class="inline-flex items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-xs font-bold text-[#0e0c0d] transition-all hover:bg-rose2 hover:gap-3 active:scale-95"
              >
                {{ proj.liveUrl ? 'Voir le site' : 'Ajouter le lien live' }} <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects, filterCategories } from '../data/portfolio.js'

const categories = filterCategories
const active = ref('Tous')

function projectHref(project) {
  return project.liveUrl || '#contact'
}

const filteredProjects = computed(() =>
  active.value === 'Tous'
    ? projects
    : projects.filter(p => p.cat === active.value)
)
</script>
