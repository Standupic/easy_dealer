import React from "react";
import {connect} from 'react-redux';
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import ClaimsListRow from "./claims-list-row/ClaimsListRow";
import './claimsList.sass';
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";

class ClaimsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowsPerPage: 5,
      page: 0
    }
  }

  getRows = () => {
    return [
      { claimId: 121, imei: 11111, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 122, imei: 22222, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 123, imei: 33333, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 124, imei: 44444, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 125, imei: 55555, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 126, imei: 11111, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 127, imei: 22222, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 128, imei: 33333, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 129, imei: 44444, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 130, imei: 55555, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 131, imei: 11111, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 132, imei: 22222, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 133, imei: 33333, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 134, imei: 44444, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 135, imei: 55555, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 136, imei: 11111, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 137, imei: 22222, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 138, imei: 33333, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 139, imei: 44444, link: 'https://material-ui.com/ru/components/tables/'},
      { claimId: 140, imei: 55555, link: 'https://material-ui.com/ru/components/tables/'},
    ]
  }

  handleChangePage = (event, newPage) => {
    this.setState(prevState => ({
      ...prevState,
      page: newPage
    }))
  };

  handleChangeRowsPerPage = event => {
    this.setState(prevState => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0
    }))
  };

  render() {
    return (
      <div className="claims-list">
        <h3>Список заявок</h3>
        <TableContainer className="table-container">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>ID Заявки</TableCell>
                <TableCell align="left">IMEI</TableCell>
                <TableCell align="left">Ссылка</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.getRows().map(row => (
                <ClaimsListRow key={row.claimId} row={row}/>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'Все', value: -1 }]}
                  colSpan={4}
                  count={this.getRows().length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

export default connect(null, null)(ClaimsList);
