<template>
    <footer class="footer theme-light">
        <p class="footer-text">
            Made with <i class="icon ion-md-heart"></i> with <a href="https://cli.vuejs.org/" target="_blank" rel="noopener">VueCLI</a> in 2018
        </p>
        <p class="footer-text">
            WIP - v{{ $store.state.version }}
        </p>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.footer {
  position: relative;
  width: 100%;
  padding: 5px 40px;
  text-align: center;

  @media screen and (min-width: $xs) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: $sm) {
    position: absolute;
    bottom: 0;
  }

  @media screen and (min-width: $xl) {
    padding: 5px 160px;
  }

  &-text {
    font-size: 12px;

    .icon {
      color: red;
      font-size: 12px;
    }
  }
}
</style>
