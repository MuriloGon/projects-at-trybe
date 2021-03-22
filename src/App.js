import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

const data = [{
  title: 'Título 1',
  subtitle: 'SubTitle 1',
  description: 'Description 1',
  rating: 4.5,
  img: 'http://img.jpg',
}];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
