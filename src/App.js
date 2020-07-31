import React from 'react';
import './App.css';
import { Button, Input, Row, Col, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './page/Login';
import Display from './page/Display';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/"><Display /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
