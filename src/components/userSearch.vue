<script setup>
  import userCard from "./userCard.vue"
  import { ref } from "vue"

  const is_active = ref(false)
  is_active.value = true

</script>

<template>
  <div :class="{ 'is_active': is_active }" class="userSearch">
    <h3 class="userSearch__heading">Text user</h3>
    <div class="userSearch__find">
      <input placeholder="Type username..." class="userSearch__find-input" type="text">
      <button class="userSearch__find-btn">
        <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40.8065" y="17.0292" width="83.8308" height="83.8308" rx="41.9154" transform="rotate(11.5448 40.8065 17.0292)" stroke="black" stroke-width="17"/>
          <path d="M132.414 155.005C135.179 158.799 140.495 159.634 144.29 156.87C148.084 154.106 148.919 148.789 146.155 144.995L139.284 150L132.414 155.005ZM104.147 101.77L97.2769 106.775L132.414 155.005L139.284 150L146.155 144.995L111.017 96.7649L104.147 101.77Z" fill="black"/>
        </svg>
      </button>
    </div>
    <div class="userSearch__emptyState">
      <svg class="userSearch__emptyState-pic" width="195" height="195" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_178_227)">
          <path d="M180.177 113.543C189.398 68.6308 160.277 24.7852 115.133 15.6111C69.9897 6.43706 25.9181 35.4086 16.6968 80.3208C7.47539 125.233 36.5962 169.079 81.74 178.253C126.884 187.427 170.955 158.455 180.177 113.543Z" stroke="black" stroke-width="17"/>
          <path d="M89.4588 66.5C89.4588 61.2533 85.1835 57 79.9098 57C74.636 57 70.3608 61.2533 70.3608 66.5V73.5C70.3608 78.7467 74.636 83 79.9098 83C85.1835 83 89.4588 78.7467 89.4588 73.5V66.5Z" fill="black"/>
          <path d="M132.68 89.5C132.68 84.2533 128.405 80 123.131 80C117.858 80 113.582 84.2533 113.582 89.5V96.5C113.582 101.747 117.858 106 123.131 106C128.405 106 132.68 101.747 132.68 96.5V89.5Z" fill="black"/>
          <path d="M51.2337 110.971L122.6 131.971" stroke="black" stroke-width="14" stroke-linecap="round"/>
        </g>
        <defs>
          <clipPath id="clip0_178_227">
            <rect width="195" height="195" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <p class="userSearch__emptyState-title">nothing found</p>
    </div>

    <div class="userSearch__found">
      <ul class="userSearch__found-users">
        <li class="userSearch__found-user"><userCard first-name="Iskander" username="iskanderious"></userCard></li>
        <li class="userSearch__found-user"><userCard first-name="Iskander" username="iskanderious"></userCard></li>
      </ul>

    </div>
  </div>
</template>

<style scoped lang="scss">
.userSearch {
  display: block;
  background-color: var(--main-background-color);
  width: 700px;
  height: 550px;
  max-height: 550px;
  padding: 20px;
  border-radius: 16px;

  position: absolute;
  left: calc(50% - 700px/2);
  top: calc(50% - 550px/2 - 100px);
  //overflow: hidden;

  border: 1px solid var(--divider-border-color);

  &__heading {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 25px;
  }

  &__find {
    display: flex;
    align-items: center;
    background-color: var(--body-background);
    padding: 5px 20px;
    border-radius: 10px;

    &-input {
      background: none;
      border: none;
      width: 100%;
      padding: 10px;
      outline: none;

      &::placeholder {
        color: var(--secondary-text-color);
      }
    }

    &-btn {
      background: none;
      border: none;

      svg {
        width: 25px;
        height: 25px;
      }
    }
  }

  &__emptyState {
    display: none;
    //position: relative;
    text-align: center;
    opacity: 30%;
    margin-top: 100px;

    &-title {
      font-weight: 400;
      user-select: none;
    }
  }

  &__found {
    margin-top: 30px;
    overflow: scroll;
    scrollbar-width: none;
    max-height: 80%;

    &-users {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;

      &::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;
      }
    }
  }
}
</style>