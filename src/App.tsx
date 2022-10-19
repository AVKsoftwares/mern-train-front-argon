import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';
import Index from './pages/index';
import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Index />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
