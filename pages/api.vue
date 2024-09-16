<template>
  <main class="main">
    <article class="main__content font-default">
      <div class="main__text">
        <div class="text-title">
          <h1>API</h1>
        </div>
        <p>Brawl Stars API - <span><a href="https://developer.brawlstars.com" target="_blank">https://developer.brawlstars.com</a></span></p>
        <p>API Geticon Brawl Stars - <span><a href="https://github.com/CkutlsGit/api-geticon-brawl-stars" target="_blank">https://github.com/CkutlsGit/api-geticon-brawl-stars</a></span></p>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
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

.text-title {
  text-align: center;
}

.main__text h1 {
  font-size: 3rem;
}
.main__text p {
  font-size: 1.5rem;
  margin: 20px;
}
.main__text a {
  margin-left: 20px;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--darkest-main-color);
  transition: .2s ease-in;
}
.main__text a:hover {
  color: var(--main-color);
}

@media not all and (min-width: 640px) {
  .main__text h1 {
    font-size: 2.5rem;
  }
  .main__text p {
    font-size: 1.4rem;
    margin: 10px 10px 30px 10px;
  }
}
</style>