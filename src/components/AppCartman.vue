<template>
  <div class="image-container">
    <img :src="currentImage" alt="360 view" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const images = [
      '/public/cartm/0001.png',
      '/public/cartm/0002.png',
      '/public/cartm/0003.png',
      '/public/cartm/0004.png',
      '/public/cartm/0005.png',
      '/public/cartm/0006.png',
      '/public/cartm/0007.png',
      '/public/cartm/0008.png',
      '/public/cartm/0009.png',
      '/public/cartm/0010.png',
      '/public/cartm/0011.png',
      '/public/cartm/0012.png',
      '/public/cartm/0013.png',
      '/public/cartm/0014.png',
      '/public/cartm/0015.png',
      '/public/cartm/0016.png',
      '/public/cartm/0017.png',
      '/public/cartm/0018.png',
      '/public/cartm/0019.png',
      '/public/cartm/0020.png',
      '/public/cartm/0021.png',
      '/public/cartm/0022.png',
      '/public/cartm/0023.png',
      '/public/cartm/0024.png',
      '/public/cartm/0025.png',
      '/public/cartm/0026.png',
      '/public/cartm/0027.png',
      '/public/cartm/0028.png',
      '/public/cartm/0029.png',
      '/public/cartm/0030.png',
    ]

    const currentImage = ref(images[0]) // начальное изображение

    const changeImage = (event) => {
      const container = document.querySelector('.image-container')
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const cursorX = event.clientX
      const cursorY = event.clientY

      const angle = Math.atan2(cursorY - centerY, cursorX - centerX)
      const index = Math.floor(((angle + Math.PI) / (2 * Math.PI)) * images.length) % images.length
      currentImage.value = images[index]
    }

    onMounted(() => {
      window.addEventListener('mousemove', changeImage)
    })

    onUnmounted(() => {
      window.removeEventListener('mousemove', changeImage)
    })

    return {
      currentImage,
    }
  },
}
</script>

<style scoped>
.image-container {
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
  margin: 0 auto;
}

.image-container img {
  width: 100%;
  height: auto;
}
</style>
