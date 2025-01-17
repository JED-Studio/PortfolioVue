<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import AppButton from './AppButton.vue'
import AppCard from './AppCard.vue'
import { cards } from '../cards/cards.js'

export default defineComponent({
  components: {
    AppButton,
    AppCard,
  },
  setup() {
    const selectedCardId = ref(1)
    const cardsList = ref(cards)

    const filteredCards = computed(() => {
      return cardsList.value.filter((card) => card.cardId === selectedCardId.value)
    })

    onMounted(() => {
      const savedCardId = localStorage.getItem('selectedCardId')
      if (savedCardId) {
        selectedCardId.value = Number(savedCardId)
      }
      console.log(savedCardId)
    })
    const toggleId = (id) => {
      selectedCardId.value = id
      localStorage.setItem('selectedCardId', id)
    }

    return {
      filteredCards,
      toggleId,
      cardsList,
    }
  },
})
</script>

<template>
  <div>
    <div class="portfolio__work-button">
      <AppButton @toggleId="toggleId" />
    </div>
    <div class="portfolio__work-grid">
      <AppCard
        v-for="card in filteredCards"
        :key="card.cardId"
        :title="card.title"
        :name="card.name"
        :description="card.description"
        :stack="card.stack"
        :tools="card.tools"
        :image="card.image"
        :url="card.url"
      />
    </div>
  </div>
</template>

<style>
.portfolio__work-button {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.portfolio__work-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .portfolio__work-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
