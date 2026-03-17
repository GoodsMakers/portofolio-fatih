<script setup lang="ts">
defineProps<{
  title?: string
  icon?: string
  className?: string
  hoverable?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-lg dark:shadow-xl dark:shadow-black/40 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300',
      hoverable ? 'hover:bg-white/70 dark:hover:bg-white/10 hover:border-white/60 dark:hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl' : '',
      className
    ]"
  >
    <!-- Optional Title Header -->
    <div v-if="title || icon" class="flex items-center gap-3 mb-6 relative z-10">
      <div v-if="icon" class="p-2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20 dark:border-cyan-500/20 shadow-inner">
        <UIcon :name="icon" class="w-5 h-5" />
      </div>
      <h3 class="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{{ title }}</h3>
    </div>
    
    <!-- Content Slot -->
    <div class="relative z-10 w-full h-full">
      <slot />
    </div>

    <!-- Background Subtle Gradient Overlay for extra glassmorphism depth -->
    <div class="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent pointer-events-none rounded-3xl"></div>
  </div>
</template>
