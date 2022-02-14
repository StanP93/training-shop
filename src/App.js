import React from 'react';
import './reset.css';
import './index.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Clothing from './components/Clothing/Clothing';

function App() {
  return (
    <div className="App" data-test-id ='app'>
      <Header data-test-id='header'/>
      <Title/>
      <Clothing sex={'women'}/>
      <Clothing sex={'men'}/>
    </div>
  );
}

export default App;
