<template>
  <div class="portfolio__my-skills-content" style="color: var(--background-color-luna)">
    <h2>{{ $t('AppSkills.skills') }}</h2>

    <div class="portfolio__my-skills-grid">
      <ul class="grid gap-12 py-4 grid-cols-4">
        <li>
          <img src="/public/svg/html.svg" alt="" />
          <p>HTML5</p>
        </li>
        <li>
          <img src="/public/svg/css.svg" alt="" />
          <p>CSS3</p>
        </li>
        <li>
          <img src="/public/svg/scss.svg" alt="" />
          <p>SCSS</p>
        </li>
        <li>
          <img src="/public/svg/js.svg" alt="" />
          <p>JavaSccript</p>
        </li>
        <li>
          <img src="/public/svg/ts.svg" alt="" />
          <p>TypeScript</p>
        </li>
        <li>
          <img src="/public/svg/vue-svgrepo-com.svg" alt="" />
          <p>VUE</p>
        </li>
        <li>
          <img src="/public/svg/nuxt-svgrepo-com.svg" alt="" />
          <p>Nuxt</p>
        </li>
        <li>
          <img src="" alt="" />
          <p></p>
        </li>
      </ul>

      <h2>{{ $t('AppSkills.skillsTools') }}:</h2>

      <ul class="job_responsibilities grid gap-12 py-4 grid-cols-4">
        <li>
          <img src="/public/svg/vscode (1).svg" alt="" />
          <p>VS code</p>
        </li>
        <li>
          <img src="/public/svg/webpack (1).svg" alt="" />
          <p>Webpack</p>
        </li>
        <li>
          <img src="/public/svg/git (1).svg" alt="" />
          <p>Git</p>
        </li>
        <li>
          <img src="/public/svg/vite-svgrepo-com.svg" alt="" />
          <p>Vite</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.portfolio__my-skills-content > h2 {
  text-align: center;
  margin-bottom: 32px;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
}

.portfolio__my-skills-grid > h2 {
  margin-bottom: 32px;
  font-size: clamp(1.5rem, 4vw, 2rem);
}

img {
  width: 48px;
  height: 48px;
  text-align: center;
}

li {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
</style>
