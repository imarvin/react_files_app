import { FileRow } from '../FileRow';
import { Props } from './types';

const FilesTable = ({ files }: Props) => {
  return (
    <>
      {files?.length > 0 ? (
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Device</th>
            <th>Path</th>
            <th>Status</th>
          </tr>
          {files.map((file, index) => (
            <FileRow index={index} file={file} />
            // <tr key={index} className='row'>
            //   <td>
            //     <input type='checkbox' name='file' value={index} />
            //   </td>
            //   <td>{file.name}</td>
            //   <td>{file.device}</td>
            //   <td>{file.path}</td>
            //   <td>{file.status}</td>
            // </tr>
          ))}
        </table>
      ) : (
        <div className='empty'>
          <p>No files found</p>
        </div>
      )}
    </>
  );
};

export default FilesTable;
