<template>
  <div class="modal">
    <div class="modal__content">
      <h1>ZET</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
  const elements = ['header', 'main', 'footer'].map(tag => document.querySelector(tag))

  function setStyled(opacity: string = 'unset', pointerEvents: string = 'unset') {
    elements.forEach(elem => {
      if (elem) {
        elem.style.opacity = opacity
        elem.style.pointerEvents = pointerEvents
      }
    })
  }

  onMounted(() => setStyled('0.5', 'none'))
  onUnmounted(() => setStyled())
</script>

<style scoped>
.modal {
  position: absolute;
  top: 20%;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
}

.modal__content {
  background: var(--darkest-main-color);
  width: 400px;
  height: 200px;
  border-radius: 15px;
  padding: 16px;
}
</style>