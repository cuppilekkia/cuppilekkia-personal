<template>
  <h1 class="t-big-title">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'TitleBig'
}
</script>

<style scoped lang="scss">
.t-big-title {
  margin-bottom: 20px;
}
</style>
