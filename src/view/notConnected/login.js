import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({user, sc, parents,}) => {
 
  
  return (<div >
      <h3>Email</h3>
      <input class='inp' type='email' />
      <h3>Password</h3>
      <input class='inp' type='password'/>
      {/* <Link class="btn" to="/login/b">login</Link>
      <Link class='' to="/login/forget ">forget my password link</Link> */}
        </div>);
}

export default Login;
