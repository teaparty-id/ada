<script setup lang="ts">
const { discordInvite } = useCommunityLinks()
</script>

<template>
  <section
    id="bot"
    class="scroll-mt-20 bg-ink-900 py-20 text-white sm:py-28"
  >
    <div class="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div class="order-2 lg:order-1">
        <div class="photo-frame aspect-[5/4] rounded-2xl">
          <img
            src="/images/community/review.jpg"
            alt="Peer review CV dan portofolio antar applicant"
            loading="lazy"
          >
          <span class="caption-chip">Peer review portofolio</span>
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <p class="text-sm font-bold uppercase tracking-[0.12em] text-signal-400">
          CV & portofolio
        </p>
        <h2 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Tinjau dulu.<br>
          Kirim setelah siap.
        </h2>
        <p class="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
          Bot komunitas dan peer review membantu memeriksa struktur dokumen,
          kejelasan cerita proyek, serta kelengkapan tautan portofolio sebelum Anda submit.
        </p>

        <ul class="mt-8 space-y-3 text-[15px] text-white/85">
          <li class="flex gap-3">
            <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal-400" />
            Struktur CV yang ringkas dan mudah dibaca
          </li>
          <li class="flex gap-3">
            <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal-400" />
            Narasi problem → process → impact pada setiap proyek
          </li>
          <li class="flex gap-3">
            <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal-400" />
            Masukan dari manusia, bukan sekadar skor otomatis
          </li>
        </ul>

        <UButton
          class="mt-10 bg-signal-500 text-white hover:bg-signal-400"
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Review di Discord"
          size="xl"
        />
      </div>
    </div>
  </section>
</template>
