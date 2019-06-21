import React from 'react';
import MenuNC from '../../components/NC/mainNC/menuNC';
import InfoNC from '../../components/NC/mainNC/information';
import { Link } from 'react-router-dom';

const MainNC = ({user, sc, parents,}) => {
 
  
  return (<div>
            <MenuNC/>
            <InfoNC/>
        </div>);
}

export default MainNC;