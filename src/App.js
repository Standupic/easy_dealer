import React from 'react';
import {connect} from 'react-redux';
import Login from "./components/login/Login";
import NavPanel from "./components/nav-panel/NavPanel";
import Space from "./components/space/Space";
import './App.scss';

class App extends React.Component {
  render() {
    if (!this.props.isLogin) {
      return <Login />
    }
    return (
      <div className="application-wrapper">
        <NavPanel/>
        <Space />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.login.isLogin
  }
}

export default connect(mapStateToProps, null)(App);
