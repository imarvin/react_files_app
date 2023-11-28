import { useEffect, useContext, useState } from 'react';
import { FilesContext } from '../../../contexts/FilesContext';
import { FileRow } from '../FileRow';
import { FilesHeader } from '../FilesHeader';
import { Props } from './types';

const FilesTable = () => {
  //const [selected, setSelected] = useState<number[]>([]);
  const { files, setFiles, selected, setSelected, isModalOpen, setModalOpen } =
    useContext(FilesContext);

  useEffect(() => {
    //console.log('>> first, selected', selected);
  }, [selected]);

  return (
    <div className='wrapper'>
      {files?.length > 0 ? (
        <>
          <FilesHeader />
          <table>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Device</th>
              <th>Path</th>
              <th>Status</th>
            </tr>
            {files.map((file, index) => (
              <FileRow key={index} index={index} file={file} />
            ))}
          </table>
        </>
      ) : (
        <div className='empty'>
          <p>No files found</p>
        </div>
      )}
    </div>
  );
};

export default FilesTable;
