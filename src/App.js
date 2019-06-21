import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainNC from './view/notConnected/mainNC';
import MenuNC from './components/NC/mainNC/menuNC';
import Login from './view/notConnected/login';
import Main from './view/main';


function App() {
  return (<div>
        <Router>
             <Main/>
            
              <Link class="btn" to="/nc1">login</Link> |  
              <Link class="btn" to="/nc2"> signup</Link>
          <MainNC/>
          <Login/>
              <Link class="btn" to="/login/b">login</Link> | 
              <Link class='' to="/login/forget ">forget my password link</Link>
        </Router>


    
    </div>);
}

export default App;
