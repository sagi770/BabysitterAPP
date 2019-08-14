import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

//TODO:missing error handel when user (by phone) is already exist 
//inform the client to login
class Signup extends React.Component {
    constructor(props){
    super(props);
    this.state ={
       
            name: "testName",
            phone: "testPhone",
            password: "testPassword",
    
        
    }
    this.url = "http://localhost:4000"
    this.addNewUser = this.addNewUser.bind(this);
}
addNewUser(newUser){
console.log(newUser)

this.setState({newUser});
axios.post(this.url + '/babysitter/create-user', { newUser })
.then(user=>{
    console.log(user)
})

}
    render(){
return (<div className="screenExample">
          <h3>Name</h3>
          <input className='inp' type='text' value={this.state.name}
          onChange={
              event =>this.setState({name: event.target.value})
          } />
          <h3>Phone</h3>
          <input className='inp' type='text' value={this.state.phone}
          onChange={
              event =>this.setState({phone: event.target.value})
          }/>
          <h3>Password</h3>
          <input className='inp' type='password' value={this.state.password}
          onChange={
              event =>this.setState({password: event.target.value})
          }/>
          <Link className="linkBtn" to="" 
          onClick={
              ()=>this.addNewUser(this.state)
          }>signup</Link>
      </div>);
}
}
export default Signup;
