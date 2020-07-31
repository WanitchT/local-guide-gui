import React from 'react'
import { Avatar, Col, Card, Row, Typography } from 'antd';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons'

import Comment from './Comment'
import PostFeed from './PostFeed'
import PostInput from './PostInput'
import CommentUser from './CommentUser'


const { Title } = Typography;

class PostUser extends PostFeed {
    constructor(props) {
      super(props);
      this.state = {
        postItems: []
      }
    }
  
    render() {
      return (
        <>
      <Row>
        <Col span={18} offset={3}>
        <div style={{marginTop:18}}>
  
        <Title level={4}>News Feed</Title>
  
          <PostInput postAvatarTb={this.state.postAvatarTb} postNameTb={this.state.postNameTb} postTextTb={this.state.postTextTb} addPostItem={this.addPostItem}></PostInput>
  
          {this.state.postItems.map((postItem) =>
            <Card 
            hoverable
            className="post-wrap">
              <div style={{ marginRight: 10, marginBottom: 10, float: "left" }}>
                <Avatar round={true} size="40" alt={postItem.postName} src={postItem.postAvatar} />
              </div>
  
              <div style={{ marginRight: 10, marginBottom: 10 }}>
                <b style={{ color: "#0080ff"}}>{postItem.postName}</b><br/>
                <span style={{ fontSize: 10 }}>{postItem.postTime}</span>
              </div>
              <div className="clearBoth"></div>
  
              <div style={{ marginRight: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 18 }}>{postItem.postText}</span>
              </div>
              <img src={postItem.postImage} alt="" style={{ width: "100%"}}/>
  
  
              <Col span={4} offset={10} style={{margin: 10}}>
                <HeartOutlined style={{fontSize: 22}} /> <ShareAltOutlined style={{fontSize: 22}} />
              </Col>
              
              <CommentUser/>
  
            </Card>
            
          )}
  
        </div>
        </Col>
  
      </Row>
      </>
      )
          
    }
  }

  export default PostUser