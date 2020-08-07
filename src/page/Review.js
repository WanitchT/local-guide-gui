import React from 'react';
import '../App.css';
import {
    Modal, Button, Input, Row, Col, Layout, Menu, Card, Descriptions, Badge, Form
    , Comment, Tooltip, Avatar,Rate
} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Review extends React.Component {
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
                    <p>Review</p>
                    <br />

                    <div className="site-card-wrapper" style={{ width: '100%' }}>
                        <Row gutter={16}>
                            <Col span={2}/>
                            <Col span={10} className="gutter-row" >
                                <Card bordered={false} style={{padding: '8px 0'}}>
                                    <br />
                                    <Comment
                                        author={<a>Han Solo</a>}
                                        avatar={
                                            <Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                alt="Han Solo"
                                            />
                                        }
                                        content={
                                         <Descriptions style={{textAlign:"left"}} 
                                          column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}>
                                        <Descriptions.Item label="Guide" >Very kind</Descriptions.Item>
                                        <Descriptions.Item label="Place">So nice and grate weather</Descriptions.Item>
                                        <Descriptions.Item label="Location">Too much people</Descriptions.Item>
                                        <Descriptions.Item label="Others">Food is so delicious</Descriptions.Item>
                                        <Descriptions.Item label="Rate"><Rate disabled defaultValue={5} /></Descriptions.Item>
                                        </Descriptions>
                                        }
                                        datetime={
                                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                                <span>{moment().fromNow()}</span>
                                            </Tooltip>
                                        }
                                    />


                                </Card>
                            </Col>
                            <Col span={10}>

                                <Card bordered={false} >
                                    <br />

                                    <Descriptions bordered
                                        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                        <Descriptions.Item label="Guide"><Input.TextArea /></Descriptions.Item>
                                        <Descriptions.Item label="Place"><Input.TextArea /></Descriptions.Item>
                                        <Descriptions.Item label="Location"><Input.TextArea /></Descriptions.Item>
                                        <Descriptions.Item label="Others"><Input.TextArea /></Descriptions.Item>
                                        <Descriptions.Item label="Rate"><Rate /></Descriptions.Item>
                                    </Descriptions>

                                </Card>
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                    </div>
                    <br />
                    <div>
                        <Button shape="round" size="large"><Link to="/userPage">BACK</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button shape="round" size="large" type="primary"><Link to="/userPage">SUBMIT</Link></Button>

                    </div>
                </div>
            </div>
        )
    }
}

export default Review;