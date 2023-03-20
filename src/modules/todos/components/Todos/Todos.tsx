import { createSignal, Index } from 'solid-js';
import { addTodo, todosMemo } from '@/modules/todos/store';
import { Todo } from '@/modules/todos/components/Todos/Todo';
import { Button } from '@/components/UI/Button';
import { Input } from '@/components/UI/Input/Input';
import { KeyboardEventType, KeyCode } from '@/components/UI/types';

export const Todos = () => {
  const [todoText, setTodoText] = createSignal('');

  const addTodoToStore = () => {
    if (todoText().trim()) {
      addTodo(todoText());
      setTodoText('');
    }
  };
  const onClickHandler = () => {
    addTodoToStore();
  };
  const onPressEnterHandler = (evt: KeyboardEventType) => {
    if (evt.keyCode === KeyCode.Enter) addTodoToStore();
  };
  return (
    <>
      <div class='flex gap-2'>
        <Input.Text
          model={{ value: todoText, set: setTodoText }}
          placeholder='please enter the todo text'
          field='todo'
          onKeyPress={onPressEnterHandler}
        />
        <Button
          class='bg-green-500 text-white border-gray-400'
          title='save'
          onClick={onClickHandler}
        />
      </div>
      <Index each={todosMemo()}>
        {(todo, i) => (
          <>
            <Todo
              todo={todo()}
              index={i + 1}
            />
          </>
        )}
      </Index>
    </>
  );
};
