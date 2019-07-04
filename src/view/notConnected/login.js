import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({user, sc, parents,}) => {
  
return (<div className="screenExample">
          <h3>Email</h3>
          <input className='inp' type='email' />
          <h3>Password</h3>
          <input className='inp' type='password'/>

          <Link className="linkBtn" to="/login/b">login</Link> 
          <Link className='linkBtn' to="/login/forget ">forget my password link</Link>
      </div>);
}

export default Login;
