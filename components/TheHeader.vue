<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo font-title">
        <h1>Stats</h1>
        <h1 class="header__logo--sub-logo">Brawl</h1>
      </div>
      <nav class="header__nav font-default">
        <a href="">Search player</a>
        <a href="">Search club</a>
        <a href="">About the web</a>
        <a href="">API</a>
      </nav>
      <div class="header__login">
        <div class="burger-menu">
          <the-header-burger-menu/>
        </div>
        <button>
          Login
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  height: 70px;
  background: var(--darkest-main-color);
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
}

.header__logo {
  user-select: none;
  max-width: 120px;
  padding-top: 10px;
  text-align: center;
}

.header__logo h1 {
  font-size: 2.5rem;
  -webkit-text-stroke: 2px #000;
}

.header__logo .header__logo--sub-logo {
  margin-top: -18px;
  color: #FF4141;
}

.burger-menu {
  display: none;
}

.header__nav {
  margin-top: 10px;
  margin-left: -25px;
  display: flex;
  gap: 0 24px;
}

.header__nav a {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  transition: .2s ease-in;
}
.header__nav a:hover {
  color: #5d5d5d;
}

.header__login {
  margin-top: 12px;
}

button{
  background: transparent;
  border: none;
}
button:focus{
  outline: none;
  border: none;
}

.header__login {
  display: flex;
  align-items: center;
}

.header__login button {
  width: 120px;
  height: 30px;
  cursor: pointer;
  background: var(--main-color);
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
  font-family: 'Lilita One', sans-serif;
  transition: .2s ease-in;
}
.header__login button:hover {
  background: #003994;
}

@media not all and (min-width: 1024px) {
  .header__content {
    max-width: 95%;
    justify-content: space-between;
  }
  .burger-menu {
    display: unset;
  }
  .header__nav {
    display: none;
  }
}
</style>