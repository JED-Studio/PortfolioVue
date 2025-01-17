<script>
import { computed, defineComponent, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const lang = ref(false)
    const i18n = useI18n({ useScope: 'global' })
    const currentLocale = ref(localStorage.getItem('locale') || 'Ru')
    i18n.locale.value = currentLocale.value
    const toggleLang = () => {
      lang.value = !lang.value
    }

    const switchLanguage = (language) => {
      i18n.locale.value = language
      currentLocale.value = language
      localStorage.setItem('local', language)
    }

    const flag = computed(() => {
      return currentLocale.value === 'Ru'
        ? '/public/svg/russia.svg'
        : '/public/svg/united_kingdom.svg'
    })

    return {
      lang,
      toggleLang,
      switchLanguage,
      currentLocale,
      flag,
    }
  },
})
</script>

<template>
  <div class="portfolio__language">
    <div class="portfolio__global-language" @click="toggleLang()">
      <img class="portfolio__img-lang" :src="flag" alt="" />
      <p class="portfolio__item-lang">{{ currentLocale.toUpperCase() }}</p>
      <img
        class="portfolio__img-arrow"
        src="/public/svg/icon.svg"
        :class="{ 'portfolio__img-arrow--active': lang }"
        alt=""
      />
    </div>

    <div v-show="lang" class="portfolio__block">
      <div @click="switchLanguage('Ru')">
        <div class="portfolio__block-language">
          <img class="portfolio__img-lang" src="/public/svg/russia.svg" alt="" />
          <p class="portfolio__item-lang">RU</p>
        </div>
      </div>

      <div @click="switchLanguage('En')">
        <div class="portfolio__block-language">
          <img class="portfolio__img-lang" src="/public/svg/united_kingdom.svg" alt="" />
          <p class="portfolio__item-lang">EN</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.portfolio__language {
  position: relative;
}

.portfolio__global-language {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 5px;
}

.portfolio__block {
  position: absolute;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px #080808;
}

.portfolio__block-language {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
}

.portfolio__img-lang {
  width: 30px;
  height: 30px;
}

.portfolio__img-arrow {
  width: 20px;
  height: 20px;
  transform: rotate(0deg);
  transition: transform 0.3s;
}

.portfolio__img-arrow--active {
  transform: rotate(180deg);
}

.portfolio__item-lang {
  color: var(--text-color);
}
</style>
