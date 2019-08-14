import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class AddParent extends React.Component {
    constructor(props){
      super(props);
     this.state ={
          
          name: "testName",
          phone: "testPhone",
    }
    this.url = "http://localhost:4000"
    this.urlParams = window.location.pathname.split("/");
    this.addParent = this.addParent.bind(this);
}
addParent(parent){
  parent.user_id = "5d53fd3ad7a15c35989e7d72"
  console.log(parent.user_id ,parent)

    axios.post(this.url+ "/add-parent", {parent})
    .then((res) => {
      console.log(res);
  }).catch(err => {
      console.error(err);
  });

}
  render() {
    let input = {}
  return (<div className="screenExample">
            <h3 className="underline">Add Parent</h3>
            <h3>Full Name</h3>
            <input className='inp' type='text'  value={this.state.name}
            onChange={event=> this.setState({name: event.target.value})}/>
            <h3>phone</h3>
            <input className='inp' type='text' value={this.state.phone}
            onChange={event=> this.setState({phone: event.target.value})}/>
            {/* <Link className="btn" to="/login/b">login</Link>
            <Link className='' to="/login/forget ">forget my password link</Link> */}
             <Link className="linkBtn" to="add-parent"
             onClick={()=>{

              this.addParent(this.state)
             }}>add</Link> 
        </div>);
}
}
export default AddParent;
