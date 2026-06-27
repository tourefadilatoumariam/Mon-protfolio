<template>
  <section id="blog" class="bg-[#130f12] px-6 sm:px-10 py-20 md:py-28">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl">
        <p class="sec-label">Articles</p>
        <h2 class="sec-title">Blog & apprentissages</h2>
       
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="(post, i) in posts"
          :key="post.title"
          v-reveal="{ delay: i * 100 }"
          class="group flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/6 bg-[#1a1419] transition-all duration-300 hover:-translate-y-2 hover:border-rose/20 hover:shadow-[0_16px_48px_rgba(0,0,0,.38)]"
        >
          <a
            :href="post.link"
            :target="isExternal(post.link) ? '_blank' : undefined"
            :rel="isExternal(post.link) ? 'noopener noreferrer' : undefined"
            class="relative h-44 overflow-hidden"
            :aria-label="post.title"
          >
            <LazyImage
              :src="post.image"
              :alt="post.title"
              cover
              lazy
              placeholder-bg="linear-gradient(135deg, #1a1419 0%, #2a1f26 100%)"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#1a1419] via-transparent to-transparent"></div>
            <span class="absolute top-4 left-4 bg-rose text-[#0e0c0d] text-[10px] font-bold px-3 py-1.5 rounded-lg">
              {{ post.date }}
            </span>
          </a>

          <div class="flex flex-1 flex-col justify-between p-5 md:p-6">
            <div>
              <p class="text-[10px] font-bold tracking-widest uppercase text-rose mb-2">{{ post.cat }}</p>
              <h3 class="font-semibold text-white text-lg leading-snug mb-3">{{ post.title }}</h3>
              <p class="text-white/70 text-sm leading-relaxed">{{ post.excerpt }}</p>
            </div>

            <a
              :href="post.link"
              :target="isExternal(post.link) ? '_blank' : undefined"
              :rel="isExternal(post.link) ? 'noopener noreferrer' : undefined"
              class="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-rose group-hover:gap-2 transition-all"
            >
              {{ isExternal(post.link) ? 'Voir sur LinkedIn' : 'Me contacter' }}<span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { posts } from '../data/portfolio.js'
import LazyImage from './LazyImage.vue'

function isExternal(link) {
  return link.startsWith('http')
}
</script>