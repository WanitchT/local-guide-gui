import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu, Card, Select, Form } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Option } = Select;

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      txtProvince: ""
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
          <Card title="SEARCH LOCAL GUIDE" bordered={false} style={{ width: 800 }}>
          <Row>
            <Col span={4}></Col>
            <Col span={4} style={{ algin: "right" }}><h3>PROVINCE</h3></Col>
            <Col span={12}>
              <Form.Item>
                <Select
                  placeholder="Select..."
                  allowClear
                >
                  <Option value="10">กรุงเทพมหานคร</Option>
                  <Option value="11">นนทบุรี</Option>
                  <Option value="12">นครนายก</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={7} style={{ algin: "right" }}><h3>TOURIST ATTRACTION</h3></Col>
            <Col span={12}>
              <Form.Item>
                <Select
                  placeholder="Select..."
                  allowClear
                >
                  <Option value="10">กรุงเทพมหานคร</Option>
                  <Option value="11">นนทบุรี</Option>
                  <Option value="12">นครนายก</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}></Col>
            <Col span={4} style={{ algin: "left" }}>
              <Button type="primary" shape="round" size="large" onClick={this.showModal}>SEARCH</Button>
              <Modal
              title="SEARCH"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel} shape="round" size="large" hidden>CANCEL</Button>,
                <Button key="submit" type="primary" onClick={this.handleOk} shape="round" size="large"><Link to="/userPage">OK</Link></Button>,
              ]}
            >
              <p>Search Success...</p>
            </Modal>
            </Col>
          </Row>
          </Card>
          <br />
        </div>
      </div>
    )
  }
}

export default UserPage;