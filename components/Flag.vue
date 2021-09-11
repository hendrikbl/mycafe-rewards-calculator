<template>
  <div :class="flagClass"></div>
</template>

<script>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
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

  setup(props) {
    const { country, background, square } = toRefs(props)

    const flagClass = computed(getFlagClasses)

    function getFlagClasses() {
      return {
        [`flag-icon-background`]: background.value,
        [`flag-icon-${country.value}`]: true,
        [`flag-icon-squared`]: square.value,
      }
    }

    return { flagClass }
  },
})
</script>

<style></style>
