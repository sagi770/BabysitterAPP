import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainNC from './view/notConnected/mainNC';
import MenuNC from './components/mainNC/menuNC';


function App() {
  return (<div>
        <Router>
        <Link class="btn" to="/nc1">login</Link> |  
             <Link class="btn" to="/nc2"> signup</Link>
          <MainNC/>

        </Router>


    
    </div>);
}

export default App;
