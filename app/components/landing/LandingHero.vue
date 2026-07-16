<script setup lang="ts">
const { discordInvite } = useCommunityLinks();
</script>

<template>
  <section
    class="relative min-h-[min(92svh,880px)] overflow-hidden bg-ink-950 text-white"
  >
    <img
      src="/images/community/hero.jpg"
      alt="Applicant ADA sedang belajar dan berdiskusi bersama"
      class="absolute inset-0 size-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/25"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent"
    />

    <div
      class="section-shell relative flex min-h-[min(92svh,880px)] flex-col justify-end pb-14 pt-28 sm:pb-20 sm:pt-32"
    >
      <p
        class="animate-rise text-sm font-semibold uppercase tracking-[0.14em] text-white/70"
      >
        Komunitas independen · Bukan situs resmi
      </p>

      <h1
        class="animate-rise delay-1 mt-5 max-w-4xl text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
      >
        Apple Developer Academy<br />
        <!-- <span class="text-signal-400">Community</span> -->
      </h1>

      <p
        class="animate-rise delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
      >
        Dukungan praktis untuk applicant Apple Developer Academy Indonesia— dari
        CV dan portofolio hingga online test serta simulasi FGD.
      </p>

      <div class="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
        <UButton
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Gabung Discord"
          size="xl"
          class="bg-signal-500 text-white hover:bg-signal-400"
        />
        <UButton
          to="#kegiatan"
          label="Lihat kegiatan"
          color="neutral"
          variant="outline"
          size="xl"
          class="border-white/40 bg-transparent text-white hover:bg-white/10"
        />
      </div>
    </div>
  </section>
</template>
