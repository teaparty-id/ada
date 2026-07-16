<script setup lang="ts">
const { discordInvite } = useCommunityLinks()

const tracks = [
  {
    title: 'Logika',
    body: 'Latihan pola soal, manajemen waktu, dan pembahasan bersama peserta lain.',
    image: '/images/community/coding.jpg',
    caption: 'Latihan logika & coding'
  },
  {
    title: 'Pemrograman dasar',
    body: 'Konsep inti yang sering diujikan—tanpa mengharuskan penguasaan satu bahasa tertentu.',
    image: '/images/community/peer.jpg',
    caption: 'Latihan berpasangan'
  }
]
</script>

<template>
  <section
    id="latihan"
    class="scroll-mt-20 py-20 sm:py-28"
  >
    <div class="section-shell">
      <div class="max-w-2xl">
        <p class="text-sm font-bold uppercase tracking-[0.12em] text-signal-600 dark:text-signal-400">
          Online test
        </p>
        <h2 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Latihan yang membangun.<br>
          Bukan tebakan soal resmi.
        </h2>
        <p class="mt-5 text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
          Kumpulan soal komunitas disusun untuk melatih pola pikir dan ritme pengerjaan.
          Ini bukan jaminan isi tes resmi Academy.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <article
          v-for="track in tracks"
          :key="track.title"
          class="group"
        >
          <div class="photo-frame aspect-[16/10] rounded-2xl">
            <img
              :src="track.image"
              :alt="track.caption"
              loading="lazy"
            >
            <span class="caption-chip">{{ track.caption }}</span>
          </div>
          <h3 class="mt-5 text-2xl font-bold tracking-tight">
            {{ track.title }}
          </h3>
          <p class="mt-2 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">
            {{ track.body }}
          </p>
        </article>
      </div>

      <div class="mt-10 flex flex-wrap items-center gap-4">
        <UButton
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Akses soal di Discord"
          size="lg"
        />
        <p class="text-sm text-ink-500 dark:text-ink-400">
          Channel #online-test · diperbarui berkala
        </p>
      </div>
    </div>
  </section>
</template>
