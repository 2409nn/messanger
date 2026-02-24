<script setup>
  import sideMenu from "./components/sideMenu.vue"
  import Chats from "./components/chats.vue"
  import conversation from "./components/conversation.vue"
  import activity from "./components/activity.vue"
  import userSearch from "./components/userSearch.vue"
  import accountSettings from "./components/accountSettings.vue"
  import router from "./router"
  import { ref } from "vue";

  const isSettingsOpen = ref(false);

  function handleUpdateSettings(payload) {
    isSettingsOpen.value = payload;
  }
</script>

<template>

<!--  <user-search></user-search>-->
  <account-settings :class="{'active': isSettingsOpen.value}" v-model:is-popup-visible="isSettingsOpen.value">

  </account-settings>

    <main>
      <side-menu @settings-clicked="handleUpdateSettings"></side-menu>
      <chats></chats>
      <conversation></conversation>
<!--      <activity></activity>-->
    </main>
</template>

<style lang="scss" scoped>

</style>