<template>
    <div id="app" class="app theme-dark">
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

        <main class="main-container ">
            <router-view/>
        </main>
        <Navigation/>
        <Footer v-if="uiIS.sm" :class="{ 'theme-dark-2': uiIS.sm }"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Navigation
  },
  computed: {
    ...mapGetters(['uiIS'])
  }
}
</script>

<style lang="scss" scoped>

</style>
