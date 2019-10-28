import React from 'react';
import del from '../images/icons/delete.png'

const Hour = ({hour}) => {

  return (<div  >
            <label htmlFor={"hourShow" + hour._id} >
            <div key={hour._id} className='parIcon' >
              {hour.date} : ⌚{hour.hourSum}
                 <div className="sum">{" ₪" + hour.sum }</div>
            </div>
            </label>
            <input type="checkbox" id={"hourShow" + hour._id} style={{display: "none"}}
            onChange={(ev)=>{
              if(document.getElementById("hourShow" + hour._id).checked){
                console.log("hy")
                document.getElementById(hour._id).style.display = "block";
              }else{
                document.getElementById(hour._id).style.display = "none";
              }
            }}/>
            
                    <div className="aditHour" id={hour._id} onClick = {() => {}}>
                        <div className="aditHourBtn">start: {hour.from}</div>
                        <div className="aditHourBtn">end: {hour.to}</div>
                        <div className="aditHourBtn">date: {hour.date}</div>
                        <div className="saveHourBtn">✔</div>
                        <div className="deleteHourBtn">
                          <img src={del} alt="" className="mainImgs" />
                        </div>
                    </div>
                   
          </div>);
}

export default Hour;
