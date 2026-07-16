<script setup lang="ts">
const pillars = [
  {
    title: 'Discord komunitas',
    body: 'Ruang diskusi untuk bertanya, berbagi progres, dan saling mendukung selama proses seleksi.'
  },
  {
    title: 'Review dokumen',
    body: 'Bot dan peer review untuk meninjau CV serta portofolio sebelum dikirim.'
  },
  {
    title: 'Latihan online test',
    body: 'Kumpulan soal logika dan pemrograman untuk melatih ketelitian serta manajemen waktu.'
  },
  {
    title: 'Simulasi FGD',
    body: 'Latihan diskusi kelompok untuk mengasah komunikasi, kolaborasi, dan kejelasan ide.'
  }
]
</script>

<template>
  <section
    id="fitur"
    class="scroll-mt-20 border-b border-ink-200 bg-white py-16 dark:border-ink-800 dark:bg-ink-950 sm:py-20"
  >
    <div class="section-shell">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Dibuat untuk applicant.<br>
            Fokus pada persiapan.
          </h2>
          <p class="mt-5 text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
            ADA Community adalah komunitas independen bagi orang yang ingin atau sedang
            mendaftar ke Apple Developer Academy Indonesia. Kami membantu persiapan seleksi—
            tanpa menggantikan informasi resmi dari Academy.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <article
            v-for="pillar in pillars"
            :key="pillar.title"
            class="border-t border-ink-200 pt-4 dark:border-ink-700"
          >
            <h3 class="text-lg font-bold tracking-tight">
              {{ pillar.title }}
            </h3>
            <p class="mt-2 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">
              {{ pillar.body }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
