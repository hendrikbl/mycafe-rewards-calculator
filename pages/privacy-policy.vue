<template>
  <div class="container mx-auto">
    <h1 class="text-center text-4xl font-extrabold py-10">Privacy Policy</h1>
    <h2 class="mt-5 font-bold text-2xl">Automatically Collected Information</h2>
    <p>
      When you use our Website, we automatically collect certain computer
      information by the interaction of your mobile phone or web browser with
      our Website. Such information is typically considered non-personal
      information. We also collect the following:
    </p>

    <h3 class="mt-4 font-bold text-xl">Cookies</h3>
    <p>
      Our Website uses "Cookies" to identify the areas of our Website that you
      have visited. A Cookie is a small piece of data stored on your computer or
      mobile device by your web browser. We use Cookies to personalize the
      Content that you see on our Website. Most web browsers can be set to
      disable the use of Cookies. However, if you disable Cookies, you may not
      be able to access functionality on our Website correctly or at all. We
      never place Personally Identifiable Information in Cookies.
    </p>

    <h2 class="mt-5 font-bold text-2xl">Service Providers</h2>
    <p>
      We employ third party companies and individuals to facilitate our Website
      ("Service Providers"), to provide our Website on our behalf, to perform
      Website-related services or to assist us in analyzing how our Website is
      used. These third-parties have access to your personal information only to
      perform these tasks on our behalf and are obligated not to disclose or use
      it for any other purpose.
    </p>

    <h3 class="mt-4 font-bold text-xl">Analytics</h3>
    <p>
      Google Analytics is a web analytics service offered by Google that tracks
      and reports website traffic. Google uses the data collected to track and
      monitor the use of our Service. This data is shared with other Google
      services. Google may use the collected data to contextualize and
      personalize the ads of its own advertising network.
    </p>
    <p>
      You can opt-out of having made your activity on the Service available to
      Google Analytics by installing the Google Analytics opt-out browser
      add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
      analytics.js, and dc.js) from sharing information with Google Analytics
      about visits activity.
    </p>
    <p>
      For more information on the privacy practices of Google, please visit the
      Google Privacy &amp; Terms web page:
      <a
        class="underline"
        href="http://www.google.com/intl/en/policies/privacy/"
        >http://www.google.com/intl/en/policies/privacy/</a
      >
    </p>

    <h3 class="mt-4 font-bold text-xl">Contact</h3>
    <p>
      If there are any questions regarding this privacy policy you may contact
      me at hendrik.bloess@gmail.com.
    </p>
    <nuxt-link class="text-link underline" to="/">
      <svg-icon
        type="mdi"
        :path="icons.home"
        class="w-10 h-10 p-1 mx-auto mt-14 bg-gray-500 rounded-full text-white"
      />
    </nuxt-link>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

import { mdiHomeOutline } from '@mdi/js'

export default {
  components: {
    SvgIcon,
  },

  data: () => {
    return {
      icons: {
        home: mdiHomeOutline,
      },
    }
  },
}
</script>

<style></style>
