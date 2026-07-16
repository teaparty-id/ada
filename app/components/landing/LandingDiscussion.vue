<script setup lang="ts">
const { discordInvite } = useCommunityLinks()
</script>

<template>
  <section
    id="diskusi"
    class="scroll-mt-20 overflow-hidden bg-white dark:bg-ink-950"
  >
    <div class="grid lg:grid-cols-2">
      <div class="photo-frame min-h-[320px] lg:min-h-[560px]">
        <img
          src="/images/community/fgd.jpg"
          alt="Simulasi FGD applicant duduk berdiskusi dalam kelompok"
          class="absolute inset-0"
          loading="lazy"
        >
        <span class="caption-chip">Simulasi FGD · sesi komunitas</span>
      </div>

      <div class="flex flex-col justify-center px-5 py-14 sm:px-10 sm:py-20 lg:px-14">
        <p class="text-sm font-bold uppercase tracking-[0.12em] text-signal-600 dark:text-signal-400">
          FGD / LGD
        </p>
        <h2 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Latihan diskusi.<br>
          Tanpa skrip yang dipaksakan.
        </h2>
        <p class="mt-5 max-w-md text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
          Simulasi FGD dan LGD membantu Anda mendengar dengan baik, membangun ide bersama,
          dan menyampaikan pendapat dengan jelas.
        </p>

        <div class="mt-8 space-y-5 border-t border-ink-200 pt-8 dark:border-ink-700">
          <div>
            <p class="font-bold">
              Warm-up
            </p>
            <p class="mt-1 text-sm text-ink-500 dark:text-ink-300">
              Pembukaan singkat agar peserta lebih nyaman berbicara di depan orang baru.
            </p>
          </div>
          <div>
            <p class="font-bold">
              Case discussion
            </p>
            <p class="mt-1 text-sm text-ink-500 dark:text-ink-300">
              Diskusi berbasis skenario produk, desain, atau kolaborasi tim.
            </p>
          </div>
          <div>
            <p class="font-bold">
              Feedback
            </p>
            <p class="mt-1 text-sm text-ink-500 dark:text-ink-300">
              Masukan spesifik terkait kejelasan, empati, dan cara berkontribusi dalam kelompok.
            </p>
          </div>
        </div>

        <UButton
          class="mt-10 w-fit"
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Lihat jadwal simulasi"
          size="lg"
        />
      </div>
    </div>
  </section>
</template>
