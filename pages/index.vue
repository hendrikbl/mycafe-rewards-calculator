<template>
  <div class="container mx-auto h-screen flex flex-col">
    <div class="mb-auto">
      <!-- TITLE -->
      <h1 class="text-center text-4xl font-extrabold py-10">
        MyCafé Rewards Calculator
      </h1>

      <!-- TOTALS -->
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:w-3/4 xl:w-2/3 mx-auto"
      >
        <input-card
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
      <div v-for="player in players" :key="player.id" class="mx-5">
        <div v-if="player.id < playercount">
          <player-card v-model="players[player.id]" />
        </div>
      </div>

      <!-- ALERTS -->
      <div class="mx-5 flex-grow">
        <div
          v-if="playerTrophies > totals.trophies"
          class="lg:w-3/4 xl:w-2/3 mx-auto my-2"
        >
          <alert-card
            :text="$t('too_many_trophies')"
            color="red"
            :path="icons.alert"
          />
        </div>
        <div
          v-if="playerTrophies < totals.trophies"
          class="lg:w-3/4 xl:w-2/3 mx-auto my-2"
        >
          <alert-card
            :text="$t('not_all_trophies')"
            color="yellow"
            :path="icons.alert"
          />
        </div>

        <!-- TROVE -->
        <trove-card v-model="trove" class="my-8" />
      </div>
    </div>

    <!-- THEME TOGGLE -->
    <div class="flex justify-center mx-auto mt-5">
      <theme-toggle />
    </div>

    <!-- FOOTER -->
    <app-footer class="mt-1" />
    <cookie-consent v-if="showCookieConsent" @accepted="consentCookies" />
  </div>
</template>

<script>
import { bootstrap } from 'vue-gtag'

import {
  mdiAlert,
  mdiCardsDiamondOutline,
  mdiDiamondStone,
  mdiGithub,
  mdiTrophyVariantOutline,
} from '@mdi/js'

export default {
  name: 'Index',

  data: () => {
    return {
      totals: {
        trophies: null,
        rubies: null,
        diamonds: null,
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
      allowCookies: false,
      showCookieConsent: false,
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
    if (this.getCookieConsent() !== 'true') {
      this.showCookieConsent = true
    }
  },

  methods: {
    createPlayers() {
      for (let i = 0; i < 20; i++) {
        this.players.push({
          id: i,
          name: '',
          trophies: null,
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
        if (this.totals.trophies === 0 || this.totals.trophies === null) return

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

    consentCookies(allowed) {
      if (allowed) {
        bootstrap().then((gtag) => {
          this.showCookieConsent = false
          localStorage.setItem('cookies:accepted', true)
          location.reload()
        })
      } else {
        this.showCookieConsent = false
        localStorage.setItem('cookies:accepted', false)
      }
    },

    getCookieConsent() {
      return localStorage.getItem('cookies:accepted', true)
    },
  },
}
</script>

<style></style>
