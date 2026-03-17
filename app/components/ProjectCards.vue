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
    icon="i-heroicons-code-bracket-square"
    :hoverable="false"
  >
    <div class="space-y-4">
      <div 
        v-for="(project, index) in page.list" 
        :key="index"
        class="group p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
      >
        <div class="flex justify-between items-start mb-2">
          <h4 class="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {{ project.title }}
          </h4>
          <UIcon name="i-heroicons-arrow-up-right" class="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <UBadge 
            v-for="(tag, tIndex) in project.stack" 
            :key="tIndex" 
            variant="soft" 
            size="sm"
            class="rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
          >
            {{ tag }}
          </UBadge>
        </div>
      </div>
    </div>
  </GlassCard>
</template>
