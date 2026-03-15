<script setup>
  import { useSettingsStore } from "@/stores/settings.js";

  const loadAccountSettings = async () => {
    const settings = useSettingsStore().settings;
    document.getElementById("app").setAttribute('data-theme', settings.darkMode ? 'dark' : 'light');
  }

  loadAccountSettings()

</script>

<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<style lang="scss" scoped>

</style>