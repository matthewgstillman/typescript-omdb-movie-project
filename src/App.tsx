import React, { FC } from "react";
import './App.css';
import APIComponent from './components/APIComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
  return (
    <div className="App">
      <APIComponent/>
    </div>
  );
}

export default App;
