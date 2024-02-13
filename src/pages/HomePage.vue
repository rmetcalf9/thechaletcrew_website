<template>
  <q-page class="flex flex-center">
    <div class="main-page fit row wrap justify-center items-center content-center">
      <div class="flex row first-section">
        <img
          class="big-logo"
          alt="The Chalet Crew Logo"
          src="~assets/main_logo.png"
        >
      </div>
      <div class="flex-break"></div>
      <div class="main-text">
        We are a community who love to try new things, new experiences and learn as part of a friendly group. Are you:
        <div class="flex-break"></div>
        <ul>
        <li>Looking for a beginner level ski holiday in 2025</li>
        <li>Enjoy a relaxed atmosphere with a friendly group</li>
        <li>Want your holidays to be hassle free. (No hunting for restaurants each night, no catching Ski busses)</li>
        <li>Based in London and can attend some events to get to know a group before you commit</li>
        </ul>
        In that case join our crew! Fill out the form below to be added to our whatsapp group where we arrange socials in london to get to know each other before organising and booking our Chalet adventure
      </div>

      <CrmWhatsappApplySubForm
        ref="CrmWhatsappApplySubForm"
      ></CrmWhatsappApplySubForm>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CrmWhatsappApplySubForm from '../components/CrmWhatsappApplySubForm.vue'

export default defineComponent({
  name: 'HomePage',
  data () {
    return {
      features: [
      'Cash Flowing property found for you',
      'Save Time and Energy',
      'Rental and SA Market Assessed',
      'Expert Insight',
      'Risks Addressed',
      'Due Diligence Support',
      'Below Market Value Price Negotiated',
      'Great ROI Deals Selected',
      'Bespoke Search Service Available',
      ]
    }
  },
  components: {
    CrmWhatsappApplySubForm
  }
})
</script>

<style>
.first-section {
  padding-bottom: 30px;
}
.flex-break {
  flex: 1 0 100%
}
.main-text {
  max-width: 500px;
}
.main-page {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
}
.big-logo {
  max-width: 200px;
}
</style>
