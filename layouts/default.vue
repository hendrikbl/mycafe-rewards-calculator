<template>
  <div class="text-gray-800 dark:text-white h-screen flex flex-col">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'Default',

  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      bodyAttrs: {
        class: 'dark:bg-gray-800',
      },
      ...i18nHead,
    }
  },
}
</script>

<style></style>
