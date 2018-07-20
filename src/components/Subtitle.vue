<template>
  <h2 class="t-sub-title">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'Subtitle'
}
</script>

<style scoped lang="scss">
.t-sub-title {
    margin-bottom: 40px;
}
</style>
