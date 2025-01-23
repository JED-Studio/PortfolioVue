<script>
import { defineComponent, ref } from 'vue'
import AppCardButton from './AppCardButton.vue'

export default defineComponent({
  components: {
    AppCardButton,
  },
  props: {
    image: String,
    name: String,
    description: String,
    stack: String,
    tools: Array,
    urlGit: String,
    urlWeb: String,
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <div class="portfolio__card">
    <div class="portfolio__card-image">
      <img :src="image" alt="" />
    </div>
    <div class="portfolio__card-block">
      <h3>{{ $t(name) }}</h3>
      <p>{{ $t(description) }}</p>
      <div class="portfolio__card-line"></div>
      <h4>{{ $t(stack) }}</h4>
      <ul class="portfolio__card-stack">
        <li
          v-for="tool in tools"
          :key="tool"
          class="portfolio__card-stack-item"
          style="display: list-item"
        >
          <span>{{ tool }}</span>
        </li>
      </ul>
      <div class="portfolio__card-button">
        <AppCardButton :urlGit="urlGit" :urlWeb="urlWeb" />
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
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s linear;
}

.portfolio__card-image > img {
  object-fit: cover;
  height: 400px;
}

.portfolio__card-block {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--text-color);
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

.portfolio__card-stack {
  list-style: square inside;
  margin-bottom: 40px;
}

.portfolio__card-button {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
}

.portfolio__card-stack-item::marker {
  color: #7f5af0;
}

@media (max-width: 768px) {
  .portfolio__card-image > img {
    height: 100%;
    width: 100%;
  }
}
</style>
