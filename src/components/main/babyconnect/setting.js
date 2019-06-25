import React from 'react';
import { Link } from 'react-router-dom';

const Setting = ({oldFrice}) => {
    oldFrice = oldFrice || 0.00
  
  return (<div >
      <h3>The old frice is: {oldFrice} </h3>
    <br/>      
    <h3>New frice</h3>
      <input class='inp' type='text'/>
      {/* <Link class="btn" to="/login/b">login</Link>
      <Link class='' to="/login/forget ">forget my password link</Link> */}
        </div>);
}

export default Setting;
