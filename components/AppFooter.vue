<template>
  <footer class="lg:w-3/4 xl:w-2/3 mx-auto mt-5">
    <hr class="border-t-4 rounded-full my-5 mx-5 dark:border-gray-500" />
    <div class="grid grid-cols-3 pb-5 mx-5">
      <div class="flex flex-row">
        <a href="https://github.com/hendrikbl/mycafe-rewards-calculator">
          <svg-icon type="mdi" :path="icons.github" class="h-6" />
        </a>
        <span class="mx-2">|</span>
        <nuxt-link
          class="text-link underline"
          :to="localePath('/privacy-policy')"
          >{{ $t('Privacy') }}</nuxt-link
        >
      </div>
      <div class="flex flex-col">
        <div class="font-bold text-center">
          Made with <span class="text-red-500">❤</span> by
          <a href="https://github.com/hendrikbl" class="underline">hendrikbl</a>
        </div>
        <div class="flex flex-row justify-center pt-2">
          <div
            v-for="locale in $i18n.locales"
            :key="locale.code"
            class="w-5 h-5 rounded-full overflow-hidden cursor-pointer mx-1"
            @click.prevent.stop="changeLanguage(locale.code)"
          >
            <flag
              :country="locale.country"
              :class="`-ml-1 -mt-1 h-7 w-7 bg-no-repeat bg-contain bg-center ${
                locale.code === $i18n.locale ? 'opacity-100' : 'opacity-70'
              }`"
            />
          </div>
        </div>
      </div>
      <a
        href="http://melsoft-games.com/"
        class="font-semibold underline text-right"
        >Melsoft Games</a
      >
    </div>
  </footer>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

import { mdiGithub } from '@mdi/js'

export default {
  components: {
    SvgIcon,
  },

  data: () => {
    return {
      showLangSelect: false,
      icons: {
        github: mdiGithub,
      },
    }
  },

  methods: {
    changeLanguage(lang) {
      this.$i18n.setLocale(lang)
    },
  },
}
</script>

<style></style>
