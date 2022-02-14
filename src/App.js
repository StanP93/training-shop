import React from 'react';
import './reset.css';
import './index.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App" data-test-id ='app'>
      <Header data-test-id='header'/>
      <Title/>
    </div>
  );
}

export default App;
