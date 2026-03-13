import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'About',
  icon: 'i-lucide-user',
  to: '#about'
}, {
  label: 'Experience',
  icon: 'i-lucide-briefcase',
  to: '#experience'
}, {
  label: 'Projects',
  icon: 'i-lucide-folder',
  to: '#projects'
}, {
  label: 'Skills',
  icon: 'i-lucide-wrench',
  to: '#skills'
}, {
  label: 'Contact',
  icon: 'i-lucide-mail',
  to: '#contact'
}]
