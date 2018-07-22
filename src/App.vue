<template>
    <div id="app" class="app theme-dark">
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
        <main class="main-container ">
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
