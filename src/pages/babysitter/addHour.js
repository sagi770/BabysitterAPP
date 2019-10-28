import React from 'react';
import Header from './../../components/Header';
import exclamation from '../../images/icons/exclamation.png';
import list from '../../images/icons/list.png';
import Input from './../../components/not_conected/input';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import TimeKeeper from 'react-timekeeper';
// import  { TimeInput, TimeOutput } from 'react-timekeeper';
import TimePicker from './../../components/TimeKeeper';
import MyDatePicker from './../../components/datePicker';
import del from '../../images/icons/delete.png'
import { Link } from 'react-router-dom';

class AddHour extends React.Component{
    constructor(props){
    super(props);
    this.state ={
      from: "",
      to: "",
      date: "",
    }
    this.onChange = this.onChange.bind(this)
  }
 
  onChange(data, title){
    data.split("")
    return this.setState({[title]: data})
  }
  OnSubmit(ev){
    const token = localStorage.token
    const decoded = jwt_decode(token)
    
    axios.post('http://localhost:4000/add_hour', {
      from: ev.from,
      to: ev.to,
      total: "total",
      date: ev.date,
      parent_id: "5db041d8bd40b531881bc573",
      user_id: decoded._id
    })
    .then(data=>{
      console.log(data)
      // this.props.history.push("/home")
    })
  }

  render(){
     let hour =  {_id: "1", from: "10:12" ,to:"11:12",date:"May 2", hourSum: "3:30", sum: 80,}

    return(<div>
              <Header text="Add hour" imgRight = { exclamation } right = '/welcome' imgLeft = { list } left = "/parent" />

    <div className="page" >
        <div className="inputContainer">
          <TimePicker 
            title = "from"  
            onChange={this.onChange}
            time = {this.state.from}
            onOK = {this.onChange}
          />
          <TimePicker 
            title = "to"  
            onChange={this.onChange}
            time = {this.state.to}
            onOK = {this.onChange}
          />
        <MyDatePicker/>
        </div>
        <div className="saveHourBtn" onClick={()=>{
          this.OnSubmit(this.state)
        }}>✔</div>
        <Link className="deleteHourBtn" to="/parent" >
          <img src={del} alt="" className="mainImgs" />
        </Link>
        <div >
            {/* {add}  */}
        </div>

    </div>


    </div>);}
}

export default AddHour;