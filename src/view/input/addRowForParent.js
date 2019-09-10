import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import MyPicker from "../../components/picker";
// import SomeComponent from '../../components/addTime';

 
class AddRowForParent extends Component {
  constructor(props){
    super(props);
    this.state ={
      date: "",
      start: "",
      end: "",
      parentID: "5d540e7cf53e0e18b4d0fada",
      picker: ""
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
      <div id="select"></div>
                <h2>Add Parent row:</h2>            
                <h3>Date</h3>
               <div className="linkBtn" onClick={()=>{
                      this.setState({picker: <MyPicker/> })
               }}></div>
                <h3>start</h3>
                {/* <SomeComponent/> */}

                <input type='text' value={this.state.start} 
                onChange={(event)=>{
                  this.setState({start: event.target.value})
                }} />
                {this.select}
                <h3>end</h3>
                <input type='text' value={this.state.end} 
                onChange={(event)=>{
                  this.setState({end: event.target.value})
                }} />
                {/* <Link className="btn" to="/login/b">login</Link>
                <Link className='' to="/login/forget ">forget my password link</Link> */}
                <Link className="linkBtn" to="/AddParentAnswer"
                onClick={()=>this.addHuerRow(this.state)}>add</Link>
                {this.state.picker}
            </div>);
  }
}
// create add parent row component 

export default AddRowForParent;
