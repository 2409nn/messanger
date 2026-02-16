<script setup>
  import sideMenu from "./components/sideMenu.vue"
  import Chats from "./components/chats.vue"
  import conversation from "./components/conversation.vue"
  import activity from "./components/activity.vue"
  import userSearch from "./components/userSearch.vue"

</script>

<template>

<!--  <user-search></user-search>-->

    <main>
      <side-menu></side-menu>
      <chats></chats>
      <conversation></conversation>
<!--      <activity></activity>-->
    </main>
</template>

<style lang="scss" scoped>

</style>