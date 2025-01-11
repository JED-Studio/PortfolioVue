<script>
import { defineComponent, ref } from 'vue'
import AppLanguage from './components/AppLanguage.vue'
import AppSwitch from './components/AppSwitch.vue'
import AppProfile from './components/AppProfile.vue'
import AppAboutMe from './components/AppAboutMe.vue'
import AppExperience from './components/AppExperience.vue'
import AppCartman from './components/AppCartman.vue'
import AppSkills from './components/AppSkills.vue'

export default defineComponent({
  components: {
    AppLanguage,
    AppSwitch,
    AppExperience,
    AppProfile,
    AppAboutMe,

    AppSkills,
  },

  setup() {},
})
</script>

<template>
  <div class="portfolio">
    <header class="header">
      <div class="portfolio__container max-w-7xl mx-auto pl-4 pr-4">
        <div class="flex justify-end gap-6 py-4">
          <AppSwitch />
          <AppLanguage />
        </div>
      </div>
    </header>
    <div class="portfolio__profile">
      <div class="portfolio__container max-w-7xl mx-auto pl-4 pr-4">
        <div class="portfolio__profile-block flex items-center justify-center gap-6 py-4">
          <AppProfile />
        </div>
      </div>
    </div>
    <div class="portfolio__about-me">
      <div class="portfolio__container max-w-7xl mx-auto pl-4 pr-4">
        <div class="portfolio__about-me-block py-4">
          <AppAboutMe />
        </div>
      </div>
    </div>
    <div class="portfolio__experience">
      <div class="portfolio__container max-w-7xl mx-auto pl-4 pr-4">
        <div class="portfolio__experience-block py-4">
          <AppExperience />
        </div>
      </div>
    </div>
    <div class="portfolio__my-skills">
      <div class="portfolio__container max-w-7xl mx-auto pl-4 pr-4">
        <div class="portfolio__my-skills-block py-4">
          <AppSkills />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
