import { Setter, splitProps } from 'solid-js';
import { Button } from '@/components/UI/Button';
import { removeTodo } from '@/modules/todos/store';
import { TodoMode } from '@/modules/todos/types';

interface TodoInfoProps {
  model: TodoInfoButtonModel;
  index: number;
  text: string;
  complete: boolean;
  id: string | number;
}

interface TodoInfoButtonModel {
  setTodo: Setter<string>;
  setMode: Setter<TodoMode>;
}
export const TodoInfo = (props: TodoInfoProps) => {
  const [local] = splitProps(props, [
    'text',
    'index',
    'complete',
    'model',
    'id',
  ]);
  const enterEditMode = () => {
    local.model.setTodo(local.text);
    local.model.setMode(TodoMode.Edit);
  };
  return (
    <>
      <div
        classList={{
          'line-through text-gray-400': local.complete,
          'transition-all': true,
        }}
      >
        <span>{local.index}. </span>
        <span>{local.text}</span>
      </div>
      <Button
        class='bg-blue-500 text-white border-gray-400'
        title='edit'
        onClick={enterEditMode}
      />
      <Button
        class='bg-red-500 text-white border-gray-400'
        title='delete'
        onClick={() => removeTodo(local.id)}
      />
    </>
  );
};
