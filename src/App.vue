<script>
import { defineComponent } from 'vue'
import AppLanguage from './components/AppLanguage.vue'
import AppSwitch from './components/AppSwitch.vue'
import Profile from './components/Profile.vue'
import AppProfile from './components/AppProfile.vue'
import AppAboutMe from './components/AppAboutMe.vue'

export default defineComponent({
  components: {
    AppLanguage,
    AppSwitch,
    Profile,
    AppProfile,
    AppAboutMe,
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
          <Profile />
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
        <div class="portfolio__about-me-block">
          <AppAboutMe />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
