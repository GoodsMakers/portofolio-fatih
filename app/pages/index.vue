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
  <UPage>
    <!-- Hero Section -->
    <HeroSection v-if="heroData" :page="heroData" />

    <!-- About Section -->
    <UPageSection
      id="about"
      v-if="aboutData"
      :title="aboutData.title"
      :description="aboutData.description"
    >
      <div class="prose dark:prose-invert max-w-none text-center sm:text-left mx-auto">
        <MDC :value="aboutData.body" />
      </div>
    </UPageSection>

    <!-- Experience Section -->
    <ExperienceTimeline v-if="experienceData" :page="experienceData" />

    <!-- Projects Section -->
    <ProjectCards v-if="projectsData" :page="projectsData" />

    <!-- Skills Section -->
    <SkillsGrid v-if="skillsData" :page="skillsData" />

    <!-- Education, Achievements, Certifications -->
    <UPageSection>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Education -->
        <div v-if="educationData">
          <h2 class="text-2xl font-bold mb-6">{{ educationData.title }}</h2>
          <div class="space-y-6">
            <div v-for="(edu, index) in educationData.items" :key="index">
              <h3 class="font-semibold">{{ edu.degree }}</h3>
              <p class="text-sm text-primary">{{ edu.institution }}</p>
              <div class="text-xs text-gray-500 dark:text-gray-400 mt-1 flex justify-between">
                <span>{{ edu.date }}</span>
                <span>GPA: {{ edu.gpa }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements -->
        <div v-if="achievementsData">
          <h2 class="text-2xl font-bold mb-6">{{ achievementsData.title }}</h2>
          <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li v-for="(achievement, index) in achievementsData.items" :key="index">
              {{ achievement }}
            </li>
          </ul>
        </div>

        <!-- Certifications -->
        <div v-if="certificationsData">
          <h2 class="text-2xl font-bold mb-6">{{ certificationsData.title }}</h2>
          <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li v-for="(cert, index) in certificationsData.items" :key="index">
              {{ cert.name }}
            </li>
          </ul>
        </div>
      </div>
    </UPageSection>

    <!-- Contact Section -->
    <UPageSection
      id="contact"
      v-if="contactData"
      :title="contactData.title"
      :description="contactData.description"
    >
      <div class="flex flex-col items-center gap-4 text-center">
        <a :href="'mailto:' + contactData.email" class="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2">
           <UIcon name="i-heroicons-envelope" class="w-5 h-5" /> {{ contactData.email }}
        </a>
        <a :href="contactData.linkedin" target="_blank" class="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2">
           <UIcon name="i-bx-bxl-linkedin-square" class="w-5 h-5" /> LinkedIn Profile
        </a>
        <p class="text-gray-500 dark:text-gray-400 flex items-center gap-2">
           <UIcon name="i-heroicons-map-pin" class="w-5 h-5" /> {{ contactData.location }}
        </p>
      </div>
    </UPageSection>

  </UPage>
</template>
