<script setup lang="ts">
const { discordInvite } = useCommunityLinks()

const shots = [
  {
    src: '/images/community/workshop.jpg',
    alt: 'Workshop komunitas applicant',
    caption: 'Workshop',
    class: 'aspect-[4/3] md:col-span-1 md:row-span-2 md:aspect-auto'
  },
  {
    src: '/images/community/fgd.jpg',
    alt: 'Latihan FGD',
    caption: 'Simulasi FGD',
    class: 'aspect-[4/3] md:aspect-auto'
  },
  {
    src: '/images/community/coding.jpg',
    alt: 'Sesi coding bersama',
    caption: 'Latihan coding',
    class: 'aspect-[4/3] md:aspect-auto'
  },
  {
    src: '/images/community/peer.jpg',
    alt: 'Mentoring antar applicant',
    caption: 'Peer mentoring',
    class: 'aspect-[16/10] md:col-span-2 md:aspect-auto'
  }
]
</script>

<template>
  <section
    id="kegiatan"
    class="scroll-mt-20 py-20 sm:py-28"
  >
    <div class="section-shell">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-xl">
          <p class="text-sm font-bold uppercase tracking-[0.12em] text-signal-600 dark:text-signal-400">
            Kegiatan
          </p>
          <h2 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Kegiatan komunitas.
          </h2>
          <p class="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300">
            Sesi online dan offline untuk applicant yang sedang mempersiapkan seleksi—
            dari latihan soal hingga simulasi diskusi.
          </p>
        </div>
        <UButton
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Ikuti sesi berikutnya"
          color="neutral"
          variant="outline"
          size="lg"
        />
      </div>

      <div class="mt-12 grid auto-rows-fr gap-3 sm:gap-4 md:grid-cols-2 md:grid-rows-[240px_240px_280px]">
        <figure
          v-for="shot in shots"
          :key="shot.src + shot.caption"
          class="photo-frame rounded-2xl"
          :class="shot.class"
        >
          <img
            :src="shot.src"
            :alt="shot.alt"
            loading="lazy"
          >
          <figcaption class="caption-chip">
            {{ shot.caption }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
