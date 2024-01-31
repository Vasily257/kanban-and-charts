<script setup lang="ts">
import { computed } from 'vue';
import { BaseButton, CrossIcon, PencilIcon } from '@/components';
import type { Task } from '@/types/task';

/** Типы пропсов */
interface Props {
  /** ID задачи */
  id?: Task['id'];
  /** Заголовок задачи */
  title?: Task['title'];
}

/** Пропсы со значениями по умолчанию */
const props = withDefaults(defineProps<Props>(), {
  id: '',
  title: '',
});

/** Указан ли заголовок задачи */
const isTitle = computed(() => props.title !== '');
</script>

<template>
  <li v-if="isTitle" class="task-item">
    <NuxtLink>
      {{ title }}
      <BaseButton class="task-edit-button" aria-label="Edit a task">
        <PencilIcon class="task-edit-icon" />
      </BaseButton>
    </NuxtLink>
  </li>
  <li v-else class="task-template">
    <BaseButton class="task-template-button">
      <CrossIcon class="task-template-icon" />
      Add a task
    </BaseButton>
  </li>
</template>

<style>
.task-item {
  @apply relative rounded-md bg-white p-2;
}

.task-edit-button {
  @apply absolute right-2 top-1/2 -translate-y-1/2;
}

.task-edit-icon {
  @apply h-4 w-4 fill-black;
}

.task-template {
  @apply box-border rounded-md border-2 border-dashed  border-gray-500;
}

.task-template-button {
  @apply relative w-full gap-x-2 rounded-md p-1.5 hover:bg-white;
}

.task-template-icon {
  @apply h-4 w-4 rotate-45 fill-black;
}
</style>
