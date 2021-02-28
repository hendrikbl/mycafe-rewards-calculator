<template>
  <div
    class="fixed bottom-0 left-0 flex items-center p-4 bg-gray-300 dark:bg-gray-500 shadow-sm justify-center w-full"
  >
    <svg-icon
      type="mdi"
      :path="icons.cookie"
      class="w-7 h-7 mr-3 p-1 bg-gray-500 dark:bg-gray-600 rounded-full text-white flex-none"
    />
    <div class="lg:mx-8 flex-wrap">
      <p>
        {{ $t('we_use_cookies') }} {{ $t('cookies_read') }}
        <nuxt-link
          class="text-link underline"
          :to="localePath('/privacy-policy')"
          >{{ $t('privacy_policy') }}</nuxt-link
        >
        {{ $t('cookies_more_information') }}
      </p>
    </div>
    <div class="flex justify-center ml-4 flex-none">
      <button
        class="rounded ml-2 md:ml-0 bg-green-500 py-1.5 px-2"
        @click="$emit('accepted', true)"
      >
        {{ $t('Okay') }}
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
