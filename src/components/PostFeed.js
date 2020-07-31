import React from 'react'
import { Avatar, Row, Col, Card, Input, Button, Typography } from 'antd';
import { HeartOutlined, ShareAltOutlined, FileImageOutlined } from '@ant-design/icons'

import moment from "moment";

import PostInput from './PostInput'
import PostFeedList from './PostFeedList'

const { Title } = Typography;

let profileDetail = {
  image: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
  name: "Jennis BNK48"
}


class PostFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postItems: [
        {
          postImage: "https://f.ptcdn.info/098/065/000/puybx8hhnMrRxy6lZvX-o.jpg",
          postAvatar: "https://i.pinimg.com/originals/76/83/9c/76839c7b0804c5e893be776701214877.jpg",
          postName: "Mobile BNK48",
          postTime: "2020-07-12",
          postText: "Code Camp 2020 - Day 1"
        },
        {
          postImage: "https://pbs.twimg.com/media/Ec8PL-dU0AAQL97?format=jpg&name=large",
          postAvatar: "https://i.pinimg.com/originals/76/83/9c/76839c7b0804c5e893be776701214877.jpg",
          postName: "Mobile BNK48",
          postTime: "2020-07-15",
          postText: "Code Camp 2020 - Day 2"
          
        }
      ],
      postAvatarTb: "",
      postNameTb: "",
      postTextTb: ""
    }
  }

  addPostItem = (postImage, postAvatar, postName, postTime, postText) => {
    this.state.postItems.push({
      postImage: postImage,
      postAvatar: profileDetail.image,
      // cName: cName,
      postName: profileDetail.name,
      postTime: moment().format("DD-MM-YYYY hh:mm:ss"),
      postText: postText
    })
    this.setState({
      postItems: this.state.postItems
    })
  }

  
  render() {
    return (
      <>
    <Row>
      <Col span={18} offset={3}>
      <div style={{marginTop:18}}>

      <Title level={4}>News Feed</Title>

        <PostInput postAvatarTb={this.state.postAvatarTb} postNameTb={this.state.postNameTb} postTextTb={this.state.postTextTb} addPostItem={this.addPostItem}></PostInput>

        <PostFeedList postItems={this.state.postItems} />

      </div>
      </Col>

    </Row>
    </>
    )
        
  }
}

    export default PostFeed