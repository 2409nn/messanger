<script setup>
import sideMenu from "../components/sideMenu.vue"
import Chats from "../components/chats.vue"
import conversation from "../components/conversation.vue"
import accountSettings from "../components/accountSettings.vue"
import { ref } from "vue";
import UserSearch from "@/components/userSearch.vue";

const isSettingsOpen = ref(false);
const isSearchOpen = ref(false);

function handleUpdateSettings(payload) {
  isSettingsOpen.value = payload;
}

function handleUpdateSearch(payload) {
  isSearchOpen.value = payload;
}

</script>

<template>

  <user-search
      :class="{'active': isSearchOpen}"
      v-model:is-popup-visible="isSearchOpen"
  />

  <account-settings
      :class="{'active': isSettingsOpen}"
      v-model:is-popup-visible="isSettingsOpen"
  />

  <main>
    <side-menu @settings-clicked="handleUpdateSettings" @search-clicked="handleUpdateSearch"/>
    <chats />
    <conversation />
  </main>
</template>