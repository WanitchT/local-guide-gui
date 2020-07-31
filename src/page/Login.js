import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      txtUsername: "",
      txtPassword: ""
    }
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-display">
          <img src={this.state.logo} width="500px" alt="Logo" />
          <br />
          <p>SIGN IN</p>
          <br />
          <p>USERNAME</p>
          <Input style={{ width: '25%', borderRadius: 50 }} value={this.state.txtUsername} onChange={(e) => {
              this.setState({
              txtUsername: e.target.value
              })
          }}></Input>
          <br />
          <p>PASSWORD</p>
          <Input style={{ width: '25%', borderRadius: 50 }} value={this.state.txtPassword} onChange={(e) => {
              this.setState({
                txtPassword: e.target.value
              })
          }}></Input>
          <br />
          <div>
            <Button type="primary" style= {{ borderRadius: 50 }} onClick={this.showModal}>SIGNUP</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Modal
              title="SELECT SIGNUP"
              visible={this.state.visible}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" hidden>Return</Button>,
                <Button key="submit" type="primary" onClick={this.handleCancel}>Close</Button>,
              ]}
            >
              <Button block style= {{ borderRadius: 50 }}><Link to="/signupUser">SIGNUP USER</Link></Button>
              <br /><br />
              <Button block style= {{ borderRadius: 50 }}><Link to="/signupGuide">SIGNUP GUIDE</Link></Button>
            </Modal>
            <Button style= {{ borderRadius: 50 }}>Login</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;