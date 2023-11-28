import React, { useEffect, useRef } from 'react';
import { iProps } from './types';

export const Checkbox = ({ index, disabled, handleClick, checked, indeterminate }: iProps) => {
  const checkedRef = useRef <HTMLInputElement>(null);

  useEffect(() => {
    if (checkedRef.current) {
      checkedRef.current.indeterminate = indeterminate;
    }
  }, [checkedRef, indeterminate]);
  
  return (
    <>
      <input
        type='checkbox'
        name='file'
        value={index}
        onClick={handleClick}
        disabled={disabled}
        checked={checked}
        ref={checkedRef}
      />
    </>
  );
};
