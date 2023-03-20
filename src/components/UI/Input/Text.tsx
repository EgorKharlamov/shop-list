import { Accessor, Setter, splitProps } from 'solid-js';
import { InputEventType, KeyboardEventType } from '@/components/UI/types';

interface InputProps {
  model: InputModel;
  placeholder?: string;
  field?: string;
  title?: string;

  onKeyPress?: (evt: KeyboardEventType) => void;
}

interface InputModel {
  value: Accessor<string>;
  set: Setter<string>;
}

export default function (props: InputProps) {
  const [local, others] = splitProps(props, [
    'model',
    'placeholder',
    'onKeyPress',
  ]);

  const onInputHandler = (value: InputEventType) => {
    local.model.set(value.currentTarget.value);
  };

  return (
    <>
      <label>
        <input
          class='border border-black px-2 py-0.5 rounded-md w-full'
          type='text'
          onInput={onInputHandler}
          onKeyPress={(e: KeyboardEventType) =>
            local.onKeyPress && local.onKeyPress(e)
          }
          value={local.model.value()}
          placeholder={local.placeholder}
        />
      </label>
    </>
  );
}
