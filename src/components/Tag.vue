<template>
    <div class="tag">{{ tag }}</div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tag: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.tag {
    font-size: 0.8rem;
    font-weight: normal;
    line-height: 1.5rem;
    padding: 0px 5px 0 0;
    margin-right: 5px;
    margin-bottom: 5px;

    @media screen and (min-width: $sm) {
        padding: 0px 8px;
        border: 1px solid $main-light-40;
        border-radius: 15px;
    }
}
</style>
