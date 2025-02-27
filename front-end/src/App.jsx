// src/App.jsx
import React, { Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading'; 


const Home = React.lazy(() => import('./pages/Home'));
const Artist = React.lazy(() => import('./pages/Artist'));
const Artists = React.lazy(() => import('./pages/Artists'));
const Song = React.lazy(() => import('./pages/Song'));
const Songs = React.lazy(() => import('./pages/Songs'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/artist/:id' element={<Artist />} />
          <Route path='/song/:id' element={<Song />} />
          <Route path='/songs' element={<Songs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

