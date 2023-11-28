import React from 'react';
import './App.css';
import FilesTable from './components/organisms/FilesTable';
import FilesContextProvider from './contexts/FilesContext';

function App() {
  return (
    <div className='App'>
      <FilesContextProvider>
        <FilesTable />
      </FilesContextProvider>
    </div>
  );
}

export default App;
