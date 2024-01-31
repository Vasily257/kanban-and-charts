<template>
  <button :type="type" class="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { type ButtonHTMLAttributes, withDefaults } from 'vue';

/** Типы пропсов */
interface Props {
  /** Тип кнопки */
  type?: ButtonHTMLAttributes['type'];
}

/** Пропсы со значениями по умолчанию */
withDefaults(defineProps<Props>(), {
  type: 'button',
});
</script>

<style scoped>
.button {
  @apply box-border inline-flex cursor-pointer items-center border-2 border-transparent text-center;
}
</style>
