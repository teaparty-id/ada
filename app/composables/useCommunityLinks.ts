export function useCommunityLinks() {
  const discordInvite = 'https://discord.gg/appledeveloperacademy'
  const officialSite = 'https://developeracademy.id'

  const navLinks = [
    { label: 'Fitur', to: '#fitur' },
    { label: 'Perjalanan', to: '#perjalanan' },
    { label: 'Latihan', to: '#latihan' },
    { label: 'Kegiatan', to: '#kegiatan' },
    { label: 'FAQ', to: '#faq' }
  ]

  return {
    discordInvite,
    officialSite,
    navLinks
  }
}
