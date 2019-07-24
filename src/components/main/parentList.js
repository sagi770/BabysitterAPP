import React from 'react';
import Parent from './parent';
// import { Link }  from "react-router-dom";

const ParentList = ({parents}) => {
    // parents = parents || [{key: "1", name: "example 1", link: "/1"},
    //                       {key: "2",name: "example 2", link: "/2"},
    //                       {key: "3",name: "example 3", link: "/3"},
    //                       {key: "4",name: "example 4", link: "/4"},
    //                       {key: "5",name: "example 5", link: "/5"},
    //                       {key: "6",name: "example 6", link: "/6"}];

   let list = parents.map((parent)=>{
       return<Parent key={parent._id} parent ={parent}  />
   })
//    console.log(list)

  return<div className='parList'>{list}</div>;
}

export default ParentList;