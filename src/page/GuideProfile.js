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
            loading: false,
            txtEmail: "",
            txtFirstName: "",
            txtLastName: "",
            txtDisplayname: "",
            txtGender: "",
            txtAddress: "",
            txtProvince: "",
            txtTelephone: "",
            txtEducation: "",
            txtCertificate: "",
            txtLocation: "",
            imageUrl: ""
        }
    }

    componentDidMount() {
        var axios = require('axios');
        var config = {
            method: 'get',
            url: 'https://fighto-api.topwork.asia/api/guide/'+localStorage.getItem('idGuideInLocalStorage'),
            headers: { 
            'Authorization': 'Bearer '+localStorage.getItem('idTokenInLocalStorage'), 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With'
            },
            reponseType: { 
            'Content-Type': 'application/json'
            }
        };
        
        axios(config)
        .then(res => {
            console.log(JSON.stringify(res.data));
            if (res.data.success == true) {
                this.setState({
                    ...this.state,
                    txtFirstName: res.data.data.firstname,
                    txtLastName: res.data.data.lastname,
                    txtDisplayname: res.data.data.displayname,
                    txtGender:  res.data.data.gender,
                    txtAddress: res.data.data.address[0],
                    txtProvince: res.data.data.address[1],
                    txtTelephone: res.data.data.telephone,
                    txtEducation: res.data.data.education,
                    txtCertificate: res.data.data.certificate,
                    txtLocation: res.data.data.location,
                    imageUrl: res.data.data.profilepicture,
                })        
            }
        })
        .catch(error =>{
            console.log(error);
        });
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
                    <Card title="GUIDE PROFILE" bordered={false} style={{ width: 800 }}>
                        <img src={this.state.imageUrl}/>
                    </Card>
                    <Card bordered={false} style={{ width: 800 }}>
                        <div className="site-card-wrapper" style={{ width: '100%' }}>
                            <Row gutter={24}>
                                <Col span={24}>
                                    <Rate disabled defaultValue={2} />
                                    <br />
                                    <Descriptions bordered
                                        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                        <Descriptions.Item label="Guide name"><p>{this.state.txtFirstName+" "+this.state.txtLastName}</p></Descriptions.Item>
                                        <Descriptions.Item label="Guide nickname"><p>{this.state.txtDisplayname}</p></Descriptions.Item>
                                        <Descriptions.Item label="Gender"><p>{this.state.txtGender}</p></Descriptions.Item>
                                        <Descriptions.Item label="Education"><p>{this.state.txtEducation}</p></Descriptions.Item>
                                        <Descriptions.Item label="Certificate no."><p>{this.state.txtCertificate}</p></Descriptions.Item>
                                        <Descriptions.Item label="Location"><p>{this.state.txtProvince}</p></Descriptions.Item>
                                        <Descriptions.Item label="Telephone"><p>{this.state.txtTelephone}</p></Descriptions.Item>
                                        <Descriptions.Item label="Plans"><p>ท่องเที่ยวกลางวันบริเวณสนามหลวง</p></Descriptions.Item>
                                    </Descriptions>
                                </Col>
                            </Row>
                        </div>
                        <br />
                        <div>
                            <Button type="default" shape="round" size="large" danger><Link to="/userPage">BACK</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button type="primary" shape="round" size="large"><Link to="/review">REVIEW</Link></Button>
                        </div>
                    </Card>
                    <br />
                </div>
            </div>
        )
    }
}

export default GuideProfile;