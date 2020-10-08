import React from "react";
import {connect} from 'react-redux';
import {navItemClick} from "../../redux/actions";
import './NavPanel.scss';
import NavPanelItem from "./nav-panel-item/NavPanelItem";

class NavPanel extends React.Component {
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

const mapDispatchToProps = {
  navItemClick
}

export default connect(null, mapDispatchToProps)(NavPanel);
