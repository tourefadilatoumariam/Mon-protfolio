<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm overflow-y-auto no-print"
      @click.self="closeModal"
    >
      <div
        class="relative w-full max-w-4xl bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-scale-up"
      >
        <!-- Modal Toolbar -->
        <div class="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100 shrink-0">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose/60"></span>
            <h3 class="text-sm font-bold text-gray-700 tracking-wide uppercase">Curriculum Vitae Interactif</h3>
          </div>
          <div class="flex items-center gap-2">
            <!-- Print button -->
            <button
              @click="printCV"
              class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Imprimer (A4)
            </button>
            
            <!-- Download PDF -->
            <a
              href="/CV_Toure_Fadilatou_Mariam.pdf"
              download="CV_Toure_Fadilatou_Mariam.pdf"
              class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose text-[#0e0c0d] text-xs font-bold hover:bg-rose2 transition active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              PDF
            </a>

            <!-- Download Doc -->
            <a
              href="/CV_Toure_Fadilatou_Mariam.doc"
              download="CV_Toure_Fadilatou_Mariam.doc"
              class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-rose/30 text-rose text-xs font-bold hover:bg-rose/5 transition active:scale-95"
            >
              Word (.doc)
            </a>

            <!-- Close button -->
            <button
              @click="closeModal"
              class="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition"
              aria-label="Fermer la modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- CV content (styled like the PDF A4 layout but responsive) -->
        <div class="flex-1 overflow-y-auto p-6 md:p-10 bg-white" id="cv-print-area">
          <div class="max-w-3xl mx-auto">
            <!-- Header Section -->
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start border-b-[3.5px] border-[#c98098] pb-6 mb-8 gap-5">
              <div class="text-center sm:text-left">
                <h1 class="text-3xl font-black text-[#8f435e] tracking-tight mb-1">Touré Fadilatou Mariam</h1>
                <p class="text-sm font-bold text-[#8f435e] uppercase tracking-wider mb-3">Développeuse Fullstack Junior</p>
                <div class="text-xs text-gray-500 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1.5">
                  <span class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    Abidjan, Côte d'Ivoire
                  </span>
                  <a href="tel:+2250713212936" class="hover:text-rose transition flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    +225 07 13 21 29 36
                  </a>
                  <a href="mailto:tourefadilatoumariam@gmail.com" class="hover:text-rose transition flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    tourefadilatoumariam@gmail.com
                  </a>
                </div>
                <div class="text-xs text-gray-500 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-2">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="hover:text-rose transition flex items-center gap-1 font-medium">
                    <i class="devicon-github-original text-gray-400 text-sm"></i> GitHub / Portfolio
                  </a>
                  <a href="https://linkedin.com/in/fadilatou-mariam-toure-858899348/" target="_blank" rel="noopener noreferrer" class="hover:text-rose transition flex items-center gap-1 font-medium">
                    <i class="devicon-linkedin-plain text-gray-400 text-sm"></i> LinkedIn
                  </a>
                  <span class="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">Disponible maintenant</span>
                </div>
              </div>
              <div class="shrink-0">
                <img
                  src="/maTof.jpeg"
                  class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-[#c98098] object-cover shadow-sm"
                  alt="Portrait de Touré Fadilatou Mariam"
                >
              </div>
            </div>

            <!-- Core grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Left Sidebar -->
              <div class="md:col-span-1 border-r-0 md:border-r border-gray-100 pr-0 md:pr-6 flex flex-col gap-6">
                <!-- Profile -->
                <div>
                  <h2 class="text-xs font-bold text-[#8f435e] uppercase border-b border-gray-200 pb-1 mb-3 tracking-widest">Profil</h2>
                  <p class="text-[12px] text-gray-600 leading-relaxed text-justify">
                    Étudiante en informatique orientée développement web et APIs. Je recherche un stage, une alternance ou une première opportunité junior pour contribuer à des produits utiles, propres et bien documentés.
                  </p>
                </div>

                <!-- Skills -->
                <div>
                  <h2 class="text-xs font-bold text-[#8f435e] uppercase border-b border-gray-200 pb-1 mb-3 tracking-widest">Compétences</h2>
                  
                  <div class="flex flex-col gap-3">
                    <div>
                      <p class="text-[11px] font-bold text-gray-700 mb-1">Frontend</p>
                      <div class="flex flex-wrap gap-1">
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">Vue.js</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">React</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">Next.js</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">TypeScript</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">JavaScript</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">Tailwind CSS</span>
                      </div>
                    </div>

                    <div>
                      <p class="text-[11px] font-bold text-gray-700 mb-1">Backend</p>
                      <div class="flex flex-wrap gap-1">
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">NestJS</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">Laravel</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">PHP</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">Python</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">API REST</span>
                      </div>
                    </div>

                    <div>
                      <p class="text-[11px] font-bold text-gray-700 mb-1">Bases & Outils</p>
                      <div class="flex flex-wrap gap-1">
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">MySQL</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">MongoDB</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">Git / GitHub</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">Postman</span>
                        <span class="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium hover:bg-[#f6f1f3] hover:text-[#8f435e] transition">Figma</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Languages -->
                <div>
                  <h2 class="text-xs font-bold text-[#8f435e] uppercase border-b border-gray-200 pb-1 mb-2 tracking-widest">Langues</h2>
                  <p class="text-[12px] text-gray-600"><strong class="text-gray-700">Français :</strong> Courant (maternelle)</p>
                  <p class="text-[12px] text-gray-600"><strong class="text-gray-700">Anglais :</strong> Technique</p>
                </div>

                <!-- Strengths -->
                <div>
                  <h2 class="text-xs font-bold text-[#8f435e] uppercase border-b border-gray-200 pb-1 mb-2 tracking-widest">Atouts</h2>
                  <ul class="list-disc list-inside text-[11px] text-gray-600 space-y-1">
                    <li>Esprit d'équipe & collaboration</li>
                    <li>Autonomie & proactivité</li>
                    <li>Rigueur et sens du détail</li>
                    <li>Capacité d'adaptation</li>
                  </ul>
                </div>

                <!-- Hobbies -->
                <div>
                  <h2 class="text-xs font-bold text-[#8f435e] uppercase border-b border-gray-200 pb-1 mb-2 tracking-widest">Intérêts</h2>
                  <div class="flex flex-wrap gap-1">
                    <span class="text-[9px] bg-gray-100/60 text-gray-500 px-2 py-0.5 rounded">Veille tech</span>
                    <span class="text-[9px] bg-gray-100/60 text-gray-500 px-2 py-0.5 rounded">UI/UX Design</span>
                    <span class="text-[9px] bg-gray-100/60 text-gray-500 px-2 py-0.5 rounded">Lecture</span>
                    <span class="text-[9px] bg-gray-100/60 text-gray-500 px-2 py-0.5 rounded">Jeux d'échecs</span>
                  </div>
                </div>
              </div>

              <!-- Right Content -->
              <div class="md:col-span-2 flex flex-col gap-6">
                <!-- Education -->
                <div>
                  <h2 class="text-xs font-bold text-[#8f435e] uppercase border-b border-gray-200 pb-1 mb-3 tracking-widest">Formations</h2>
                  <div class="space-y-4">
                    <div class="relative pl-4 border-l border-rose/30">
                      <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-rose border border-white"></div>
                      <div class="flex justify-between items-baseline mb-0.5">
                        <h4 class="text-xs font-bold text-gray-800">Licence 2 E-administration</h4>
                        <span class="text-[10px] text-gray-400 font-bold whitespace-nowrap">2024 - Présent</span>
                      </div>
                      <p class="text-[11px] font-bold text-[#8f435e]">Université Virtuelle de Côte d'Ivoire</p>
                      <p class="text-[11px] text-gray-500 mt-0.5">Transformation digitale des organisations, services numériques, gestion du web public.</p>
                    </div>

                    <div class="relative pl-4 border-l border-rose/30">
                      <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-rose border border-white"></div>
                      <div class="flex justify-between items-baseline mb-0.5">
                        <h4 class="text-xs font-bold text-gray-800">Formation Coding Fullstack</h4>
                        <span class="text-[10px] text-gray-400 font-bold whitespace-nowrap">2026</span>
                      </div>
                      <p class="text-[11px] font-bold text-[#8f435e]">WeCode - Coding by Epitech</p>
                      <p class="text-[11px] text-gray-500 mt-0.5">Projets intensifs en équipe, algorithmie avancée, développement frontend/backend et méthodologies agiles.</p>
                    </div>

                    <div class="relative pl-4 border-l border-rose/30">
                      <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-rose border border-white"></div>
                      <div class="flex justify-between items-baseline mb-0.5">
                        <h4 class="text-xs font-bold text-gray-800">Formation Développeuse Fullstack</h4>
                        <span class="text-[10px] text-gray-400 font-bold whitespace-nowrap">2025</span>
                      </div>
                      <p class="text-[11px] font-bold text-[#8f435e]">DigiFemmes Academy</p>
                      <p class="text-[11px] text-gray-500 mt-0.5">Apprentissage structuré du développement web, modélisation de données, esprit critique et techniques de pitch.</p>
                    </div>
                  </div>
                </div>

                <!-- Projects -->
                <div>
                  <h2 class="text-xs font-bold text-[#8f435e] uppercase border-b border-gray-200 pb-1 mb-3 tracking-widest">Projets Marquants</h2>
                  <div class="space-y-4">
                    <div class="p-3 bg-gray-50 rounded-xl hover:bg-rose/5 border border-gray-100 transition duration-300">
                      <div class="flex justify-between items-baseline mb-1">
                        <h4 class="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                          MY SHOP
                          <span class="text-[9px] font-normal text-rose px-1.5 py-0.2 bg-rose/10 rounded">Groupe</span>
                        </h4>
                        <span class="text-[10px] font-semibold text-gray-400 uppercase">Web App</span>
                      </div>
                      <p class="text-[11px] text-gray-500 mb-2">Boutique e-commerce moderne et réactive avec gestion de panier et authentification client.</p>
                      <p class="text-[10px] text-gray-600"><strong class="text-gray-700">Technologies :</strong> Vue.js, Tailwind CSS, JavaScript, LocalStorage</p>
                    </div>

                    <div class="p-3 bg-gray-50 rounded-xl hover:bg-rose/5 border border-gray-100 transition duration-300">
                      <div class="flex justify-between items-baseline mb-1">
                        <h4 class="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                          FreeAds
                          <span class="text-[9px] font-normal text-rose px-1.5 py-0.2 bg-rose/10 rounded">Groupe</span>
                        </h4>
                        <span class="text-[10px] font-semibold text-gray-400 uppercase">Web App</span>
                      </div>
                      <p class="text-[11px] text-gray-500 mb-2">Plateforme de petites annonces en ligne avec système d'annonces, profils et recherche.</p>
                      <p class="text-[10px] text-gray-600"><strong class="text-gray-700">Technologies :</strong> Laravel, PHP, MySQL, CSS</p>
                    </div>

                    <div class="p-3 bg-gray-50 rounded-xl hover:bg-rose/5 border border-gray-100 transition duration-300">
                      <div class="flex justify-between items-baseline mb-1">
                        <h4 class="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                          Post-it
                          <span class="text-[9px] font-normal text-rose px-1.5 py-0.2 bg-rose/10 rounded">Solo</span>
                        </h4>
                        <span class="text-[10px] font-semibold text-gray-400 uppercase">Web App</span>
                      </div>
                      <p class="text-[11px] text-gray-500 mb-2">Application de prise de notes rapides avec réactivité instantanée et organisation.</p>
                      <p class="text-[10px] text-gray-600"><strong class="text-gray-700">Technologies :</strong> Vue.js, REST API, JavaScript, CSS</p>
                    </div>

                    <div class="p-3 bg-gray-50 rounded-xl hover:bg-rose/5 border border-gray-100 transition duration-300">
                      <div class="flex justify-between items-baseline mb-1">
                        <h4 class="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                          Trelltech
                          <span class="text-[9px] font-normal text-rose px-1.5 py-0.2 bg-rose/10 rounded">Groupe</span>
                        </h4>
                        <span class="text-[10px] font-semibold text-gray-400 uppercase">Backend</span>
                      </div>
                      <p class="text-[11px] text-gray-500 mb-2">API modulaire et sécurisée pour la gestion de tâches collaboratives avec rôles.</p>
                      <p class="text-[10px] text-gray-600"><strong class="text-gray-700">Technologies :</strong> NestJS, TypeScript, MongoDB, JWT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CV Print Footer Info -->
            <div class="mt-8 text-center text-[10px] text-gray-400 border-t border-gray-100 pt-4 print-only hidden">
              Document généré à partir de mon portfolio web - tourefadilatoumariam.dev | Page 1/1
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const printCV = () => {
  window.print()
}
</script>

<style scoped>
@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-up {
  animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@media print {
  /* Hides elements that should not be printed */
  .no-print {
    display: none !important;
  }
  
  .print-only {
    display: block !important;
  }

  /* Resets background and fonts for maximum print quality */
  #cv-print-area {
    position: absolute;
    left: 0;
    top: 0;
    width: 210mm;
    height: 297mm;
    padding: 1.2cm !important;
    background: white !important;
    color: black !important;
    font-size: 9pt !important;
    line-height: 1.3 !important;
    box-sizing: border-box;
  }
}
</style>
