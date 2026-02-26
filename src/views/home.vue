<script setup>
import sideMenu from "../components/sideMenu.vue"
import Chats from "../components/chats.vue"
import conversation from "../components/conversation.vue"
import accountSettings from "../components/accountSettings.vue"
import { ref } from "vue";

const isSettingsOpen = ref(false);

function handleUpdateSettings(payload) {
  isSettingsOpen.value = payload;
}
</script>

<template>
  <account-settings
      :class="{'active': isSettingsOpen}"
      v-model:is-popup-visible="isSettingsOpen"
  />

  <main>
    <side-menu @settings-clicked="handleUpdateSettings" />
    <chats />
    <conversation />
  </main>
</template>