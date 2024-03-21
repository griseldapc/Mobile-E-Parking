import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Masuk from './pages/masuk';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sukses from './pages/sukses';
import Scan from './pages/scan';
import Manual from './pages/manual';
import ManualMasuk from './pages/manualMasuk';
import ManualKeluar from './pages/manualKeluar';
import SuksesKeluar from './pages/suksesKeluar';
import Keluar from './pages/keluar';
import TidakSesuai from './pages/tidakSesuai';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/sukses" element={<Sukses />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/manualMasuk" element={<ManualMasuk />} />
          <Route path="/manualKeluar" element={<ManualKeluar />} />
          <Route path="/suksesKeluar" element={<SuksesKeluar />} />
          <Route path="/keluar" element={<Keluar />} />
          <Route path="/tidakSesuai" element={<TidakSesuai />} />
        </Routes>
      </div>
    </Router>
  );
}
