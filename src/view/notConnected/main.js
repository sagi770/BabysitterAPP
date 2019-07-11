import React from 'react';
import HomePage from '../../components/notConnected/homePage';
import { Link } from 'react-router-dom';

const MainNotConnected = ({user, sc, parents,}) => {
 
  return (<div className="screenExample">
            <Link className="linkBtn" to="/login">login</Link>  
            <Link className="linkBtn" to="/signup"> signup</Link>
            
            <HomePage/>
        </div>);
}

export default MainNotConnected;