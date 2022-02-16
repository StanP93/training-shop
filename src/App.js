import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './reset.css';
import './index.css';
import Home from './pages/Home/Home';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';

function App() {
  return (
    <div className="App" data-test-id ='app'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/men" element={<Men />} />
      </Routes>
    </div>
  );
}

export default App;
