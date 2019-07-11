import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
      }


    render() { 
        return ( 
            <select onChange={this.onChange}>
                <option value="">Choose one..</option>
                <option value="">Parent List</option>
                <option value="add-parent">Add Parent</option>
                <option value="add-parent-row">Add Parent Row</option>
                <option value="home-page">Home page</option>
                <option value="login">Login</option>
                <option value="signup">Signup</option>
                <option value="forget-password">Forget Password</option>
                <option value="setting">Setting</option>
            </select>
         );
    }
}
 
export default withRouter(Navigation);

