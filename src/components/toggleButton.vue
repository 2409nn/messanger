<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['update:modelValue']);

</script>

<template>


  <label class="toggle-switch" :class="{ 'is-disabled': disabled }">

    <span v-if="label" class="label-text">{{ label }}</span>

    <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="slider"></span>

  </label>
</template>

<style scoped>

.toggle-switch {
  align-items: center;
  cursor: pointer;
  gap: 10px;
  user-select: none;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid var(--divider-border-color);
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: relative;
  width: 44px;
  height: 22px;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 22px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

input:checked + .slider {
  background-color: var(--online-sign-background);
}

input:checked + .slider:before {
  transform: translateX(22px);
}

.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.label-text {
  font-family: sans-serif;
  font-size: 14px;
  color: #333;
}
</style>