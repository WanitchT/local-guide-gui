import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu, Select } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Option } = Select;

class SignupGuide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      txtUserID: "",
      txtUserPassword: "",
      txtFirstName: "",
      txtLastName: "",
      txtEmail: "",
      txtGender: ""
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
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
          <br />
          <p>SIGNUP GUIDE</p>
          <Input style={{ width: '40%' }} addonBefore="USER ID" value={this.state.txtUserID} onChange={(e) => {
              this.setState({
                txtUserID: e.target.value
              })
          }}></Input>
          <br />
          <Input style={{ width: '40%' }} addonBefore="PASSWORD" value={this.state.txtUserPassword} onChange={(e) => {
              this.setState({
                txtUserPassword: e.target.value
              })
          }}></Input>
          <br />
          <Input style={{ width: '40%'}} addonBefore="FIRST NAME" value={this.state.txtFirstName} onChange={(e) => {
              this.setState({
                txtFirstName: e.target.value
              })
          }}></Input>
          <br />
          <Input style={{ width: '40%' }} addonBefore="LAST NAME" value={this.state.txtLastName} onChange={(e) => {
              this.setState({
                txtLastName: e.target.value
              })
          }}></Input>
          <br />
          <Input style={{ width: '40%' }} addonBefore="E-MAIL" value={this.state.txtEmail} onChange={(e) => {
              this.setState({
                txtEmail: e.target.value
              })
          }}></Input>
          <br />
          <Input.Group compact style={{ width: '40%' }} addonBefore="GENDER" value={this.state.txtGender} onChange={(e) => {
              this.setState({
                txtGender: e.target.value
              })
          }}>
              <Select placeholder="GENDER">
                <Option value="Option1-1">Option1-1</Option>
                <Option value="Option1-2">Option1-2</Option>
            </Select>
          </Input.Group>
          <br />
          <div>
            <Button shape="round" size="large" danger><Link to="/login">CANCEL</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary" shape="round" size="large" onClick={this.showModal}>SAVE</Button>
            <Modal
              title="SAVE"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel} shape="round" size="large" danger>CANCEL</Button>,
                <Button key="submit" type="primary" onClick={this.handleOk} shape="round" size="large"><Link to="/login">CONFIRM</Link></Button>,
              ]}
            >
              <p>Do you Want to Save these Data?</p>
            </Modal>
          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default SignupGuide;