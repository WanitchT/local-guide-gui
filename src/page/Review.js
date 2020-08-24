import React from 'react';
import '../App.css';
import { Button, Input, Row, Col, Card, Comment, Avatar, Form, List, Divider } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import moment from 'moment';
import { blue, red } from '@ant-design/colors';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <>
    <List
      dataSource={comments}
      //header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <><Comment {...props} /> <Divider /></>}
    />
  </>
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" type="primary" shape="round" loading={submitting} onClick={onSubmit}>Add Comment</Button>
    </Form.Item>
  </>
);

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./display.svg",
      display: "./display.jpg",
      txtEmail: "",
      txtFirstName: "",
      imageUrl: "",
      comments: [],
      submitting: false,
      value: "",
    }
  }

  componentDidMount() {
    var axios = require('axios');
    var config = {
        method: 'get',
        url: 'https://fighto-api.topwork.asia/api/guide/'+localStorage.getItem('idUserInLocalStorage'),
        headers: { 
        'Authorization': 'Bearer '+localStorage.getItem('idTokenInLocalStorage'), 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With'
        },
        reponseType: { 
        'Content-Type': 'application/json'
        }
    };
    
    axios(config)
    .then(res => {
      console.log(JSON.stringify(res.data));
      if (res.data.success == true) {
        if (res.data.data.profilepicture == undefined) {
          this.setState({
            ...this.state,
            txtEmail: res.data.data.email,
            txtFirstName: res.data.data.firstname,
            imageUrl: <Avatar style={{ backgroundColor: '#282c34', color: 'white' }}>{res.data.data.firstname.substring(0, 1)}</Avatar>,
          })
        } else {
          this.setState({
            ...this.state,
            txtEmail: res.data.data.email,
            txtFirstName: res.data.data.firstname,
            imageUrl: res.data.data.profilepicture,
          })
        }
      }

      var axios = require('axios');
      var data = JSON.stringify(
        {
          "guideid": localStorage.getItem('idGuideInLocalStorage'),
        }
      );
      console.log(data)
  
      var config = {
        method: 'post',
        url: 'https://fighto-api.topwork.asia/api/comment/get',
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
          for (let i=0; i < res.data.data.commentList.length; i++) {
            this.setState({
              submitting: false,
              value: '',
              comments: [
                {
                  avatar: <Avatar style={{ backgroundColor: '#282c34', color: 'white' }}>{res.data.data.commentList[i].author.substring(0, 1)}</Avatar>,
                  author: <span style={{ color: blue[6] }}>{res.data.data.commentList[i].author}</span>,
                  datetime: res.data.data.commentList[i].datecomment,
                  content: res.data.data.commentList[i].message,
                },
                ...this.state.comments,
              ],
            });
          }
        }
      })
      .catch(error =>{
        console.log(error);
      });
    })
    .catch(error =>{
        console.log(error);
    });
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      if (this.state.imageUrl == undefined) {
        this.setState({
          submitting: false,
          value: '',
          comments: [
            {
              avatar: <Avatar style={{ backgroundColor: '#282c34', color: 'white' }}>{this.state.txtFirstName.substring(0, 1)}</Avatar>,
              author: <span style={{ color: blue[6] }}>{this.state.txtFirstName}</span>,
              datetime: moment().fromNow(),
              content: <p>{this.state.value}</p>,
            },
            ...this.state.comments,
          ],
        });
      } else {
        this.setState({
          submitting: false,
          value: '',
          comments: [
            {
              avatar: this.state.imageUrl,
              author: <span style={{ color: blue[6] }}>{this.state.txtFirstName}</span>,
              datetime: moment().fromNow(),
              content: <p>{this.state.value}</p>,
            },
            ...this.state.comments,
          ],
        });
      }
    }, 1000);

    var axios = require('axios');
    var data = JSON.stringify(
      {
        "guideid": localStorage.getItem('idGuideInLocalStorage'),
        "useridcomment": localStorage.getItem('idUserInLocalStorage'),
        "useremail": this.state.txtEmail,
        "avatar": "",
        "author": this.state.txtFirstName,
        "datecomment": moment().fromNow(),
        "message": this.state.value,
      }
    );
    console.log(data)

    var config = {
      method: 'post',
      url: 'https://fighto-api.topwork.asia/api/comment/',
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
    })
    .catch(error =>{
      console.log(error);
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div className="App">
        <div className="App-display-review">
          <br />
          <Row style={{ width: "100%" }}>
            <Col span={4}></Col>
            <Col span={16}>
              <Card title="REVIEW" bordered={true} style={{ width: "100%", borderRadius: 50 }}>
                <Row>
                  <Col span={1}></Col>
                  <Col span={22} style={{ textAlign: "left" }}>
                    <Card bordered={false} style={{ width: "100%" }}>
                      {comments.length > 0 && <CommentList comments={comments} />}
                      <Comment
                        avatar={this.state.imageUrl}
                        content={
                          <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                          />
                        }
                      />
                    </Card>
                    <Button type="default" shape="round"><Link to="/guideProfile">BACK</Link></Button>
                  </Col>
                  <Col span={1}></Col>
                </Row>
              </Card>
            </Col>
            <Col span={4}></Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Review;