<template>
  <div
    :class="`bg-${color}-100 dark:bg-${color}-400 rounded-2xl my-5 p-5 flex flex-col shadow`"
  >
    <div class="flex">
      <svg-icon
        type="mdi"
        :path="path"
        :class="`w-7 h-7 mr-3 p-1 bg-${color}-500 dark:bg-${color}-600 rounded-full text-white`"
      />
      <label class="font-extrabold text-xl mb-5 text-gray-800" :for="inputName"
        >{{ title }}
      </label>
    </div>
    <input
      :id="inputName"
      :value="value"
      :class="`py-2 px-1 text-4xl font-bold border-b-4 border-${color}-300 dark:border-${color}-500 focus:outline-none bg-transparent rounded-none dark:placeholder-white dark:placeholder-opacity-70 text-gray-800`"
      type="number"
      :name="inputName"
      placeholder="0"
      @input="$emit('input', Number($event.target.value))"
    />
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
    SvgIcon,
  },

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
    path: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const { title } = toRefs(props)

    const inputName = computed(toKebapCase)

    function toKebapCase() {
      return title.value
        .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
        .replace(/[\s_]+/g, '-') // replace all spaces and low dash
        .toLowerCase()
    }
    return { inputName }
  },
})
</script>

<style></style>
