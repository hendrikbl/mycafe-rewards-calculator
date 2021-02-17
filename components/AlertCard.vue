<template>
  <div class="grid grid-cols-1 my-2">
    <div
      :class="`bg-${color}-100 rounded-full font-extrabold text-gray-800 flex flex-row my-1`"
    >
      <svg-icon
        type="mdi"
        :path="path"
        :class="`w-8 h-8 p-1.5 bg-${color}-500 rounded-full flex-none text-white`"
      />
      <div class="mx-2 leading-8 whitespace-nowrap flex-1">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

export default {
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
}
</script>

<style></style>
