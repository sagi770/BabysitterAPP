import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import key from '../../images/icons/key.png';
import exclamation from '../../images/icons/exclamation.png';
import axios from 'axios'
import Input from './../../components/not_conected/input';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state ={
       
            name: "",
            phone: "",
            password: "",
            pass2: "",
        
    }
    this.addNewUser = this.addNewUser.bind(this);
    this.OnChange = this.OnChange.bind(this);
  }
  OnChange(ev){
    this.setState({[ev.name]: ev.value});
  };
  addNewUser(newUser){
    if(this.state.pass2 !== this.state.password ||
      this.state.password.length < 6 ||
      this.state.phone.length < 10 ||
      this.state.name.split(" ").length < 2
      ){
      }else {

        console.log({ 
          name: newUser.name, 
          phone: newUser.phone, 
          password: newUser.password, 
        })
        
        // this.setState({newUser});
        axios.post('/babysitter/create-user', { 
          name: newUser.name, 
          phone: newUser.phone, 
          password: newUser.password, 
        })
        .then(user=>{
            console.log(user)
            this.props.history.push("/login")
        })
        
      }
    }
  

    render(){
    return(<div>
              <Header text="signup" imgRight = { exclamation } right = '/welcome' imgLeft = { key } left = '/login'/>

    <div className="page" >
        <div className="inputContainer">
        <Input
          type = "text"
          name = "name" 
          Default = "Enter full name"
          value = {this.state.name}
          Change = {this.OnChange}
          If = {this.state.name.split(" ").length < 2 }
          not = "First name end Last name"
          good = "OK"
          />
       
       <Input 
          type = "text"
          name = "phone"
          Default = "Enter phone"
          value = {this.state.phone}
          Change = {this.OnChange}
          If = {this.state.phone.length < 10 }
          Null = "Add a number"
          />
        <Input 
          type = "password"
          name = "password"
          Default = "Enter password"
          value = {this.state.password}
          Change = {this.OnChange}
          If = {this.state.password.length < 6}
          />
        <Input 
          type = "password"
          name = "pass2"
          Default = "Enter password"
          value = {this.state.pass2}
          Change = {this.OnChange}
          If = {this.state.pass2 !== this.state.password}
          not = "Passwords do not match"
          good = "OK"
          />
        </div>
        <div className = "button" onClick={()=>this.addNewUser(this.state)}>
          {/* <Link  to = "/login" > */}
            ✔
            {/* </Link>   */}
        </div>
        <Link style = {{ float: "right", margin: "7vw"}} to = "/login">I have a user</Link>  

    </div>


    </div>);}
}

export default Signup;