import React from 'react';
import { Link}  from "react-router-dom";

const Parent = ({parent}) => {

  return (<Link  style={{textDecoration: 'none', color: "black"}} to={'/parent/'+parent._id}>
            <img src={parent.image} alt=''/>
            <div key={parent._id} className='parIcon'>{parent.name}</div>
          </Link>);
}

export default Parent;
