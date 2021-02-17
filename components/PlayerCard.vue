<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:w-3/4 xl:w-2/3 mx-auto gap-x-5 my-2"
  >
    <div
      class="bg-gray-100 rounded-full font-extrabold text-gray-800 flex flex-row my-1"
    >
      <input
        :id="`p${localValue.id}-name`"
        v-model="localValue.name"
        class="font-extrabold text-gray-800 focus:outline-none flex-none bg-transparent mx-2 flex-grow"
        type="text"
        :name="`p${localValue.id}-name`"
        placeholder="Name"
      />
    </div>
    <div
      class="bg-yellow-100 rounded-full font-extrabold text-gray-800 flex flex-row my-1"
    >
      <svg
        viewBox="0 0 24 24"
        class="w-7 h-7 p-1 bg-yellow-500 rounded-full flex-none"
      >
        <path fill="currentColor" class="text-white" :d="icons.trophy" />
      </svg>
      <input
        :id="`p${localValue.id}-trophies`"
        v-model="localValue.trophies"
        class="font-extrabold text-gray-800 focus:outline-none flex-none bg-transparent mx-2 flex-grow"
        type="number"
        :name="`p${localValue.id}-trophies`"
        placeholder="Trophies"
      />
    </div>
    <div class="grid grid-cols-2 gap-x-2 my-1">
      <div
        class="bg-blue-100 rounded-full font-extrabold text-gray-800 flex flex-row flex-initial w-100"
      >
        <svg
          viewBox="0 0 24 24"
          class="w-7 h-7 p-1 bg-blue-500 rounded-full flex-none"
        >
          <path fill="currentColor" class="text-white" :d="icons.diamond" />
        </svg>
        <div class="mx-2 leading-7 whitespace-nowrap flex-1">
          {{ localValue.diamonds }}
        </div>
      </div>
      <div
        class="bg-red-100 rounded-full font-extrabold text-gray-800 flex flex-row flex-initial w-100"
      >
        <svg
          viewBox="0 0 24 24"
          class="w-7 h-7 p-1 bg-red-500 rounded-full flex-none"
        >
          <path fill="currentColor" class="text-white" :d="icons.ruby" />
        </svg>
        <div class="mx-2 leading-7 whitespace-nowrap flex-1">
          {{ localValue.rubies }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdiCardsDiamondOutline,
  mdiDiamondStone,
  mdiTrophyVariantOutline,
} from '@mdi/js'

export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          id: 0,
          name: '',
          trophies: 0,
          diamonds: 0,
          rubies: 0,
        }
      },
    },
  },

  data: () => {
    return {
      icons: {
        diamond: mdiDiamondStone,
        ruby: mdiCardsDiamondOutline,
        trophy: mdiTrophyVariantOutline,
      },
    }
  },

  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(localValue) {
        this.$emit('input', localValue)
      },
    },
  },
}
</script>

<style></style>
