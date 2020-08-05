import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu, Card, Form } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      txtUsername: "Tony@baac.or.th",
      txtPassword: "12345678",
      txtFirstName: "Tony",
      txtLastName: "Y"
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

  handleSubmit = e => {
    console.log(e);
    this.setState({
      visible: false,
    });

    var axios = require('axios');
    var data = JSON.stringify({"email": this.state.txtUsername, "password":this.state.txtPassword, "firstname": this.state.txtFirstName, "lastname":this.state.txtLastName});
    console.log(data)

    var config = {
      method: 'post',
      url: 'https://fighto-api.topwork.asia/api/user/signup',
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

  };

  render() {
    return (
      <div className="App">
        <div className="App-display">
        <img src={this.state.logo} width="500px" alt="Logo" />
        <Card title="SIGNUP INFORMATION" bordered={false} style={{ width: 800 }}>
          <Row>
            <Col span={4}></Col>
            <Col span={3} style={{ textAlign: "right" }}><h3>E-MAIL</h3></Col>
            <Col span={1}></Col>
            <Col span={12}>
              <Input style={{ borderRadius: 50 }} value={this.state.txtUsername} onChange={(e) => {
                this.setState({
                  txtUsername: e.target.value
                })
              }}></Input>
            </Col>
          </Row>
          <Row><Col span={24} style={{ height: "10px" }}></Col></Row>
          <Row>
            <Col span={4}></Col>
            <Col span={3} style={{ textAlign: "right" }}><h3>PASSWORD</h3></Col>
            <Col span={1}></Col>
            <Col span={12}>
              <Input.Password style={{ borderRadius: 50 }} value={this.state.txtPassword} onChange={(e) => {
                this.setState({
                  txtPassword: e.target.value
                })
              }}></Input.Password>
            </Col>
          </Row>
          <Row><Col span={24} style={{ height: "10px" }}></Col></Row>
          <Row>
            <Col span={4}></Col>
            <Col span={3} style={{ textAlign: "right" }}><h3>FIRST NAME</h3></Col>
            <Col span={1}></Col>
            <Col span={12}>
              <Input style={{ borderRadius: 50 }} value={this.state.txtFirstName} onChange={(e) => {
                this.setState({
                  txtFirstName: e.target.value
                })
              }}></Input>
            </Col>
          </Row>
          <Row><Col span={24} style={{ height: "10px" }}></Col></Row>
          <Row>
            <Col span={4}></Col>
            <Col span={3} style={{ textAlign: "right" }}><h3>LAST NAME</h3></Col>
            <Col span={1}></Col>
            <Col span={12}>
              <Input style={{ borderRadius: 50 }} value={this.state.txtLastName} onChange={(e) => {
                this.setState({
                  txtLastName: e.target.value
                })
              }}></Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={8}></Col>
            <Col span={4} style={{ algin: "left" }}><Button shape="round" size="large" danger><Link to="/login">CANCEL</Link></Button></Col>
            <Col span={4} style={{ algin: "left" }}><Button type="primary" shape="round" size="large" onClick={this.handleSubmit}>SAVE</Button></Col>
          </Row>
          <Modal
            title="SUCCESS"
            visible={this.state.visiblesuccess}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" hidden>Return</Button>,
              <Button key="submit" type="primary" onClick={this.handleCancel} shape="round" size="large"><Link to="/login">OK</Link></Button>,
            ]}
          >
            <p>Save Successfully.</p>
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
            <p>Save failed!!!</p>
          </Modal>
          </Card>
        </div>
      </div>
    )
  }
}

export default Signup;