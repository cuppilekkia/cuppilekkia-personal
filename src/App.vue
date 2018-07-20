<template>
  <div id="app" class="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="main-container">
      <router-view/>
    </main>
    <footer class="footer theme-light">
      <p class="footer-text">
        Made with <i class="icon ion-heart"></i> with <a href="https://cli.vuejs.org/">VueCLI</a> in 2018
      </p>
      <p class="footer-text">
        WIP - v0.1.0
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.app {
  position: relative;
  width: 100%;
  height: 100%;
}
.main-container {
  position: relative;
  height: 100%;

  display: flex;
}
.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 5px 40px;
  text-align: center;

  &-text {
    font-size: 12px;

    .icon {
      color: red;
      font-size: 12px;
    }
  }
}
</style>
