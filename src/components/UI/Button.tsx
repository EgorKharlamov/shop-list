import { splitProps } from 'solid-js';

interface ButtonProps {
  title: string;
  class?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const [local] = splitProps(props, ['title', 'onClick', 'class', 'disabled']);

  const onClickHandler = () => {
    local.onClick();
  };
  return (
    <>
      <label>
        <button
          class={`border border-black px-2 py-0.5 rounded-md ${local.class}`}
          classList={{ 'bg-gray-400': local.disabled }}
          disabled={local.disabled}
          type='button'
          onClick={onClickHandler}
        >
          {local.title}
        </button>
      </label>
    </>
  );
};
