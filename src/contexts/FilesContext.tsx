import { createContext, PropsWithChildren, useState } from 'react';
import { filesData } from '../data';
import { ContextType, File } from '../../types/types';

const initialValues: ContextType = {
  files: [],
  setFiles: () => {},
  selected: [],
  setSelected: () => {},
  isModalOpen: false,
  setModalOpen: () => {},
};

export const FilesContext = createContext<ContextType>(initialValues);

const FilesContextProvider = ({ children }: PropsWithChildren) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [files, setFiles] = useState<File[]>(filesData);

  return (
    <FilesContext.Provider
      value={{ files, setFiles, selected, setSelected, isModalOpen, setModalOpen }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export default FilesContextProvider;
