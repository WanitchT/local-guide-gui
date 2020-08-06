import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu,Descriptions  } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      txtUserID: "",
      txtUserPassword: "",
      txtFirstName: "",
      txtLastName: "",
      txtEmail: ""
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
          <p>SEARCH LOCAL GUIDE</p>
          <br />
          <div>
      <Descriptions
        title="Responsive Descriptions"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        <Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
        </Descriptions.Item>
      </Descriptions>
    </div>
          <p>USER ID</p>
          <Input style={{ width: '25%', borderRadius: 50 }} value={this.state.txtUserID} onChange={(e) => {
              this.setState({
                txtUserID: e.target.value
              })
          }}></Input>
          <br />
          <p>PASSWORD</p>
          <Input style={{ width: '25%', borderRadius: 50 }} value={this.state.txtUserPassword} onChange={(e) => {
              this.setState({
                txtUserPassword: e.target.value
              })
          }}></Input>
          <br />
          <p>FIRST NAME</p>
          <Input style={{ width: '25%', borderRadius: 50 }} value={this.state.txtFirstName} onChange={(e) => {
              this.setState({
                txtFirstName: e.target.value
              })
          }}></Input>
          <br />
          <p>LAST NAME</p>
          <Input style={{ width: '25%', borderRadius: 50 }} value={this.state.txtLastName} onChange={(e) => {
              this.setState({
                txtLastName: e.target.value
              })
          }}></Input>
          <br />
          <p>E-MAIL</p>
          <Input style={{ width: '25%', borderRadius: 50 }} value={this.state.txtEmail} onChange={(e) => {
              this.setState({
                txtEmail: e.target.value
              })
          }}></Input>
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

export default UserPage;