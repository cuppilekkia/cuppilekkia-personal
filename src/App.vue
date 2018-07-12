<template>
  <div id="app" class="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="main-container">
      <router-view/>
    </main>
    <footer class="footer">
      <p class="footer-text">
        Made with <i class="icon ion-heart"></i> with <a href="https://cli.vuejs.org/">VueCLI</a>
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
  padding: 40px;
  height: 100%;

  display: flex;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  text-align: center;

  &-text {
    .icon {
      color: red;
      margin: 0 2px;
      font-size: 15px;
    }
  }
}
</style>
