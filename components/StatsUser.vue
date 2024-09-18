<template>
  <div class="stats">
    <div class="stats__content">
      <div class="stats__line">
        <div class="line__username">
          <h1>Username</h1>
          <h2>Tag user</h2>
        </div>
        <div class="line__club">
          <h1>Club user</h1>
          <h2>Tag Club</h2>
        </div>
        <div class="line__trophies">
          <h1>Now trophies</h1>
          <h2>High trophies</h2>
        </div>
      </div>
      <div class="stats__win">
        <h2>solo win</h2>
        <h2>duo win</h2>
        <h2>3v3 win</h2>
      </div>
      <div class="stats__brawlers">
        <div class="brawler">
          <div class="main-info__brawler">
            <h2>Name brawler</h2>
            <h2>rank</h2>
          </div>
          <div class="trophies-info__brawler">
            <h2>Now trophies</h2>
            <h2>Max trophies</h2>
          </div>
        </div>
        <div class="brawler">
          <div class="main-info__brawler">
            <h2>Name brawler</h2>
            <h2>rank</h2>
          </div>
          <div class="trophies-info__brawler">
            <h2>Now trophies</h2>
            <h2>Max trophies</h2>
          </div>
        </div>

        <div class="brawler">
          <div class="main-info__brawler">
            <h2>Name brawler</h2>
            <h2>rank</h2>
          </div>
          <div class="trophies-info__brawler">
            <h2>Now trophies</h2>
            <h2>Max trophies</h2>
          </div>
        </div>        <div class="brawler">
        <div class="main-info__brawler">
          <h2>Name brawler</h2>
          <h2>rank</h2>
        </div>
        <div class="trophies-info__brawler">
          <h2>Now trophies</h2>
          <h2>Max trophies</h2>
        </div>
      </div>        <div class="brawler">
        <div class="main-info__brawler">
          <h2>Name brawler</h2>
          <h2>rank</h2>
        </div>
        <div class="trophies-info__brawler">
          <h2>Now trophies</h2>
          <h2>Max trophies</h2>
        </div>
      </div>        <div class="brawler">
        <div class="main-info__brawler">
          <h2>Name brawler</h2>
          <h2>rank</h2>
        </div>
        <div class="trophies-info__brawler">
          <h2>Now trophies</h2>
          <h2>Max trophies</h2>
        </div>
      </div>        <div class="brawler">
        <div class="main-info__brawler">
          <h2>Name brawler</h2>
          <h2>rank</h2>
        </div>
        <div class="trophies-info__brawler">
          <h2>Now trophies</h2>
          <h2>Max trophies</h2>
        </div>
      </div>        <div class="brawler">
        <div class="main-info__brawler">
          <h2>Name brawler</h2>
          <h2>rank</h2>
        </div>
        <div class="trophies-info__brawler">
          <h2>Now trophies</h2>
          <h2>Max trophies</h2>
        </div>
      </div>        <div class="brawler">
        <div class="main-info__brawler">
          <h2>Name brawler</h2>
          <h2>rank</h2>
        </div>
        <div class="trophies-info__brawler">
          <h2>Now trophies</h2>
          <h2>Max trophies</h2>
        </div>
      </div>        <div class="brawler">
        <div class="main-info__brawler">
          <h2>Name brawler</h2>
          <h2>rank</h2>
        </div>
        <div class="trophies-info__brawler">
          <h2>Now trophies</h2>
          <h2>Max trophies</h2>
        </div>
      </div>








      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Todo: adaptive for this skeleton
</script>

<style scoped>
.stats {
  display: flex;
  justify-content: center;
}

.stats__content {
  min-width: 800px;
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
</style>