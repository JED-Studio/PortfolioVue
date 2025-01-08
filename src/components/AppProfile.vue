<template>
  <div class="portfolio__profile-title">
    <h2>{{ $t('AppProfile.hello') }}</h2>
    <p>Будем знакомы</p>
  </div>
  <div class="portfolio__profile-img">
    <img src="/public/svg/developer.svg" alt="" />
  </div>
</template>

<style>
.portfolio__profile-title {
  flex: 50%;
}

.portfolio__profile-title > h2 {
  margin-bottom: 16px;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 900;
}

.portfolio__profile-title > p {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
}

.portfolio__profile-img {
  flex: 50%;
}

.portfolio__profile-img > img {
  width: 100%;
  height: 100%;
}
</style>
