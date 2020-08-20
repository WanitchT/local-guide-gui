import React from 'react';
import '../App.css';
import { Modal, Button, Row, Col, Card, Descriptions, Rate } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { ProfileOutlined } from '@ant-design/icons';

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
                        <img src={this.state.imageUrl} style={{ width: 200 }}/>
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
                                        <Descriptions.Item label="Plans"><Button type="primary" shape="circle" icon={<ProfileOutlined />} onClick={this.showModal} ghost ></Button></Descriptions.Item>
                                    </Descriptions>
                                    <Modal
                                        title="Plans"
                                        visible={this.state.visible}
                                        onCancel={this.handleCancel}
                                        footer={[
                                            <Button key="back" hidden>Return</Button>,
                                            <Button key="submit" type="primary" onClick={this.handleCancel} shape="round" size="large" danger>Close</Button>,
                                        ]}
                                        >
                                        <div className="site-card-wrapper" style={{ width: '100%' }}>
                                            <Row>
                                                <Col span={24}>
                                                    <Card title="Schedule" bordered={false} style={{ width: '100%' }}>
                                                        <Descriptions bordered
                                                            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                                            <Descriptions.Item label="8:00 น.">เริ่มออกเดินทาง</Descriptions.Item>
                                                            <Descriptions.Item label="9:00 น.">วัดพระเชตุพนวิมลมังคลารามราชวรมหาวิหาร</Descriptions.Item>
                                                            <Descriptions.Item label="10:00 น.">วัดอรุณราชวรารามราชวรมหาวิหาร</Descriptions.Item>
                                                            <Descriptions.Item label="11:00 น.">วัดบวรนิเวศราชวรวิหาร</Descriptions.Item>
                                                            <Descriptions.Item label="12:00 น.">ทานอาหารกลางวัน</Descriptions.Item>
                                                            <Descriptions.Item label="13:00 น.">วัดมหาธาตุยุวราชรังสฤษฎิ์ราชวรมหาวิหาร</Descriptions.Item>
                                                            <Descriptions.Item label="14:00 น.">วัดราชบพิธสถิตมหาสีมารามราชวรวิหาร</Descriptions.Item>
                                                            <Descriptions.Item label="15:00 น.">วัดสุทัศนเทพวรารามราชวรมหาวิหาร</Descriptions.Item>
                                                            <Descriptions.Item label="16:00 น.">วัดราชประดิษฐสถิตมหาสีมารามราชวรวิหาร</Descriptions.Item>
                                                            <Descriptions.Item label="17:00 น.">วัดเบญจมบพิตรดุสิตวนารามราชวรวิหาร</Descriptions.Item>
                                                            <Descriptions.Item label="18:00 น.">วัดสระเกศราชวรมหาวิหาร</Descriptions.Item>
                                                        </Descriptions>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Modal>
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