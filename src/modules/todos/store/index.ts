import { createStore, produce } from 'solid-js/store';
import { createMemo } from 'solid-js';
import { nanoid } from 'nanoid';
import { TodoItem, TodoStore } from '@/modules/todos/types';
import { Id, Nullable } from '@/types';

const baseTodoItem = (): TodoItem => ({
  id: nanoid(),
  text: '',
  complete: false,
  author: 'Test User',
  createdDate: new Date().toISOString(),
  modifiedDate: null as Nullable<string>,
  removed: false,
});

const mockData: TodoStore = {
  todos: [
    {
      ...baseTodoItem(),
      text: 'My first todo item',
    },
  ],
};

export const [todos, setTodos] = createStore<TodoStore>(mockData);
export const addTodo = (todo: string) => {
  setTodos(
    produce((s) => {
      s.todos.push({ ...baseTodoItem(), text: todo });
    })
  );
};

export const toggleCheckboxTodo = (id: Id) => {
  setTodos(
    'todos',
    (todo) => todo.id === id,
    'complete',
    (t) => !t
  );
};
export const updateTodo = (id: Id, text: string) => {
  setTodos(
    'todos',
    (todo) => todo.id === id,
    () => ({ text, complete: false })
  );
};

export const removeTodo = (id: Id) => {
  setTodos(
    'todos',
    (todo) => todo.id === id,
    'removed',
    () => true
  );
};

export const todosMemo = createMemo(() =>
  todos.todos.filter((todo) => !todo.removed)
);
