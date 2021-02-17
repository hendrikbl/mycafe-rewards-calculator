<template>
  <div
    class="fixed bottom-0 left-0 lg:flex items-center p-4 bg-gray-300 shadow-sm justify-center w-full"
  >
    <svg-icon
      type="mdi"
      :path="icons.cookie"
      class="w-7 h-7 mr-3 p-1 bg-gray-500 rounded-full text-white"
    />
    <div class="lg:mx-8">
      <p>
        Can I use cookies for analytics? Read
        <nuxt-link class="text-link underline" to="/privacy-policy"
          >the privacy policy</nuxt-link
        >
        for more information.
      </p>
    </div>
    <div class="flex justify-center mt-4 lg:mt-0">
      <button
        class="rounded ml-2 md:ml-0 bg-green-500 text-white p-1.5"
        @click="$emit('accepted', true)"
      >
        Yes, sure
      </button>
      <button class="md:ml-2 font-bold w-6" @click="$emit('accepted', false)">
        &times;
      </button>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

import { mdiCookie } from '@mdi/js'

export default {
  components: {
    SvgIcon,
  },

  data: () => {
    return {
      icons: {
        cookie: mdiCookie,
      },
    }
  },
}
</script>

<style></style>
