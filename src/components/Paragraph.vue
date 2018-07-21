<template>
  <p class="t-paragraph">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'Paragraph'
}
</script>

<style scoped lang="scss">
.t-paragraph {
    margin-bottom: 10px;
}
</style>
