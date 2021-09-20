import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import AlertComp from './components/AlertComp';
import { useState } from 'react';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [title, setTitle] = useState(null);
  const [mode, setMode] = useState('light');


  const toggleModeFunction = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      setTitle("Alert has been shown");
      // setTimeout(()=>{
      //   setTitle(null);
      // }, 2000);
    } else {
      document.body.style.backgroundColor = 'white'
      setMode('light');
      setTitle(null);

    }
  };




  return (
    <>
    <Router>
      <Navbar title="TextUtils" toggleMode={toggleModeFunction} />
      <AlertComp title={title} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
        <TextForm title="Enter your text here" />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
