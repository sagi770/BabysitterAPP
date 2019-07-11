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

                    <Route exact path="/" component={Main} />
                    <Route path="/add-parent" component={addParent} />
                    <Route path="/add-parent-row" component={AddRowForParent} />
                    <Route path="/parent/:id" component={ParentView} />
                    <Route path="/home-page" component={MainNotConnected} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/setting" component={Setting} />
                    <Route path="/forget-password" component={ForgetPassword} />
                </Router>
            </div>);
}

export default App;
