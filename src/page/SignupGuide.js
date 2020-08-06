import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu, Select, Upload, message, Card } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      txtLocation: ""
    };
  };

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
    });
  };

  handleSubmit = e => {
    console.log(e);
    this.setState({
      visible: false,
    });

    var axios = require('axios');
    var data = JSON.stringify({"email": this.state.txtUsername, "password":this.state.txtPassword, "firstname": this.state.txtFirstName, "lastname":this.state.txtLastName});
    console.log(data)

    var config = {
      method: 'post',
      url: 'https://fighto-api.topwork.asia/api/user/signup',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data,
      reponseType: { 
        'Content-Type': 'application/json'
      }
    };

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
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <div className="App">
        <div className="App-display-signupguide">
          <Row>
            <Col span={9}>
              <br />
              <Row>
                <Col span={4}></Col>
                <Col span={20}>
                  <Card title="PICTURE INFORMATION" bordered={true} style={{ width: '100%' }}>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChange}
                    >
                      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: 325 }} /> : uploadButton}
                    </Upload>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={1}></Col>
            <Col span={12} style={{ align: "left" }}>
              <br />
              <p>PROFILE GUIDE</p>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input style={{ width: '90%' }} addonBefore="E-MAIL" value={this.state.txtEmail} onChange={(e) => {
                    this.setState({
                      txtEmail: e.target.value
                    })
                  }}></Input>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input style={{ width: '90%' }} addonBefore="FIRST NAME" value={this.state.txtFirstName} onChange={(e) => {
                    this.setState({
                      txtFirstName: e.target.value
                    })
                  }}></Input>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input style={{ width: '90%' }} addonBefore="LAST NAME" value={this.state.txtLastName} onChange={(e) => {
                    this.setState({
                      txtLastName: e.target.value
                    })
                  }}></Input>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input style={{ width: '90%' }} addonBefore="DISPLAY NAME" value={this.state.txtDisplayname} onChange={(e) => {
                    this.setState({
                      txtDisplayname: e.target.value
                    })
                  }}></Input>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input.Group compact>
                    <Input style={{ width: '12%' }} value="GENDER"></Input>
                    <Select placeholder="Select.." style={{ width: '78%' }} value={this.state.txtGender} onChange={(e) => {
                      this.setState({
                        txtGender: e
                      })
                    }}>
                      <Option value="ชาย">ชาย</Option>
                      <Option value="หญิง">หญิง</Option>
                    </Select>
                  </Input.Group>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input style={{ width: '90%' }} addonBefore="ADDRESS" value={this.state.txtAddress} onChange={(e) => {
                    this.setState({
                      txtAddress: e.target.value
                    })
                  }}></Input>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input.Group compact>
                    <Input style={{ width: '15%' }} value="PROVINCE"></Input>
                    <Select placeholder="Select.." style={{ width: '75%' }} value={this.state.txtLocation} onChange={(e) => {
                      this.setState({
                        txtLocation: e
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
                  </Input.Group>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input style={{ width: '90%' }} addonBefore="TELEPHONE" value={this.state.txtTelephone} onChange={(e) => {
                    this.setState({
                      txtTelephone: e.target.value
                    })
                  }}></Input>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input.Group compact>
                    <Input style={{ width: '16%' }} value="EDUCATION"></Input>
                    <Select placeholder="Select.." style={{ width: '74%' }} value={this.state.txtEducation} onChange={(e) => {
                      this.setState({
                        txtEducation: e
                      })
                    }}>
                      <Option value="ปริญญาเอก">ปริญญาเอก</Option>
                      <Option value="ปริญญาโท">ปริญญาโท</Option>
                      <Option value="ปริญญาตรี">ปริญญาตรี</Option>
                      <Option value="ต่ำกว่าปริญญาตรี">ต่ำกว่าปริญญาตรี</Option>
                    </Select>
                  </Input.Group>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input style={{ width: '90%' }} addonBefore="CERTIFICATE" value={this.state.txtCertificate} onChange={(e) => {
                    this.setState({
                      txtCertificate: e.target.value
                    })
                  }}></Input>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "35px" }}>
                  <Input style={{ width: '90%' }} addonBefore="LOCATION" value={this.state.txtLocation} onChange={(e) => {
                    this.setState({
                      txtLocation: e.target.value
                    })
                  }}></Input>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ height: "15px" }}></Col>
              </Row>
              <Row>
                <Col span={1}></Col>
                <Col span={4} style={{ algin: "left" }}><Button shape="round" size="large" danger><Link to="/login">CANCEL</Link></Button></Col>
                <Col span={4} style={{ algin: "left" }}><Button type="primary" shape="round" size="large" onClick={this.handleSubmit}>SAVE</Button></Col>
              </Row>
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
            </Col>
          </Row>
          <br />
        </div>
      </div>
    )
  }
}

export default SignupGuide;