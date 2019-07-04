import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = ({user, sc, parents,}) => {
 
  
return (<div className="screenExample">
          <h3>Email</h3>
          <input className='inp' type='email' />
          <Link className='linkBtn' to="/forget/sendEmail ">send</Link>
      </div>);
}

export default ForgetPassword;
