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
                <option value="">Home page</option>
                <option value="add-parent">Add Perent</option>
                <option value="main-nc">Main</option>
                <option value="login">Login</option>
                <option value="signup">Signup</option>
                <option value="forget-password">Forget Password</option>
            </select>
         );
    }
}
 
export default withRouter(Navigation);

