import React from 'react';
import example from '../../images/example.png'
import { Link } from 'react-router-dom';
import Header from './../../components/Header';
import key from '../../images/icons/key.png';
import exclamation from '../../images/icons/exclamation.png';
import add_user from '../../images/icons/add_user.png';
import Input from './../../components/not_conected/input';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
    super(props);
    this.state ={
       
            phone: "",
            password: "",
    
        
    }
    this.OnChange = this.OnChange.bind(this)
    this.sendPassword = this.sendPassword.bind(this)
    this.OnSubmit = this.OnSubmit.bind(this)
  }
  OnChange(ev){
    this.setState({[ev.name]: ev.value});
  };
  sendPassword(ev){
    axios.post("/login", { 
      phone: ev.phone,
      password: ev.password
    })
    .then(res => {
      localStorage.setItem("token", res.data)
      return res 
    })
    .then(res => {
      if(res) {
        this.props.history.push("/home")
      }
    })
    .catch(err => console.log(err))
  }
  OnSubmit(ev){
      // ev.preventDefault()

    const user =  {
      phone: this.state.phone,
      password: this.state.password,
    }
    console.log(user)

    this.sendPassword(user)
    
    
    
  }
    render(){
    return(<div>
              <Header text="login" imgRight = { exclamation } right = '/welcome' imgLeft = { add_user } left = "/signup" />

    <div className="page" >
        <div className="inputContainer">

        <Input 
          type = "text"
          name = "phone"
          Default = "Enter phone"
          value = {this.state.phone}
          Change = {this.OnChange}
          If = {this.state.phone.length < 10 }
          not = "First name and Last name"
          good = "OK"
          />

        <Input 
          type = "password"
          name = "password"
          Default = "Enter password"
          value = {this.state.password}
          Change = {this.OnChange}
          If = {this.state.password.length < 6 }
          />
        </div>

        <div className = "button" to = "/login"
        onClick = {()=>this.OnSubmit(this.state)}
        >✔</div>  
        <Link style = {{ float: "right", margin: "7vw"}} to = "/forget_password">forget password</Link>  

    </div>


    </div>);}
}

export default Login;