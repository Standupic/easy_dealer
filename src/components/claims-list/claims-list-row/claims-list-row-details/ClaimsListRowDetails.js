import React from "react";
import './ClaimsListRowDetails.scss';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

export default class ClaimsListRowDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imei: '',
      smsCode: ''
    }
  }

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="row-details">
        <div className="text-details">
          <div className="text-details__row">
            <label>ID Заявки:</label>
            <span>{this.props.row.claimId}</span>
          </div>
          <div className="text-details__row">
            <label>IMEI:</label>
            <span>{this.props.row.imei}</span>
          </div>
          <div className="text-details__row">
            <label>Ссылка:</label>
            <span>Ссылка</span>
          </div>
          <div className="text-details__row">
            <label>Дата создания:</label>
            <span>{new Date().toDateString()}</span>
          </div>
          <div className="text-details__row">
            <label>Дата изменения:</label>
            <span>{new Date().toDateString()}</span>
          </div>
        </div>
        <div className="action-details">
          <div className="action-details__action">
            <TextField
              value={this.state.imei}
              onChange={this.inputChange}
              className="mb-1"
              name="imei"
              size="small"
              label="Введите IMEI"
              variant="outlined"/>
            <Button
              variant="contained"
              color="primary">
              Привязать IMEI
            </Button>
          </div>
          <div className="action-details__action">
            <TextField
              value={this.state.smsCode}
              onChange={this.inputChange}
              className="mb-1"
              name="smsCode"
              size="small"
              label="Введите СМС Код"
              variant="outlined"/>
            <Button
              variant="contained"
              color="primary">
              Ввести СМС Код
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
