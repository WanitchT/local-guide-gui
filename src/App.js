import React from 'react';
import './App.css';

import SignIn from './pages/SignIn'
import UsersContent from './pages/UsersContent'
import UsersFriendContent from './pages/UsersFriendContent'
import UsersEditContent from './pages/UsersEditContent'
import HomeContent from './pages/HomeContent'

import HeaderFakeBook from './components/HeaderFakeBook'
import PostFeed from './components/PostFeed'
import PostUser from './components/PostUser'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



class HomePage extends React.Component {
  render () {
    return (
      <HomeContent/>
    )
  }
}

class UsersPage extends React.Component {
  render () {
    return (
      <>
      {/* <UsersContent/> */}

      <UsersFriendContent/>
      
      </>
    )
  }
}


class UsersFriendPage extends React.Component {
  render () {
    return (
      <>
      <UsersFriendContent/>
      
      <PostUser/>
      </>
    )
  }
}

class UsersEditPage extends React.Component {
  render () {
    return (
      <>
      <UsersEditContent/>
      </>
    )
  }
}

class NewsFeedPage extends React.Component {
  render () {
    return (
      <>
      <HeaderFakeBook/>
      <PostFeed/>
      </>
    )
  }
}


function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/signin"><SignIn /></Route>
            <Route path="/newsfeed"><NewsFeedPage /></Route>
            <Route path="/users"><UsersPage /></Route>
            <Route path="/users/friend"><UsersFriendPage /></Route>
            <Route path="/edit"><UsersEditPage /></Route>
            <Route path="/"><HomePage /></Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
