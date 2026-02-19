<script setup>
  import sideMenu from "./components/sideMenu.vue"
  import Chats from "./components/chats.vue"
  import conversation from "./components/conversation.vue"
  import activity from "./components/activity.vue"
  import userSearch from "./components/userSearch.vue"
  import accountSettings from "./components/accountSettings.vue"
  import router from "./router"

</script>

<template>

  <router-view />

<!--  <user-search></user-search>-->
  <account-settings>
<!--    <router-link to="/reg">Log out</router-link>-->
  </account-settings>

    <main>
      <side-menu></side-menu>
      <chats></chats>
      <conversation></conversation>
<!--      <activity></activity>-->
    </main>
</template>

<style lang="scss" scoped>

</style>