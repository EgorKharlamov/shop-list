import { splitProps } from 'solid-js';
import { MouseEventType } from '@/components/UI/types';

interface CheckboxProps {
  class: string;
  complete: boolean;
  disabled: boolean;
  onClick: (value: MouseEventType) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const [local] = splitProps(props, [
    'class',
    'onClick',
    'complete',
    'disabled',
  ]);
  const onClickHandler = (value: MouseEventType) => {
    local.onClick(value);
  };
  return (
    <>
      <label class='flex items-center'>
        <input
          checked={local.complete}
          type='checkbox'
          disabled={local.disabled}
          class={`flex ${local.class} focus:ring-0`}
          classList={{ 'cursor-pointer': !local.disabled }}
          onClick={onClickHandler}
        />
      </label>
    </>
  );
};
