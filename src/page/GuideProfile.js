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
      imageUrl: "",
      txt0600: "",
      txt0700: "",
      txt0800: "",
      txt0900: "",
      txt1000: "",
      txt1100: "",
      txt1200: "",
      txt1300: "",
      txt1400: "",
      txt1500: "",
      txt1600: "",
      txt1700: "",
      txt1800: "",
      txt1900: "",
      txt2000: "",
      txtTitle: "",
      txtDescription: "",
      dataPlanlist: [],
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
          txtTitle: res.data.data.title,
          txtDescription: res.data.data.description,
        });
        for (let i=0; i < res.data.data.planlist.length; i++) {
          let obj = {
            time: res.data.data.planlist[i].time,
            desc: res.data.data.planlist[i].desc,
          };
          this.setState({
            ...this.state,
            dataPlanlist: [...this.state.dataPlanlist, obj],
          })
        }
        this.setState({
          ...this.state,
          txt0600: this.state.dataPlanlist[0].desc,
          txt0700: this.state.dataPlanlist[1].desc,
          txt0800: this.state.dataPlanlist[2].desc,
          txt0900: this.state.dataPlanlist[3].desc,
          txt1000: this.state.dataPlanlist[4].desc,
          txt1100: this.state.dataPlanlist[5].desc,
          txt1200: this.state.dataPlanlist[6].desc,
          txt1300: this.state.dataPlanlist[7].desc,
          txt1400: this.state.dataPlanlist[8].desc,
          txt1500: this.state.dataPlanlist[9].desc,
          txt1600: this.state.dataPlanlist[10].desc,
          txt1700: this.state.dataPlanlist[11].desc,
          txt1800: this.state.dataPlanlist[12].desc,
          txt1900: this.state.dataPlanlist[13].desc,
          txt2000: this.state.dataPlanlist[14].desc,
        });
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
            <img src={this.state.imageUrl} style={{ width: 200, borderRadius: 50 }}/>
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
                    <Descriptions.Item label="Plans"><Button type="primary" shape="circle" icon={<ProfileOutlined />} onClick={this.showModal}></Button></Descriptions.Item>
                  </Descriptions>
                  <Modal
                    title="PLAN"
                    width="700px"
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
                          <Card title="Header" bordered={false} style={{ width: '100%' }}>
                            <Descriptions bordered
                              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                              <Descriptions.Item label="Tile">{this.state.txtTitle}</Descriptions.Item>
                              <Descriptions.Item label="Description">{this.state.txtDescription}</Descriptions.Item>
                            </Descriptions>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Card title="Schedule" bordered={false} style={{ width: '100%' }}>
                            <Descriptions bordered
                              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                              <Descriptions.Item label="6:00">{this.state.txt0600}</Descriptions.Item>
                              <Descriptions.Item label="7:00">{this.state.txt0700}</Descriptions.Item>
                              <Descriptions.Item label="8:00">{this.state.txt0800}</Descriptions.Item>
                              <Descriptions.Item label="9:00">{this.state.txt0900}</Descriptions.Item>
                              <Descriptions.Item label="10:00">{this.state.txt1000}</Descriptions.Item>
                              <Descriptions.Item label="11:00">{this.state.txt1100}</Descriptions.Item>
                              <Descriptions.Item label="12:00">{this.state.txt1200}</Descriptions.Item>
                              <Descriptions.Item label="13:00">{this.state.txt1300}</Descriptions.Item>
                              <Descriptions.Item label="14:00">{this.state.txt1400}</Descriptions.Item>
                              <Descriptions.Item label="15:00">{this.state.txt1500}</Descriptions.Item>
                              <Descriptions.Item label="16:00">{this.state.txt1600}</Descriptions.Item>
                              <Descriptions.Item label="17:00">{this.state.txt1700}</Descriptions.Item>
                              <Descriptions.Item label="18:00">{this.state.txt1800}</Descriptions.Item>
                              <Descriptions.Item label="19:00">{this.state.txt1900}</Descriptions.Item>
                              <Descriptions.Item label="20:00">{this.state.txt2000}</Descriptions.Item>
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