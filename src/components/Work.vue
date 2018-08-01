<template>
    <section class="work theme-dark-2">
        <header class="head">
            <h1 class="title">{{ title }}</h1>
            <h2 class="tech">{{ tech }}</h2>
        </header>
        <div>
            <p class="role">{{ role }}</p>
            <p class="year"><small v-html="year"></small></p>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'work',
  props: {
    title: {
      type: String,
      default: ''
    },
    tech: {
      type: String,
      default: ''
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
@import '@/assets/sass/_variables.scss';

.work {
  position: relative;
  padding: 10px;
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: $black-shadow;
  transition: $speed $cubic;

  &:hover {

  }

  & .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: $main-light;
  }

  & .tech {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5rem;
    margin-bottom: 20px;
  }

  & .design {
    padding-left: 10px;

  }
}
</style>
