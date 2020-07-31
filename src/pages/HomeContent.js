import React from 'react'
import { Avatar, Row, Col, Card, Typography, Input, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


import HeaderFakeBook from '../components/HeaderFakeBook'

const { Title } = Typography;



class HomeContent extends React.Component {
    render() {
      return (
        <>
        <HeaderFakeBook/>
          <Row>
            <Col span={18} offset={3}>
              <div style={{marginTop:100}}>
  
              <Title level={4}>Home</Title>
              </div>
            </Col>
          </Row>
        </>
      )
    }
  }

export default HomeContent