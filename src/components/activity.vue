<script setup>
  import story from './story.vue'
</script>

<template>
  <section class="activity">
    <div class="activity__heading heading">
      <h2 class="">Activity</h2>
    </div>

    <div class="activity__stories">
      <h3>Stories</h3>
      <ul class="activity__stories-list">
        <story username="Iskanderious"></story>
        <story username="Pavel"></story>
        <story username="Neo"></story>
        <story username="Iskanderious"></story>
        <story username="Pavel"></story>
        <story username="Neo"></story>
        <story username="Iskanderious"></story>
        <story username="Pavel"></story>
        <story username="Neo"></story>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .activity {
    background-color: var(--main-background-color);
    grid-column: 13/17;

    &__heading {
      background-color: var(--body-background);
    }

    &__stories {
      background-color: var(--body-background);

      &-list {
        display: flex;
        padding: 30px 10px;
        gap: 5px;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
</style>