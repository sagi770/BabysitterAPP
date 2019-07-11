import React from 'react';
import { Link } from "react-router-dom";

const AddParentBtn = () => {
 
  return (<Link to="/addAParent">
            <div className='btnAddAParent'>+</div>
        </Link>);
}

export default AddParentBtn;
