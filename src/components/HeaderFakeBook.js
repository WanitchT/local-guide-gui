import React from 'react'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { createFromIconfontCN } from '@ant-design/icons'


import DropDownMenu from './DropDownMenu'

let profileDetail = {
    image: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
    name: "Jennis BNK48"
  }

const { Header, Content, Footer } = Layout;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

  
class HeaderFakeBook extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        proflieImage: profileDetail.image,
        proflieAvatar: "https://pbs.twimg.com/profile_images/1102083453984489472/xTOxzvEk_400x400.jpg",
        proflieName: "Jennis BNK48"
      }
    }
  
    render() {
      return (
        <>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '65px',background: "#3b5998"}}>
        <div className="logo"><IconFont type="icon-facebook" /> fakebook</div>
        <DropDownMenu/>
        <Menu style={{ background: "#3b5998", width: '300px'}} mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/newsfeed">NewsFeed </Link></Menu.Item>
          <Menu.Item key="3"><Link to="/users">Users</Link></Menu.Item>
        </Menu>
      </Header>
      
        </>
      )
    }
  }

export default HeaderFakeBook