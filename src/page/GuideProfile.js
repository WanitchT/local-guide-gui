import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu, Card, Descriptions, Badge, Rate } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class GuideProfile extends React.Component {
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
                    <p>GUIDE PROFILE</p>
                    <br />

                    <div className="site-card-wrapper" style={{ width: '100%' }}>
                        <Row gutter={24}>
                            <Col span={6} />
                            <Col span={12}>
                                <Card bordered={false} cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }>

                                    <Rate disabled defaultValue={2} />

                                    <Descriptions bordered
                                        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                        <Descriptions.Item label="Guide name"></Descriptions.Item>
                                        <Descriptions.Item label="Guide nickname"></Descriptions.Item>
                                        <Descriptions.Item label="Age">30</Descriptions.Item>
                                        <Descriptions.Item label="Phone no."></Descriptions.Item>
                                        <Descriptions.Item label="Certificate no.">    </Descriptions.Item>
                                        <Descriptions.Item label="Exp">6 years</Descriptions.Item>
                                        <Descriptions.Item label="Location">CM</Descriptions.Item>

                                    </Descriptions>

                                </Card>
                            </Col>
                            <Col span={4} />

                        </Row>
                    </div>
                    {/* 
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
                    <br /> */}
                </div>
            </div>
        )
    }
}

export default GuideProfile;