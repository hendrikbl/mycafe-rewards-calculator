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
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ThemeToggle',

  components: {
    SvgIcon,
  },

  setup() {
    const { $colorMode } = useContext()

    const icons = ref({
      sun: mdiWeatherSunny,
      moon: mdiWeatherNight,
      auto: mdiThemeLightDark,
    })

    const getThemeIconByPreference = () => {
      switch ($colorMode.preference) {
        case 'light':
          return icons.value.sun
        case 'dark':
          return icons.value.moon
        default:
          return icons.value.auto
      }
    }
    const themeIcon = computed(getThemeIconByPreference)

    const toggleTheme = () => {
      switch ($colorMode.preference) {
        case 'light':
          $colorMode.preference = 'dark'
          break
        case 'dark':
          $colorMode.preference = 'system'
          break
        case 'system':
          $colorMode.preference = 'light'
          break
        default:
          $colorMode.preference = 'system'
      }
    }

    return { icons, themeIcon, toggleTheme }
  },
})
</script>

<style></style>
