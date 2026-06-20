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
          v-for="(proj, i) in paginatedProjects"
          :key="proj.title"
          v-reveal="{ delay: i * 80 }"
          class="group overflow-hidden rounded-2xl border border-white/8 bg-[#1a1419] transition-all duration-300 hover:-translate-y-1 hover:border-rose/25 hover:shadow-[0_20px_60px_rgba(212,160,176,0.08)]"
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

      <!-- Pagination Controls -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-3 mt-12 animate-fade-up">
        <button
          @click="currentPage > 1 && (currentPage--)"
          :disabled="currentPage === 1"
          class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-rose/30 hover:text-rose transition-all disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Page précédente"
        >
          <span aria-hidden="true">←</span>
        </button>
        
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          class="w-10 h-10 rounded-full border text-xs font-semibold transition-all"
          :class="currentPage === page
            ? 'bg-rose border-rose text-[#0e0c0d]'
            : 'border-white/10 text-white/50 hover:border-white/20 hover:text-white'"
        >
          {{ page }}
        </button>

        <button
          @click="currentPage < totalPages && (currentPage++)"
          :disabled="currentPage === totalPages"
          class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-rose/30 hover:text-rose transition-all disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Page suivante"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { projects, filterCategories } from '../data/portfolio.js'

const categories = filterCategories
const active = ref('Tous')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 3

// Réinitialiser la page quand la catégorie change
watch(active, () => {
  currentPage.value = 1
})

function projectHref(project) {
  return project.liveUrl || '#contact'
}

const filteredProjects = computed(() =>
  active.value === 'Tous'
    ? projects
    : projects.filter(p => p.cat === active.value)
)

const totalPages = computed(() => Math.ceil(filteredProjects.value.length / itemsPerPage))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProjects.value.slice(start, start + itemsPerPage)
})
</script>
