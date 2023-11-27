import { useState } from 'react';
import { iProps } from './types';

export const FileRow = ({ index, file }: iProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <tr key={index} className={active ? 'active' : 'inactive'}>
        <td>
          <input
            type='checkbox'
            name='file'
            value={index}
            onClick={handleClick}
          />
        </td>
        <td>{file.name}</td>
        <td>{file.device}</td>
        <td>{file.path}</td>
        <td>{file.status}</td>
      </tr>
    </>
  );
};
