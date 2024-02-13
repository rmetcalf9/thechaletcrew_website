<template>
  <div class="fit row wrap justify-center items-center content-center">
    <div class="fit row wrap justify-center items-center content-center">
      <div class="form_heading">Apply to be added to whatsapp group</div>
      <div class="flex-break"></div>
      <q-form
        @reset="onReset"
        class="q-gutter-md"
        action="https://suitecrm.metcarob.com/index.php?entryPoint=WebToPersonCapture" method="post"
        name="WebToLeadForm"
        id="WebToLeadForm"
      >
      <q-input
        filled
        color="grey"
        v-model="first_name"
        label="First Name *"
        name="first_name"
        lazy-rules
        class="form-input"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        color="grey"
        v-model="last_name"
        name="last_name"
        label="Last Name"
        lazy-rules
        class="form-input"
      />
      <div class="flex-break"></div>
      <q-input
        filled
        color="grey"
        v-model="phone_mobile"
        name="phone_mobile"
        label="Phone *"
        lazy-rules
        class="form-input"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        color="grey"
        v-model="email1"
        name="email1"
        label="Email *"
        lazy-rules
        class="form-input"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        color="grey"
        v-model="description"
        name="description"
        label="Reasons for wanting to join"
        class="form-input"
      />
      <input name="campaign_id" id="campaign_id" type="hidden" value="c31e0330-389b-7f85-066e-65cb2ac4163a" />
      <input name="redirect_url" id="redirect_url" type="hidden" :value="postSubscribeUrl" />
      <input name="assigned_user_id" id="assigned_user_id" type="hidden" value="57d17220-c1e8-056b-f46f-654cc8c17b7c" />
      <input name="moduleDir" id="moduleDir" type="hidden" value="Leads" />

      <div>
        <q-btn label="Submit" type="submit" color="grey"/>
        <q-btn label="Reset" type="reset" color="lightgrey" flat class="q-ml-sm" />
      </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CrmWhatsappApplySubForm',
  data () {
    return {
      first_name: '',
      last_name: '',
      phone_mobile: '',
      email1: '',
      description: ''
    }
  },
  computed: {
    postSubscribeUrl () {
      const ele = window.location.href.split('/')
      return ele[0] + '//' + ele[2] + '/#/postsubscribe'
    }
  },
  methods: {
    onSubmit () {
      console.log('TODO onSubmit')
    },
    onReset () {
      this.first_name = ''
      this.last_name = ''
      this.phone_mobile = ''
      this.email1 = ''
      this.description = ''
    }
  }
})
</script>

<style>
.form-input {
  min-width: 300px;
  padding: 5px;
}
.flex-break {
  flex: 1 0 100%
}
.form_heading {
  margin: 0px;
  font-weight: 700;
  min-width: 200px;
}
</style>
