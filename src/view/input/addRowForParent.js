import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddRowForParent extends Component {
  constructor(props){
    super(props);
    this.state ={
      date: "",
      start: "",
      end: "",
      arr: [{fjk:''}]
  }
  this.url = "http://localhost:4000"

  this.addHuerRow = this.addHuerRow.bind(this);
}
addHuerRow(row){
  axios.post(this.url+'/add-parent-row', {row})
  .then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
    console.error(err);
});
}

  render() {
    
    return (<div className="screenExample">
      
                <h2>Add Parent row:</h2>            
                <h3>Date</h3>
                <input type='text' value={this.state.date} 
                onChange={(event)=>{
                  this.setState({date: event.target.value})
                }} />
                <h3>start</h3>
                <input type='text' value={this.state.start} 
                onChange={(event)=>{
                  this.setState({start: event.target.value})
                }} />
                <h3>end</h3>
                <input type='text' value={this.state.end} 
                onChange={(event)=>{
                  this.setState({end: event.target.value})
                }} />
                {/* <Link className="btn" to="/login/b">login</Link>
                <Link className='' to="/login/forget ">forget my password link</Link> */}
                <Link className="linkBtn" to="/AddParentAnswer"
                onClick={()=>this.addHuerRow(this.state)}>add</Link> 
            </div>);
  }
}
// create add parent row component 

export default AddRowForParent;
