import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

// Directive personnalisée pour les animations au défilement (scroll reveal)
app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal-init')
    
    const delay = binding.value?.delay || 0
    const direction = binding.value?.direction || 'up' // up, down, left, right, scale
    
    if (direction !== 'up') {
      el.classList.add(`reveal-${direction}`)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('reveal-active')
          }, delay)
          observer.unobserve(el)
        }
      })
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px' // Se déclenche un peu avant l'apparition
    })
    observer.observe(el)
  }
})

app.mount('#app')