<template>
  <div>
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="close"
      ></div>

      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__slideInUp animate__superfast"
        leave-active-class="animate__animated animate__slideOutDown animate__superfast"
      >
        <!-- MODE -->
        <div
          v-if="showSheet"
          class="
            fixed
            bottom-0
            shadow
            py-1
            bg-white
            dark:bg-gray-900
            text-gray-800
            dark:text-white
            w-full
            rounded-t-xl
          "
          role="menu"
        >
          <hr class="border-t-4 rounded-full w-5 my-2 mx-auto" />
          <div class="px-4 py-2 flex justify-center gap-10 text-sm my-4">
            <div>
              <input
                id="task"
                v-model="mode"
                type="radio"
                value="1"
                class="hidden"
              />
              <label
                for="task"
                :class="mode == 1 ? activeClasses : defaultClasses"
                >{{ $t('by_tasks') }}</label
              >
            </div>
            <div>
              <input
                id="trophy"
                v-model="mode"
                type="radio"
                value="2"
                class="hidden"
              />
              <label
                for="trophy"
                :class="mode == '2' ? activeClasses : defaultClasses"
                >{{ $t('by_trophies') }}</label
              >
            </div>
            <div>
              <input
                id="fifty"
                v-model="mode"
                type="radio"
                value="3"
                class="hidden"
              />
              <label
                for="fifty"
                :class="mode == '3' ? activeClasses : defaultClasses"
                >50 / 50</label
              >
            </div>
          </div>

          <!-- LINKS -->
          <hr
            class="border-t-1 rounded-full my-2 mx-auto dark:border-gray-700"
          />
          <a
            href="#"
            class="block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            >{{ $t('News') }}</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            >{{ $t('How_it_works') }}</a
          >

          <!-- LANGUAGE -->
          <hr
            class="border-t-1 rounded-full my-2 mx-auto dark:border-gray-700"
          />
          <div class="flex flex-row justify-center p-2">
            <div
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :class="`w-6 h-6 rounded-full overflow-hidden cursor-pointer mx-2 ${
                locale.code === $i18n.locale
                  ? 'opacity-100 ring-1 ring-gray-400'
                  : 'opacity-60'
              }`"
              @click.prevent.stop="changeLanguage(locale.code)"
            >
              <flag
                :country="locale.country"
                class="-ml-2 -mt-1 h-8 w-8 bg-no-repeat bg-contain bg-center"
              />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  useContext,
  computed,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup(props, { emit }) {
    const { i18n, store } = useContext()

    const showSheet = ref(false)
    const activeClasses = ref(
      'font-bold rounded-lg bg-indigo-200 dark:bg-indigo-700 p-2 ring-2 ring-indigo-500 cursor-pointer'
    )
    const defaultClasses = ref(
      'font-bold rounded-lg bg-gray-200 dark:bg-gray-700 p-2 cursor-pointer'
    )
    const selected = ref(null)

    const openSheet = () => {
      showSheet.value = true
    }

    onMounted(openSheet)

    const close = () => {
      showSheet.value = false
      setTimeout(() => {
        emit('close')
      }, 100)
    }

    const changeLanguage = (lang) => {
      i18n.setLocale(lang)
    }

    const mode = computed({
      get() {
        return store.state.mode
      },
      set(mode) {
        store.commit('setMode', parseInt(mode))
      },
    })

    return {
      showSheet,
      activeClasses,
      defaultClasses,
      selected,
      close,
      changeLanguage,
      mode,
    }
  },
})
</script>

<style>
.animate__superfast {
  --animate-duration: 0.1s;
}
</style>
