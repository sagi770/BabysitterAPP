import React from 'react';
import { Link } from 'react-router-dom';

const Signup = ({user, sc, parents,}) => {
 
  
  return (<div>
      <h3>Name</h3>
      <input class='inp' type='text' />
      <h3>Email</h3>
      <input class='inp' type='email' />
      <h3>Password</h3>
      <input class='inp' type='password'/>
      {/* <Link class="btn" to="/signup/b">login</Link> */}
        </div>)
}

export default Signup;
