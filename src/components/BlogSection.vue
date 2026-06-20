<template>
  <section id="blog" class="bg-[#130f12] px-6 sm:px-10 py-20 md:py-28">
    <div class="max-w-6xl mx-auto">
      <p class="sec-label">Articles</p>
      <h2 class="sec-title">Notes & apprentissages</h2>
      <div class="sec-divider"></div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="(post, i) in posts"
          :key="post.title"
          v-reveal="{ delay: i * 100 }"
          class="group bg-[#1a1419] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,.4)] transition-all duration-300"
        >
          <div class="h-44 md:h-48 relative overflow-hidden" :style="{ background: post.bg }">
            <span class="absolute top-4 left-4 bg-rose text-[#0e0c0d] text-[10px] font-bold px-3 py-1.5 rounded-lg">
              {{ post.date }}
            </span>
          </div>

          <div class="p-5 md:p-6">
            <p class="text-[10px] font-bold tracking-widest uppercase text-rose mb-2">{{ post.cat }}</p>
            <h3 class="font-semibold text-white text-[15px] leading-snug mb-3">{{ post.title }}</h3>
            <p class="text-white/42 text-sm leading-relaxed">{{ post.excerpt }}</p>
            <a
              href="#contact"
              class="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-rose group-hover:gap-2 transition-all"
            >
              En parler <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { posts } from '../data/portfolio.js'
</script>
