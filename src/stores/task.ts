import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type Task } from '@/types/task';

/** Хранилище задач */
export const useTasksStore = defineStore('tasks', () => {
  /** Названия колонок, где находятся задачи */
  const columnNames = ref(['Backlog', 'Doing', 'Review', 'Done']);

  /** Задачи, индексированные по названию колонки */
  const ixTasks = ref<Record<string, Task[]>>({});

  /**
   * Добавить колонку
   * @param addedColumnName имя добавляемой колонки
   */
  const addColumn = (addedColumnName: string) => {
    const hasProperty = Object.prototype.hasOwnProperty.call(ixTasks.value, addedColumnName);

    if (!hasProperty) {
      columnNames.value.push(addedColumnName);

      ixTasks.value[addedColumnName] = [];
    }
  };

  /**
   * Удалить колонку
   * @param deletedColumnName имя удаляемой колонки
   */
  const deleteColumn = (deletedColumnName: string) => {
    const hasProperty = Object.prototype.hasOwnProperty.call(ixTasks.value, deletedColumnName);

    if (hasProperty) {
      columnNames.value = columnNames.value.filter((name) => name !== deletedColumnName);

      delete ixTasks.value[deletedColumnName];
    }
  };

  /**
   * Инициализировать задачи
   * @param columnNames первоначальный список колонок
   */
  const initTasks = () => {
    columnNames.value.forEach((columnName) => {
      ixTasks.value[columnName] = [
        { id: '1', title: 'New task' },
        { id: '2', title: 'New task' },
        { id: '3', title: 'New task' },
        { id: '4', title: 'New task' },
        { id: '5', title: 'New task' },
      ];
    });
  };

  /**
   * Добавить новую задачу
   * @param columnName имя колонки, куда добавляется задача
   * @param task добавляемая задача
   */
  const addTask = (columnName: string, task: Task) => {
    if (!ixTasks.value[columnName]) {
      ixTasks.value[columnName] = [];
    }

    ixTasks.value[columnName].push(task);
  };

  /**
   * Удалить задачу
   * @param columnName имя колонки, откуда удаляется задача
   * @param taskId id удаляемой задачи
   */
  const deleteTask = (columnName: string, taskId: Task['id']) => {
    const tasks = ixTasks.value[columnName];

    ixTasks.value[columnName] = tasks.filter((task) => task.id !== taskId);
  };

  return { columnNames, ixTasks, addColumn, deleteColumn, initTasks, addTask, deleteTask };
});
