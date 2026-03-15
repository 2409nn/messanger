<script setup>
  const props = defineProps({
    elementDOM: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div class="bottomScroller">
    <button class="bottomScroller__btn" @click="() => {
      elementDOM.scrollTo({
        top: elementDOM.scrollHeight,
        behavior: 'smooth',
      })
    }">
      <svg class="bottomScroller__icon" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.7735 2C6.7735 1.44772 6.32578 1 5.7735 1C5.22121 1 4.7735 1.44772 4.7735 2H5.7735H6.7735ZM5.7735 10L11.547 0H-4.29153e-06L5.7735 10Z" fill="currentColor"/>
      </svg>

    </button>
  </div>
</template>

<style scoped lang="scss">
  .bottomScroller {
    position: absolute;
    right: 20px;
    bottom: 120px;
    z-index: 50;

    &__btn {
      background: var(--main-background-color);
      border: 1px solid var(--divider-border-color);
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }

    &__icon {
      color: var(--secondary-text-color);
    }
  }
</style>