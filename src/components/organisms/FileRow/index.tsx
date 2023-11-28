import { useContext, useState } from 'react';
import { FilesContext } from '../../../contexts/FilesContext';

import { iProps } from './types';
import { FileItem } from '../../molecules/FileItem';

export const FileRow = ({ index, file }: iProps) => {
  const [active, setActive] = useState(false);
  const { files, setFiles, selected, setSelected } = useContext(FilesContext);

  // add key:value pair in files data 
  files[index] = Object.assign({ checked: false }, files[index]);

  const handleClick = () => {
    // set row active
    setActive(!active);

    if (!files[index].checked) {
      // add checked file to selected state
      setSelected([...selected, index]);
      files[index].checked=true;
    } else {
      // remove checked file from selected state
      setSelected(selected.filter((i: any) => i !== index));
      files[index].checked=false;
    }
    setFiles(files);
  };

  return (
    <>
      <tr key={index} className={files[index].checked ? 'active' : 'inactive'} data-status={file.status}>
        <FileItem
          value={index}
          isCheckbox={true}
          status={file.status}
          handleClick={handleClick}
          checked={files[index].checked}
        />
        <FileItem value={file.name} />
        <FileItem value={file.device} />
        <FileItem value={file.path} />
        <FileItem value={file.status} className='status' />
      </tr>
    </>
  );
};
