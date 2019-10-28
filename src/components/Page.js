import React, { useState } from 'react';
import Valid_passport from './../validation/V_passport';
import arrowL from "../images/icons/arrowL.png"
import { Link } from 'react-router-dom';

class Page extends React.Component{
  state= {
    val: ""
  }
  render(){
    return(<div className="page">

      <div className="inputContainer">
          <input type="text" onChange={event=>{
            this.setState({val: event.target.value})
          }} value = { this.state.val } />
          <Valid_passport val = {this.state.val} />
          <br/>
          <input type="text" onChange={event=>{
            this.setState({val: event.target.value})
          }} value = { this.state.val } />
          <Valid_passport val = {this.state.val} />
          <br/>
          <input type = "text" onChange = {event=>{this.setState({ val: event.target.value })}} value = { this.state.val } placeholder="enter" />
          <Valid_passport val = {this.state.val}/>
          <br/>
      </div>

          <Link className="importBtn" to = "/xxx">
            <img className = "importBtnImg" src = {arrowL} alt = "" />
            </Link>
    </div>);}
}

export default Page;
