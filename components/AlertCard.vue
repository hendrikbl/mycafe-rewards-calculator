<template>
  <div class="grid grid-cols-1 my-2">
    <div
      :class="`bg-${color}-100 dark:bg-${color}-400 rounded-full font-extrabold text-gray-800 flex flex-row my-1 shadow`"
    >
      <svg-icon
        type="mdi"
        :path="path"
        :class="`w-8 h-8 p-1.5 bg-${color}-500 dark:bg-${color}-600 rounded-full flex-none text-white`"
      />
      <div class="mx-2 leading-8 whitespace-nowrap flex-1">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
    SvgIcon,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'gray',
    },
    path: {
      type: String,
      default: '',
    },
  },
})
</script>

<style></style>
