import React from 'react';
import TimeKeeper from 'react-timekeeper';
import del from '../images/icons/delete.png'


const TimePicker = ({title ="test", time, onChange, onOK, }) =>{
    let newDate = () => {
        let h = Date().split(" ")[4].split(":")[0]
        let m = Date().split(" ")[4].split(":")[1]
        console.log(`${h}:${m}`)
        return `${h}:${m}`
    }
    time = time || newDate()
    let Err = (name) => console.log(`Enter a function in the ${name} props`)
    onChange = onChange || Err("onChange")
    onOK = onOK || Err("onChange")
  return (
      <div>
        <label htmlFor={"timeInput" + title} >
            <div className="addHourBtn">
                {title}: <div style={{float: "right"}} >{time}</div>
            </div>
        </label>
            <input type="checkbox" id={"timeInput" + title} style={{display: "none"}}
            onChange={(ev)=>{
                if(document.getElementById("timeInput" + title).checked){
                console.log("hy")
                document.getElementById(title).style.display = "flex";
              }else{
                document.getElementById(title).style.display = "none";
              }
            }}/>
        
        <div className="pickerDiv" id = {title} >
         <TimeKeeper time={time} onChange={data=>(console.log(data.formatted24), onChange(data.formatted24, title))}/>
         <div className="pickerBtn">
             
         <div className="saveHourBtn" onClick={()=>(
             document.getElementById(title).style.display = "none",
             document.getElementById("timeInput" + title).checked = false
             )}>✔</div>
         </div>

        </div>
        
      
    </div>
  )
}
export default TimePicker