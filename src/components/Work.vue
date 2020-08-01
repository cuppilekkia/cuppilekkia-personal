<template>
    <section class="work theme-light">
        <!-- <div class="work-image" v-if="uiIS.sm">
            <img :src="`../images/works/${image}`">
        </div> -->
        <div class="work-content">
            <header class="head">
                <h1 class="title">{{ title }}</h1>
                <div class="tech">
                    <Tag v-for="(tag, index) in tech" :key="index" :tag="tag"/>
                </div>
            </header>
            <div class="foot">
                <p class="role">{{ role }}</p>
                <p class="year"><small v-html="year"></small></p>
                <p class="design" v-if="design">design: {{ design }}</p>
                <div class="launch">
                    <a :href="link" target="_blank" rel="noopener">LAUNCH SITE <i class="icon ion-md-open"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Tag from '@/components/Tag.vue'

export default {
  name: 'work',
  components: {
    Tag
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    tech: {
      type: Array,
      default: () => []
    },
    role: {
      type: String,
      default: ''
    },
    design: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    year: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters(['uiIS'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.work {
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: $black-shadow;
  transition: $speed $cubic;

  @media screen and (min-width: $sm) {
    flex-basis: calc(100% / 2 - 20px);
    margin-right: 40px;
    display: flex;
    flex-direction: column;

    &:nth-child(2n) {
      margin-right: 0px;
    }
  }

  &-image {
    overflow: hidden;
  }

  &-content {
    padding: 10px;

    @media screen and (min-width: $sm) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: 20px;
    }
  }

  &:hover {
    .launch {
      bottom: 0px;
      opacity: 1;
    }
  }

  & .foot {
    overflow: hidden;
    position: relative;
  }

  & .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 15px;
    //color: $main-light;
  }

  & .launch {
    position: absolute;
    opacity: 1;
    bottom: 0;
    right: 0px;
    font-size: 0.7rem;
    color: $red;
    transition: $speed linear;

    @media screen and (min-width: $lg) {
      color: inherit;
      opacity: 0;
      bottom: -100%;
    }
  }

  & .tech {
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 20px;
  }

  & .design {
    font-size: 0.7rem;
    margin-top: 10px;
    color: $main-light-40;
  }

  & .year {
    color: $red;
  }
}
</style>
