<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:w-3/4 xl:w-2/3 mx-auto gap-x-5 my-2"
  >
    <div
      class="bg-green-100 rounded-full font-extrabold text-gray-800 flex flex-row my-1"
    >
      <svg
        viewBox="0 0 24 24"
        class="w-7 h-7 p-1 bg-green-500 rounded-full flex-none"
      >
        <path
          fill="currentColor"
          class="text-white"
          d="M5,4H19A3,3 0 0,1 22,7V11H15V10H9V11H2V7A3,3 0 0,1 5,4M11,11H13V13H11V11M2,12H9V13L11,15H13L15,13V12H22V20H2V12Z"
        />
      </svg>
      <div class="mx-2 leading-7 whitespace-nowrap flex-1">Treasure Trove</div>
    </div>
    <div class="invisible"></div>
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
          {{ value.diamonds }}
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
          {{ value.rubies }}
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
          diamonds: 0,
          rubies: 0,
        }
      },
    },
  },
}
</script>

<style></style>
