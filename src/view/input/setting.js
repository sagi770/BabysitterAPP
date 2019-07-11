import React from 'react';
import { Link } from 'react-router-dom';

const Setting = ({user, sc, parents,}) => {

return (<div className="screenExample">
          <h3>Name</h3>
          <input className='inp' type='text' />
          <h3>Email</h3>
          <input className='inp' type='email' />
          <h3>Password</h3>
          <input className='inp' type='password'/>
          <Link className="linkBtn" to="">Save changes</Link>
      </div>);
}

export default Setting;
