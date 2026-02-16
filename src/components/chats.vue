<script setup>
  import switcher from "./switcher.vue"
  import recentMessages from "./recentMessages.vue"

</script>

<!-- todo: сделать заглушку если чат не выбран -->

<template>
  <section class="chats">
    <div class="chats__heading heading">
      <h2 class="chats__heading-title">Recent Messages</h2>
    </div>
    <switcher firstName="Chat" secondName="Groups"></switcher>
    <recent-messages></recent-messages>
  </section>
</template>

<style scoped lang="scss">
  .chats {
    grid-column: 2/6;
    background-color: var(--body-background);

    &__heading {
      padding: 20px;
    }
  }
</style>