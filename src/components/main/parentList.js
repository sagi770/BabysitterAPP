import React from 'react';
import Parent from './parent';
// import { Link }  from "react-router-dom";

const ParentList = ({parents}) => {
    parents = parents 
  let total 
   let list = parents.map(parent=>{
     console.log(parent)
     total += parent.total
       return<Parent key={parent._id || parent.key }  parent ={parent} />
   })
   total = total || 0
//    console.log(list)

  return<div className='parList'>
        {list} 
        {/* <p className="ParentsTotal">Total: ₪{total}</p> */}
  </div>;
}

export default ParentList;