<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const { t, locale } = useI18n()
const localePath = useLocalePath()

const links = ref<NavigationMenuItem[]>([])

const updateLinks = () => {
  const currentLocale = locale.value
  links.value = [{
    label: t('nav.home'),
    icon: 'i-lucide-home',
    to: currentLocale === 'id' ? '/id' : '/'
  }, {
    label: t('nav.about'),
    icon: 'i-lucide-user',
    to: (currentLocale === 'id' ? '/id' : '') + '/#about'
  }, {
    label: t('nav.experience'),
    icon: 'i-lucide-briefcase',
    to: (currentLocale === 'id' ? '/id' : '') + '/#experience'
  }, {
    label: t('nav.projects'),
    icon: 'i-lucide-folder',
    to: (currentLocale === 'id' ? '/id' : '') + '/#projects'
  }, {
    label: t('nav.skills'),
    icon: 'i-lucide-wrench',
    to: (currentLocale === 'id' ? '/id' : '') + '/#skills'
  }, {
    label: t('nav.contact'),
    icon: 'i-lucide-mail',
    to: (currentLocale === 'id' ? '/id' : '') + '/#contact'
  }]
}

watch(locale, updateLinks, { immediate: true })
</script>

<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-slate-950 overflow-x-hidden font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <!-- Animated Gradient Background Elements -->
    <div class="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/30 dark:bg-indigo-500/20 blur-[100px] md:blur-[150px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse-slow"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/30 dark:bg-cyan-500/20 blur-[100px] md:blur-[150px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse-slow animation-delay-2000"></div>
    <div class="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-purple-500/30 dark:bg-purple-500/20 blur-[100px] md:blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse-slow animation-delay-4000"></div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <!-- Navbar -->
      <div class="pt-6 pb-4 md:pt-10 z-50">
        <AppHeader :links="links" />
      </div>

      <!-- Main Content -->
      <main class="flex-grow flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <slot />
      </main>

      <!-- Footer -->
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<style>
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
