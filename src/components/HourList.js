import React from 'react';
// import { Link }  from "react-router-dom";
import Hour from './Hour';

const HourList = ({hour}) => {
      hour   = hour || [
      {_id: "1", from: "10:12" ,to:"11:12",date:"May 2", hourSum: "3:30", sum: 80,},
      {_id: "2", from: "150:12" ,to:"11:12",date:"May 2", hourSum: "3:30", sum: 70},
      {_id: "3", from: "10:12" ,to:"11:12",date:"May 2", hourSum: "3:30", sum: 50},
      {_id: "4", from: "10:12" ,to:"11:12",date:"May 2", hourSum: "3:30", sum: 40},];

   let list = hour.map((hour)=>{
     console.log(hour)
       return<Hour key={hour._id }  hour ={hour} />
   })
//    console.log(list)

  return<div className='parList'>{list}</div>;
}

export default HourList;