import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* More routes like About, Services can be added here later */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
