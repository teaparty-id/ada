<script setup lang="ts">
const items = [
  {
    label: 'Apakah ini situs resmi Apple Developer Academy?',
    content: 'Tidak. ADA Community adalah komunitas independen. Jadwal, formulir, dan keputusan seleksi hanya berasal dari developeracademy.id.'
  },
  {
    label: 'Apakah saya harus berlatar belakang IT?',
    content: 'Tidak. Apple Developer Academy terbuka untuk berbagai latar belakang. Komunitas ini membantu persiapan dokumen, latihan, dan diskusi—bukan hanya skill teknis awal.'
  },
  {
    label: 'Apakah bot review menjamin lolos screening?',
    content: 'Tidak. Bot dan peer review hanya memberikan masukan agar dokumen lebih rapi dan ceritanya lebih jelas. Keputusan screening sepenuhnya milik Academy.'
  },
  {
    label: 'Apakah soal latihan sama dengan tes resmi?',
    content: 'Tidak dijamin sama. Soal latihan disusun untuk melatih pola pikir dan ritme pengerjaan. Panduan resmi dari Academy tetap menjadi acuan utama.'
  },
  {
    label: 'Apakah simulasi FGD berbayar?',
    content: 'Tidak. Partisipasi komunitas bersifat sukarela. Peserta datang untuk berlatih dan saling memberikan feedback.'
  }
]
</script>

<template>
  <section
    id="faq"
    class="scroll-mt-20 border-t border-ink-200 bg-white py-20 dark:border-ink-800 dark:bg-ink-950 sm:py-28"
  >
    <div class="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Pertanyaan yang sering diajukan
        </h2>
        <p class="mt-4 text-ink-500 dark:text-ink-300">
          Belum menemukan jawaban? Tanyakan di Discord.
        </p>
      </div>

      <UAccordion :items="items" />
    </div>
  </section>
</template>
