import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS for styling

import Navbar from './Navbar';
import Footer from './Footer';
import LoginForm from './login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container mt-5">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
