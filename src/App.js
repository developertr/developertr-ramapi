import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material'

//components
import Header from "./Components/General/Header" // Header Component

//pages
// const NotFound = (props) => <h1>Page Not Found</h1> // HomePage
const Welcome = lazy(() => import('./Pages/Welcome'));
const Home = lazy(() => import('./Pages/Home'));
const PaginationHome = lazy(() => import('./Pages/PaginationHome'));
const About = lazy(() => import('./Pages/About'));
const Character = lazy((props) => import('./Pages/Character'));

function App(props) {
  return (
    <>
    <Header />
      <BrowserRouter>
        <div className="mainContainer">
        <Suspense fallback={<Container><div style={{ textAlign: 'center', marginTop: '30px' }}>Loading...</div></Container>}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pagination-home/:page" element={<PaginationHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/character/:id" element={<Character />}/>
            <Route path="/character/:id/:page" element={<Character />}/>
          </Routes>
        </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
