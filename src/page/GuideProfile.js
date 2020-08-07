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
                                        src="https://images.pexels.com/photos/3695219/pexels-photo-3695219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    />
                                }>

                                    <Rate disabled defaultValue={2} />
                                    <br />
                                    <Descriptions bordered
                                        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                        <Descriptions.Item label="Guide name"></Descriptions.Item>
                                        <Descriptions.Item label="Guide nickname"></Descriptions.Item>
                                        <Descriptions.Item label="Age">30</Descriptions.Item>
                                        <Descriptions.Item label="Phone no."></Descriptions.Item>
                                        <Descriptions.Item label="Certificate no.">    </Descriptions.Item>
                                        <Descriptions.Item label="Exp">6 years</Descriptions.Item>
                                        <Descriptions.Item label="Location">CM</Descriptions.Item>
                                        <Descriptions.Item label="Plans">
                                            <Link to="/plandetail">Night market</Link>
                                            <p>Eating trip</p>
                                        </Descriptions.Item>
                                    </Descriptions>

                                </Card>
                            </Col>
                            <Col span={4} />

                        </Row>
                    </div>
                    
                    <br />
                    <div>
                        <Button shape="round" size="large" danger><Link to="/userPage">BACK</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button shape="round" size="large" danger><Link to="/review">REVIEW</Link></Button>

                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

export default GuideProfile;