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
            <path
              fill="currentColor"
              class="text-white"
              d="M17 4V2H7V4H2V11C2 12.1 2.9 13 4 13H7.1C7.5 14.96 9.04 16.5 11 16.9V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V16.9C14.96 16.5 16.5 14.96 16.9 13H20C21.1 13 22 12.1 22 11V4H17M4 11V6H7V11L4 11M15 12C15 13.65 13.65 15 12 15S9 13.65 9 12V4H15V12M20 11L17 11V6H20L20 11Z"
            />
          </template>
        </input-card>
        <input-card
          v-model="totals.diamonds"
          color="blue"
          title="Diamonds"
          class="mx-5"
        >
          <template #svgPath>
            <path
              fill="currentColor"
              class="text-white"
              d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z"
            />
          </template>
        </input-card>
        <input-card
          v-model="totals.rubies"
          color="red"
          title="Rubies"
          class="mx-5"
        >
          <template #svgPath>
            <path
              fill="currentColor"
              class="text-white"
              d="M12 2L5 12L12 22L19 12M7.44 12L12 5.5L16.56 12L12 18.5"
            />
          </template>
        </input-card>
      </div>
      <div class="flex flex-row justify-center">
        <input
          id="playercount"
          v-model="playercount"
          class="font-extrabold text-gray-800 focus:outline-none flex-none border-b-2 bg-transparent border-gray-500 p-2 mx-2"
          type="number"
          name="playercount"
          placeholder="Players"
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
              <path
                fill="currentColor"
                class="text-white"
                d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"
              />
            </template>
          </alert-card>
        </div>
        <div
          v-if="playerTrophies < totals.trophies"
          class="lg:w-3/4 xl:w-2/3 mx-auto my-2"
        >
          <alert-card text="Not all trophies assigned!" color="yellow">
            <template #svgPath>
              <path
                fill="currentColor"
                class="text-white"
                d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"
              />
            </template>
          </alert-card>
        </div>
        <trove-card v-model="trove" class="my-8" />
      </div>
    </div>
    <footer class="lg:w-3/4 xl:w-2/3 mx-auto mt-10">
      <hr class="border-t-4 rounded-full my-5 mx-5" />
      <div class="flex flex-row justify-center pb-5">
        <div class="font-bold">
          Made with <span class="text-red-500">❤</span> by
          <a href="https://github.com/hendrikbl" class="underline">hendrikbl</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
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
