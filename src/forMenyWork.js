import React from 'react';
import Main from './view/main';
import MainNotConnected from './view/notConnected/main';
import Login from './view/notConnected/login';
import Signup from './view/notConnected/signup';
import Setting from './view/input/setting';

import ForgetPassword from './view/notConnected/forgetPassword';

//maybe we need to move this components...
import ParentView from './view/parentView';
import AddRowForParent from './view/input/addRowForParent';
import AddParent from './view/input/addParent';
import MyPicker from './components/picker';

const ForMenyToWork = () => {
    return (<div>
                <h1>לא מחובר</h1>
                <MainNotConnected/>
                <p>להרשם</p>
                <Signup/>
                <Login/>
                <ForgetPassword/>
<MyPicker/>
                <h1>מחובר</h1>
                <Main/>
                <p>להוסיף הורה</p>
                <AddParent/>
                <ParentView/>
                <p>להוסיף שעות עבודה</p>
                <AddRowForParent/>
                <Setting/>
            </div>);
}

export default ForMenyToWork;
