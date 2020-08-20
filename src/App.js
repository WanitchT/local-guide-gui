import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './page/Login';
import Display from './page/Display';
import Signup from './page/Signup';
import UserPage from './page/UserPage';
import SignupGuide from './page/SignupGuide';
import GuideProfile from './page/GuideProfile';
import Review from './page/Review';
import PlanDetail from './page/PlanDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/guideProfile"><GuideProfile /></Route>
          <Route path="/review"><Review /></Route>
          <Route path="/plandetail"><PlanDetail /></Route>
          <Route path="/signupGuide"><SignupGuide /></Route>
          <Route path="/userPage"><UserPage /></Route>
          <Route path="/singup"><Signup /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/"><Display /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
