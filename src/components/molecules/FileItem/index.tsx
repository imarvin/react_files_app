import React from 'react';
import { Checkbox } from '../../atoms/Checkbox';
import { iProps } from './types';

export const FileItem = ({ value, isCheckbox, status, handleClick, checked, className }: iProps) => {
    return (
      <td className={className}>
        {isCheckbox && handleClick ? (
          <Checkbox index={value} handleClick={handleClick} checked={checked} disabled={status !== 'available'}
          />
        ) : (
          <>{value}</>
        )}
      </td>
    );
};
