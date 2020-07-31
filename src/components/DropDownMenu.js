import React from 'react'
import { Avatar, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

let profileDetail = {
  image: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
  name: "Jennis BNK48"
}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link rel="noopener noreferrer" to="/users">
        Profile
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link rel="noopener noreferrer" to="/signin">
        Logout
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link rel="noopener noreferrer" to="/edit">
        Edit
      </Link>
    </Menu.Item>
  </Menu>
);

class DropDownMenu extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        proflieImage: profileDetail.image,
        proflieAvatar: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
        proflieName: "Jennis BNK48"
      }
    }
render() {
    return (
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" style={{float: 'right'}} onClick={e => e.preventDefault()}>
          <div className="profile-icon"><Avatar round={true} size="80" alt={this.state.proflieAvatar} src={this.state.proflieAvatar} /></div>
          </a>
        </Dropdown>
    )
}


}
export default DropDownMenu