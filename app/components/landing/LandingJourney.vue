<script setup lang="ts">
const stages = [
  {
    when: 'Tahap 1',
    title: 'Dokumen',
    detail: 'Kirim CV dan portofolio. Jelaskan technical exploration serta personal learning journey Anda.'
  },
  {
    when: 'Tahap 2',
    title: 'Online test',
    detail: 'Tes logika dan dasar pemrograman, dikerjakan dari rumah dalam batas waktu tertentu.'
  },
  {
    when: 'Tahap 3',
    title: 'Interview / FGD',
    detail: 'Wawancara atau diskusi kelompok. Format dapat berbeda pada setiap gelombang seleksi.'
  },
  {
    when: 'Tahap 4',
    title: 'Pengumuman',
    detail: 'Hasil ditentukan oleh Academy. Komunitas tetap terbuka, apa pun hasilnya.'
  }
]
</script>

<template>
  <section
    id="perjalanan"
    class="scroll-mt-20 py-20 sm:py-28"
  >
    <div class="section-shell">
      <div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.12em] text-signal-600 dark:text-signal-400">
            Alur seleksi
          </p>
          <h2 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Empat tahap.<br>
            Persiapan yang jelas.
          </h2>
          <p class="mt-5 max-w-md text-base leading-relaxed text-ink-500 dark:text-ink-300">
            Jadwal dan ketentuan resmi selalu merujuk ke developeracademy.id.
            Di komunitas ini, kami membantu persiapan di setiap tahap: review dokumen,
            latihan soal, dan simulasi diskusi.
          </p>

          <div class="photo-frame mt-10 aspect-[4/3] rounded-2xl">
            <img
              src="/images/community/study.jpg"
              alt="Sesi belajar bersama applicant ADA"
              loading="lazy"
            >
            <span class="caption-chip">Sesi belajar · online & offline</span>
          </div>
        </div>

        <ol class="space-y-0">
          <li
            v-for="(stage, i) in stages"
            :key="stage.title"
            class="grid grid-cols-[72px_1fr] gap-4 border-t border-ink-200 py-7 dark:border-ink-700 sm:grid-cols-[96px_1fr] sm:gap-6"
          >
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-ink-400">
                {{ stage.when }}
              </p>
              <p class="mt-1 text-2xl font-extrabold tabular-nums text-signal-600 dark:text-signal-400">
                0{{ i + 1 }}
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold tracking-tight sm:text-2xl">
                {{ stage.title }}
              </h3>
              <p class="mt-2 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">
                {{ stage.detail }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
