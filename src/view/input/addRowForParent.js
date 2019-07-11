import React, { Component } from "react";
import { Link } from 'react-router-dom';


class AddRowForParent extends Component {
  constructor(props){
    super(props);
    this.state ={
  }
}

  render() {
    return (<div className="screenExample">
                <h2>Add Parent row:</h2>            
                <h3>Date</h3>
                <input type='text'  />
                <h3>start</h3>
                <input type='text'  />
                <h3>end</h3>
                <input type='text'   />
                {/* <Link className="btn" to="/login/b">login</Link>
                <Link className='' to="/login/forget ">forget my password link</Link> */}
                <Link className="linkBtn" to="/AddParentAnswer">add</Link> 
            </div>);
  }
}
// create add parent row component 

export default AddRowForParent;
