<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTasksStore } from '@/stores/task';
import { Column } from '@/components';

// Инициализировать хранилище задач
const taskStore = useTasksStore();
const { columnNames, ixTasks } = storeToRefs(taskStore);
const { initTasks } = useTasksStore();

// Инициализировать задачи, индексированные по имени колонки
initTasks();
</script>

<template>
  <section class="kanban">
    <h1 class="page-title">The Kanban board</h1>
    <ul class="column-list">
      <template v-for="columnName in columnNames" :key="columnName">
        <Column :name="columnName" :tasks="ixTasks[columnName]" />
      </template>
      <Column />
    </ul>
  </section>
</template>

<style scoped>
.kanban {
  @apply flex h-screen flex-col items-center bg-blue-500 p-4;
}

.page-title {
  @apply mb-8 text-center text-4xl font-bold text-white;
}

.column-list {
  @apply flex flex-row flex-nowrap gap-x-4 self-start;
}
</style>
