<script setup lang="ts">
defineProps<{
  page: any
}>()
</script>

<template>
  <GlassCard 
    v-if="page" 
    class="h-full" 
    :title="page.title" 
    icon="i-heroicons-briefcase"
    :hoverable="true"
  >
    <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/30 before:to-transparent">
      <div v-for="(item, index) in page.items" :key="index" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <!-- Timeline dot -->
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-indigo-500/10 dark:bg-indigo-500/20 shadow-lg shadow-indigo-500/20 text-indigo-600 dark:text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform duration-300 group-hover:scale-110">
          <UIcon name="i-heroicons-briefcase" class="w-5 h-5" />
        </div>
        <!-- Content -->
        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-white/60 dark:group-hover:bg-white/10">
          <div class="flex flex-col mb-1">
            <time class="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">{{ item.date }}</time>
            <h4 class="font-bold text-slate-900 dark:text-white leading-tight">{{ item.position }}</h4>
            <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">{{ item.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </GlassCard>
</template>
