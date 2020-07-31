import React from 'react'
import { Avatar } from 'antd';
import { FileImageOutlined } from '@ant-design/icons'


class CommentList extends React.Component {

    render() {
      return <div>
        {this.props.commentItems.map((commentItem) =>
          <div style={{ marginRight: 10, marginBottom: 10 }}>
            <span style={{ marginRight: 10, marginBottom: 10 }}>
              <Avatar round={true} size="50" alt={commentItem.cName} src={commentItem.cAvatar} />
            </span>
            
            <span>
              <b style={{ color: "#0080ff"}}>{commentItem.cName}</b> {commentItem.cText}
            </span>
            
          </div>)}
      </div>
    }
  }

  export default CommentList