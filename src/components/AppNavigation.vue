<script>
import { defineComponent, ref } from 'vue'
import AppBurgerMenu from './AppBurgerMenu.vue'

export default defineComponent({
  components: {
    AppBurgerMenu,
  },

  setup() {
    const sideBar = ref(false)
    const toggleBar = () => {
      sideBar.value = !sideBar.value
    }

    return {
      sideBar,
      toggleBar,
    }
  },
})
</script>

<template>
  <div class="portfolio__navigation-button-open" @click="toggleBar"><AppBurgerMenu /></div>
  <div class="portfolio__navigation" :class="{ 'portfolio__navigation--active': sideBar }">
    <div class="portfolio__navigation-button-close">
      <i class="bi bi-x-lg" @click="toggleBar"></i>
    </div>
    <div class="portfolio__navigation-list">
      <a>Главная</a>
      <a>Обо мне</a>
      <a>Опыт Работы</a>
      <a>Стек</a>
      <a>Портфолио</a>
    </div>
  </div>
</template>

<style>
.portfolio__navigation-button-close {
  display: none;
}

.portfolio__navigation-button-open {
  display: none;
}

.portfolio__navigation-list > a {
  color: var(--text-color);
  margin-right: 15px;
}

@media (max-width: 768px) {
  .portfolio__navigation {
    padding: 15px;
    display: block;
    position: fixed;
    width: 300px;
    top: 0;
    left: -300px;
    z-index: 120;
    height: 100%;
    background-color: var(--background-color-primary);
    box-shadow: 0px 0px 5px 0px black;
    transition: all 0.5s ease;
  }
  .portfolio__navigation-button-open {
    display: block;
  }
  .portfolio__navigation-button-close {
    display: block;
    text-align: end;
    margin-bottom: 20px;
  }

  .portfolio__navigation--active {
    left: 0;
  }

  .portfolio__navigation-list > a {
    display: block;
    padding: 5px;
    color: var(--text-color);
    margin-bottom: 10px;
    background: #4d4d4d;
    border-radius: 4px;
    margin-right: 0;
  }
}
</style>
