import React from 'react';
import MenuNC from '../../components/NC/mainNC/menuNC';
import InfoNC from '../../components/NC/mainNC/information';
import { Link } from 'react-router-dom';

const MainNC = ({user, sc, parents,}) => {
 
  return (<div className="screenExample">
            <Link className="linkBtn" to="/nc1">login</Link>  
            <Link className="linkBtn" to="/nc2"> signup</Link>
            
            <MenuNC/>
            <InfoNC/>
        </div>);
}

export default MainNC;