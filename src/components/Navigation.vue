<template>
    <div class="navigation"
         :style="{ bottom }"
         :class="!uiIS.sm ? 'theme-dark' : 'theme-light'">
        <div class="navigation-head" @click="toggleMenu">
            <span>MENU</span>
            <!-- <svg class="navigation-head__open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30">
                <path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"/>
            </svg> -->
        </div>
        <div class="navigation-body" ref="body" :class="{ 'active': menuState }">
            <div class="navigation-body__menu wrapper">
                <div class="navigation-body__col">
                    <ul>
                        <li class="navigation-body__item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="navigation-body__item">
                            <router-link to="/skills">Skills</router-link>
                        </li>
                    </ul>
                </div>
                <div class="navigation-body__col align-right">
                    <ul>
                        <li class="navigation-body__item">
                            <router-link to="/works">Works</router-link>
                        </li>
                        <li class="navigation-body__item">
                            <a href="mailto:info@antonio-coppola.com">Contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer v-if="!uiIS.sm"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import throttle from 'lodash/throttle'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Navigation',
  components: {
    Footer
  },
  data () {
    return {
      initHeight: 0
    }
  },
  computed: {
    openBody () {
      if (this.uiIS.sm) return this.menuState
      return true
    },
    bottom () {
      return !this.uiIS.sm ? (this.menuState ? 0 : 0 - (this.initHeight || 0) + 'px') : 'initial'
    },
    ...mapGetters(['uiIS', 'menuState'])
  },
  mounted () {
    if (!this.uiIS.sm) {
      this.initHeight = this.$refs.body.getBoundingClientRect().height
    }
    window.addEventListener('resize', throttle(() => {
      if (!this.uiIS.sm) {
        this.initHeight = this.$refs.body.getBoundingClientRect().height
      }
    }, 300))
  },
  methods: {
    toggleMenu () {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.navigation {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
    transition: $speed $cubic;

    @media screen and (min-width: $sm) {
        position: absolute;
        top: 40px;
        right: 40px;
        width: auto;
        height: auto;
        bottom: initial;
        background-color: transparent;
    }
    @media screen and (min-width: $lg) {
        right: 80px;
    }
    &-head {
        position: relative;
        padding: 15px 0;
        text-align: center;
        cursor: pointer;
        @media screen and (min-width: $sm) {
            padding: 0;
            text-align: right;
            border: none;
            margin-bottom: 20px;
        }
        &__open {
            position: relative;
            margin: 0;
            padding: 0;
        }
    }
    &-body {
        position: relative;
        @media screen and (min-width: $sm) {
            text-align: right;
            display: flex;
            overflow: hidden;
            opacity: 0;
            transition: $speed $cubic;
            &.active {
                opacity: 1;
            }
        }
        &__menu {
            position: relative;
            display: flex;
            padding-top: 10px;
            padding-bottom: 20px;
            @media screen and (min-width: $sm) {
                padding: 0;
                text-align: right;
                display: block;
                transition: $speed $cubic;
                transition-delay: .1s;
                transform: translateX(100%);
                .active & {
                    transform: translateX(0%);
                }
            }
        }
        &__col {
            flex: 1;
            @media screen and (min-width: $sm) {
                flex: auto;

            }
        }
        &__item {
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
                @media screen and (min-width: $sm) {
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>
