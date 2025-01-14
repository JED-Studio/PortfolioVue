<script>
import { defineComponent, ref } from 'vue'
import AppCardButton from './AppCardButton.vue'

export default defineComponent({
  components: {
    AppCardButton,
  },
  props: {
    title: String,
    image: String,
    name: String,
    description: String,
    stack: String,
    tools: Array,
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <div class="portfolio__card">
    <div>
      <span>{{ $t(title) }}</span>
      <img :src="image" alt="" />
    </div>
    <div class="portfolio__card-block">
      <h3>{{ $t(name) }}</h3>
      <p>{{ $t(description) }}</p>
      <div class="portfolio__card-line"></div>
      <h4>{{ $t(stack) }}</h4>
      <ul class="portfolio__stack">
        <li v-for="tool in tools" :key="tool" style="display: list-item">
          <span>{{ tool }}</span>
        </li>
      </ul>
      <div class="portfolio__card-button">
        <AppCardButton />
      </div>
    </div>
  </div>
</template>

<style>
.portfolio__card {
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: var(--background-color-primary);
  overflow: hidden;
}

.portfolio__card-block {
  padding: 1.5rem;
}

.portfolio__card-block > h3,
h4 {
  font-weight: 900;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
}

.portfolio__card-line {
  margin: 1.25rem 0;
  background-color: #7f5af0;
  padding: 1px;
}

.portfolio__stack {
  list-style: square inside;
}

.portfolio__card-button {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
}
</style>
