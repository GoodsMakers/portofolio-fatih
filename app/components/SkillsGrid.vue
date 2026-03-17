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
    icon="i-heroicons-wrench-screwdriver"
    :hoverable="true"
  >
    <div class="space-y-6">
      <div v-for="(category, index) in page.categories" :key="index" class="space-y-3">
        <h4 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {{ category.name }}
        </h4>
        <div class="flex flex-wrap gap-2">
          <UBadge 
            v-for="(item, iIndex) in category.items" 
            :key="iIndex" 
            variant="soft" 
            class="rounded-full px-3 py-1 bg-white/50 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium hover:border-cyan-500/50 transition-colors"
          >
            {{ item }}
          </UBadge>
        </div>
      </div>
    </div>
  </GlassCard>
</template>
