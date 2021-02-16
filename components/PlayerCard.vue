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
        <path
          fill="currentColor"
          class="text-white"
          d="M17 4V2H7V4H2V11C2 12.1 2.9 13 4 13H7.1C7.5 14.96 9.04 16.5 11 16.9V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V16.9C14.96 16.5 16.5 14.96 16.9 13H20C21.1 13 22 12.1 22 11V4H17M4 11V6H7V11L4 11M15 12C15 13.65 13.65 15 12 15S9 13.65 9 12V4H15V12M20 11L17 11V6H20L20 11Z"
        />
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
          <path
            fill="currentColor"
            class="text-white"
            d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z"
          />
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
          <path
            fill="currentColor"
            class="text-white"
            d="M12 2L5 12L12 22L19 12M7.44 12L12 5.5L16.56 12L12 18.5"
          />
        </svg>
        <div class="mx-2 leading-7 whitespace-nowrap flex-1">
          {{ localValue.rubies }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
