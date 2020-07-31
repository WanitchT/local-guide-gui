import React from 'react'
import { Avatar, Row, Col, Card, Typography, Input, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


import HeaderFakeBook from '../components/HeaderFakeBook'

const { Title } = Typography;

let profileDetail = {
    image: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
    name: "Jennis BNK48"
  }

class UsersContent extends React.Component {
    render() {
      return (
        <>
        <HeaderFakeBook/>
          <Row>
            <Col span={18} offset={3}>
              <Card style={{marginTop:100}}>
                <Row>
                  <Col span={12}>
                    <Avatar round={true} size={200} alt={profileDetail.name} src={profileDetail.image} />
                  </Col>
                  <Col span={12}>
                    <Title level={4}>{profileDetail.name}</Title>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      )
    }
  }

export default UsersContent