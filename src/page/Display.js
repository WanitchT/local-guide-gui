import React from 'react';
import '../App.css';
import { Button, Input, Row, Col, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg"
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-display">
          <img src={this.state.logo} width="500px" alt="Logo" />
          <img src={this.state.display} width="500px" alt="Display" />
          <br />
          <div><Button block style= {{ borderRadius: 50 }}><Link to="/login">Website</Link></Button></div>
        </div>
      </div>
    )
  }
}

export default Display;