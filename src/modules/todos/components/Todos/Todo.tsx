import { createEffect, createSignal, Show, splitProps } from 'solid-js';
import { TodoItem, TodoMode } from '@/modules/todos/types';
import { Checkbox } from '@/components/UI/Checkbox';
import { toggleCheckboxTodo, updateTodo } from '@/modules/todos/store';
import { TodoInfo } from '@/modules/todos/components/Todos/TodoInfo';
import { TodoEdit } from '@/modules/todos/components/Todos/TodoEdit';

interface Props {
  todo: TodoItem;
  index: number;
}

export const Todo = (props: Props) => {
  const [local] = splitProps(props, ['todo', 'index']);
  const [mode, setMode] = createSignal(TodoMode.View);
  const [todo, setTodo] = createSignal('');
  createEffect(() => {
    setTodo(local.todo.text);
  });

  const updateTodoInStore = () => {
    if (todo().trim()) {
      updateTodo(local.todo.id, todo());
      setTodo('');
      setMode(TodoMode.View);
    }
  };

  const exitEditMode = () => {
    setTodo('');
    setMode(TodoMode.View);
  };
  return (
    <>
      <div class='grid grid-cols-[25px_300px_55px_100px] gap-3 items-center max-w-[523px]'>
        <Checkbox
          class='mr-1 w-5 h-5'
          complete={local.todo.complete}
          onClick={() => toggleCheckboxTodo(local.todo.id)}
          disabled={mode() === TodoMode.Edit}
        />

        <Show
          when={mode() === TodoMode.View}
          fallback={
            <TodoEdit
              model={{ todoValue: todo, setTodo: setTodo }}
              exitEditMode={exitEditMode}
              updateTodo={updateTodoInStore}
            />
          }
        >
          <TodoInfo
            model={{ setMode: setMode, setTodo: setTodo }}
            index={local.index}
            text={local.todo.text}
            complete={local.todo.complete}
            id={local.todo.id}
          />
        </Show>
      </div>
    </>
  );
};
