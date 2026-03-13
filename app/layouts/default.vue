<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const { t } = useI18n()
const localePath = useLocalePath()

const links = computed<NavigationMenuItem[]>(() => [{
  label: t('nav.home'),
  icon: 'i-lucide-home',
  to: localePath('/')
}, {
  label: t('nav.about'),
  icon: 'i-lucide-user',
  to: localePath('/') + '#about'
}, {
  label: t('nav.experience'),
  icon: 'i-lucide-briefcase',
  to: localePath('/') + '#experience'
}, {
  label: t('nav.projects'),
  icon: 'i-lucide-folder',
  to: localePath('/') + '#projects'
}, {
  label: t('nav.skills'),
  icon: 'i-lucide-wrench',
  to: localePath('/') + '#skills'
}, {
  label: t('nav.contact'),
  icon: 'i-lucide-mail',
  to: localePath('/') + '#contact'
}])
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10">
      <AppHeader :links="links" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
