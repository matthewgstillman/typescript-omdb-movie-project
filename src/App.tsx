import React from 'react';
import './App.css';
import APIComponent from './components/APIComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="topHeader" data-testid="topHeader">OMDB API Project</h1>
      <APIComponent/>
    </div>
  );
}

export default App;
