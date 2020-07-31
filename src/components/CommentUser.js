import React from 'react'
import { Avatar, Input, Button } from 'antd';
import { FileImageOutlined } from '@ant-design/icons'

import Comment from './Comment'

class CommentUser extends Comment {
    constructor(props) {
      super(props)
      this.state = {
        commentItems: []
      }
    }
  
  }
export default  CommentUser