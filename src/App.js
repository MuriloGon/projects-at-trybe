import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import StarWarsProvider from './Contexts/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
