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
      txtFirstName: "",
      imageUrl: "",
      comments: [],
      submitting: false,
      value: '',
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
            this.setState({
                ...this.state,
                txtFirstName: res.data.data.firstname,
                imageUrl: res.data.data.profilepicture,
            })        
        }
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
    }, 1000);

    var axios = require('axios');
    var data = JSON.stringify(
      {
        "comments": [
          {
            "avatar": this.state.imageUrl,
            "author": this.state.txtFirstName,
            "datetime": moment().fromNow(),
            "content": this.state.value,
          },
        ],
      }
    );
    console.log(data)

    var config = {
      method: 'put',
      url: 'https://fighto-api.topwork.asia/api/comment/'+localStorage.getItem('idGuideInLocalStorage'),
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
                        avatar={
                          <Avatar
                            src={this.state.imageUrl}
                            alt={this.state.txtFirstName}
                          />
                        }
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