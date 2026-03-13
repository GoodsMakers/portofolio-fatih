export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      nav: { home: 'Home', about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' }
    },
    id: {
      nav: { home: 'Beranda', about: 'Tentang', experience: 'Pengalaman', projects: 'Proyek', skills: 'Keahlian', contact: 'Kontak' }
    }
  }
}))
