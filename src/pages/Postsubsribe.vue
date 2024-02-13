<template>
  <q-page class="flex flex-center">
    <div class="main-page fit row wrap justify-center items-center content-center">
      <div class="flex row first-section">
      </div>
      <div class="flex-break"></div>
      <div class="main-text">
        Thank you! We will be in touch
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostsubscribePage',
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
  max-width: 300px;
}
</style>
