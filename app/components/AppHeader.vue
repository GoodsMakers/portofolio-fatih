<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-4 md:top-8 mx-auto left-1/2 transform -translate-x-1/2 z-[60] w-full max-w-fit px-4">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl px-3 sm:px-6 py-1 border border-white/50 dark:border-white/10 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5"
      :ui="{
        link: 'px-3 py-2 text-sm font-semibold hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors',
        linkLeadingIcon: 'hidden sm:inline-block w-4 h-4'
      }"
    >
      <template #list-trailing>
        <div class="flex items-center gap-1 sm:gap-2 ml-2 pl-2 border-l border-slate-200 dark:border-white/10">
          <LanguageSwitcher />
          <ColorModeButton />
        </div>
      </template>
    </UNavigationMenu>
  </div>
</template>
