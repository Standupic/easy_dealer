import React from "react";
import {connect} from 'react-redux';
import {navItemClick} from "../../action/actions";
import './navigation.sass';
import NavPanelItem from "./nav-panel-item/NavPanelItem";

class Navigation extends React.Component {
  onNavItemClick = id => {
    this.props.navItemClick(id);
  }

  render() {
    return (
      <div className="nav-panel">
        <NavPanelItem
          id={1}
          title={"Список заявок"}
          onNavItemClick={this.onNavItemClick}/>
      </div>
    )
  }
}

export default connect(null, {navItemClick})(Navigation);
