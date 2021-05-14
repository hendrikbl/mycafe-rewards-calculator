<template>
  <div
    class="
      grid grid-cols-1
      sm:grid-cols-1
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-3
      lg:w-3/4
      xl:w-2/3
      mx-auto
      gap-x-5
      my-2
      sm:my-5
    "
  >
    <div
      class="
        bg-gray-100
        dark:bg-gray-400
        rounded-full
        font-extrabold
        flex flex-row
        my-1
        h-8
        shadow
      "
    >
      <input
        :id="`p${localValue.id}-name`"
        v-model="localValue.name"
        class="
          font-extrabold
          text-gray-800
          dark:placeholder-opacity-70 dark:placeholder-white
          focus:outline-none
          flex-none
          bg-transparent
          mx-2
          flex-grow
        "
        type="text"
        :name="`p${localValue.id}-name`"
        :placeholder="$t('Name')"
      />
    </div>
    <div
      class="
        bg-yellow-100
        dark:bg-yellow-400
        rounded-full
        font-extrabold
        text-gray-800
        flex flex-row
        my-1
        shadow
      "
    >
      <svg-icon
        type="mdi"
        :path="icons.trophy"
        class="
          w-8
          h-8
          p-1.5
          bg-yellow-500
          dark:bg-yellow-600
          rounded-full
          flex-none
          text-white
        "
      />
      <input
        :id="`p${localValue.id}-trophies`"
        v-model="localValue.trophies"
        class="
          font-extrabold
          text-gray-800
          dark:placeholder-opacity-70 dark:placeholder-white
          focus:outline-none
          flex-none
          bg-transparent
          mx-2
          flex-grow
        "
        type="number"
        :name="`p${localValue.id}-trophies`"
        :placeholder="$t('Trophies')"
      />
    </div>
    <div class="grid grid-cols-2 gap-x-2 my-1">
      <div
        class="
          bg-blue-100
          dark:bg-blue-400
          rounded-full
          font-extrabold
          text-gray-800
          flex flex-row flex-initial
          w-100
          shadow
        "
      >
        <svg-icon
          type="mdi"
          :path="icons.diamond"
          class="
            w-8
            h-8
            p-1.5
            bg-blue-500
            dark:bg-blue-600
            rounded-full
            flex-none
            text-white
          "
        />
        <div class="mx-2 leading-8 whitespace-nowrap flex-1">
          {{ localValue.diamonds }}
        </div>
      </div>
      <div
        class="
          bg-red-100
          dark:bg-red-400
          rounded-full
          font-extrabold
          text-gray-800
          flex flex-row flex-initial
          w-100
          shadow
        "
      >
        <svg-icon
          type="mdi"
          :path="icons.ruby"
          class="
            w-8
            h-8
            p-1.5
            bg-red-500
            dark:bg-red-600
            rounded-full
            flex-none
            text-white
          "
        />
        <div class="mx-2 leading-8 whitespace-nowrap flex-1">
          {{ localValue.rubies }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

import {
  mdiCardsDiamondOutline,
  mdiDiamondStone,
  mdiTrophyVariantOutline,
} from '@mdi/js'

export default {
  components: {
    SvgIcon,
  },

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
