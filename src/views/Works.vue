<template>
    <article class="works wrapper">
        <section class="">
            <TitleBig>
                Works
            </TitleBig>
            <div class="works">
                <Work v-bind="work"
                      v-for="(work, index) in works"
                      :key="index"
                      :data-index="index"/>
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

    @media screen and (min-width: $sm) {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
