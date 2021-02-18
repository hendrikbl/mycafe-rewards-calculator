<template>
  <div :class="flagClass"></div>
</template>

<script>
export default {
  props: {
    country: {
      type: String,
      required: true,
    },
    square: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (value) => {
        return ['small', 'normal', 'big'].includes(value)
      },
      default: 'normal',
    },
  },

  computed: {
    flagClass() {
      return {
        [`flag-icon-background`]: this.background,
        [`flag-icon-${this.country}`]: true,
        [`flag-icon-squared`]: this.square,
      }
    },
  },
}
</script>

<style></style>
