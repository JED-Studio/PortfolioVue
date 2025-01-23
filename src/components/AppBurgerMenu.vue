<template>
  <div class="portfolio__burger">
    <div class="portfolio__icon-20"></div>
    <div class="portfolio__icon-60"></div>
    <div class="portfolio__icon-100"></div>
  </div>
</template>

<style>
.portfolio__icon-20 {
  width: 10px;
  height: 2px;
  background-color: var(--text-color);
  margin-bottom: 7px;
  transition: width 0.5s ease;
}

.portfolio__icon-60 {
  width: 20px;
  height: 2px;
  background-color: var(--text-color);
  transition: width 0.5s ease;
}

.portfolio__icon-100 {
  width: 30px;
  height: 2px;
  background-color: var(--text-color);
  margin-top: 7px;
}
.portfolio__burger {
  cursor: pointer;
  max-width: 30px;
  width: 100%;
}

.portfolio__burger:hover .portfolio__icon-20,
.portfolio__burger:hover .portfolio__icon-60,
.portfolio__burger:hover .portfolio__icon-100 {
  background-color: var(--text-color);
  width: 30px;
}
</style>
