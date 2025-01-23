<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
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

    const closeBar = () => {
      sideBar.value = false
    }

    const handleClickOutside = (event) => {
      const sidebarElement = document.querySelector('.portfolio__navigation')
      const openButtonElement = document.querySelector('.portfolio__navigation-button-open')

      if (
        sidebarElement &&
        !sidebarElement.contains(event.target) &&
        !openButtonElement.contains(event.target)
      ) {
        closeBar()
      }
    }

    onMounted(() => {
      document.addEventListener('mousedown', handleClickOutside)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', handleClickOutside)
    })

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
      <a href="#portfolio__profile">{{ $t('AppNavigation.profile') }}</a>
      <a href="#portfolio__about-me">{{ $t('AppNavigation.aboutMe') }}</a>
      <a href="#portfolio__experience">{{ $t('AppNavigation.experience') }}</a>
      <a href="#portfolio__my-skills">{{ $t('AppNavigation.skills') }}</a>
      <a href="#portfolio__work">{{ $t('AppNavigation.work') }}</a>
      <a href="#portfolio__social">{{ $t('AppNavigation.contacts') }}</a>
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
  cursor: pointer;
  color: var(--text-color);
  margin-right: 15px;
}

@media (max-width: 768px) {
  .portfolio__navigation {
    padding: 20px;
    display: block;
    position: fixed;
    width: 300px;
    top: 0;
    left: -300px;
    z-index: 120;
    height: 100%;
    background-color: var(--background-color-primary);
    box-shadow: 0px 0px 5px 0px black;
    transition:
      left 0.5s ease,
      background-color 0.2s linear;
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

    border-radius: 4px;
    margin-right: 0;
    transition: background-color 0.2s linear;
  }

  .portfolio__navigation-list > a:hover {
    color: var(--text-color-hover);
    background-color: var(--background-color-hover);
  }

  .bi-x-lg {
    color: var(--background-color-hover);
    cursor: pointer;
  }
}
</style>
