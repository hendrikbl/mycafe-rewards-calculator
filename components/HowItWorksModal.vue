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
              <h3>{{ $t('How_it_works') }}</h3>
              <hr class="my-4" />

              <div class="mt-4">
                <div>
                  <h4 class="font- text-xl">
                    {{ $t('by_tasks') }}
                  </h4>
                  <katex-element
                    :expression="`${vars.playerDiamonds} \\approx \\frac{${vars.totalDiamonds} * ${vars.playerTasks}}{${vars.totalTasks}}`"
                  /><br />
                  <katex-element
                    :expression="`${vars.playerRubies} \\approx \\frac{${vars.totalRubies} * ${vars.playerTasks}}{${vars.totalTasks}}`"
                  />
                  <hr class="my-4" />
                </div>
                <div class="mb-4">
                  <h4 class="font-bold text-xl">{{ $t('by_trophies') }}</h4>
                  <katex-element
                    :expression="`${vars.playerDiamonds} \\approx \\frac{${vars.totalDiamonds} * ${vars.playerTrophies}}{${vars.totalTrophies}}`"
                  /><br />
                  <katex-element
                    :expression="`${vars.playerRubies} \\approx \\frac{${vars.totalRubies} * ${vars.playerTrophies}}{${vars.totalTrophies}}`"
                  />
                  <hr class="my-4" />
                </div>
                <div class="mb-4">
                  <h4 class="font-bold text-xl">50/50</h4>
                  <katex-element
                    :expression="`${vars.playerDiamonds} \\approx \\frac{${vars.totalDiamonds}}{2} * (\\frac{${vars.playerTrophies}}{${vars.totalTrophies}} + \\frac{${vars.playerTasks}}{${vars.totalTasks}})`"
                  /><br />
                  <katex-element
                    :expression="`${vars.playerRubies} \\approx \\frac{${vars.totalRubies}}{2} * (\\frac{${vars.playerTrophies}}{${vars.totalTrophies}} + \\frac{${vars.playerTasks}}{${vars.totalTasks}})`"
                  />
                  <hr class="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 flex flex-row justify-center">
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

    const vars = ref({
      totalDiamonds: '\\htmlClass{text-blue-500}{totalDiamonds}',
      playerDiamonds: '\\htmlClass{text-blue-500}{playerDiamonds}',
      totalRubies: '\\htmlClass{text-red-500}{totalRubies}',
      playerRubies: '\\htmlClass{text-red-500}{playerRubies}',
      totalTasks: '\\htmlClass{text-purple-500}{totalTasks}',
      playerTasks: '\\htmlClass{text-purple-500}{playerTasks}',
      totalTrophies: '\\htmlClass{text-yellow-500}{totalTrophies}',
      playerTrophies: '\\htmlClass{text-yellow-500}{playerTrophies}',
    })

    const close = () => {
      showModal.value = false
      setTimeout(() => {
        emit('close')
      }, 100)
    }

    return {
      close,
      icons,
      vars,
    }
  },
}
</script>
