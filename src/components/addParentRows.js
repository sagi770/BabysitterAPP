import React, { Component } from "react";
import { Link } from 'react-router-dom';


class DropDown extends Component {
 constructor(props){
     super(props);
     this.state ={

     }
 }
  render() {
    return (<div className="screenExample">
    <h3>start</h3>
    <input className='inp' type='text' onChange={()=>{}}/>
    <h3>end</h3>
    <input className='inp' type='text' />
    {/* <Link className="btn" to="/login/b">login</Link>
    <Link className='' to="/login/forget ">forget my password link</Link> */}
     <Link className="linkBtn" to="/AddParentAnswer">add</Link> 
</div>);
  }
}


export default DropDown;
