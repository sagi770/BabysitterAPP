import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainNC from './view/notConnected/mainNC';
import MenuNC from './components/NC/mainNC/menuNC';
import Login from './view/notConnected/login';
import Main from './view/main';
import Signup from './view/notConnected/signup';
import Forget from './view/notConnected/forget';
import AddParent from './components/main/addParent';
import AddPar from './components/main/babyconnect/addParent';


function App() {
  return (<div>
        <Router>
          <div class="scrinExampel">
          <Main/>
          </div>
          <div class="scrinExampel">
                <AddPar/>
                <Link class="lincbtn" to="/addParent">add</Link> |  
            </div>
                <div class="scrinExampel">
                <Link class="lincbtn" to="/nc1">login</Link> |  
              <Link class="lincbtn" to="/nc2"> signup</Link>
          <MainNC/>
          </div>
          <div class="scrinExampel">
          <Login/>
              <Link class="lincbtn" to="/login/b">login</Link> | 
              <Link class='lincbtn' to="/login/forget ">forget my password link</Link>
          </div>
          <div class="scrinExampel">
          <Signup/>
              <Link class="lincbtn" to="/signup/b">signup</Link>
              </div>
          <div class="scrinExampel">
          <Forget/>
              <Link class='lincbtn' to="/forget/sendEmail ">send</Link>
          </div>
        </Router>


    
    </div>);
}

export default App;
