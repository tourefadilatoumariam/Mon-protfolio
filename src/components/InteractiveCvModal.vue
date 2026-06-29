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
        class="relative w-full max-w-4xl bg-white text-gray-900 rounded-2xl shadow-2xl my-8 max-h-[90vh] flex flex-col animate-scale-up overflow-y-auto"
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

        <!-- CV content: affichage direct du PDF du cv -->
        <div class="flex-1 overflow-hidden bg-gray-100" id="cv-print-area">
          <iframe
            src="/CV_Toure_Fadilatou_Mariam.pdf"
            class="w-full h-full border-0"
            title="CV - Toure Fadilatou Mariam"
          ></iframe>
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
