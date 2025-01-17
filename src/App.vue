<script>
import { defineComponent, ref } from 'vue'
import AppLanguage from './components/AppLanguage.vue'
import AppSwitch from './components/AppSwitch.vue'
import AppProfile from './components/AppProfile.vue'
import AppAboutMe from './components/AppAboutMe.vue'
import AppExperience from './components/AppExperience.vue'
import AppCartman from './components/AppCartman.vue'
import AppSkills from './components/AppSkills.vue'
import AppWork from './components/AppWork.vue'
import AppNavigation from './components/AppNavigation.vue'

export default defineComponent({
  components: {
    AppLanguage,
    AppSwitch,
    AppExperience,
    AppProfile,
    AppAboutMe,
    AppWork,
    AppSkills,
    AppNavigation,
  },

  setup() {},
})
</script>

<template>
  <div class="portfolio">
    <header class="portfolio__header">
      <div class="portfolio__container max-w-7xl mx-auto pl-4 pr-4">
        <div class="flex justify-between items-center py-4">
          <AppNavigation />
          <div class="portfolio__header-flex flex gap-5 items-center">
            <AppSwitch />
            <AppLanguage />
          </div>
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
    <div class="portfolio__work">
      <div class="portfolio__container max-w-7xl mx-auto pl-4 pr-4">
        <div class="portfolio__work-block py-4">
          <AppWork />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
header {
  top: 0;
  position: sticky;
}

header > div {
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 0px 5px 0px black;
  background-color: var(--background-color-primary);
}

@media (max-width: 768px) {
  header {
    width: 100%;
  }
}
</style>
