<script setup lang="ts">
defineProps<{
  page: any
}>()
</script>

<template>
  <UPageSection
    id="skills"
    v-if="page"
    :title="page.title"
    :description="page.description"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard v-for="(category, index) in page.categories" :key="index">
        <template #header>
          <h3 class="font-semibold text-lg">{{ category.name }}</h3>
        </template>
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="(item, iIndex) in category.items" :key="iIndex" variant="soft" color="neutral">
            {{ item }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </UPageSection>
</template>
