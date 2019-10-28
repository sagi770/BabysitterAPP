import React from 'react';
import ParentList from '../../components/main/parentList';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import exclamation from '../../images/icons/exclamation.png'
import settings from '../../images/icons/settings.png'
import plus from '../../images/icons/plus.png'
import jwt_decode from "jwt-decode"
import axios from 'axios';
// import Parent from './../components/main/parent';

class Main extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      parentList: [],
      
    }
 
  }

  componentDidMount() {
    const token = localStorage.token
    console.log(token)
    const decoded = jwt_decode(token)
    console.log(decoded)
    this.setState({
       name: decoded.name,
        id: decoded._id
      })
      axios.get(`http://localhost:4000/parent_list/${decoded._id}`)
      .then(res => {
        console.log(res)

        this.setState({parentList: res.data})
      })
   
  }

  
  
  render(){
    let add
 if(this.state.parentList.length < 1) {
   add = <Link style={{textDecoration: "none"}} to = "/add_parent">
   <div className="blank_list">
     <b>Add new parent</b>
   </div>
   </Link>
 }else{
   add = <Link className="importBtn" to = "/add_parent">
   <img className = "importBtnImg" src = {plus} alt = "" />
</Link> 

 }

  return (<div >
      <Header 
            imgLeft={settings} 
            left="/settings"
            imgRight={exclamation}
            right="/exclamationPage"
            text="parent list"/>
      <div className = "page" >
    <ParentList parents = {this.state.parentList} />
     
      {add}


      </div>
          </div>);
}
}
export default Main;
