<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-white">
      <q-toolbar class="main-toolbar column no-wrap justify-start items-center content-start">
        <div class="row no-wrap justify-start items-center content-start">
          <img
            class="main-logo"
            alt="The Chalet Crew Logo"
            src="~assets/main_logo.png"
          >
          <div class="column no-wrap justify-start items-center content-start">
            <q-toolbar-title>
              The Chalet Crew
            </q-toolbar-title>
            <div>
              Chalet Vibes, Ski Tribe
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <div class="bottom-sub-toolbar fit column wrap justify-center items-center content-center text-white">
      </div>
    </q-page-container>

    <q-footer elevated class="text-white">
      <div class="footer row">
        <div class="left_footer col-grow"><router-link to="/privacy" class="toolbar">Privacy Policy</router-link></div>
        <div class="right_footer">{{ copyright }}</div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Notify, Cookies } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      menu_items: [
        {name: 'Home', target: '/'}
      ]
    }
  },
  computed: {
    copyright () {
      return '© ' + new Date().getFullYear() + ' All Right Reserved'
    }
  },
  methods: {
    notifyAccept () {
      Cookies.set('cookiesAccepted', 'true', {
        secure: !window.location.href.includes('localhost'), // otherwise cookie not set on dev machines
        expires: 180 // expire in 180 days
      })
    },
    navigateToDataAndPrivacy () {
      this.$router.push('/privacy')
    },
    hasAcceptedCookie () {
      if (!Cookies.has('cookiesAccepted')) {
        return false
      }
      var cookieData = Cookies.get('cookiesAccepted')
      if (typeof (cookieData) === 'undefined') {
        return false
      }
      if (cookieData === 'true') {
        return true
      }
      return false
    },
    cookiePopup () {
      var TTT = this
      if (this.hasAcceptedCookie()) {
        return
      }
      Notify.create({
        color: 'bg-grey-2',
        message: 'By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. Some of these may be "third party cookies".',
        timeout: 0,
        actions: [
          { label: 'View Privacy Policy', color: 'primary', handler: TTT.navigateToDataAndPrivacy },
          { label: 'Accept', color: 'white', handler: TTT.notifyAccept }
        ]
      })
    }
  },
  mounted () {
    this.cookiePopup()
  }
})
</script>

<style>
.main-logo {
  width: 80px;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0px;
}
.bottom-logo {
  width: 100px;
  padding-top: 10px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  margin: 0px;
}
.main-toolbar {
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
  background-color: #0096f5;
}
.sub-toolbar {
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
}
.bottom-sub-toolbar {

}
.sub-toolbar-item {
  padding-left: 5px;
  padding-right: 5px;
}
a.toolbar {
  text-decoration: none;
  color: white;
  padding: 5px;
}
.left_footer {
  text-align: left;
  padding-left: 5px;
}
.right_footer {
  text-align: right;
  padding-right: 5px;
}
</style>
