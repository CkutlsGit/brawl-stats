<template>
  <footer class="footer">
    <div class="footer__content font-default">
      <div class="footer__about">
        <h2>About the web</h2>
        <h2>API</h2>
      </div>
      <div class="footer__github">
        <h2>Github Project</h2>
        <h2>Github Author</h2>
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
.footer__content h2 {
  font-size: 2rem;
  margin-bottom: 4px;
  cursor: pointer;
  transition: .3s ease-in;
}
.footer__content h2:hover {
  opacity: 60%;
}

.footer__github {
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