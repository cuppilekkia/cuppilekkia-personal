<template>
    <article class="works wrapper">
        <section class="">
            <!-- <img src="../assets/logo.png"> -->
            <TitleBig>
                Works
            </TitleBig>
                <div class="works">
                    <transition-group name="fade" appear tag="div">
                        <Work v-bind="work" 
                            v-for="(work, index) in works" 
                            :key="index" 
                            :data-index="index"/>
                    </transition-group>
                </div>
        </section>
    </article>
</template>

<script>
import { mapGetters } from 'vuex'
import TitleBig from '@/components/TitleBig.vue'
import Work from '@/components/Work.vue'

export default {
  name: 'works',
  components: {
    TitleBig,
    Work
  },
  computed: {
    ...mapGetters(['works'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.works {
    margin-bottom: 20px;
}
</style>
