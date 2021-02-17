<template>
  <div class="container mx-auto h-screen">
    <div>
      <h1 class="text-center text-4xl font-extrabold py-10">
        MyCafe Rewards Calculator
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:w-3/4 xl:w-2/3 mx-auto"
      >
        <input-card
          v-model="totals.trophies"
          color="yellow"
          title="Trophies"
          class="mx-5"
        >
          <template #svgPath>
            <path fill="currentColor" class="text-white" :d="icons.trophy" />
          </template>
        </input-card>
        <input-card
          v-model="totals.diamonds"
          color="blue"
          title="Diamonds"
          class="mx-5"
        >
          <template #svgPath>
            <path fill="currentColor" class="text-white" :d="icons.diamond" />
          </template>
        </input-card>
        <input-card
          v-model="totals.rubies"
          color="red"
          title="Rubies"
          class="mx-5"
        >
          <template #svgPath>
            <path fill="currentColor" class="text-white" :d="icons.ruby" />
          </template>
        </input-card>
      </div>
      <div class="flex flex-row justify-center">
        <input
          id="playercount"
          v-model="playercount"
          :class="`font-extrabold text-gray-800 focus:outline-none flex-none border-b-2 bg-transparent border-${
            playercount <= 20 ? 'gray' : 'red'
          }-500 p-2 mx-2`"
          type="number"
          name="playercount"
          placeholder="Players"
          min="0"
        />
      </div>
      <div v-for="player in players" :key="player.id" class="mx-5">
        <div v-if="player.id <= playercount">
          <player-card v-model="players[player.id]" />
        </div>
      </div>
      <div class="mx-5 flex-grow">
        <div
          v-if="playerTrophies > totals.trophies"
          class="lg:w-3/4 xl:w-2/3 mx-auto my-2"
        >
          <alert-card text="Too many trophies assigned!" color="red">
            <template #svgPath>
              <path fill="currentColor" class="text-white" :d="icons.alert" />
            </template>
          </alert-card>
        </div>
        <div
          v-if="playerTrophies < totals.trophies"
          class="lg:w-3/4 xl:w-2/3 mx-auto my-2"
        >
          <alert-card text="Not all trophies assigned!" color="yellow">
            <template #svgPath>
              <path fill="currentColor" class="text-white" :d="icons.alert" />
            </template>
          </alert-card>
        </div>
        <trove-card v-model="trove" class="my-8" />
      </div>
    </div>
    <footer class="lg:w-3/4 xl:w-2/3 mx-auto mt-10">
      <hr class="border-t-4 rounded-full my-5 mx-5" />
      <div class="grid grid-cols-3 grid pb-5 mx-5">
        <div class="text-left">
          <a href="https://github.com/hendrikbl/mycafe-rewards-calculator">
            <svg viewBox="0 0 24 24" class="h-6">
              <path fill="currentColor" :d="icons.github" />
            </svg>
          </a>
        </div>
        <div class="font-bold text-center">
          Made with <span class="text-red-500">❤</span> by
          <a href="https://github.com/hendrikbl" class="underline">hendrikbl</a>
        </div>
        <a
          href="http://melsoft-games.com/"
          class="font-semibold underline text-right"
          >Melsoft Games</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
import {
  mdiAlert,
  mdiCardsDiamondOutline,
  mdiDiamondStone,
  mdiGithub,
  mdiTrophyVariantOutline,
} from '@mdi/js'

export default {
  data: () => {
    return {
      totals: {
        trophies: 0,
        rubies: 0,
        diamonds: 0,
      },
      playercount: null,
      players: [],
      icons: {
        diamond: mdiDiamondStone,
        ruby: mdiCardsDiamondOutline,
        trophy: mdiTrophyVariantOutline,
        alert: mdiAlert,
        github: mdiGithub,
      },
    }
  },

  computed: {
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
  },

  created() {
    this.createPlayers(20)
  },

  methods: {
    createPlayers() {
      for (let i = 1; i <= 20; i++) {
        this.players.push({
          id: i,
          name: '',
          trophies: 0,
          diamonds: 0,
          rubies: 0,
        })
      }
    },

    calculate(currency, player) {
      return (currency / this.totals.trophies) * player.trophies
    },

    calculateAll() {
      this.players.forEach((player) => {
        if (this.totals.trophies === 0) return

        player.diamonds =
          this.totals.diamonds === 0 || player.id > this.playercount
            ? 0
            : Math.floor(this.calculate(this.totals.diamonds, player))
        player.rubies =
          this.totals.rubies === 0 || player.id > this.playercount
            ? 0
            : Math.floor(this.calculate(this.totals.rubies, player))
      })
    },
  },
}
</script>

<style></style>
