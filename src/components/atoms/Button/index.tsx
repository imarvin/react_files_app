import { iProps } from './types';

export const Button = ({ handleClick }: iProps) => {
  return (
    <>
      <button type='button' name='download' onClick={handleClick}></button>
    </>
  );
};
