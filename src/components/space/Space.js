import React from "react";
import {connect} from 'react-redux';
import './Space.scss'
import ClaimsList from "../claims-list/ClaimsList";

class Space extends React.Component {
  render() {
    if (!this.props.activeTabId) {
      return <h3 className="main-space__empty-title">Добро пожаловать в Кабинет Дилера 2.0!</h3>
    }
    return (
      <div className="main-space">
        <ClaimsList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeTabId: state.navigation.activeTab
  }
}

export default connect(mapStateToProps, null)(Space);
