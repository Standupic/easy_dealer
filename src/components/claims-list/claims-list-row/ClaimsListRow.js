import React from "react";
import {connect} from 'react-redux';
import {IconButton, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import {KeyboardArrowDown, KeyboardArrowUp} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import ClaimsListRowDetails from "./claims-list-row-details/ClaimsListRowDetails";

class ClaimsListRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleRow = () => {
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
  }

  render() {
    const { row } = this.props;
    return (
      <React.Fragment>
        <TableRow>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={this.toggleRow}>
              { this.state.isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.claimId}
          </TableCell>
          <TableCell align="left">{row.imei}</TableCell>
          <TableCell align="left">{row.link}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={this.state.isOpen} timeout="auto" unmountOnExit>
              <ClaimsListRowDetails row={row}/>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    )
  }
}



export default connect(null, null)(ClaimsListRow);
