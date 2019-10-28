import React, { Component }  from 'react';
import axios from 'axios';
import HourList from './../../components/HourList';
import settings from "../../images/icons/settings.png"
import group from "../../images/icons/group.png"
import plus from "../../images/icons/plus.png"
import { Link } from 'react-router-dom';
import ParentList from './../../components/main/parentList';
import jwt_decode from 'jwt-decode';
import Header from './../../components/Header';

class ParentView extends Component {
    constructor(props) {
        super(props);
    }
    
    state = { 
        parent: {name: "test", email:"email@email.com"},
      }
componentDidMount(){
    let id = window.location.href.split('/')
    id = id[id.length-1]
  console.log(id)
    const token = localStorage.token
    const decoded = jwt_decode(token)
  console.log(decoded)
    axios.get(`/parentHour/${decoded._id}/${id}`)
    .then(rows=>{
        console.log(rows.data)
        this.setState({parentRows: rows.data})
    })
}
    render() {
     
        console.log(this.state);

        const header = ["Date", "From" ,  "To", "Total","Action" ];

        let add
        if(this.state.parent.length < 1) {
          add = <div style={{textDecoration: "none"}} >
          <div className="blank_list">
            <b>Add new parent</b>
          </div>
          </div>
        }else{
          add = <Link className="importBtn" to = "/add_hour">
          <img className = "importBtnImg" src = {plus} alt = "" />
       </Link> 
       
        }

        return ( <div>
            <Header
               text = {this.state.parent.name}
               imgLeft={settings} 
               left="/settingP/undefined"
               imgRight={group}
               right="/home"
               />
            <div className = "page" >
    <HourList hour = {this.state.parentRows} />
    {/* <Link className="importBtn" to = "/add_hour">
            <img className = "importBtnImg" src = {plus} alt = "" />
        </Link>    */}





      </div>
      <div onClick={()=>{}}>
          {add}
      </div>
        </div>
            
         
         );
    }
}
 
export default ParentView;

