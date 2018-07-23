<template>
    <footer class="footer wrapper">
        <p class="footer-text">
            Made with <i class="icon ion-md-heart"></i> in 2018
        </p>
        <p class="footer-text">
            WIP | {{ $store.state.version }}
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
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  color: $main-light-40;

  @media screen and (min-width: $xs) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: $sm) {
    position: absolute;
    bottom: 0;
  }

  &-text {
    font-size: 12px;

    .icon {
      color: $red;
      font-size: 12px;
    }
  }
}
</style>
