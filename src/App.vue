<template>
  <div id="app">
    <header>
      <span>
            <router-link exact to="/">Antonio Coppola</router-link>
      </span>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

</style>
