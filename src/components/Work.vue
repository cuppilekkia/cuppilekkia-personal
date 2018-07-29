<template>
    <div>
        {{ title }}
    </div>
</template>

<script>
export default {
  name: 'work',
  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
