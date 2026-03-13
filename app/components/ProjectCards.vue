<script setup lang="ts">
defineProps<{
  page: any
}>()
</script>

<template>
  <UPageSection
    id="projects"
    v-if="page"
    :title="page.title"
    :description="page.description"
  >
    <UPageGrid>
      <UPageCard
        v-for="(project, index) in page.list"
        :key="index"
        :title="project.title"
        :description="project.description"
      >
        <template #footer>
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="(tag, tIndex) in project.stack" :key="tIndex" variant="subtle" size="sm">
              {{ tag }}
            </UBadge>
          </div>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
