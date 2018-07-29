<template>
    <div class="works wrapper">
        <div class="">
            <!-- <img src="../assets/logo.png"> -->
            <TitleBig>
                Works
            </TitleBig>
            <transition-group name="fade" appear>
                <div class="skill" v-for="(work, index) in works" :key="index">
                    <Work v-bind="work"></Work>
                </div>
            </transition-group>
        </div>
    </div>
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

.skill {
    margin-bottom: 20px;

    &-title {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 5px;
        color: $main-light-40;
    }
}
</style>
