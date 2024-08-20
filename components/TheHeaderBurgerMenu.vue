<template>
  <div class="menu__content">
    <button :class="{ 'changed-pos-btn': isOpen }" @click="isOpen = !isOpen">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px"><defs><linearGradient x1="12.373" y1="0.373" x2="34.611" y2="22.611" gradientUnits="userSpaceOnUse" id="color-1"><stop offset="0" stop-color="#ffffff"></stop><stop offset="1" stop-color="#ffffff"></stop></linearGradient><linearGradient x1="12.373" y1="12.373" x2="34.611" y2="34.611" gradientUnits="userSpaceOnUse" id="color-2"><stop offset="0" stop-color="#ffffff"></stop><stop offset="1" stop-color="#ffffff"></stop></linearGradient><linearGradient x1="12.373" y1="24.373" x2="34.611" y2="46.611" gradientUnits="userSpaceOnUse" id="color-3"><stop offset="0" stop-color="#ffffff"></stop><stop offset="1" stop-color="#ffffff"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M42,15h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z" fill="url(#color-1)"></path><path d="M42,27h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z" fill="url(#color-2)"></path><path d="M42,39h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z" fill="url(#color-3)"></path></g></g></svg>
    </button>
  </div>

  <nav v-if="isOpen" class="overlay-menu__visible open-menu">
    <div class="overlay__content font-default">
      <a href="">Search player</a>
      <a href="">Search club</a>
      <a href="">About the web</a>
      <a href="">API</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const isOpen = ref(false)
</script>

<style scoped>
.menu__content {
  margin-top: 10px;
}

.menu__content button {
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 140px;
  transition: all .1s ease-in;
}

.changed-pos-btn {
  position: absolute;
  top: 20px !important;
  right: 0;
}

.open-menu {
  background: var(--darkest-main-color);
  width: 100%;
  height: 100%;
}

button{
  cursor: pointer;
  background: transparent;
  border: none;
}
button:focus{
  outline: none;
  border: none;
}

.overlay-menu__visible {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.overlay__content {
  margin-top: 20%;
}

.overlay__content a {
  margin-top: 40px;
  font-size: 3rem;
  color: #fff;
  text-decoration: none;
}

.overlay-menu__visible a {
  display: flex;
  justify-content: center;
}
</style>