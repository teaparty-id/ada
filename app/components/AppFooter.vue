<script setup lang="ts">
const { discordInvite, officialSite, navLinks } = useCommunityLinks()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink-950 text-white">
    <div class="section-shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <p class="text-2xl font-extrabold uppercase tracking-tight">
          ADA Community
        </p>
        <p class="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60">
          Komunitas independen untuk applicant Apple Developer Academy Indonesia.
          Tidak berafiliasi dengan Apple maupun Apple Developer Academy.
        </p>
        <UButton
          class="mt-6 bg-signal-500 text-white hover:bg-signal-400"
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Gabung Discord"
          size="md"
        />
      </div>

      <div>
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
          Halaman
        </p>
        <ul class="mt-4 space-y-3">
          <li
            v-for="link in navLinks"
            :key="link.to"
          >
            <NuxtLink
              :to="link.to"
              class="text-[15px] text-white/70 transition-colors hover:text-white"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
          Resmi
        </p>
        <ul class="mt-4 space-y-3 text-[15px] text-white/70">
          <li>
            <a
              :href="officialSite"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white"
            >developeracademy.id</a>
          </li>
          <li>
            <a
              href="https://appledeveloperacademy.ciputra.ac.id/jakarta"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white"
            >ADA @ UC Jakarta</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="section-shell flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
      <p>© {{ year }} ADA Community</p>
      <p>Apple dan Apple Developer Academy adalah merek dagang Apple Inc.</p>
    </div>
  </footer>
</template>
