import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName="Jane"
      lastName="Doe"
      age={25}
      hairColor="black"
      />
      <PersonCard
      firstName="Nick"
      lastName="Hujarski"
      age={35}
      hairColor="brown"
      />
      
    </div>
  )
}

export default App;
