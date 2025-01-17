<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    urlGit: String,
    urlWeb: String,
  },
  setup() {},
})
</script>

<template>
  <a :href="urlGit">
    <img width="24" height="24" src="/public/svg/github-icon.svg" alt="" />
    <span class="">{{ $t('AppCardButton.buttonGitHub') }}</span>
  </a>
  <a :href="urlWeb">
    <img width="24" height="24" src="/public/svg/external-icon.svg" alt="" />
    <span class="">{{ $t('AppCardButton.buttonWeb') }}</span>
  </a>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  color: white;
  background-color: #7f5af0;
}
</style>
