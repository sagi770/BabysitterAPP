import React from 'react';
import AddParent from '../components/main/addParent';
import ParentList from '../components/main/parentList';
import LinkSetting from './../components/main/linkToSetting';

const Main = ({user, sc, parents,}) => {
 
  
  return (<div>
            <LinkSetting/>
            <ParentList/>
            <AddParent/>
        </div>);
}

export default Main;
