import React from 'react';
import './App.css';
import { Button, Input, Row, Col, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './page/Login';
import Display from './page/Display';
import Signup from './page/Signup';
import UserPage from './page/UserPage';
import SignupGuide from './page/SignupGuide';
import GuideProfile from './page/GuideProfile';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/guideProfile"><GuideProfile /></Route>
          <Route path="/signupGuide"><SignupGuide /></Route>
          <Route path="/userPage"><UserPage /></Route>
          <Route path="/singup"><Signup /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/"><GuideProfile /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
