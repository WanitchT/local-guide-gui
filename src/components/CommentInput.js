import React from 'react'
import { Avatar, Input, Button } from 'antd';
import { FileImageOutlined } from '@ant-design/icons'

let profileDetail = {
    image: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
    name: "Jennis BNK48"
  }

class CommentInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cAvatarTb: props.cAvatarTb,
        cNameTb: props.cNameTb,
        cTextTb: props.cTextTb
      }
    }
    // componentDidUpdate(prevProps) {
    //   // Typical usage (don't forget to compare props):
    //   if(prevProps.foodNameTb != this.props.foodNameTb){
    //     this.setState({
    //       foodNameTb: this.props.foodNameTb,
    //     foodCostTb: this.props.foodCostTb,
    //     isUpdate : true
    //     });
    //   }
    // }
  
    addComment = () => {
      this.props.addCommentItem(this.state.cAvatarTb, this.state.cNameTb, this.state.cTextTb);
    }
    updateComment = () => {
      this.props.doUpdateFoodItem (this.state.foodNameTb, this.state.foodCostTb);
    }
    render() {
      return <div>
        {/* <div>Name </div>
        <div>
        <input value={this.state.cNameTb} onChange={(e) => {
            this.setState({
              cNameTb: e.target.value
            })
          }}></input>
        </div> */}
        <div>Comment</div>
        <div>
        
        <Input prefix={<Avatar round={true} size="80" alt={profileDetail.name} src={profileDetail.image} />} placeholder="แสดงความคิดเห็น" allowClear value={this.state.cTextTb} onChange={(e) => {
            this.setState({
              cTextTb: e.target.value
            })
          }}></Input><Button type="primary" shape="round" onClick={this.state.isUpdate ? this.updateFood : this.addComment} > {this.state.isUpdate ? "Update" : "comment"}</Button>
        </div>
      </div>
    }
  }

  export default CommentInput