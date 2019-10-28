import Exclamation from './../../components/not_conected/exclamation';
import React, { useState } from 'react';
import settings from "../../images/icons/settings.png"
import group from "../../images/icons/group.png"
import Header from '../../components/Header';

const ExclamationPage = () => {

  return <div>
        <Header 
        text = "Instructions"
        imgLeft={settings} 
        left="/settings"
        imgRight={group}
        right="/home"
        />
        <div className = "page">

        <Exclamation/>
        </div>

            </div>
}

export default ExclamationPage;
