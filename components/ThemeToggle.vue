<template>
  <button
    class="focus:outline-none"
    aria-label="Dark mode"
    @click="toggleTheme"
  >
    <svg-icon
      type="mdi"
      :path="themeIcon"
      class="w-10 h-10 p-2 dark:text-yellow-500"
    />
  </button>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

import { mdiThemeLightDark, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'

export default {
  name: 'ThemeToggle',

  components: {
    SvgIcon,
  },

  data: () => {
    return {
      icons: {
        sun: mdiWeatherSunny,
        moon: mdiWeatherNight,
        auto: mdiThemeLightDark,
      },
    }
  },

  computed: {
    themeIcon() {
      switch (this.$colorMode.preference) {
        case 'light':
          return this.icons.sun
        case 'dark':
          return this.icons.moon
        default:
          return this.icons.auto
      }
    },
  },

  methods: {
    toggleTheme() {
      switch (this.$colorMode.preference) {
        case 'light':
          this.$colorMode.preference = 'dark'
          break
        case 'dark':
          this.$colorMode.preference = 'system'
          break
        case 'system':
          this.$colorMode.preference = 'light'
          break
        default:
          this.$colorMode.preference = 'system'
      }
    },
  },
}
</script>

<style></style>
