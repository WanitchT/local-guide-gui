import React from 'react';
import '../App.css';
import { Modal, Button, Row, Col, Card, Select, Form, Table } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { SearchOutlined, ProfileOutlined } from '@ant-design/icons';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const { Option } = Select;

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 13.736717, lng: 100.523186 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 13.736717, lng: 100.523186 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      txtProvince: "",
      isMarkerShown: false,
      columns: [
        {
          title: "ลำดับที่",
          dataIndex: "num",
        },
        {
          title: 'ใบอนุญาติเลขที่',
          dataIndex: "cert",
        },
        {
          title: "ชื่อ - นามสกุล",
          dataIndex: "name",
        },
        {
          title: "เบอร์โทรศัพท์",
          dataIndex: "tel",
        },
        {
          title: "Profile",
          dataIndex: "profile",
          key: "profile",
          render: (dataIndex) => <Link to="/guideProfile"><Button id={dataIndex} type="primary" shape="circle" icon={<ProfileOutlined />} onClick={() => {localStorage.setItem('idGuideInLocalStorage', dataIndex);}}></Button></Link>
        },
      ],
      datasource: [],
    };
  };

  handleSubmit = e => {
    console.log(e);
    this.setState({
      visiblesuccess: false,
      visiblealert: false,
      visiblegooglemap: false,
    });

    var axios = require('axios');
    var data = JSON.stringify({ "address": this.state.txtProvince });
    console.log(data)

    var config = {
      method: 'post',
      url: 'https://fighto-api.topwork.asia/api/guide/search',
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
        this.setState({
          ...this.state,
          datasource: [],
        })
        if (res.data.data == "") {
          this.setState({
            ...this.state,
            datasource: [],
          })
        } else {
          for (let i=0; i < res.data.data.length; i++) {
            let obj = {
              num: i+1,
              cert: res.data.data[i].certificate,
              name: res.data.data[i].firstname+" "+res.data.data[i].lastname,
              tel: res.data.data[i].telephone,
              profile: res.data.data[i].id,
            };
            this.setState({
              ...this.state,
              datasource: [...this.state.datasource, obj],
            })
          } 
        }
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

  showModalSuccess = () => {
    this.setState({
      visiblesuccess: true,
      visiblealert: false,
      visiblegooglemap: false,
    });
  };

  showModalAlert = () => {
    this.setState({
      visiblesuccess: false,
      visiblealert: true,
      visiblegooglemap: false,
    });
  };

  showModalGoogleMap = () => {
    this.setState({
      visiblesuccess: false,
      visiblealert: false,
      visiblegooglemap: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visiblesuccess: false,
      visiblealert: false,
      visiblegooglemap: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visiblesuccess: false,
      visiblealert: false,
      visiblegooglemap: false,
    });
  };

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
    console.log(this.props)
  }

  render() {
    return (
      <div className="App">
        <div className="App-display">
          <br />
          <Row style={{ width: '100%' }}>
            <Col span={1}></Col>
            <Col span={22}>
              <Card title="SEARCH LOCAL GUIDE" bordered={false} style={{ width: '100%' }}>
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}><h3>PROVINCE</h3></Col>
                  <Col span={1}></Col>
                  <Col span={12}>
                    <Form.Item>
                      <Select placeholder="Select.." style={{ width: '100%' }} value={this.state.txtProvince} onChange={(e) => {
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
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Button type="primary" shape="round" onClick={this.handleSubmit} icon={<SearchOutlined />}>SEARCH</Button>
                    <Modal
                      title="SEARCH"
                      visible={this.state.visiblesuccess}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      footer={[
                        <Button key="back" onClick={this.handleCancel} shape="round" size="large" hidden>CANCEL</Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk} shape="round" size="large"><Link to="/userPage">OK</Link></Button>,
                      ]}
                    >
                      <p>Search Success...</p>
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
                      <p>Search failed!!!</p>
                    </Modal>
                  </Col>
                </Row>
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}><h3>TOURIST ATTRACTION</h3></Col>
                  <Col span={1}></Col>
                  <Col span={12}>
                  <Button type="primary" shape="round" style={{ width: '100%' }} onClick={this.showModalGoogleMap} icon={<SearchOutlined />}>GOOGLE MAP</Button>
                    <Modal
                      title="GOOGLE MAP"
                      visible={this.state.visiblegooglemap}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      footer={[
                        <Button key="back" type="default" shape="round" size="large" onClick={this.handleCancel} danger>Back</Button>,
                        <Button key="submit" type="primary" onClick={this.handleCancel} shape="round" size="large">OK</Button>,
                      ]}
                    >
                      <MyMapComponent
                        isMarkerShown={this.state.isMarkerShown}
                        onMarkerClick={this.handleMarkerClick}
                      />
                    </Modal>
                  </Col>
                </Row>
              </Card>
              <br />
              <Card bordered={false} style={{ width: '100%' }}>
                <Table bordered={false} columns={this.state.columns} dataSource={this.state.datasource} size="middle" />
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

export default UserPage;