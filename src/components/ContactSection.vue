<template>
  <section id="contact" class="px-6 sm:px-10 py-20 md:py-28">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20">
      <div v-reveal="{ direction: 'left' }">
        <p class="sec-label">Parlons-en</p>
        <h2 class="sec-title">Me contacter</h2>
        <div class="sec-divider"></div>

        <div class="inline-flex items-center gap-2 bg-emerald-400/8 border border-emerald-400/20 rounded-full px-4 py-2 mb-7">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-[11px] font-medium text-emerald-400 tracking-wide">Disponible pour stage, alternance ou mission</span>
        </div>

        <p class="text-white/45 text-[15px] leading-relaxed mb-8 font-light">
          Une opportunite, un projet ou une collaboration en tete ? Envoyez-moi quelques details et je vous repondrai rapidement.
        </p>

        <div class="flex flex-col gap-4 mb-8">
          <div
            v-for="info in contactInfos"
            :key="info.label"
            class="flex items-center gap-4 bg-[#1a1419]/40 border border-white/5 rounded-xl p-4 hover:border-rose/25 hover:bg-[#1a1419]/70 transition-all duration-300"
          >
            <div class="w-10 h-10 rounded-xl bg-rose/10 flex items-center justify-center text-rose shrink-0 transition-transform duration-300 hover:scale-110">
              <svg v-if="info.icon === 'map-pin'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="info.icon === 'mail'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="info.icon === 'phone'" class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-semibold">{{ info.label }}</div>
              <div class="text-sm font-medium text-white/80">{{ info.value }}</div>
            </div>
          </div>
        </div>

        <div class="flex gap-2.5">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            :title="s.title"
            class="w-9 h-9 rounded-[9px] bg-white/4 border border-white/8 flex items-center justify-center text-white/35 hover:bg-rose/15 hover:text-rose hover:border-rose/25 transition-all"
          >
            <svg v-if="s.label === 'linkedin'" class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <svg v-else-if="s.label === 'github'" class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <form
        @submit.prevent="handleSubmit"
        novalidate
        v-reveal="{ direction: 'right', delay: 100 }"
        class="bg-[#1a1419]/40 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-xl backdrop-blur-md"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="form-label">Prenom <span class="text-rose">*</span></label>
            <input v-model.trim="form.firstName" type="text" placeholder="Fadilatou" class="form-input" :class="{ 'border-red-500/50 focus:border-red-500/70': errors.firstName }" @blur="validate('firstName')" />
            <span v-if="errors.firstName" class="text-[11px] text-red-400">{{ errors.firstName }}</span>
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="form-label">Nom <span class="text-rose">*</span></label>
            <input v-model.trim="form.lastName" type="text" placeholder="Toure" class="form-input" :class="{ 'border-red-500/50 focus:border-red-500/70': errors.lastName }" @blur="validate('lastName')" />
            <span v-if="errors.lastName" class="text-[11px] text-red-400">{{ errors.lastName }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="form-label">Email <span class="text-rose">*</span></label>
          <input v-model.trim="form.email" type="email" placeholder="votre@email.com" class="form-input" :class="{ 'border-red-500/50 focus:border-red-500/70': errors.email }" @blur="validate('email')" />
          <span v-if="errors.email" class="text-[11px] text-red-400">{{ errors.email }}</span>
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="form-label">Sujet</label>
          <input v-model="form.subject" type="text" placeholder="Ex : opportunite de stage" class="form-input" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="form-label flex items-center">
            Message <span class="text-rose">*</span>
            <span class="ml-auto text-white/20 font-normal normal-case">{{ form.message.length }} / 500</span>
          </label>
          <textarea v-model="form.message" rows="5" maxlength="500" placeholder="Decrivez votre besoin ou votre opportunite..." class="form-input resize-none" :class="{ 'border-red-500/50 focus:border-red-500/70': errors.message }" @blur="validate('message')"></textarea>
          <span v-if="errors.message" class="text-[11px] text-red-400">{{ errors.message }}</span>
        </div>

        <transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div v-if="sent" class="flex items-center gap-3 bg-emerald-400/10 border border-emerald-400/25 rounded-xl px-4 py-3">
            <span class="text-emerald-400 text-sm font-medium">Message prepare. Votre application mail va s'ouvrir.</span>
          </div>
        </transition>

        <div class="flex items-center justify-between gap-4 mt-1">
          <span class="text-[11px] text-white/20 font-light">* champs obligatoires</span>
          <button type="submit" :disabled="loading" class="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed bg-rose text-[#0e0c0d] hover:bg-rose2">
            <span>{{ loading ? 'Preparation...' : 'Envoyer ->' }}</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { contactInfos, socials } from '../data/portfolio.js'

const sent = ref(false)
const loading = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
})

function validate(field) {
  switch (field) {
    case 'firstName':
      errors.firstName = form.firstName.length > 0 ? '' : 'Le prenom est requis.'
      break
    case 'lastName':
      errors.lastName = form.lastName.length > 0 ? '' : 'Le nom est requis.'
      break
    case 'email':
      errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ? ''
        : 'Adresse email invalide.'
      break
    case 'message':
      errors.message = form.message.trim().length >= 20
        ? ''
        : 'Message trop court, 20 caracteres minimum.'
      break
  }
}

function validateAll() {
  ;['firstName', 'lastName', 'email', 'message'].forEach(validate)
  return !Object.values(errors).some(e => e !== '')
}

async function handleSubmit() {
  if (!validateAll()) return

  loading.value = true
  const subject = encodeURIComponent(form.subject || 'Contact depuis le portfolio')
  const body = encodeURIComponent(
    `Bonjour Fadilatou,\n\n${form.message}\n\n${form.firstName} ${form.lastName}\n${form.email}`
  )

  window.location.href = `mailto:tourefadilatoumariam@gmail.com?subject=${subject}&body=${body}`
  loading.value = false
  sent.value = true

  Object.keys(form).forEach(k => (form[k] = ''))
  setTimeout(() => (sent.value = false), 6000)
}
</script>
