<template>
  <div>
    <div class="fixed z-10 inset-0 overflow-y-auto text-gray-800">
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
          class="fixed bottom-0 shadow py-1 bg-white w-full rounded-t-xl"
          role="menu"
        >
          <hr class="border-t-4 rounded-full w-5 my-2 mx-auto" />
          <div class="px-4 py-2 flex justify-center gap-10 text-sm my-4">
            <div>
              <input
                id="task"
                v-model="mode"
                type="radio"
                value="task"
                class="hidden"
              />
              <label
                for="task"
                :class="mode == 'task' ? activeClasses : buttonClasses"
                >By Task</label
              >
            </div>
            <div>
              <input
                id="trophy"
                v-model="mode"
                type="radio"
                value="trophy"
                class="hidden"
              />
              <label
                for="trophy"
                :class="mode == 'trophy' ? activeClasses : buttonClasses"
                >By Trophies</label
              >
            </div>
            <div>
              <input
                id="fifty"
                v-model="mode"
                type="radio"
                value="fifty"
                class="hidden"
              />
              <label
                for="fifty"
                :class="mode == 'fifty' ? activeClasses : buttonClasses"
                >50 / 50</label
              >
            </div>
          </div>

          <!-- LINKS -->
          <hr class="border-t-1 rounded-full my-2 mx-auto" />
          <a
            href="#"
            class="block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            >News</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            >How does it work?</a
          >

          <!-- LANGUAGE -->
          <hr class="border-t-1 rounded-full my-2 mx-auto" />
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
export default {
  data: () => {
    return {
      showSheet: false,
      mode: 'task',
      activeClasses:
        'font-bold rounded-lg bg-purple-200 p-2 ring-2 ring-purple-500 cursor-pointer',
      buttonClasses: 'font-bold rounded-lg bg-gray-200 p-2 cursor-pointer',
      selected: null,
    }
  },

  mounted() {
    this.showSheet = true
  },

  methods: {
    close() {
      this.showSheet = false
      setTimeout(() => {
        this.$emit('close')
      }, 100)
    },

    changeLanguage(lang) {
      this.$i18n.setLocale(lang)
    },
  },
}
</script>

<style>
.animate__superfast {
  --animate-duration: 0.1s;
}
</style>
