import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Blog from './pages/Blog';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<BlogDetail />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
