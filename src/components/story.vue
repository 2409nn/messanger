<script setup>

import profileDefault from "@/assets/imgs/avatars/profile_default.png"

  defineProps({
    avatar: {
      type: String,
      default: profileDefault,
    },
    username: {
      type: String,
      required: true,
    }
  })
</script>

<template>
  <div class="story">
    <img :src=avatar alt="avatar" class="story__img">
    <p class="story__title">{{ username }}</p>
  </div>

</template>

<style scoped lang="scss">
  .story {
    display: inline-block;
    text-align: center;
    min-width: 90px;
    min-height: 100px;
    max-width: 90px;
    max-height: 100px;

    &__img {
      border-radius: 50%;
      border: 2px solid var(--main-background-color);
      width: 60px;
      height: 60px;
    }

    &__title {
      margin: 10px auto auto;
      text-overflow: ellipsis;
      flex-wrap: nowrap;
      height: 20px;
      width: 90%;
      text-align: center;
      overflow: hidden;
    }
  }
</style>