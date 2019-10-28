import React from 'react';
import Header from './../../components/Header';
import exclamation from '../../images/icons/exclamation.png';
import list from '../../images/icons/list.png';
import Input from './../../components/not_conected/input';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

class AddParent extends React.Component{
    constructor(props){
    super(props);
    this.state ={
       
        name: "",
        phone: "",
    
        
    }
    this.OnChange = this.OnChange.bind(this)
    this.OnSubmit = this.OnSubmit.bind(this)
  }
  OnChange(ev){
    this.setState({[ev.name]: ev.value});
  };

  OnSubmit(ev){
    if(
        this.state.phone.length < 10 ||
        this.state.name.split(" ").length < 2
        ){
        }else {
    const token = localStorage.token
    const decoded = jwt_decode(token)

    
    axios.post('/add_parent', {
        name: ev.name,
        phone: ev.phone,
        user_id: decoded._id
    
    })
    .then(()=>{
      this.props.history.push("/home")
    })
  }
  }
    render(){
    return(<div>
              <Header text="Add parent" imgRight = { exclamation } right = '/welcome' imgLeft = { list } left = "/home" />

    <div className="page" >
        <div className="inputContainer">

        <Input 
          type = "text"
          name = "name"
          Default = "Enter parent name"
          value = {this.state.name}
          Change = {this.OnChange}
          If = {this.state.name.split(" ").length < 2 }
          not = "First name and Last name"
          good = "OK"
          />

        <Input 
          type = "text"
          name = "phone"
          Default = "Enter is phone"
          value = {this.state.phone}
          Change = {this.OnChange}
          If = {this.state.phone.length < 10 }
          />
        </div>

        <div className = "button" 
        onClick = {()=>this.OnSubmit(this.state)}
        >✔</div>  

    </div>


    </div>);}
}

export default AddParent;