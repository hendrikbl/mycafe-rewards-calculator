<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" role="dialog">
    <div class="justify-center pt-4 px-4 text-center flex min-h-screen">
      <!-- Background Overlay -->
      <div
        class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="close"
      ></div>

      <div
        class="
          bg-white
          dark:bg-gray-900
          text-gray-800
          dark:text-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          m-auto
        "
      >
        <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div>
            <div class="my-2 text-center">
              <h3>{{ $t('News') }}</h3>
              <div
                class="my-4 font-medium text-base text-left flex flex-col gap-2"
              >
                <p
                  v-for="n in news"
                  :key="n.text"
                  :class="`border-l-4
                  border-${n.color}-500
                  pl-2`"
                >
                  {{ n.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 flex flex-row justify-between">
          <a
            type="button"
            class="text-base font-light px-4 py-2 cursor-pointer"
            href="https://github.com/hendrikbl/mycafe-rewards-calculator/releases"
            target="_blank"
          >
            {{ $t('Full_Changelog') }}
          </a>
          <button
            type="button"
            class="
              font-bold
              text-base
              rounded-lg
              px-4
              py-2
              cursor-pointer
              bg-indigo-600
              text-white
            "
            @click="close"
          >
            {{ $t('Got_it') }}!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

import { mdiStarFourPointsOutline } from '@mdi/js'

export default {
  components: {},
  setup(props, { emit }) {
    const showModal = ref(false)

    const icons = ref({
      alert: mdiStarFourPointsOutline,
    })

    const news = ref([
      {
        color: 'green',
        text: 'Added new settings menu',
      },
      {
        color: 'green',
        text: 'Added new calculation modes (selectable in settings menu)',
      },
      {
        color: 'green',
        text: 'Added explanation for calculation modes',
      },
      {
        color: 'green',
        text: 'Added this news modal',
      },
      {
        color: 'yellow',
        text: 'Moved from Google Analytics to Plausible Analytics',
      },
      {
        color: 'yellow',
        text: 'Moved language selection to new settings menu',
      },
    ])

    const close = () => {
      showModal.value = false
      setTimeout(() => {
        emit('close')
      }, 100)
    }

    return {
      close,
      icons,
      news,
    }
  },
}
</script>
