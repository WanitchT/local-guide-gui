import React from 'react';
import axios from 'axios';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { convertLegacyProps } from 'antd/lib/button/button';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      txtUsername: "wan.te@baac.or.th",
      txtPassword: "12345678"
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

    // const user = {
    //   txtUsername: this.state.txtUsername,
    //   txtPassword: this.state.txtPassword,
    // };
    // console.log(user)

    //axios.post(`http://localhost:8448/`, { user })
    // axios.post(`http://baac.topwork.asia:8445/api/user/signin`, { user }, 
    //   {headers: {
    //     'Content-Type': 'application/json',
    //   }})
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     if (res.data.message == "success") {
    //       this.showModalSuccess();
    //     } else {
    //       this.showModalAlert();
    //     }
    //   }
    // )

    var axios = require('axios');
    var data = JSON.stringify({"txtUsername": this.state.txtUsername,"txtPassword":this.state.txtPassword});
    console.log(data)

    var config = {
      method: 'post',
      url: 'https://fighto-api.topwork.asia/api/user/signin',
      headers: { 
        'Content-Type': 'application/json'
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
          <Input.Password style={{ width: '25%', borderRadius: 50 }} value={this.state.txtPassword} onChange={(e) => {
              this.setState({
                txtPassword: e.target.value
              })
          }}></Input.Password>
          <br />
          <div>
            <Button type="primary" shape="round" size="large"><Link to="/singup">SIGNUP</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button shape="round" size="large" onClick={this.handleSubmit}>Login</Button>
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
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default Login;