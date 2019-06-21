import React from 'react';
import { Link } from 'react-router-dom';

const Signup = ({user, sc, parents,}) => {
 
  
  return (<div>
      <input class='inp' type='text' />
      <input class='inp' type='email' />
      <input class='inp' type='password'/>
      {/* <Link class="btn" to="/signup/b">login</Link> */}
        </div>);
}

export default Signup;
