<template>
  <main class="main">
    <article class="main__content font-default">
      <div class="main__text">
        <h1>About the web</h1>
        <p>
          This is a site for displaying the usual statistics of a certain Player/Club by its TAG.
          The information is not confidential and is publicly available.
          It uses ITS OWN API to get hero icons.
          To get information, we use a third-party API from the official developers of Brawl Stars.
        </p>
        <a href="https://github.com/CkutlsGit/brawl-stats" target="_blank">Github</a>
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

.main__text {
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
  padding: 10px 20px;
  text-decoration: none;
  background: var(--main-color);
  border-radius: 10px;
  color: #fff;
  font-size: 2rem;
  font-family: 'Lilita One', sans-serif;
  transition: .2s ease-in;
}
.main__text a:hover {
  background: #003994;
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