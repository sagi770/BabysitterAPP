import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './view/main';
import AddParent from './components/main/babyconnect/addParent';
import testAJAX from './components/testAJAX';
import Test from './components/test';
import Navigation from './components/navigation';
import MainNC from './view/notConnected/mainNC';
import Login from './view/notConnected/login';
import Signup from './view/notConnected/signup';

import ForgetPassword from './view/notConnected/forgetPassword';

//maybe we need to move this components...
import ParentView from './components/parentView';

// import TempPager from './components/TempPager';

//Not been use yet:
// import MenuNotConnected from './components/NC/mainNC/menuNC';
import DropDown from './components/addParentRows';



function App() {
    return (<div>
                <Router>
                <DropDown/>

                    <Navigation/>
                
                    
                    {/* Test ajax call.. */}
                    <Route exact path="/ajax" component={testAJAX} />
                    <Route exact path="/test" component={Test} />

{/* TODO:add Setting component */}

                    <Route exact path="/" component={Main} />
                    <Route path="/add-parent" component={AddParent} />
                    <Route path="/parent/:id" component={ParentView} />
                    <Route path="/main-nc" component={MainNC} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/forget-password" component={ForgetPassword} />
                </Router>
            </div>);
}

export default App;
