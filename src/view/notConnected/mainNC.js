import React from 'react';
import MenuNC from '../../components/mainNC/menuNC';
import InfoNC from '../../components/mainNC/information';
import { Link } from 'react-router-dom';

const MainNC = ({user, sc, parents,}) => {
 
  
  return (<div>
            <MenuNC/>
            <InfoNC/>
        </div>);
}

export default MainNC;