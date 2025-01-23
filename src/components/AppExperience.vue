<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref([
      {
        title: 'AppExperience.experienceTitle',
        position: 'AppExperience.experiencePosition',
        time: 'AppExperience.experienceTime',
        date: 'AppExperience.experienceDate',
        location: 'AppExperience.experienceLocation',
        doing: 'AppExperience.experienceDoing',
        doing1: 'AppExperience.experienceDoing1',
        doing2: 'AppExperience.experienceDoing2',
        doing3: 'AppExperience.experienceDoing3',
        stack: 'AppExperience.experienceStack',
        tools: 'AppExperience.experienceTools',
        image: '/public/svg/vecteezy.svg',
      },
      {
        title: 'AppExperience1.experienceTitle',
        position: 'AppExperience1.experiencePosition',
        time: 'AppExperience1.experienceTime',
        date: 'AppExperience1.experienceDate',
        location: 'AppExperience1.experienceLocation',
        doing: 'AppExperience1.experienceDoing',
        doing1: 'AppExperience1.experienceDoing1',
        doing2: 'AppExperience1.experienceDoing2',
        doing3: 'AppExperience1.experienceDoing3',
        stack: 'AppExperience1.experienceStack',
        tools: 'AppExperience1.experienceTools',
        image: '/public/svg/O22.svg',
      },
    ])

    return {
      items,
    }
  },
})
</script>

<template>
  <div v-for="item in items" :key="item" class="portfolio__experienceSection">
    <h2>{{ $t(item.title) }}</h2>
    <div class="flex gap-4">
      <div>
        <img :src="item.image" alt="" width="80px" />
      </div>

      <div class="portfolio__experienceContent">
        <h3>{{ $t(item.position) }}</h3>

        <div class="portfolio__work-history">
          <p>
            {{ $t(item.time) }}
          </p>
          <p>
            {{ $t(item.date) }}
          </p>
          <p>
            {{ $t(item.location) }}
          </p>
        </div>

        <ul class="portfolio__web-enhancer">
          <li>-{{ $t(item.doing) }};</li>
          <li>-{{ $t(item.doing1) }};</li>
          <li>-{{ $t(item.doing2) }};</li>
          <li>-{{ $t(item.doing3) }};</li>
        </ul>
        <!--
          <h4 class="pb-1 inline-block text-lg font-bold" style="margin-bottom: 10px;border-bottom: 2px solid #7f5af0; ">Достижения:</h4>
    
          <ul class="job_responsibilities flex flex-col gap-2 py-4">
            <li>- Вёрстка виртуальных витрин товаров и лендингов под масштабные акции;</li>
            <li>- Рефакторинг и переписывание старого кода;</li>
            <li>- Оптимизация JavaScript-кода;</li>
            <li>- Работа с внутренним API при создании проектов, связанными с товарами.</li>
          </ul>
        -->
        <h4>{{ $t(item.stack) }}:</h4>

        <ul class="portfolio__stack">
          <li>• HTML5</li>
          <li>• CSS 3</li>
          <li>• SCSS</li>
          <li>• Less</li>
          <li>• JavaScript</li>
          <li>• VUE</li>
        </ul>
        <h4>{{ $t(item.tools) }}:</h4>

        <ul class="portfolio__tools">
          <li>• VS Code</li>
          <li>• Git</li>
          <li>• Figma</li>
          <li>• Adobe Photoshop</li>
          <li>• Adobe Illustrator</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.portfolio__experienceContent > h3 {
  font-weight: 700;
  font-size: 1.25rem;
}

.portfolio__experienceContent > h4 {
  display: inline-block;
  font-size: 1.125rem;
  margin-bottom: 10px;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid rgb(127, 90, 240);
  font-weight: 700;
}

.portfolio__experienceSection {
  color: var(--text-color);
}

.portfolio__experienceSection > h2 {
  text-align: center;
  margin-bottom: 32px;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
}

.portfolio__work-history {
  padding: 0.5rem 0;
  font-size: 0.875rem;
}

.portfolio__work-history > p:not(:last-child) {
  margin-bottom: 0.5rem;
}

.portfolio__web-enhancer {
  padding: 1rem 0;
}

.portfolio__web-enhancer > li:not(:last-child) {
  margin-bottom: 0.5rem;
}

.portfolio__stack {
  padding: 1rem 0;
}

.portfolio__stack > li:not(:last-child) {
  margin-bottom: 0.5rem;
}

.portfolio__tools {
  padding: 1rem 0;
}

.portfolio__tools > li:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
