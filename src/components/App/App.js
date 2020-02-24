import React from 'react';
import './App.scss';
import Title from '../Title';
import Room from '../Room';
import LightSwitch from '../LightSwitch';

const App = () => {
  return (
    <div className="App">
      <Title />
      <Room />
      <LightSwitch />
    </div>
  );
};

export default App;
