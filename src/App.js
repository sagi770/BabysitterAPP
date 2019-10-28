import React, { useState } from 'react';
import './App.css';
import test from "./images/test.png"
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main_not_connected from './pages/not_connected/Main';
import Rout from './components/rote';

const App = () => {
  const [title, setTitle] = useState("title")

  return <Router className="App">
    <Rout/>
      {/* <Main_not_connected/> */}
    </Router>
}

export default App;
