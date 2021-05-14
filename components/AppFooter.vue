<template>
  <footer>
    <hr class="border-t-4 rounded-full my-5 mx-5 dark:border-gray-500" />
    <div class="grid grid-cols-3 pb-1 mx-5">
      <div class="flex flex-row">
        <a
          href="https://github.com/hendrikbl/mycafe-rewards-calculator"
          aria-label="GitHub"
        >
          <svg-icon type="mdi" :path="icons.github" class="h-6" />
        </a>
      </div>
      <div class="flex flex-col">
        <div class="font-bold text-center">
          Made with <span class="text-red-500">❤</span> by
          <a href="https://github.com/hendrikbl" class="underline">hendrikbl</a>
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
}
</script>

<style></style>
