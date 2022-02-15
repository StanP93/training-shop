import React from 'react';
import './reset.css';
import './index.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Clothing from './components/Clothing/Clothing';
import LookBook from './components/LookBook/LookBook';
import Subscribe from './components/Subscribe/Subscribe';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" data-test-id ='app'>
      <Header/>
      <Title/>
      <Clothing sex={'women'} data-test-id={`clothes-${women}`}/>
      <Clothing sex={'men'} data-test-id={`clothes-${men}`}/>
      <LookBook />
      <Subscribe />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
