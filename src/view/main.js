import React from 'react';
import AddParentBtn from '../components/main/addParentBtn';
import ParentList from '../components/main/parentList';
import LinkSetting from './../components/main/linkToSetting';

const Main = ({user, sc, parents,}) => {
 
  
  return (<div className="screenExample">
              <LinkSetting/>
              <ParentList/>
              <AddParentBtn/>
          </div>);
}

export default Main;
