<script setup lang="ts">
const title = 'ADA Community — Persiapan seleksi Apple Developer Academy Indonesia'
const description = 'Komunitas independen untuk applicant Apple Developer Academy Indonesia. Review CV dan portofolio, latihan online test, simulasi FGD, serta Discord komunitas.'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'id'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/images/community/hero.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
  <UApp>
    <AppNavbar />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </UApp>
</template>
