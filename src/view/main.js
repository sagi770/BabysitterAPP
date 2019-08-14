import React from 'react';
import AddParentBtn from '../components/main/addParentBtn';
import ParentList from '../components/main/parentList';
import LinkSetting from './../components/main/linkToSetting';
import axios from 'axios';
import Parent from './../components/main/parent';

class Main extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      user: []
    }
    this.url = "http://localhost:4000"
 
  }

  componentDidMount() {
  //TODO:get the user ID from login OR data storage - > the right way...
  const user_id = '5d53fd3ad7a15c35989e7d72';


    axios.get(this.url+'/'+user_id).then(user=>{
      console.log(user.data.result.parents);
      this.setState({user: user.data.result.parents})
    })
  }
  
  
  render(){


  return (<div className="screenExample">
              <LinkSetting/>
              <ParentList parents={this.state.user}/>
              <AddParentBtn/>
          </div>);
}
}
export default Main;
