import React from 'react';
import example from '../../images/example.png'
import { Link } from 'react-router-dom';
import arrowL from '../../images/icons/arrowL.png'
import Header from './../../components/Header';
import key from '../../images/icons/key.png'
import add_user from '../../images/icons/add_user.png'
import Exclamation from './../../components/not_conected/exclamation'; 

const Main_not_connected = () => {
  
    return(<div>
              <Header text="Welcome" imgRight = { add_user } right = '/signup' imgLeft = { key } left = '/login'/>

    <div className="page">
    <Exclamation/>


        <Link className="importBtn" to = "/signup">
            <img className = "importBtnImg" src = {arrowL} alt = "" />
        </Link>    

    </div>


    </div>);
}

export default Main_not_connected;