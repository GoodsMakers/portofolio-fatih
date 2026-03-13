<script setup lang="ts">
defineProps<{
  page: any
}>()
</script>

<template>
  <UPageHero
    v-if="page"
    :title="page.title"
    :description="page.description"
    :links="page.links"
    :ui="{
      container: 'pt-24 pb-16 lg:pt-36 lg:pb-24'
    }"
  />
</template>
