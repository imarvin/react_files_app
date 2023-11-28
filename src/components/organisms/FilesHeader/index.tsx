import { useContext, useEffect, useState } from 'react';
import { FilesContext } from '../../../contexts/FilesContext';
import { Checkbox } from '../../atoms/Checkbox';
import download from '../../../assets/download.svg';

export const FilesHeader = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const { files, setFiles, selected, setSelected } = useContext(FilesContext);

  useEffect(() => {
    setCheckAll(selected.length >= files.length);
    setIndeterminate(selected.length > 0 && selected.length < files.length);
  }, [selected]);

  const handleCheckbox = () => {
    if (checkAll || indeterminate) {
      // uncheck all
      setSelected([]);
      files.forEach((file, index) => {
        if (file.checked === true) {
          files[index].checked = false;
        }
      });
      setFiles(files);
    } else {
      // check all if available
      files.forEach((file, index) => {
        if (file.status === 'available') {
          setSelected((selected: number[]) => [...selected, index]);
          files[index].checked = true;
        }
      });
      setFiles(files);
    }
  };

  const handleDownload = () => {
    if (selected.length > 0) {
      let alertMessage = '';
      selected.forEach((i) => {
        alertMessage += `Device: ${files[i].device}\nPath: ${files[i].path}\n\n`;
      });
      alert(alertMessage);
    }
  };

  return (
    <>
      <div className='files-header'>
        <div className='selected'>
          <Checkbox
            handleClick={handleCheckbox}
            checked={checkAll || indeterminate}
            indeterminate={indeterminate}
          />{' '}
          Selected <span>{selected.length}</span>
        </div>
        <div className='download' onClick={handleDownload}>
          <img src={download} alt='Download Selected' />
          Download Selected
        </div>
      </div>
    </>
  );
};
