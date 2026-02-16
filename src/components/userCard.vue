<script setup>

import profileDefault from "@/assets/imgs/avatars/profile_default.png"

  defineProps({
    avatar: {
      type: String,
      default: profileDefault,
    },
    firstName: String,
    lastName: String,
    username: {
      type: String,
      required: false,
    }
  })
</script>

<template>
  <div class="userCard">
    <img :src=avatar alt="avatar" class="userCard__avatar">
    <p class="userCard__firstname">{{ firstName }} {{ lastName }}</p>
    <p class="userCard__username">@{{ username }}</p>
  </div>
</template>

<style scoped lang="scss">
  .userCard {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 180px;
    height: 220px;
    background-color: var(--body-background);
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    align-items: center;

    &__avatar {
      border-radius: 50%;
      width: 70px;
    }

    &__firstname {
      font-weight: 500;
    }

    &__username {
      font-weight: 300;
    }

    &:hover {
      cursor: pointer;
    }
  }
</style>