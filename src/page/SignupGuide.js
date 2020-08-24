import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Select, Upload, message, Card, Descriptions } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class SignupGuide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      loading: false,
      txtEmail: localStorage.getItem('emailInLocalStorage'),
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
    };
  };

  componentDidMount() {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://fighto-api.topwork.asia/api/guide/'+localStorage.getItem('idUserInLocalStorage'),
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
          txtGender: res.data.data.gender,
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
        })
      }
    })
    .catch(error =>{
        console.log(error);
    });
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
      visibleplan: false,
      visibleaddplansuccess: false,
    });
  };

  handleSubmit = e => {
    console.log(e);
    this.setState({
      visible: false,
    });

    var axios = require('axios');
    var data = JSON.stringify({
      "email": this.state.txtEmail,
      "firstname": this.state.txtFirstName,
      "lastname": this.state.txtLastName,
      "displayname": this.state.txtDisplayname,
      "gender": this.state.txtGender,
      "address": this.state.txtAddress,
      "province": this.state.txtProvince,
      "telephone": this.state.txtTelephone,
      "education": this.state.txtEducation,
      "certificate": this.state.txtCertificate,
      "location": this.state.txtProvince,
      "profilepicture": this.state.imageUrl
    });
    console.log(data)

    var config = {
      method: 'put',
      url: 'https://fighto-api.topwork.asia/api/guide/'+localStorage.getItem('idUserInLocalStorage'),
      headers: { 
        'Authorization': 'Bearer '+localStorage.getItem('idTokenInLocalStorage'), 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With'
      },
      data : data,
      reponseType: { 
        'Content-Type': 'application/json'
      }
    };
    console.log(config.url)
    console.log(config.headers)
    
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

  handleChange = info => {
    console.log(info)
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
       {
        this.setState({...this.state,
          imageUrl: imageUrl,
          loading: false,
        })
       },
      );
    }
  };

  handleAddPlan = () => {
    this.setState({
      visibleplan: true,
    });
  };

  handleSubmitAddPlan = e => {
    console.log(e);
    this.setState({
      visibleplan: false,
    });

    var axios = require('axios');
    var data = JSON.stringify(
      {
        "title": this.state.txtTitle,
        "description": this.state.txtDescription,
        "planlist": [
          {
            "time": "6:00",
            "desc": this.state.txt0600,
          },
          {
            "time": "7:00",
            "desc": this.state.txt0700,
          },
          {
            "time": "8:00",
            "desc": this.state.txt0800,
          },
          {
            "time": "9:00",
            "desc": this.state.txt0900,
          },
          {
            "time": "10:00",
            "desc": this.state.txt1000,
          },
          {
            "time": "11:00",
            "desc": this.state.txt1100,
          },
          {
            "time": "12:00",
            "desc": this.state.txt1200,
          },
          {
            "time": "13:00",
            "desc": this.state.txt1300,
          },
          {
            "time": "14:00",
            "desc": this.state.txt1400,
          },
          {
            "time": "15:00",
            "desc": this.state.txt1500,
          },
          {
            "time": "16:00",
            "desc": this.state.txt1600,
          },
          {
            "time": "17:00",
            "desc": this.state.txt1700,
          },
          {
            "time": "18:00",
            "desc": this.state.txt1800,
          },
          {
            "time": "19:00",
            "desc": this.state.txt1900,
          },
          {
            "time": "20:00",
            "desc": this.state.txt2000,
          },
        ],
      }
    );
    console.log(data)

    var config = {
      method: 'put',
      url: 'https://fighto-api.topwork.asia/api/guideplan/'+localStorage.getItem('idUserInLocalStorage'),
      headers: { 
        'Authorization': 'Bearer '+localStorage.getItem('idTokenInLocalStorage'), 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With'
      },
      data : data,
      reponseType: { 
        'Content-Type': 'application/json'
      }
    };
    console.log(config.url)
    console.log(config.headers)
    
    axios(config)
    .then(res => {
      console.log(JSON.stringify(res.data));
      if (res.data.success == true) {
        this.showModalAddPlanSuccess();
      } else {
        this.showModalAlert();
      }
    })
    .catch(error =>{
      console.log(error);
      this.showModalAlert();
    });
  };

  showModalAddPlanSuccess = () => {
    this.setState({
      visibleaddplansuccess: true,
    });
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    // const { imageUrl } = this.state;
    return (
      <div className="App">
        <div className="App-display-signupguide">
          <img src={this.state.logo} width="500px" alt="Logo" />
          <br />
          <Row style={{ width: '100%' }}>
            <Col span={1}></Col>
            <Col span={22}>
              <Card title="PROFILE GUIDE" bordered={true} style={{ width: '100%', borderRadius: 50 }}>
              <Row>
                <Col span={10} style={{ align: "center" }}>
                  <Row>
                    <Col span={23}>
                      <Card title="PICTURE" bordered={true} style={{ width: '100%', borderRadius: 50 }}>
                        <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%', borderRadius: 50 }} />
                      </Card>
                    </Col>
                    <Col span={1}></Col>
                  </Row>
                  <Row><Col span={24} style={{ height: '5px' }}></Col></Row>
                  <Row>
                    <Col span={23}>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                      >
                         {/*{this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
                         {uploadButton}
                      </Upload>
                    </Col>
                    <Col span={1}></Col>
                  </Row>
                </Col>
                <Col span={14} style={{ align: "center" }}>
                  <Card title="INFORMATION" bordered={true} style={{ width: '100%', borderRadius: 50 }}>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="E-MAIL"></Input>
                      </Col>
                      <Col span={19}>
                        <Input style={{ width: '90%', borderRadius: 50 }} value={this.state.txtEmail} onChange={(e) => {
                          this.setState({
                            txtEmail: e.target.value
                          })
                        }} disabled></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="FIRST NAME"></Input>
                      </Col>
                      <Col span={19}>
                        <Input style={{ width: '90%', borderRadius: 50 }} value={this.state.txtFirstName} onChange={(e) => {
                          this.setState({
                            txtFirstName: e.target.value
                          })
                        }}></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="LAST NAME"></Input>
                      </Col>
                      <Col span={19}>
                        <Input style={{ width: '90%', borderRadius: 50 }} value={this.state.txtLastName} onChange={(e) => {
                          this.setState({
                            txtLastName: e.target.value
                          })
                        }}></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="DISPLAY NAME"></Input>
                      </Col>
                      <Col span={19}>
                        <Input style={{ width: '90%', borderRadius: 50 }} value={this.state.txtDisplayname} onChange={(e) => {
                          this.setState({
                            txtDisplayname: e.target.value
                          })
                        }}></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="GENDER"></Input>
                      </Col>
                      <Col span={19}>
                        <Select placeholder="Select.." style={{ width: '90%' }} value={this.state.txtGender} onChange={(e) => {
                          this.setState({
                            txtGender: e
                          })
                        }}>
                          <Option value="ชาย">ชาย</Option>
                          <Option value="หญิง">หญิง</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="ADDRESS"></Input>
                      </Col>
                      <Col span={19}>
                        <Input style={{ width: '90%', borderRadius: 50 }} value={this.state.txtAddress} onChange={(e) => {
                          this.setState({
                            txtAddress: e.target.value
                          })
                        }}></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="PROVINCE"></Input>
                      </Col>
                      <Col span={19}>
                        <Select placeholder="Select.." style={{ width: '90%' }} value={this.state.txtProvince} onChange={(e) => {
                          this.setState({
                            txtProvince: e
                          })
                        }}>
                          <Option value="กรุงเทพมหานคร">กรุงเทพมหานคร</Option>
                          <Option value="กระบี่">กระบี่</Option>
                          <Option value="กาญจนบุรี">กาญจนบุรี</Option>
                          <Option value="กาฬสินธุ์">กาฬสินธุ์</Option>
                          <Option value="กำแพงเพชร">กำแพงเพชร</Option>
                          <Option value="ขอนแก่น">ขอนแก่น</Option>
                          <Option value="จันทบุรี">จันทบุรี</Option>
                          <Option value="ฉะเชิงเทรา">ฉะเชิงเทรา</Option>
                          <Option value="ชัยนาท">ชัยนาท</Option>
                          <Option value="ชัยภูมิ">ชัยภูมิ</Option>
                          <Option value="ชุมพร">ชุมพร</Option>
                          <Option value="ชลบุรี">ชลบุรี</Option>
                          <Option value="เชียงใหม่">เชียงใหม่</Option>
                          <Option value="เชียงราย">เชียงราย</Option>
                          <Option value="ตรัง">ตรัง</Option>
                          <Option value="ตราด">ตราด</Option>
                          <Option value="ตาก">ตาก</Option>
                          <Option value="นครนายก">นครนายก</Option>
                          <Option value="นครปฐม">นครปฐม</Option>
                          <Option value="นครพนม">นครพนม</Option>
                          <Option value="นครราชสีมา">นครราชสีมา</Option>
                          <Option value="นครศรีธรรมราช">นครศรีธรรมราช</Option>
                          <Option value="นครสวรรค์">นครสวรรค์</Option>
                          <Option value="นราธิวาส">นราธิวาส</Option>
                          <Option value="น่าน">น่าน</Option>
                          <Option value="นนทบุรี">นนทบุรี</Option>
                          <Option value="บึงกาฬ">บึงกาฬ</Option>
                          <Option value="บุรีรัมย์">บุรีรัมย์</Option>
                          <Option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</Option>
                          <Option value="ปทุมธานี">ปทุมธานี</Option>
                          <Option value="ปราจีนบุรี">ปราจีนบุรี</Option>
                          <Option value="ปัตตานี">ปัตตานี</Option>
                          <Option value="พะเยา">พะเยา</Option>
                          <Option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</Option>
                          <Option value="พังงา">พังงา</Option>
                          <Option value="พิจิตร">พิจิตร</Option>
                          <Option value="พิษณุโลก">พิษณุโลก</Option>
                          <Option value="เพชรบุรี">เพชรบุรี</Option>
                          <Option value="เพชรบูรณ์">เพชรบูรณ์</Option>
                          <Option value="แพร่">แพร่</Option>
                          <Option value="พัทลุง">พัทลุง</Option>
                          <Option value="ภูเก็ต">ภูเก็ต</Option>
                          <Option value="มหาสารคาม">มหาสารคาม</Option>
                          <Option value="มุกดาหาร">มุกดาหาร</Option>
                          <Option value="แม่ฮ่องสอน">แม่ฮ่องสอน</Option>
                          <Option value="ยโสธร">ยโสธร</Option>
                          <Option value="ยะลา">ยะลา</Option>
                          <Option value="ร้อยเอ็ด">ร้อยเอ็ด</Option>
                          <Option value="ระนอง">ระนอง</Option>
                          <Option value="ระยอง">ระยอง</Option>
                          <Option value="ราชบุรี">ราชบุรี</Option>
                          <Option value="ลพบุรี">ลพบุรี</Option>
                          <Option value="ลำปาง">ลำปาง</Option>
                          <Option value="ลำพูน">ลำพูน</Option>
                          <Option value="เลย">เลย</Option>
                          <Option value="ศรีสะเกษ">ศรีสะเกษ</Option>
                          <Option value="สกลนคร">สกลนคร</Option>
                          <Option value="สงขลา">สงขลา</Option>
                          <Option value="สมุทรสาคร">สมุทรสาคร</Option>
                          <Option value="สมุทรปราการ">สมุทรปราการ</Option>
                          <Option value="สมุทรสงคราม">สมุทรสงคราม</Option>
                          <Option value="สระแก้ว">สระแก้ว</Option>
                          <Option value="สระบุรี">สระบุรี</Option>
                          <Option value="สิงห์บุรี">สิงห์บุรี</Option>
                          <Option value="สุโขทัย">สุโขทัย</Option>
                          <Option value="สุพรรณบุรี">สุพรรณบุรี</Option>
                          <Option value="สุราษฎร์ธานี">สุราษฎร์ธานี</Option>
                          <Option value="สุรินทร์">สุรินทร์</Option>
                          <Option value="สตูล">สตูล</Option>
                          <Option value="หนองคาย">หนองคาย</Option>
                          <Option value="หนองบัวลำภู">หนองบัวลำภู</Option>
                          <Option value="อำนาจเจริญ">อำนาจเจริญ</Option>
                          <Option value="อุดรธานี">อุดรธานี</Option>
                          <Option value="อุตรดิตถ์">อุตรดิตถ์</Option>
                          <Option value="อุทัยธานี">อุทัยธานี</Option>
                          <Option value="อุบลราชธานี">อุบลราชธานี</Option>
                          <Option value="อ่างทอง">อ่างทอง</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="TELEPHONE"></Input>
                      </Col>
                      <Col span={19}>
                        <Input style={{ width: '90%', borderRadius: 50 }} value={this.state.txtTelephone} onChange={(e) => {
                          this.setState({
                            txtTelephone: e.target.value
                          })
                        }}></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="EDUCATION"></Input>
                      </Col>
                      <Col span={19}>
                        <Select placeholder="Select.." style={{ width: '90%' }} value={this.state.txtEducation} onChange={(e) => {
                          this.setState({
                            txtEducation: e
                          })
                        }}>
                          <Option value="ปริญญาเอก">ปริญญาเอก</Option>
                          <Option value="ปริญญาโท">ปริญญาโท</Option>
                          <Option value="ปริญญาตรี">ปริญญาตรี</Option>
                          <Option value="ต่ำกว่าปริญญาตรี">ต่ำกว่าปริญญาตรี</Option>
                        </Select>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="CERTIFICATE"></Input>
                      </Col>
                      <Col span={19}>
                        <Input style={{ width: '90%', borderRadius: 50 }} value={this.state.txtCertificate} onChange={(e) => {
                          this.setState({
                            txtCertificate: e.target.value
                          })
                        }}></Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={5} style={{ height: "40px" }}>
                        <Input style={{ width: '100%', borderRadius: 50, backgroundColor: '#282c34', color: 'white', textAlign: 'center' }} value="PLAN"></Input>
                      </Col>
                      <Col span={19}>
                        <Button type="primary" shape="round" style={{ width: '90%' }} onClick={this.handleAddPlan}>ADD PLAN</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24} style={{ height: "15px" }}></Col>
                    </Row>
                    <Row>
                      <Col span={15}></Col>
                      <Col span={4} style={{ algin: "left" }}><Button shape="round" size="large" danger><Link to="/login">BACK</Link></Button></Col>
                      <Col span={4} style={{ algin: "left" }}><Button type="primary" shape="round" size="large" onClick={this.handleSubmit}>SAVE</Button></Col>
                    </Row>
                    <Modal
                      title="SELECT"
                      visible={this.state.visibleselect}
                      onCancel={this.handleCancel}
                      footer={[
                        <Button key="back" hidden>Return</Button>,
                        <Button key="submit" type="primary" onClick={this.handleCancel} shape="round" size="large" danger>Close</Button>,
                      ]}
                    >
                      <Button block shape="round" size="large"><Link to="/userPage">USER</Link></Button>
                      <br /><br />
                      <Button block shape="round" size="large"><Link to="/signupGuide">GUIDE</Link></Button>
                    </Modal>
                    <Modal
                      title="SUCCESS"
                      visible={this.state.visiblesuccess}
                      onCancel={this.handleCancel}
                      footer={[
                        <Button key="back" hidden>Return</Button>,
                        <Button key="submit" type="primary" onClick={this.handleCancel} shape="round" size="large"><Link to="/userPage">OK</Link></Button>,
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
                    <Modal
                      title="ADD PLAN"
                      width="800px"
                      visible={this.state.visibleplan}
                      onCancel={this.handleCancel}
                      footer={[
                          <Button type="default" shape="round" size="large" onClick={this.handleCancel} danger>BACK</Button>,
                          <Button type="primary" shape="round" size="large" onClick={this.handleSubmitAddPlan}>SUBMIT</Button>,
                      ]}
                      >
                      <div className="site-card-wrapper" style={{ width: '100%' }}>
                        <Row>
                          <Col span={24}>
                          <Card title="Header" bordered={false} style={{ width: '100%' }}>
                            <Descriptions bordered
                                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                <Descriptions.Item label="Title">
                                  <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txtTitle} onChange={(e) => {
                                    this.setState({
                                      txtTitle: e.target.value
                                    })
                                  }}></Input>
                                </Descriptions.Item>
                                <Descriptions.Item label="Description">
                                  <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txtDescription} onChange={(e) => {
                                    this.setState({
                                      txtDescription: e.target.value
                                    })
                                  }}></Input>
                                </Descriptions.Item>
                              </Descriptions>
                            </Card>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={24}>
                            <Card title="Schedule" bordered={false} style={{ width: '100%' }}>
                              <Descriptions bordered
                                  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                                  <Descriptions.Item label="6:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt0600} onChange={(e) => {
                                      this.setState({
                                        txt0600: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="7:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt0700} onChange={(e) => {
                                      this.setState({
                                        txt0700: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="8:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt0800} onChange={(e) => {
                                      this.setState({
                                        txt0800: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="9:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt0900} onChange={(e) => {
                                      this.setState({
                                        txt0900: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="10:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1000} onChange={(e) => {
                                      this.setState({
                                        txt1000: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="11:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1100} onChange={(e) => {
                                      this.setState({
                                        txt1100: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="12:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1200} onChange={(e) => {
                                      this.setState({
                                        txt1200: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="13:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1300} onChange={(e) => {
                                      this.setState({
                                        txt1300: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="14:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1400} onChange={(e) => {
                                      this.setState({
                                        txt1400: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="15:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1500} onChange={(e) => {
                                      this.setState({
                                        txt1500: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="16:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1600} onChange={(e) => {
                                      this.setState({
                                        txt1600: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="17:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1700} onChange={(e) => {
                                      this.setState({
                                        txt1700: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="18:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1800} onChange={(e) => {
                                      this.setState({
                                        txt1800: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="19:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt1900} onChange={(e) => {
                                      this.setState({
                                        txt1900: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                                  <Descriptions.Item label="20:00">
                                    <Input style={{ width: '100%', borderRadius: 50 }} value={this.state.txt2000} onChange={(e) => {
                                      this.setState({
                                        txt2000: e.target.value
                                      })
                                    }}></Input>
                                  </Descriptions.Item>
                              </Descriptions>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                  </Modal>
                  <Modal
                      title="SUCCESS"
                      visible={this.state.visibleaddplansuccess}
                      onCancel={this.handleCancel}
                      footer={[
                        <Button key="back" hidden>Return</Button>,
                        <Button key="submit" type="primary" onClick={this.handleCancel} shape="round" size="large"><Link to="/signupGuide">OK</Link></Button>,
                      ]}
                    >
                      <p>Save Successfully.</p>
                    </Modal>
                  </Card>
                </Col>
              </Row>
              </Card>
            </Col>
            <Col span={1}></Col>
          </Row>
          <br />
        </div>
      </div>
    )
  }
}

export default SignupGuide;