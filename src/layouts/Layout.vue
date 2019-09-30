<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header
      q-toolbar
        q-btn(flat round dense @click='leftDrawerOpen = !leftDrawerOpen' aria-label="menu")
          q-icon(name="ion-menu")
        q-toolbar-title(@click="$router.push('/')") Quasar x Vue
    q-drawer(v-model="leftDrawerOpen")
      q-list
        q-item(to="/#")
          q-item-section(avatar)
            q-icon(name="ion-home")
          q-item-section 홈
    q-page-container
      router-view
</template>

<script lang="ts">
import Vue from 'vue'
import { openURL } from 'quasar'

export default Vue.extend({
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      contentInsetLevel: 0.5
    }
  },
  methods: {
    openURL
  }
})
</script>

<style>
</style>
