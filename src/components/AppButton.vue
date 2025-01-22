<script>
import { defineComponent, ref, onMounted } from 'vue'

import Icon from './icons/Icon.vue'
import IconLogo from './icons/IconLogo.vue'

export default defineComponent({
  components: {
    IconLogo,
    Icon,
  },
  emits: ['toggleId'],
  setup(props, { emit }) {
    const toolbarId = ref(1)

    onMounted(() => {
      const savedId = localStorage.getItem('toggleId')
      if (savedId) {
        toolbarId.value = Number(savedId)
      }
    })

    const toggleId = (id) => {
      toolbarId.value = id
      emit('toggleId', id)
      localStorage.setItem('toggleId', id)
    }

    return {
      toggleId,
      toolbarId,
    }
  },
})
</script>

<template>
  <div
    class="portfolio__button"
    :class="{ 'portfolio__button--active': toolbarId === 1 }"
    @click="toggleId(1)"
  >
    Верстка <Icon class="icon" />
  </div>
  <div
    class="portfolio__button"
    :class="{ 'portfolio__button--active': toolbarId === 2 }"
    @click="toggleId(2)"
  >
    Vue / JS <IconLogo class="icon" />
  </div>
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

.portfolio__button:hover {
  background-color: rgb(127, 90, 240);
  color: white;
}

.portfolio__button:hover .icon {
  fill: white;
}

.portfolio__button--active,
.portfolio__button--active svg {
  background-color: rgb(127, 90, 240);
  fill: white;
  color: white;
}
</style>
