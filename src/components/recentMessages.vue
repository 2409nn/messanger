<script setup>
  const usersData = {
    user_1: {
      firstname: "Ope",
      time: "16:47",
      message: "Gee, its been good news all day. i met someone special today. she's really pretty."
    },
    user_2: {
      firstname: "Bambam",
      time: "16:12",
      message: "Are you coming to class tomorrow? we have test."
    },
    user_3: {
      firstname: "Lucia",
      time: "15:27",
      message: "I miss you dear, when are you coming to see me."
    },
    user_4: {
      firstname: "Mijan",
      time: "16:00",
      message: "Baba what sup na, you still de Lagos?"
    }
  }
</script>

<template>
  <div class="recent">
    <ul class="recent__chats">
      <li class="recent__chat">
        <div class="recent__avatar">
          <img class="recent__avatar-img" src="../assets/imgs/avatars/user_1.jpg" alt="avatar">
          <span class="recent__avatar-online online"></span>
        </div>
        <div class="recent__info-top">
          <h3 class="recent__info-firstname">{{ usersData.user_1.firstname }}</h3>
          <p class="recent__info-time">{{ usersData.user_1.time }}</p>
        </div>
        <p class="message">{{ usersData.user_1.message }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>