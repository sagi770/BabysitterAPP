import React from 'react';
import { Link}  from "react-router-dom";

const Parent = ({parent}) => {

  return (<Link  style={{textDecoration: 'none', color: "black"}} to={'parent'+parent.link}>
            <img src={parent.image} alt=''/>
            <div key={parent.key} className='parIcon'>{parent.name}</div>
          </Link>);
}

export default Parent;
