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
      user: {
        parents: []
      }
    }
    this.url = "http://localhost:4000"

  }

  componentDidMount() {
    axios.get(this.url+'/:id')
    .then(user=>{
      console.log(user.data[0])
      this.setState({user: user.data[0]})
    })
  }
  

  render(){
  return (<div className="screenExample">
              <LinkSetting/>
              <ParentList parents={this.state.user.parents}/>
              <AddParentBtn/>
          </div>);
}
}
export default Main;
