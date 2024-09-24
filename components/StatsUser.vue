<template>
  <div v-if="Object.keys(userData).length" class="stats">
    <div class="stats__content">
      <div class="stats__line">
        <div class="line__username">
          <h1>{{ userData.name }}</h1>
          <h2>{{ userData.tag }}</h2>
        </div>
        <div class="line__club">
          <h1>{{ userData.club.tag }}</h1>
          <h2>{{ userData.club.name }}</h2>
        </div>
        <div class="line__trophies">
          <h1>{{ userData.trophies }}</h1>
          <h2>{{ userData.highestTrophies }}</h2>
        </div>
      </div>
      <div class="stats__win">
        <h2>{{ userData.soloVictories }}</h2>
        <h2>{{ userData.duoVictories }}</h2>
      </div>
      <ul class="stats__brawlers">
        <li v-for="(brawler, index) in userData.brawlers" :key="index" class="brawler">
          <div class="main-info__brawler">
            <h2>{{ brawler.name }}</h2>
            <h2>{{ brawler.rank }}</h2>
          </div>
          <div class="trophies-info__brawler">
            <h2>{{ brawler.trophies }}</h2>
            <h2>{{ brawler.highestTrophies }}</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { $bus }: any = useNuxtApp()

  let userData = ref({})

  onMounted(() => {
    $bus.on('sendDataUser', (data: object) => {
      userData.value = data
    })
  })
</script>

<style scoped>
.stats {
  display: flex;
  justify-content: center;
}

.stats__content {
  min-width: 60%;
  max-width: 60%;
  min-height: 400px;
  padding: 26px;
  background: var(--lightest-main-color);
  border-radius: 15px;
}

.stats__line {
  display: flex;
  gap: 0 36px;
}

.stats__win {
  display: flex;
  gap: 0 46px;
  margin-top: 20px;
}

.stats__brawlers {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.brawler {
  width: 15%;
}
.brawler .main-info__brawler {
  display: flex;
  gap: 0 6px;
}
.brawler .trophies-info__brawler {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

@media not all and (min-width: 1280px) {
  .stats__content {
    min-width: 100%;
  }
  .brawler {
    width: 100px;
  }
}
</style>