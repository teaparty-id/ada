<script setup lang="ts">
const { discordInvite, navLinks } = useCommunityLinks()
const open = ref(false)

watch(open, (value) => {
  if (import.meta.client) {
    document.body.style.overflow = value ? 'hidden' : ''
  }
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-ink-200/80 bg-[#fafaf8]/90 backdrop-blur-md dark:border-ink-800 dark:bg-ink-950/90">
    <div class="section-shell flex h-14 items-center justify-between sm:h-16">
      <NuxtLink
        to="/"
        @click="open = false"
      >
        <AppLogo />
      </NuxtLink>

      <nav class="hidden items-center gap-7 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <UColorModeButton
          color="neutral"
          variant="ghost"
          size="md"
        />
        <UButton
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Gabung Discord"
          size="md"
        />
      </div>

      <div class="flex items-center gap-1 md:hidden">
        <UColorModeButton
          color="neutral"
          variant="ghost"
          size="md"
        />
        <UButton
          :icon="open ? 'i-lucide-x' : 'i-lucide-menu'"
          color="neutral"
          variant="ghost"
          aria-label="Menu"
          @click="open = !open"
        />
      </div>
    </div>

    <div
      v-if="open"
      class="border-t border-ink-200 bg-[#fafaf8] px-5 py-4 md:hidden dark:border-ink-800 dark:bg-ink-950"
    >
      <nav class="flex flex-col">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="border-b border-ink-100 py-3 text-base font-medium dark:border-ink-800"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
        <UButton
          class="mt-4"
          :to="discordInvite"
          target="_blank"
          rel="noopener noreferrer"
          label="Gabung Discord"
          block
          @click="open = false"
        />
      </nav>
    </div>
  </header>
</template>
