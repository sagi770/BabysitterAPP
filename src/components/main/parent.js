import React from 'react';
import { Link}  from "react-router-dom";
import jwt_decode from 'jwt-decode';

const Parent = ({parent}) => {
  let url = parent._id || parent.key
  parent.total = parent.total || 0

      console.log(parent)
  return (<Link  style={{textDecoration: 'none', color: "black"}} to={`/parent/${url}` }>
            <img src={parent.image} alt=''/>
            <div key={parent._id} className='parIcon'>{parent.name} : 
                 <div className="sum">{" ₪" + parent.total }</div>
            </div>
          </Link>);
}

export default Parent;
