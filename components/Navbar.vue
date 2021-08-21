<template>
  <nav class="px-6">
    <div class="grid grid-cols-6 gap-4 text-3xl font-extrabold">
      <div class="col-start-2 col-span-4 md:flex justify-center hidden">
        <span class="lg:text-4xl leading-10"> MyCafé Rewards Calculator </span>
      </div>

      <div class="md:hidden flex align-middle col-span-5">
        <img src="~/assets/svg/logo.svg" class="h-10 w-10 mr-3" />
        <span class="align-middle leading-10 text-2xl"> MyCafé RC </span>
      </div>

      <div class="col-start-6 col-span-1 flex justify-end align-middle gap-1">
        <!-- <button class="focus:outline-none" aria-label="recipes">
          <svg-icon
            type="mdi"
            :path="icons.book"
            class="w-10 h-10 p-2 dark:text-white"
          />
        </button> -->
        <theme-toggle />
        <div class="md:relative">
          <div class="flex align-middle h-full">
            <button
              class="focus:outline-none"
              aria-label="Menu"
              @click="showMenu = !showMenu"
            >
              <svg-icon
                type="mdi"
                :path="icons.settings"
                class="w-10 h-10 p-2 dark:text-white"
              />
            </button>
          </div>

          <settings-menu v-if="showMenu" @close="showMenu = false" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mdiBellOutline, mdiCogOutline, mdiBookOutline } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SettingsMenu from './SettingsMenu.vue'
import ThemeToggle from './ThemeToggle.vue'

export default defineComponent({
  name: 'Navbar',

  components: { SvgIcon, SettingsMenu, ThemeToggle },

  setup() {
    const icons = ref({
      bell: mdiBellOutline,
      settings: mdiCogOutline,
      book: mdiBookOutline,
    })

    const showMenu = ref(false)

    return { icons, showMenu }
  },
})
</script>

<style></style>
