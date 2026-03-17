<script setup lang="ts">
const { locale } = useI18n()

const { data: heroData } = await useAsyncData(`hero-${locale.value}`, () => queryCollection('index').path(`/${locale.value}/index`).first(), { watch: [locale] })
const { data: aboutData } = await useAsyncData(`about-${locale.value}`, () => queryCollection('about').path(`/${locale.value}/about`).first(), { watch: [locale] })
const { data: experienceData } = await useAsyncData(`experience-${locale.value}`, () => queryCollection('experience').path(`/${locale.value}/experience`).first(), { watch: [locale] })
const { data: projectsData } = await useAsyncData(`projects-${locale.value}`, () => queryCollection('projects').path(`/${locale.value}/projects`).first(), { watch: [locale] })
const { data: skillsData } = await useAsyncData(`skills-${locale.value}`, () => queryCollection('skills').path(`/${locale.value}/skills`).first(), { watch: [locale] })
const { data: achievementsData } = await useAsyncData(`achievements-${locale.value}`, () => queryCollection('achievements').path(`/${locale.value}/achievements`).first(), { watch: [locale] })
const { data: educationData } = await useAsyncData(`education-${locale.value}`, () => queryCollection('education').path(`/${locale.value}/education`).first(), { watch: [locale] })
const { data: certificationsData } = await useAsyncData(`certifications-${locale.value}`, () => queryCollection('certifications').path(`/${locale.value}/certifications`).first(), { watch: [locale] })
const { data: contactData } = await useAsyncData(`contact-${locale.value}`, () => queryCollection('contact').path(`/${locale.value}/contact`).first(), { watch: [locale] })

useSeoMeta({
  title: 'Portfolio - Muhammad Fatih Bagaskara',
  description: locale.value === 'id' ? 'Insinyur Perangkat Lunak & Pengembang Web' : 'Software Engineer & Web Developer'
})
</script>

<template>
  <div class="space-y-12 pb-20">
    <!-- Hero Section (Full Width) -->
    <HeroSection v-if="heroData" :page="heroData" />

    <!-- Bento Grid Section -->
    <div class="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
      
      <!-- About Section (Large) -->
      <GlassCard 
        id="about"
        v-if="aboutData" 
        class="md:col-span-3 scroll-mt-28"
        :title="aboutData.title"
        icon="i-heroicons-user"
        :hoverable="true"
      >
        <div class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <MDC :value="aboutData.body" />
        </div>
      </GlassCard>

      <!-- Projects Section (Large) -->
      <div id="projects" v-if="projectsData" class="md:col-span-3 h-full scroll-mt-28">
        <ProjectCards :page="projectsData" />
      </div>

      <!-- Skills Section (Medium) -->
      <div id="skills" v-if="skillsData" class="md:col-span-2 scroll-mt-28">
        <SkillsGrid :page="skillsData" />
      </div>

      <!-- Experience Section (Medium) -->
      <div id="experience" v-if="experienceData" class="md:col-span-2 scroll-mt-28">
        <ExperienceTimeline :page="experienceData" />
      </div>

      <!-- Education & Achievements (Small/Medium) -->
      <GlassCard 
        v-if="educationData || achievementsData" 
        class="md:col-span-2 scroll-mt-28"
        :title="educationData?.title || achievementsData?.title"
        icon="i-heroicons-academic-cap"
        :hoverable="true"
      >
        <div class="space-y-6">
          <div v-if="educationData" class="space-y-4">
            <div v-for="(edu, index) in educationData.items" :key="index" class="border-l-2 border-indigo-500/20 pl-4">
              <h4 class="font-bold text-slate-900 dark:text-white">{{ edu.degree }}</h4>
              <p class="text-sm text-indigo-500 font-medium">{{ edu.institution }}</p>
              <p class="text-xs text-slate-500 mt-1">{{ edu.date }} • {{ locale === 'id' ? 'IPK' : 'GPA' }}: {{ edu.gpa }}</p>
            </div>
          </div>
          <div v-if="achievementsData" class="pt-4 border-t border-slate-200 dark:border-white/10">
            <h4 class="font-bold text-slate-900 dark:text-white mb-3">{{ achievementsData.title }}</h4>
            <ul class="space-y-2">
              <li v-for="(achievement, index) in achievementsData.items" :key="index" class="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                <UIcon name="i-heroicons-trophy" class="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </GlassCard>

      <!-- Contact Section (Small/Full) -->
      <GlassCard 
        id="contact"
        v-if="contactData" 
        class="md:col-span-6 lg:col-span-2 lg:col-start-5"
        :title="contactData.title"
        icon="i-heroicons-chat-bubble-left-right"
        :hoverable="true"
      >
        <div class="flex flex-col gap-4">
          <a :href="'mailto:' + contactData.email" class="p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors flex items-center gap-3">
             <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-indigo-500" />
             <span class="text-sm font-medium truncate">{{ contactData.email }}</span>
          </a>
          <a :href="contactData.linkedin" target="_blank" class="p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-colors flex items-center gap-3">
             <UIcon name="i-bx-bxl-linkedin-square" class="w-5 h-5 text-blue-500" />
             <span class="text-sm font-medium">{{ locale === 'id' ? 'Profil LinkedIn' : 'LinkedIn Profile' }}</span>
          </a>
          <div class="p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-3">
             <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-rose-500" />
             <span class="text-sm font-medium text-slate-600 dark:text-slate-400">{{ contactData.location }}</span>
          </div>
        </div>
      </GlassCard>
    </div>
  </div>
</template>
