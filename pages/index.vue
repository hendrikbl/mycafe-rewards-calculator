<template>
  <div class="container mx-auto">
    <h1 class="text-center text-4xl font-extrabold py-10">
      MyCafe Rewards Calculator
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-20"
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
    <div>
      <label for="playercount">Players</label>
      <input
        id="playercount"
        v-model="playercount"
        class="rounded-full border-2"
        type="number"
        name="playercount"
      />
    </div>
    <div v-for="player in players" :key="player.id">
      <div v-if="player.id <= playercount">
        <!-- NAME -->
        <label :for="player.id + '-name'">Name</label>
        <input
          :id="player.id + '-name'"
          v-model="player.name"
          class="rounded-full border-black-400 border-2"
          type="text"
          :name="player.id + '-name'"
        />
        <label :for="player.id + '-trophies'">Trophies</label>
        <input
          :id="player.id + '-trophies'"
          v-model="player.trophies"
          class="rounded-full border-orange-400 border-2"
          type="number"
          :name="player.id + '-trophies'"
        />
        <span>Diamonds: {{ player.diamonds }}</span>
        <span>Rubies: {{ player.rubies }}</span>
      </div>
    </div>
    <div v-if="playerTrophies > totals.trophies" class="bg-red-500">
      Too many Trophies
    </div>
    <div v-if="playerTrophies < totals.trophies" class="bg-yellow-500">
      Not all Trophies assigned
    </div>
    <div>
      <h2>Treasure Trove</h2>
      <span>Diamonds: {{ trove.diamonds }}</span>
      <span>Rubies: {{ trove.rubies }}</span>
    </div>
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
      playercount: 10,
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
