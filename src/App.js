import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './view/main';
//foo changes


function App() {
  return (<div>
        <Router>
          <Main/>


        </Router>


    
    </div>);
}

export default App;
