<script setup lang="ts">
import { computed } from 'vue';
import { BaseButton, CrossIcon, Task } from '@/components';
import type { Column } from '@/types/task';

/** Типы пропсов */
interface Props {
  /** Название колонки */
  name?: Column['name'];
  /** Список задач */
  tasks?: Column['tasks'];
}

/** Пропсы со значениями по умолчанию */
const props = withDefaults(defineProps<Props>(), {
  name: '',
  tasks: () => [],
});

/** Указано ли название колонки */
const isName = computed(() => props.name !== '');
</script>

<template>
  <li v-if="isName" class="column-item">
    <h2 class="column-title">{{ name }}</h2>
    <textarea id="" class="column-title-area"></textarea>
    <BaseButton class="column-delete-button" aria-label="Delete a column">
      <CrossIcon class="column-delete-icon" />
    </BaseButton>
    <ul class="column-tasks">
      <template v-for="task in tasks" :key="task.id">
        <Task :id="task.id" :title="task.title" />
      </template>
      <Task />
    </ul>
  </li>
  <li v-else class="column-template">
    <BaseButton class="column-template-button">
      <CrossIcon class="column-template-icon" />
      Add a column
    </BaseButton>
  </li>
</template>

<style>
.column-item {
  @apply relative w-64 rounded-lg bg-gray-200 p-4 shadow-md;
}

.column-title {
  @apply text-xl font-semibold;
}

.column-title-area {
  @apply hidden;
}

.column-delete-button {
  @apply absolute right-4 top-4;
}

.column-delete-icon {
  @apply h-4 w-4 fill-black;
}

.column-template {
  @apply flex h-20 w-64 items-center justify-center rounded-lg border-2 border-dashed border-white fill-white
          text-white hover:border-gray-500 hover:bg-gray-200 hover:fill-black hover:text-black hover:shadow-md;
}

.column-template-button {
  @apply flex h-full w-full items-center justify-center gap-x-2;
}

.column-template-icon {
  @apply h-4 w-4 rotate-45;
}

.column-tasks {
  @apply mt-4 flex flex-col gap-y-4;
}
</style>
