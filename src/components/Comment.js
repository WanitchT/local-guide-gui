import React from 'react'
import { Avatar, Input, Button } from 'antd';
import { FileImageOutlined } from '@ant-design/icons'

import CommentList from './CommentList'
import CommentInput from './CommentInput'

let profileDetail = {
    image: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
    name: "Jennis BNK48"
  }

class Comment extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        commentItems: [
          {
            cAvatar: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/85195474_1482117041950379_8720398243705389056_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeHIRVLJlrW_zRUM4YBZ-rCrc_FwdKGWHjRz8XB0oZYeNMP7ztCmz38K98jmRZFhMfjl8O47T_xqq3qnq-wNBPUQ&_nc_ohc=1-SM0pWg8KUAX8I4A6M&_nc_ht=scontent.fbkk5-3.fna&oh=699659c5c2769fde0c6afd2593429753&oe=5F35C932",
            cName: "Music BNK48",
            cText: "hello"
          },
          {
            cAvatar: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/67484025_2373580746063306_7557864078304083968_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_eui2=AeGs7tJ0pgZpB3EeLFKVahfLCnPY7l3ebf0Kc9juXd5t_TklDanmCFtx0hKHyEUCDW0SC6eq43lFucW1PwXMXhBX&_nc_ohc=x5VrMStYPrAAX8ToZt3&_nc_ht=scontent.fbkk5-6.fna&oh=b59535af20bdf1bde9f8b20d2d9fe3f8&oe=5F380384",
            cName: "Cherprang BNK48",
            cText: "^^"
          }
        ],
        cAvatarTb: "",
        cNameTb: "",
        cTextTb: ""
      }
    }
  
    addCommentItem = (cAvatar, cName, cText) => {
      this.state.commentItems.push({
        cAvatar: profileDetail.image,
        // cName: cName,
        cName: profileDetail.name,
        cText: cText
      })
      this.setState({
        commentItems: this.state.commentItems
      })
    }
  
    render() {
      return (
        <div style={{ marginLeft: 10 }}>
          <CommentList commentItems={this.state.commentItems}></CommentList>
          <CommentInput cAvatarTb={this.state.cAvatarTb} cNameTb={this.state.cNameTb} cTextTb={this.state.cTextTb} addCommentItem={this.addCommentItem}></CommentInput>
        </div>
      )
    }
  }

  export default Comment