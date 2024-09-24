<template>
  <main class="main">
    <article class="main__content">
      <div class="main__header">
        <div class="main__header--content font-default">
          <NuxtLink to="/about-the-web">
            <h2>About the web</h2>
          </NuxtLink>
          <NuxtLink to="/api">
            <h2>API</h2>
          </NuxtLink>
        </div>
      </div>
      <div class="main__section">
        <div class="main__section--content font-default">
          <h1>search section</h1>
          <div class="main__section--content__inputs">
            <div class="input-tag">
              <div class="input-tag__content">
                <h2>#</h2>
                <input @keyup.enter="sendUserTag" v-model="tagUser" type="text" placeholder="YOUR TAG" maxlength="15">
              </div>
              <div class="input-tag__button">
                <a href="https://support.supercell.com/brawl-stars/en/articles/player-tag.html" class="tag-support" target="_blank">Where is my TAG</a>
              </div>
            </div>
            <div class="input-club">
              <div class="input-club__content">
                <h2>#</h2>
                <input type="text" placeholder="CLUB TAG" maxlength="15">
              </div>
              <div class="input-tag__button">
                <a href="https://support.supercell.com/brawl-stars/ru/articles/creating-or-joining-a-club-3.html?q=1726152622" class="tag-support" target="_blank">Where is TAG club</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
  <stats-user v-show="isVisibleStatsBlock"/>
</template>

<script setup lang="ts">
  const { $bus }: any = useNuxtApp()

  const tagUser = ref('')
  const isVisibleStatsBlock = ref(false)

  async function sendUserTag() {
    if (tagUser.value.length < 8) {
      alert('Символов в тэге должно быть 8 или больше')
      return
    }

    const response = await $fetch('/api/user/stats-tag', {
      method: 'POST',
      body: JSON.stringify({ userTag: tagUser.value })
    })

    if (response == 'notFound') {
      alert('Пользователь с таким тэгом не найден') //Todo: make a layout for an error
      // Todo: when getting the user's color, you need to remove 4 characters 0xff
      return
    }

    isVisibleStatsBlock.value = true
    $bus.emit('sendDataUser', response)
  }
</script>

<style scoped>
input {
  all: unset;
}
a {
  text-decoration: none;
}

.main {
  display: flex;
  justify-content: center;
  max-width: 1520px;
  margin: 140px auto;
}

.main__content {
  background: var(--lightest-main-color);
  border-radius: 10px;
  width: 800px;
  height: 300px;
  padding-top: 24px;
}

.main__header {
  display: flex;
  justify-content: center;
  width: 400px;
  padding: 8px 8px;
  margin: 0 auto 0 auto;
  background: var(--darkest-main-color);
  border-radius: 5px;
}

.main__header--content {
  display: flex;
  gap: 0 24px;
}
.main__header--content h2 {
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: .2s ease-in;
}
.main__header--content h2:hover {
  opacity: 60%;
}

.main__section {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.main__section--content h1 {
  font-size: 32px;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 16px;
}

.main__section--content__inputs {
  display: flex;
  gap: 0 24px;
}

.input-club__content, .input-tag__content {
  display: flex;
  align-items: center;
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

.input-tag__button {
  margin-top: 10px;
}

.input-tag .tag-support, .input-club .tag-support {
  background: var(--main-color);
  text-align: center;
  padding: 6px;
  border-radius: 20px;
  cursor: pointer;
  transition: .2s ease-in;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
}
.tag-support:hover {
  opacity: 70%;
}

@media not all and (min-width: 640px) {
  .main__header {
    width: 200px;
  }
  .main__header--content h2 {
    font-size: 18px;
  }
  .input-club__content input, .input-tag__content input {
    width: 100px;
  }
  .input-tag .tag-support, .input-club .tag-support {
    width: 80px;
    height: 55px;
    font-size: 16px;
  }
}
</style>