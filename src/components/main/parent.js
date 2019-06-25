import React from 'react';
import { Link}  from "react-router-dom";

const Parent = ({parent}) => {

  return (<Link style={{textDecoration: 'none', color: "black"}} to={parent.link}>
            <img src={parent.image} alt=''/>
            <div class='parIcon'>{parent.name}</div>
            </Link>);
}

export default Parent;
