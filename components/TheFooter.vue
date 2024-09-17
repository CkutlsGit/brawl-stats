<template>
  <footer class="footer">
    <div class="footer__content font-default">
      <div class="footer__about">
        <NuxtLink to="/about-the-web">
          <h2>
            About the web
          </h2>
        </NuxtLink>
        <NuxtLink to="/api">
          <h2>
            API
          </h2>
        </NuxtLink>
      </div>
      <div class="footer__github">
        <a href="https://github.com/CkutlsGit/brawl-stats" target="_blank">Github Project</a>
        <a href="https://github.com/CkutlsGit" target="_blank">Github Author</a>
      </div>
      <div class="footer__action">
        <h2>Action Brawlers for</h2>
        <h2>2024 August</h2>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

.footer {
  margin-top: 300px;
  min-width: 100%;
  min-height: 150px;
  background: var(--darkest-main-color);
}

.footer__content {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 74px 170px;
}
.footer__content a, h2 {
  font-size: 2rem;
  margin-bottom: 4px;
  cursor: pointer;
  transition: .3s ease-in;
}
.footer__content h2:hover, a:hover {
  opacity: 60%;
}

.footer__github {
  display: flex;
  flex-direction: column;
  margin-left: 4%;
}

@media not all and (min-width: 1024px) {
  .footer__content {
    justify-content: space-evenly;
    padding: 74px 50px;
  }
  .footer__content h2 {
    font-size: 1.5rem;
  }
}

@media not all and (min-width: 640px) {
  .footer__content {
    justify-content: space-evenly;
    padding: 74px 0;
  }
  .footer__content h2 {
    font-size: 1.2rem;
  }
}
</style>