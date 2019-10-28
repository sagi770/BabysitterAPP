import React from "react";
import Picker from 'react-mobile-picker-scroll';
 

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
         dey: this.getDay(),
          months: this.getMonth(),
          years: this.getYear()
      }, 
      optionGroups: {
        dey: this.dey(31),
        months: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
        years: this.years(),
      },
      date: ""
    };
  }
componentDidMount(){
  let m
             let months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
             let y = this.state.valueGroups.years;
             let d = this.state.valueGroups.dey;
             for(let i = 0; i < months.length; i++){
                 if(this.state.valueGroups.months == months[i]){
                      m = i + 1;
                 };
             };
             this.setState({date: `${d}/${m}/${y}`})
}
date = new Date()

  getMonth(){
 let months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']

 return months[this.date.getMonth()]
}
getYear(){
    return this.date.getFullYear()
}
getDay(){
    return this.date.getDate()
}
  // Update the value in response to user picking event
  handleChange = (name, value) => {
    const {optionGroups, valueGroups} = this.state;
    this.setState({
      valueGroups: {
        ...this.state.valueGroups,
        [name]: value
      }});
    if(valueGroups.months == "Feb." ){
        if(valueGroups.years % 4 == 0 && valueGroups.years % 100 != 0 ){
            this.setState({ optionGroups: {
                ...this.state.optionGroups,
                dey: this.dey(29),
                },})
        }else{
            this.setState({ optionGroups: {
                ...this.state.optionGroups,
                dey: this.dey(28),
              },})
        }
    }else if(valueGroups.months == 'Apr.' || 'June' || 'Sept.' || 'Nov.'){
        this.setState({ optionGroups: {
            ...this.state.optionGroups,
            dey: this.dey(30),
          },})
    }else{
        this.setState({ optionGroups: {
            ...this.state.optionGroups,
            dey: this.dey(31),
          },})
    };
   
    
  };
 years(){
     let y = []
     for( let i = 2000 ; i < 2100 ; i++){
         y.push(i)
     }
     return y
 }
dey(end){
    let d = []
    for( let i = 1 ; i <= end ; i++){
        d.push(i)
    }
    return d
}
  render() {
    const {optionGroups, valueGroups} = this.state;
   
    
    let title = "Date"
    return (<div>
        <label htmlFor={"timeInput" + title} >
            <div className="addHourBtn">
                {title}: <div style={{float: "right"}} >{this.state.date}</div>
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
         
             <Picker
               optionGroups={optionGroups}
               valueGroups={valueGroups}
               onChange={this.handleChange} />
         <div className="pickerBtn">
             
         <div className="saveHourBtn" onClick={()=>{
             document.getElementById(title).style.display = "none";
             document.getElementById("timeInput" + title).checked = false;
             console.log('hy');
             let m
             let months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
             let y = this.state.valueGroups.years;
             let d = this.state.valueGroups.dey;
             for(let i = 0; i < months.length; i++){
                 if(this.state.valueGroups.months == months[i]){
                      m = i + 1;
                 };
             };
             this.setState({date: `${d}/${m}/${y}`})
            }}>✔</div>
         </div>

        </div>
        
      
    </div>
    );
  }
}

export default DatePicker
