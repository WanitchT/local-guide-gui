import React from 'react';
import '../App.css';
import { Modal, Button, Input, Row, Col, Layout, Menu, Card, Select, Form, Table } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SearchOutlined, ProfileOutlined } from '@ant-design/icons';

const { Option } = Select;

const columns = [
  {
    title: 'ลำดับที่',
    dataIndex: 'num',
  },
  {
    title: 'ใบอนุญาติเลขที่',
    dataIndex: 'cert',
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
  },
  {
    title: 'ราคา',
    dataIndex: 'price',
  },
  {
    title: 'Profile',
    key: 'profile',
    fixed: 'center',
    render: () => <Link to="/guideprofile"><Button type="primary" shape="circle" icon={<ProfileOutlined />}></Button></Link>,
  },
];

const data = [
  {
    num: '1',
    cert: '12345',
    name: 'Tony S',
    price: '500',
  },
];

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
              <Col span={3}></Col>
              <Col span={4} style={{ algin: "right" }}><h3>PROVINCE</h3></Col>
              <Col span={12}>
                <Form.Item>
                  <Select placeholder="Select..." allowClear>
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
                </Form.Item>
              </Col>
              <Col span={5}>
                <Button type="primary" shape="round" onClick={this.showModal} icon={<SearchOutlined />}>SEARCH</Button>
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
            <Row>
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
          </Card>
          <br />
          <Card bordered={false} style={{ width: 1000 }}>
            <Table columns={columns} dataSource={data} size="middle" />
          </Card>
          <br />
        </div>
      </div>
    )
  }
}

export default UserPage;