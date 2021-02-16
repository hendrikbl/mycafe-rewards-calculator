<template>
  <div :class="`bg-${color}-100 rounded-2xl my-5 p-5 flex flex-col`">
    <div class="flex">
      <svg
        viewBox="0 0 24 24"
        :class="`w-7 h-7 mr-3 p-1 bg-${color}-500 rounded-full`"
      >
        <slot name="svgPath"></slot>
      </svg>
      <label class="font-extrabold text-xl text-gray-800 mb-5" for="trophies"
        >{{ title }}
      </label>
    </div>
    <input
      id="trophies"
      :value="value"
      :class="`py-2 px-1 text-4xl font-bold border-b-4 border-${color}-300 focus:outline-none bg-transparent`"
      type="number"
      name="trophies"
      @input="$emit('input', Number($event.target.value))"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: 'gray',
    },
  },

  computed: {
    inputName() {
      return this.title
        .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
        .replace(/[\s_]+/g, '-') // replace all spaces and low dash
        .toLowerCase()
    },
  },
}
</script>

<style></style>
