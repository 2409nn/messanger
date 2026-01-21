<script setup>
  import sideMenu from "./components/sideMenu.vue"
  import Chats from "./components/chats.vue"
  import conversation from "./components/conversation.vue"

</script>

<template>
    <side-menu></side-menu>
    <main>
      <chats></chats>
      <conversation></conversation>
    </main>
</template>

<style lang="scss" scoped>

</style>