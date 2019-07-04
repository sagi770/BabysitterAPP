import React from 'react';
import { Link } from 'react-router-dom';

const AddParent = ({user, sc, parents,}) => {
 
  
  return (<div className="screenExample">
            <h3>Full Name</h3>
            <input className='inp' type='text' />
            <h3>phone</h3>
            <input className='inp' type='text'/>
            {/* <Link className="btn" to="/login/b">login</Link>
            <Link className='' to="/login/forget ">forget my password link</Link> */}
             <Link className="linkBtn" to="/AddParent">add</Link> 
        </div>);
}

export default AddParent;
