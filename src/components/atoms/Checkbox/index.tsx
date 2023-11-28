import { iProps } from './types';

export const Checkbox = ({ index, disabled, handleClick, checked }: iProps) => {
  return (
    <>
      <input
        type='checkbox'
        name='file'
        value={index}
        onClick={handleClick}
        disabled={disabled}
        checked={checked}
      />
    </>
  );
};
