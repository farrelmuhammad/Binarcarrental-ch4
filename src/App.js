import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import RouteApp from './Routes';

function App() {
  return (
    <>
      <Navbar />
      <RouteApp />
      <Footer />
    </>
  );
}

export default App;
