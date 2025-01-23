<template>
  <div class="portfolio__social-flex">
    <div><a href="">Github</a></div>
    <div><a href="">Telegram</a></div>
    <div><a href="">VKontakte</a></div>
  </div>
</template>

<style>
.portfolio__social-flex {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.portfolio__social-flex > div {
  position: relative;
  width: 100%;
  max-width: 108px;
  text-align: center;
  padding: 12px 16px;

  color: rgb(127, 90, 240);
}

.portfolio__social-flex > div::after {
  content: '';
  position: absolute;
  z-index: -2;

  width: 100%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: #7f5af0;
  transition: all ease 0.3s;
}

.portfolio__social-flex > div:hover::after {
  height: 100%;
}

.portfolio__social-flex > div:hover {
  color: white;
}
</style>
