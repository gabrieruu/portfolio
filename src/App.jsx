import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <main className="appMain">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
