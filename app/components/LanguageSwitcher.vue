<script setup lang="ts">
const { locale, setLocale } = useI18n()

const toggleLocale = () => {
  const nextLocale = locale.value === 'en' ? 'id' : 'en'
  setLocale(nextLocale)
}
</script>

<template>
  <UButton
    color="neutral"
    variant="ghost"
    size="sm"
    class="font-medium text-xs rounded-full px-2 uppercase"
    @click="toggleLocale"
  >
    {{ locale }}
  </UButton>
</template>
