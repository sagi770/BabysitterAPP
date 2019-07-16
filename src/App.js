import React from 'react';
import { BrowserRouter as Router, Route /*, Link */} from "react-router-dom";
import Main from './view/main';
import testAJAX from './components/Utilities/testAJAX';
import Navigation from './components/Utilities/navigation';
import MainNotConnected from './view/notConnected/main';
import Login from './view/notConnected/login';
import Signup from './view/notConnected/signup';
import Setting from './view/input/setting';
import addParent from './view/input/addParent';

import ForgetPassword from './view/notConnected/forgetPassword';

//maybe we need to move this components...
import ParentView from './view/parentView';
import AddRowForParent from './view/input/addRowForParent';

// import TempPager from './components/TempPager';

function App() {
    return (<div>
                <Router>

                    <Navigation/>
                
                    
                    {/* Test ajax call.. */}
                    <Route exact path="/ajax" component={testAJAX} />

{/* TODO:add Setting component */}

                    <Route exact path="/:user_id" component={Main} />
                    <Route path="/add-parent" component={addParent} />
                    <Route path="/:user_id/add-parent-row" component={AddRowForParent} />
                    <Route path="/:user_id/parent/:parent_id" component={ParentView} />
                    <Route path="/:user_id/setting" component={Setting} />
                    
                    {/* NOT CONNECTED */}
                    <Route exact path="/" component={MainNotConnected} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/forget-password" component={ForgetPassword} />
                </Router>
            </div>);
}

export default App;
