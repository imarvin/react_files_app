type File = {
  name: string;
  device: string;
  path: string;
  status: string;
  checked?: boolean;
};

type ContextType = {
  files: File[];
  setFiles: any;
  selected: number[];
  setSelected: any;
  isModalOpen: boolean;
  setModalOpen: any;
};

export type { File, ContextType };
