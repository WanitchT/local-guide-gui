import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Card} from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

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
        <Card title="SIGNUP INFORMATION" bordered={false} style={{ width: 600, borderRadius: 50 }}>
          <Row>
            <Col span={1}></Col>
            <Col span={5} style={{ height: "50px" }}>
              <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center', height: "40px" }} value="E-MAIL"></Input>
            </Col>
            <Col span={1}></Col>
            <Col span={16}>
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
            <Col span={5} style={{ height: "50px" }}>
              <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center', height: "40px" }} value="PASSWORD"></Input>
            </Col>
            <Col span={1}></Col>
            <Col span={16}>
              <Input.Password style={{ borderRadius: 50, height: "40px" }} value={this.state.txtPassword} onChange={(e) => {
                this.setState({
                  txtPassword: e.target.value
                })
              }}></Input.Password>
            </Col>
            <Col span={1}></Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={5} style={{ height: "50px" }}>
              <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center', height: "40px" }} value="FIRST NAME"></Input>
            </Col>
            <Col span={1}></Col>
            <Col span={16}>
              <Input style={{ borderRadius: 50, height: "40px" }} value={this.state.txtFirstName} onChange={(e) => {
                this.setState({
                  txtFirstName: e.target.value
                })
              }}></Input>
            </Col>
            <Col span={1}></Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={5} style={{ height: "50px" }}>
              <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center', height: "40px" }} value="LAST NAME"></Input>
            </Col>
            <Col span={1}></Col>
            <Col span={16}>
              <Input style={{ borderRadius: 50, height: "40px" }} value={this.state.txtLastName} onChange={(e) => {
                this.setState({
                  txtLastName: e.target.value
                })
              }}></Input>
            </Col>
            <Col span={1}></Col>
          </Row>
          <br />
          <Row>
            <Col span={7}></Col>
            <Col span={5} style={{ algin: "left" }}><Button shape="round" size="large" danger><Link to="/login">CANCEL</Link></Button></Col>
            <Col span={5} style={{ algin: "left" }}><Button type="primary" shape="round" size="large" onClick={this.handleSubmit}>SAVE</Button></Col>
            <Col span={7}></Col>
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