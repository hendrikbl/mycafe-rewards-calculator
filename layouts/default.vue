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
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },

      bodyAttrs: {
        class: 'dark:bg-gray-800',
      },

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta:description'),
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.$t('meta:description'),
        },
        ...i18nHead.meta,
      ],

      link: [...i18nHead.link],
    }
  },
}
</script>

<style></style>
