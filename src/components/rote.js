import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Main_not_connected from '../pages/not_connected/Main';
import Login from '../pages/not_connected/Login';
import Signup from './../pages/not_connected/Signup';
import Forget_password from './../pages/not_connected/ForgetPassword';
import Main from './../pages/babysitter/main';
import ExclamationPage from './../pages/babysitter/exclamation';
import ParentView from './../pages/babysitter/parent';
import AddParent from './../pages/babysitter/addParent';
import AddHour from './../pages/babysitter/addHour';

const Rout = () => {

  return(<div className="application">
      <Route path = "/welcome" component = { Main_not_connected } />
      <Route path = "/login" component = { Login } />
      <Route path = "/signup" component = { Signup } />
      <Route path = "/forget_password" component = { Forget_password } />
      <Route path = "/home" component = { Main } />
      <Route path = "/exclamationPage" component = { ExclamationPage } />
      <Route path = "/parent" component = { ParentView } />
      <Route path = "/add_parent" component = { AddParent } />
      <Route path = "/add_hour" component = { AddHour } />
      {/* <Redirect from='/' to = '/welcome' /> */}
  </div>)
}

export default Rout;
