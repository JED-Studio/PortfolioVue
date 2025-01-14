<script>
import { defineComponent } from 'vue'

import Icon from './icons/Icon.vue'
import IconLogo from './icons/Iconlogo.vue'

export default defineComponent({
  components: {
    IconLogo,
    Icon,
  },
  emits: ['toggleId'],
  setup(props, { emit }) {
    const toggleId = (id) => {
      emit('toggleId', id)
    }

    return {
      toggleId,
    }
  },
})
</script>

<template>
  <div class="portfolio__button" @click="toggleId(1)">Верстка <Icon /></div>
  <div class="portfolio__button" @click="toggleId(2)">Vue / JS <IconLogo /></div>
</template>

<style>
.portfolio__button {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  border: 1px solid rgb(127, 90, 240);
  padding: 12px 16px;
  border-radius: 0.25rem;
  color: rgb(127, 90, 240);
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    fill 0.2s linear;
}
</style>
