import React from 'react';
import './App.css';
import { filesData } from './data';
import FilesTable from './components/organisms/FilesTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React File App</h1>
      </header>
      <FilesTable files={filesData} />
    </div>
  );
}

export default App;
