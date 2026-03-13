<script setup lang="ts">
defineProps<{
  page: any
}>()
</script>

<template>
  <UPageSection
    id="experience"
    v-if="page"
    :title="page.title"
    :description="page.description"
  >
    <div class="space-y-8">
      <div v-for="(item, index) in page.items" :key="index" class="border-l-2 border-(--ui-border) pl-4 ml-2">
        <div class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2">
          <h3 class="text-xl font-bold">{{ item.position }}</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.date }}</span>
        </div>
        <p class="text-md font-medium text-primary mb-4">{{ item.company }}</p>
        <ul class="list-disc leading-relaxed text-gray-600 dark:text-gray-300 ml-5">
          <li v-for="(task, tIndex) in item.tasks" :key="tIndex">{{ task }}</li>
        </ul>
      </div>
    </div>
  </UPageSection>
</template>
