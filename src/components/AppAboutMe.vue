<template>
  <div class="portfolio__about-me-description">
    <h2>{{ $t('AppAboutMe.aboutMe') }}</h2>
    <p>{{ $t('AppAboutMe.aboutMeDescription') }}</p>
    <p>{{ $t('AppAboutMe.aboutMeDescription1') }}</p>
    <p>{{ $t('AppAboutMe.aboutMeDescription2') }}</p>
  </div>
</template>
<style>
.portfolio__about-me-description > h2 {
  text-align: center;
  margin-bottom: 32px;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
}

.portfolio__about-me-description > p {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
}
.portfolio__about-me-description > p:not(:last-child) {
  margin-bottom: 1.25rem;
}
</style>
