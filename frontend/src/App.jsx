import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TravelerListPage from './pages/TravelerListPage';
import TravelerDetailPage from './pages/TravelerDetailPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/travelers" element={<TravelerListPage />} />
        <Route path="/travelers/:id" element={<TravelerDetailPage />} />
        <Route path="*" element={<TravelerListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
