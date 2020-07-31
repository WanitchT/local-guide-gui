import React from 'react'
import { Avatar, Col, Card, Row, Typography } from 'antd';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons'
import axios from 'axios';

import Comment from './Comment'
import PostFeed from './PostFeed'
import PostInput from './PostInput'
import CommentUser from './CommentUser'


const { Title } = Typography;

class PostUserFeed extends PostFeed {
    constructor(props) {
      super(props);
      this.state = {
        postItems: []
      }
    }

    getUserPostFeedList = async () => {
     try {
 
       const config = {
         headers: { 
           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTkyNWY3YWQzYmE5YzM0ZDI2ZGUxYiIsImlhdCI6MTU5NTU1OTc0MCwiZXhwIjoxNTk2NDIzNzQwfQ.l0jB0fFGKHv7x6YaJj9Q10pYUjOedF0VSsllPtVmjl0`,
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Methods' : 'POST,DELETE,PATCH,OPTIONS'
          }
       };
       
       const bodyParameters = {
         email: 'wan.t@email.th'
       };
 
       const response = await axios.post('http://baac.topwork.asia:8445/api/post/list',
       bodyParameters,
       config
    )
       console.log(response.status)
       console.log(response.data)
       this.setState({
         userPost : response.data.users[0]
       });
        
     } catch (err) {
       console.error(err)
     }
    }
 
    componentDidMount() {
     this.getUserPostFeedList()
   }
  
    render() {
      return (
        <>
      <Row>
        <Col span={18} offset={3}>
        <div style={{marginTop:18}}>
  
        <Title level={4}>News Feed</Title>
  
          <PostInput postAvatarTb={this.state.postAvatarTb} postNameTb={this.state.postNameTb} postTextTb={this.state.postTextTb} addPostItem={this.addPostItem}></PostInput>
  
          <Row>
            <Col span={24} style={{marginTop:10}}>
                  <Title level={4}>Post Feeds</Title><br/>
                <Row>

                  {this.state.userPost && this.state.userPost.map((userposts) =>

                    <Card 
                    hoverable
                    className="post-wrap">
                    <div style={{ marginRight: 10, marginBottom: 10, float: "left" }}>
                        <Avatar round={true} size="40" alt={this.state.userDisplayAvatar} src={this.state.userDisplayAvatar} />
                    </div>

                    <div style={{ marginRight: 10, marginBottom: 10 }}>
                        <b style={{ color: "#0080ff"}}>{this.state.userDisplayName}</b><br/>
                        <span style={{ fontSize: 10 }}>{userposts.createdDate}</span>
                    </div>
                    <div className="clearBoth"></div>

                    <div style={{ marginRight: 10, marginBottom: 10 }}>
                        <span style={{ fontSize: 18 }}>{userposts.postText}</span>
                    </div>
                    <img src={userposts.postImage} alt="" style={{ width: "100%"}}/>


                    <Col span={4} offset={10} style={{margin: 10}}>
                        <HeartOutlined style={{fontSize: 22}} /> <ShareAltOutlined style={{fontSize: 22}} />
                    </Col>
                    
                    <CommentUser/>

                    </Card>
                    
                  )}
                </Row>
            </Col>
          </Row>


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

  export default PostUserFeed