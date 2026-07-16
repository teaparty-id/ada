<script setup lang="ts">
const { discordInvite, officialSite } = useCommunityLinks()
</script>

<template>
  <section class="bg-signal-500 py-16 text-white sm:py-20">
    <div class="section-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-2xl">
        <h2 class="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
          Siap memulai<br>
          persiapan?
        </h2>
        <p class="mt-5 text-lg text-white/90">
          Gabung Discord untuk review dokumen, latihan soal, dan simulasi diskusi bersama komunitas.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <UButton
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Gabung Discord"
          size="xl"
          class="bg-ink-950 text-white hover:bg-ink-800"
        />
        <UButton
          :to="officialSite"
          target="_blank"
          rel="noopener noreferrer"
          label="Situs resmi Academy"
          color="neutral"
          variant="outline"
          size="xl"
          class="border-white/50 bg-transparent text-white hover:bg-white/10"
        />
      </div>
    </div>
  </section>
</template>
