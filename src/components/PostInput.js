import React from 'react'
import { Avatar, Row, Col, Card, Input, Button } from 'antd';
import { FileImageOutlined } from '@ant-design/icons'


let profileDetail = {
  image: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
  name: "Jennis BNK48"
}

class PostInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postImageTb: props.postImageTb,
      postAvatarTb: props.postAvatarTb,
      postNameTb: props.postNameTb,
      postTimeTb: props.postTimeTb,
      postTextTb: props.postTextTb
    }
  }

  addPost = () => {
    this.props.addPostItem(this.state.postImageTb,this.state.postAvatarTb, this.state.postNameTb, this.state.postTimeTb, this.state.postTextTb);
  }

    render () {
      return (
        <>
        <Row>
          <Col span={24} offset={0}>
            <Card style={{marginTop:100}}>
              <div>Post หน่อยสิ</div>
              
              <Input prefix={<Avatar round={true} size="80" alt={profileDetail.name} src={profileDetail.image} />} placeholder="โพสอะไรหน่อยสิ" allowClear value={this.state.postTextTb} onChange={(e) => {
                this.setState({
                  postTextTb: e.target.value
                })
              }}></Input>

              <Input prefix={<FileImageOutlined />} placeholder="ใส่ URL รูป" allowClear value={this.state.postImageTb} onChange={(e) => {
                this.setState({
                  postImageTb: e.target.value
                })
              }}></Input>

              <Button type="primary" shape="round" onClick={this.addPost}> Post </Button>
  
            </Card>
          </Col>
        </Row>
        </>
      )
    }
}

  export default PostInput