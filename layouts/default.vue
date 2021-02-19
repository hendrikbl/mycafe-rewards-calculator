<template>
  <div class="text-gray-800 h-screen flex flex-col">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'Default',

  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>

<style></style>
