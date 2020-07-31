import React from 'react'
import { Form, Row, Col, Card, Typography, Input, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fbLogo:  "https://image.flaticon.com/icons/svg/124/124010.svg",
      }
  
  
    }
  
    state = {
      redirect: false
    }
    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/newsfeed' />
      }
    }
  
    render() {
      
      return (
        <>
          <Row>
            <Col span={18} offset={3}>
              <Card style={{marginTop:100}}>
  
              <Title level={4}>Signin</Title>
                <Row>
                  <Col span={6}><img src={this.state.fbLogo} alt=""/></Col>
                  <Col span={18}>
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
  
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
  
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
  
                    <Form.Item {...tailLayout}>
                    {this.renderRedirect()}
                      <Button onClick={this.setRedirect} type="primary" htmlType="submit">login</Button> 
                      <Button type="link">
                        cancel
                      </Button>
  
                    </Form.Item>
                  </Form>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      )
    }
  }

  export default SignIn