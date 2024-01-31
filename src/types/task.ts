/** Задача */
export interface Task {
  id: string;
  title: string;
}

/** Колонка (стадия) */
export interface Column {
  name: string;
  tasks: Task[];
}
