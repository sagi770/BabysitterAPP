import React from 'react';
import Parent from './parent';
import { Link }  from "react-router-dom";

const ParentList = ({parents}) => {
    parents = parents || [{name: "example 1", link: "/1"},
                          {name: "example 2", link: "/2"},
                          {name: "example 3", link: "/3"},
                          {name: "example 4", link: "/4"},
                          {name: "example 5", link: "/5"},
                          {name: "example 6", link: "/6"}];

   let list = parents.map((parent)=>{
       return<Parent parent ={parent}  />
   })
   console.log(list)

  return<div class='parList'>{list}</div>;
}

export default ParentList;