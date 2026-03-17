<script setup lang="ts">
defineProps<{
  page: any
}>()
</script>

<template>
  <div v-if="page" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 pb-12 lg:pt-24 lg:pb-16 relative z-10">
    <!-- Left Side: Text and CTA -->
    <div class="lg:col-span-7 space-y-8">
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white">
        {{ page.title }}
      </h1>
      <p class="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
        {{ page.description }}
      </p>
      <div class="flex flex-wrap gap-4 pt-4">
        <UButton 
          v-for="(link, index) in page.links" 
          :key="index" 
          :to="link.to" 
          :color="link.color" 
          size="xl" 
          :variant="link.variant" 
          class="rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/20"
        >
          {{ link.label }}
        </UButton>
      </div>
    </div>
    
    <!-- Right Side: Quick Info Glass Card -->
    <div class="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0">
      <GlassCard class="transform transition-transform hover:-translate-y-2 hover:rotate-1" :hoverable="true">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-5">
            <div class="relative">
              <UAvatar src="https://avatars.githubusercontent.com/u/104344403?v=4" alt="Profile" size="3xl" class="ring-4 ring-indigo-500/30" />
              <span class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">Muhammad Fatih Bagaskara</h3>
              <p class="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">Software Engineer</p>
            </div>
          </div>
          
          <div class="space-y-4 text-sm font-medium text-slate-700 dark:text-slate-300">
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-indigo-500" />
              <span>Depok, Indonesia</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-briefcase" class="w-5 h-5 text-purple-500" />
              <span>1+ Years Experience</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-code-bracket" class="w-5 h-5 text-cyan-500" />
              <span>Web Dev · Machine Learning</span>
            </div>
          </div>
          
          <div class="pt-5 border-t border-slate-200 dark:border-white/10 flex justify-between px-2">
            <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/fatihbagaskara" target="_blank" size="lg" class="hover:text-indigo-500 dark:hover:text-indigo-400" />
            <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost" to="https://www.linkedin.com/in/muhammad-fatih-bagaskara/" target="_blank" size="lg" class="hover:text-cyan-500 dark:hover:text-cyan-400" />
            <UButton icon="i-heroicons-envelope" color="neutral" variant="ghost" href="mailto:mfatihbagaskara@gmail.com" size="lg" class="hover:text-purple-500 dark:hover:text-purple-400" />
          </div>
        </div>
      </GlassCard>
    </div>
  </div>
</template>
