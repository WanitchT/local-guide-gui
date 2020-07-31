import React from 'react'
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Typography,
    Card,
    Avatar
  } from 'antd';
import axios from 'axios';
import { QuestionCircleOutlined } from '@ant-design/icons';

import HeaderFakeBook from '../components/HeaderFakeBook'

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const { Title } = Typography;

let profileDetail = {
    image: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
    name: "Jennis BNK48"
  }

class UsersEditContent extends React.Component {

  constructor(){    
    super();
    this.state = {
     user : null
    }
  }

  getUser = async () => {
    try {

      const config = {
        headers: { 
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTkyNWY3YWQzYmE5YzM0ZDI2ZGUxYiIsImlhdCI6MTU5NTQ4MzcyMSwiZXhwIjoxNTk2MzQ3NzIxfQ.NsrGt948scGH3E8ZO7yfnxz_ZrJZz3M5e-1fA6sHQxY`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS', }
      };
      
      const bodyParameters = {
        email: 'wan.t@email.th'
      };

      const response = await axios.post('http://baac.topwork.asia:8445/api/user/list',
      bodyParameters,
      config
   )
      console.log(response.status)
      console.log(response.data)
      this.setState({
        user : response.data.data
      });
       
    } catch (err) {
      console.error(err)
    }
   }

   componentDidMount() {
    this.getUser();
  }

    render() {
      return (
        <>
        <HeaderFakeBook/>
          <Row>
            <Col span={18} offset={3}>
              <Card style={{marginTop:100}}>
                <Row>
                  <Col span={12}>
                    <Avatar round={true} size={200} alt={profileDetail.name} src={this.state.user && this.state.user.displayimage} /> 
                  </Col>
                  <Col span={12}>
                    <Title level={4}>{this.state.user && this.state.user.displayname}</Title> 
                    <span>{this.state.user && this.state.user.firstname} {this.state.user && this.state.user.lastname}</span>
                    <Button type="link" href="/edit">Edit Profile</Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col span={18} offset={3}>
              <Card style={{marginTop:100}}>
                <Form

                  initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                  }}
                  scrollToFirstError
                >
                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject('The two passwords that you entered do not match!');
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="nickname"
                    label={
                      <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                          <QuestionCircleOutlined />
                        </Tooltip>
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="residence"
                    label="Habitual Residence"
                    rules={[
                      {
                        type: 'array',
                        required: true,
                        message: 'Please select your habitual residence!',
                      },
                    ]}
                  >
                    <Cascader />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!',
                      },
                    ]}
                  >
                    <Input
                      style={{
                        width: '100%',
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="website"
                    label="Website"
                    rules={[
                      {
                        required: true,
                        message: 'Please input website!',
                      },
                    ]}
                  >
                    <AutoComplete placeholder="website">
                      <Input />
                    </AutoComplete>
                  </Form.Item>

                  <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                    <Row gutter={8}>
                      <Col span={12}>
                        <Form.Item
                          name="captcha"
                          noStyle
                          rules={[
                            {
                              required: true,
                              message: 'Please input the captcha you got!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Button>Get captcha</Button>
                      </Col>
                    </Row>
                  </Form.Item>

                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                      },
                    ]}
                  >
                    <Checkbox>
                      I have read the <a href="">agreement</a>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      )
    }
  }

export default UsersEditContent