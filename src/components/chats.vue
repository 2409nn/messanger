<script setup>
  import switcher from "./switcher.vue"
  import recentMessages from "./recentMessages.vue"

</script>

<!-- todo: сделать заглушку если чат не выбран -->
<!-- todo: сделать объект с сообщениями -->
<!-- todo: сверстать поле для переписки -->

<template>
  <section class="chats">
    <div class="chats__heading heading">
      <h2 class="chats__title">Recent Messages</h2>
    </div>
    <switcher firstName="Chat" secondName="Groups"></switcher>
    <recent-messages></recent-messages>
  </section>
</template>

<style scoped lang="scss">
  .chats {
    grid-column: 1/5;
    background-color: #e7cfcf;
    padding: 20px;

    &__title {
      font-weight: 400;
      font-size: 20px;
    }
  }
</style>