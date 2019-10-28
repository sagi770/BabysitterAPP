import React from 'react';
import example from '../../images/example.png'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import key from '../../images/icons/key.png';
import exclamation from '../../images/icons/exclamation.png';
import add_user from '../../images/icons/add_user.png';

class Forget_password extends React.Component{
    state= {
      val: ""
    }
    render(){
    return(<div>
              <Header text="Welcome" imgRight = { add_user } right = '/signup' imgLeft = { key } left = '/login'/>

    <div className="page" >
        <div className="inputContainer">
      
        <br/>
        <br/>

      
        
      
        </div>
        <Link className = "button" to = "/login" >✔</Link>  

    </div>


    </div>);}
}

export default Forget_password;