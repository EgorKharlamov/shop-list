import { Accessor, Setter, splitProps } from 'solid-js';
import { Input } from '@/components/UI/Input/Input';
import { Button } from '@/components/UI/Button';
import { KeyboardEventType, KeyCode } from '@/components/UI/types';

interface TodoEditProps {
  model: TodoEditInputModel;
  exitEditMode: () => void;
  updateTodo: () => void;
}

interface TodoEditInputModel {
  todoValue: Accessor<string>;
  setTodo: Setter<string>;
}
export const TodoEdit = (props: TodoEditProps) => {
  const [local] = splitProps(props, ['model', 'exitEditMode', 'updateTodo']);
  const onPressEnterHandler = (evt: KeyboardEventType) => {
    if (evt.keyCode === KeyCode.Enter) local.updateTodo();
  };
  return (
    <>
      <Input.Text
        field='todo'
        onKeyPress={onPressEnterHandler}
        model={{ value: local.model.todoValue, set: local.model.setTodo }}
      />
      <Button
        class='bg-red-500 text-white border-gray-400'
        title='cancel'
        onClick={() => local.exitEditMode()}
      />
      <Button
        class='bg-green-500 text-white border-gray-400'
        title='apply'
        onClick={() => local.updateTodo()}
      />
    </>
  );
};
