<template>
  <div class="portfolio__experienceContent">
    <h2>{{ $t('AppExperience.experienceTitle') }}</h2>
    <div class="flex gap-4">
      <div>
        <img src="" alt="" width="80px" />
      </div>

      <div>
        <h3>{{ $t('AppExperience.experiencePosition') }}</h3>

        <div class="portfolio__work-history">
          <p>
            {{ $t('AppExperience.experienceTime') }}
          </p>
          <p>
            {{ $t('AppExperience.experienceDate') }}
          </p>
          <p>
            {{ $t('AppExperience.experienceLocation') }}
          </p>
        </div>

        <ul class="portfolio__web-enhancer">
          <li>-{{ $t('AppExperience.experienceDoing') }};</li>
          <li>-{{ $t('AppExperience.experienceDoing1') }};</li>
          <li>-{{ $t('AppExperience.experienceDoing2') }};</li>
          <li>-{{ $t('AppExperience.experienceDoing3') }};</li>
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
        <h4>{{ $t('AppExperience.experienceStack') }}:</h4>

        <ul class="portfolio__stack">
          <li>• HTML5</li>
          <li>• CSS 3</li>
          <li>• SCSS</li>
          <li>• Less</li>
          <li>• JavaScript</li>
          <li>• VUE</li>
        </ul>
        <h4>{{ $t('AppExperience.experienceTools') }}:</h4>

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
.portfolio__work-history {
  padding: 0.5rem 0;
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
