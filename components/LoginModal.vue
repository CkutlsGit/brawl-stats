<template>
  <div class="modal font-default">
    <div class="modal__content">
      <div class="modal__line">
        <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
      </div>
      <div class="input-tag__content">
        <h2>#</h2>
        <input type="text" placeholder="YOUR TAG" maxlength="15" v-model="tagUser">
      </div>
      <div class="input-button__content">
        <button @click="submitTag">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['closeLoginModal'])
  const elements = ['header', 'main', 'footer'].map(tag => document.querySelector(tag) as HTMLElement | null)

  const tagUser = ref('')

  function setStyled(opacity: string = 'unset', pointerEvents: string = 'unset'): void {
    elements.forEach(elem => {
      if (elem) {
        elem.style.opacity = opacity
        elem.style.pointerEvents = pointerEvents
      }
    })
  }

  function closeModal(): void {
    emit('closeLoginModal')
  }

  function submitTag(): void {
    if (tagUser.value.length < 8) {
      alert('Символов в тэге должно быть 8 или больше')
      return
    }
    setcookie('userTag', tagUser.value)
    emit('closeLoginModal')  //Todo: Make sure that the api is sent to brave stars so that it searches for this user tag, and not just any one. + the sending interval is 30 seconds so that without loading someone else's API (to avoid being banned for a while from the api).
  }

  onMounted((): void => {
    setStyled('0.5', 'none')

    if (getcookie('userTag')) {
      tagUser.value = getcookie('userTag') ?? ''
    }
  })
  onUnmounted(() => setStyled())
</script>

<style scoped>
input {
  all: unset;
}

.modal {
  position: absolute;
  top: 20%;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
}

.modal__content {
  background: var(--lightest-main-color);
  width: 400px;
  height: 200px;
  border-radius: 15px;
  padding: 16px;
}

.modal__line {
  display: flex;
  justify-content: right;
}
.modal__line svg {
  cursor: pointer;
  transition: .2s ease-in;
}
.modal__line svg:hover {
  padding: 2px;
}

.input-tag__content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.input-club__content input, .input-tag__content input {
  width: 160px;
  height: 20px;
  border: 2px solid var(--darkest-main-color);
  font-size: 16px;
  text-transform: uppercase;
}
.input-club__content h2, .input-tag__content h2 {
  background: var(--darkest-main-color);
  height: 24px;
  width: 25px;
  text-align: center;
  padding-top: 5px;
}

.input-button__content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.input-button__content button {
  width: 120px;
  height: 30px;
  cursor: pointer;
  background: var(--main-color);
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  font-family: 'Lilita One', sans-serif;
  transition: .2s ease-in;
}
.input-button__content button:hover {
  background: #003994;
}

@media not all and (min-width: 640px) {
  .modal__content {
    width: 300px;
  }
}
</style>