<template>
  <div class="grid grid-cols-1 my-2">
    <div
      :class="`bg-${color}-100 rounded-full font-extrabold text-gray-800 flex flex-row my-1`"
    >
      <svg
        viewBox="0 0 24 24"
        :class="`w-7 h-7 p-1 bg-${color}-500 rounded-full flex-none`"
      >
        <slot name="svgPath" />
      </svg>
      <div class="mx-2 leading-7 whitespace-nowrap flex-1">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'gray',
    },
  },
}
</script>

<style></style>
