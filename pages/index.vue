<template>
  <div class="container mx-auto h-screen flex flex-col my-5">
    <div class="mb-auto">
      <!-- NAVBAR -->
      <navbar></navbar>

      <!-- TOTALS -->
      <div
        :class="`
          grid grid-cols-1
          sm:grid-cols-1
          md:grid-cols-${totalCols.md}
          lg:grid-cols-${totalCols.lg}
          xl:grid-cols-${totalCols.xl}
          mx-auto
          mt-5
        `"
      >
        <input-card
          v-if="(mode == 1) | (mode == 3)"
          v-model="totals.tasks"
          color="purple"
          :title="$t('Tasks')"
          class="mx-5"
          :path="icons.task"
        />
        <input-card
          v-if="(mode == 2) | (mode == 3)"
          v-model="totals.trophies"
          color="yellow"
          :title="$t('Trophies')"
          class="mx-5"
          :path="icons.trophy"
        />
        <input-card
          v-model="totals.diamonds"
          color="blue"
          :title="$t('Diamonds')"
          class="mx-5"
          :path="icons.diamond"
        />
        <input-card
          v-model="totals.rubies"
          color="red"
          :title="$t('Rubies')"
          class="mx-5"
          :path="icons.ruby"
        />
      </div>

      <!-- PLAYERCOUNT -->
      <div class="flex flex-row justify-center">
        <input
          id="playercount"
          v-model="playercount"
          :class="`font-extrabold text-gray-800 dark:text-white focus:outline-none flex-none border-b-2 bg-transparent border-${
            playercount <= 20 ? 'gray' : 'red'
          }-500 p-2 mx-2 rounded-none`"
          type="number"
          min="0"
          name="playercount"
          :placeholder="$t('Participants')"
          :aria-label="$t('Participants')"
        />
      </div>

      <!-- PLAYERS -->
      <div v-for="player in players" :key="player.id" class="mx-2">
        <div v-if="player.id < playercount">
          <player-card v-model="players[player.id]" />
        </div>
      </div>

      <!-- ALERTS -->
      <div class="mx-5 flex-grow">
        <div v-if="alertType > 0" class="lg:w-3/4 xl:w-2/3 mx-auto my-2">
          <alert-card
            :text="alertText"
            :color="alertType === 1 ? 'yellow' : 'red'"
            :path="icons.alert"
          />
        </div>

        <!-- TROVE -->
        <trove-card v-model="trove" class="my-8" />
      </div>
    </div>

    <!-- FOOTER -->
    <app-footer class="mt-1" />
  </div>
</template>

<script>
import {
  mdiAlert,
  mdiCardsDiamondOutline,
  mdiDiamondStone,
  mdiGithub,
  mdiTrophyVariantOutline,
  mdiClipboardCheckOutline,
} from '@mdi/js'
import Navbar from '~/components/Navbar.vue'

export default {
  name: 'Index',
  components: { Navbar },

  data: () => {
    return {
      totals: {
        trophies: 0,
        rubies: 0,
        diamonds: 0,
        tasks: 0,
      },
      playercount: null,
      players: [],
      icons: {
        diamond: mdiDiamondStone,
        ruby: mdiCardsDiamondOutline,
        trophy: mdiTrophyVariantOutline,
        task: mdiClipboardCheckOutline,
        alert: mdiAlert,
        github: mdiGithub,
      },
    }
  },

  computed: {
    mode() {
      return this.$store.state.mode
    },
    trove() {
      const diamonds = this.players.reduce(function (a, b) {
        return a + b.diamonds
      }, 0)
      const rubies = this.players.reduce(function (a, b) {
        return a + b.rubies
      }, 0)

      return {
        diamonds: this.totals.diamonds - diamonds,
        rubies: this.totals.rubies - rubies,
      }
    },

    playerTrophies() {
      return this.players.reduce(function (a, b) {
        return Number(a) + Number(b.trophies)
      }, 0)
    },

    playerTasks() {
      return this.players.reduce(function (a, b) {
        return Number(a) + Number(b.tasks)
      }, 0)
    },

    totalCols() {
      return {
        md: this.mode === 3 ? 2 : 3,
        lg: this.mode === 3 ? 4 : 3,
        xl: this.mode === 3 ? 4 : 3,
      }
    },

    alertType() {
      if (
        (this.playerTasks < this.totals.tasks) |
        (this.playerTrophies < this.totals.trophies)
      ) {
        return 1
      } else if (
        (this.playerTasks > this.totals.tasks) |
        (this.playerTrophies > this.totals.trophies)
      ) {
        return 2
      } else {
        return 0
      }
    },

    alertText() {
      let mode = `${this.$t('Tasks')} ${this.$t('or')} ${this.$t('Trophies')}`
      const type =
        this.alertType === 1 ? this.$t('not_all') : this.$t('too_many')

      if (this.mode === 1) {
        mode = this.$t('Tasks')
      }
      if (this.mode === 2) {
        mode = this.$t('Trophies')
      }

      return `${type} ${mode} ${this.$t('assigned')}`
    },
  },

  watch: {
    playercount: {
      handler(val) {
        this.calculateAll()
      },
    },
    players: {
      deep: true,
      handler(val) {
        this.calculateAll()
      },
    },
    totals: {
      deep: true,
      handler(val) {
        this.calculateAll()
      },
    },
    mode: {
      handler(val) {
        this.calculateAll()
      },
    },
  },

  created() {
    this.createPlayers(20)
  },

  methods: {
    createPlayers(count) {
      for (let i = 0; i < count; i++) {
        this.players.push({
          id: i,
          name: '',
          trophies: null,
          diamonds: 0,
          rubies: 0,
          tasks: null,
        })
      }
    },

    calculate(currency, prop, player) {
      return (currency / this.totals[prop]) * player[prop]
    },

    calculateByProp(player, prop) {
      if (player.id >= this.playercount) player[prop] = null
      if (this.totals[prop] === 0 || this.totals[prop] === null) {
        player.diamonds = 0
        player.rubies = 0
        return player
      }

      player.diamonds =
        this.totals.diamonds === 0 || player.id >= this.playercount
          ? 0
          : Math.floor(this.calculate(this.totals.diamonds, prop, player))
      player.rubies =
        this.totals.rubies === 0 || player.id >= this.playercount
          ? 0
          : Math.floor(this.calculate(this.totals.rubies, prop, player))

      return player
    },

    calculateFiftyFifty(player) {
      const totals = {
        diamonds: this.totals.diamonds / 2,
        rubies: this.totals.rubies / 2,
      }
      if (player.id >= this.playercount) {
        player.trophies = null
        player.tasks = null
      }

      player.diamonds =
        totals.diamonds === 0 || player.id >= this.playercount
          ? 0
          : Math.floor(
              this.calculate(totals.diamonds, 'tasks', player) +
                this.calculate(totals.diamonds, 'trophies', player)
            )
      player.rubies =
        totals.rubies === 0 || player.id >= this.playercount
          ? 0
          : Math.floor(
              this.calculate(totals.rubies, 'tasks', player) +
                this.calculate(totals.rubies, 'trophies', player)
            )

      return player
    },

    calculateAll() {
      if (this.mode === 1 || this.mode === 2) {
        const prop = this.mode === 1 ? 'tasks' : 'trophies'

        this.players.forEach((player) => {
          player = this.calculateByProp(player, prop)
        })
      }

      if (this.mode === 3) {
        this.players.forEach((player) => {
          player = this.calculateFiftyFifty(player)
        })
      }
    },
  },
}
</script>

<style></style>
