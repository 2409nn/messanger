<script setup>
import sideMenu from "../components/sideMenu.vue"
import Chats from "../components/chats.vue"
import conversation from "../components/conversation.vue"
import accountSettings from "../components/accountSettings.vue"
import { ref } from "vue";
import UserSearch from "@/components/userSearch.vue";

const isSettingsOpen = ref(false);
const isSearchOpen = ref(false);
const activePage = ref("chats");

function handleUpdateSettings(payload) {
  isSettingsOpen.value = payload;
}

function handleUpdateSearch(payload) {
  isSearchOpen.value = payload;
}

function handleUpdateTab(payload) {
  activePage.value = payload;
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
    <side-menu
        @settings-clicked="handleUpdateSettings"
        @search-clicked="handleUpdateSearch"
        @page-clicked="handleUpdateTab"/>

    <chats :active-tab="activePage" />
    <conversation />
  </main>
</template>