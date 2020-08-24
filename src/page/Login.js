import React from 'react';
import axios from 'axios';
import '../App.css';
import { Modal, Button, Input, Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

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

  showModalSuccess = () => {
    this.setState({
      visiblesuccess: true,
    });
  };

  showModalAlert = () => {
    this.setState({
      visiblealert: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visiblesuccess: false,
      visiblealert: false,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    var axios = require('axios');
    var data = JSON.stringify({"email": this.state.txtUsername,"password":this.state.txtPassword});
    console.log(data)

    var config = {
      method: 'post',
      url: 'https://fighto-api.topwork.asia/api/user/signin',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With'
      },
      data : data,
      reponseType: { 
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(res => {
      console.log(JSON.stringify(res.data));
      if (res.data.success == true) {
        localStorage.setItem('emailInLocalStorage', this.state.txtUsername);
        localStorage.setItem('idUserInLocalStorage', res.data.id);
        localStorage.setItem('idTokenInLocalStorage', res.data.token);
        this.showModalSuccess();
      } else {
        this.showModalAlert();
      }
    })
    .catch(error =>{
      console.log(error);
      this.showModalAlert();
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-display">
          <img src={this.state.logo} width="500px" alt="Logo" />
          <br />
          <Card title="SIGN IN" bordered={false} style={{ width: 500, borderRadius: 50 }}>
            <Row>
              <Col span={1}></Col>
              <Col span={6} style={{ height: "50px" }}>
                <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center', height: "40px" }} value="USERNAME"></Input>
              </Col>
              <Col span={1}></Col>
              <Col span={15}>
                <Input style={{ borderRadius: 50, height: "40px" }} value={this.state.txtUsername} onChange={(e) => {
                  this.setState({
                    txtUsername: e.target.value
                  })
                }}></Input>
              </Col>
              <Col span={1}></Col>
            </Row>
            <Row>
              <Col span={1}></Col>
              <Col span={6} style={{ height: "50px" }}>
                <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center', height: "40px" }} value="PASSWORD"></Input>
              </Col>
              <Col span={1}></Col>
              <Col span={15}>
                <Input.Password style={{ borderRadius: 50, height: "40px" }} value={this.state.txtPassword} onChange={(e) => {
                  this.setState({
                    txtPassword: e.target.value
                  })
                }}></Input.Password>
              </Col>
              <Col span={1}></Col>
            </Row>
            <Row><Col span={24} style={{ height: "20px" }}></Col></Row>
            <Row>
              <Col span={8}></Col>
              <Col span={6}>
                <Button type="primary" shape="round" size="large"><Link to="/singup">SIGNUP</Link></Button>
              </Col>
              <Col span={6}>
                <Button shape="round" size="large" onClick={this.handleSubmit}>Login</Button>
              </Col>
              <Col span={4}></Col>
            </Row>
          </Card>
          <Modal
            title="SELECT"
            visible={this.state.visiblesuccess}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" hidden>Return</Button>,
              <Button key="submit" type="primary" onClick={this.handleCancel} shape="round" size="large" danger>Close</Button>,
            ]}
          >
            <Button block shape="round" size="large"><Link to="/userPage">USER</Link></Button>
            <br /><br />
            <Button block shape="round" size="large"><Link to="/signupGuide">GUIDE</Link></Button>
          </Modal>
          <Modal
            title="Alert"
            visible={this.state.visiblealert}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" hidden>Return</Button>,
              <Button key="submit" type="primary" onClick={this.handleCancel} shape="round" size="large" danger>Close</Button>,
            ]}
          >
            <p>Username or Password incorrect!!!</p>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Login;