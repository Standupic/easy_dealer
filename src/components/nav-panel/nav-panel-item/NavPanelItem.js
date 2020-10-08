import React from "react";
import {Button} from "@material-ui/core";

export default class NavPanelItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      id: props.id
    }
  }

  render() {
    return (
      <Button
        color="primary"
        onClick={() => this.props.onNavItemClick(this.state.id)}>
        {this.state.title}
      </Button>
    )
  }
}
