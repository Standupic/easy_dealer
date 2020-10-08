import React from "react";
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import "./Login.scss";
import {Button} from "@material-ui/core";
import { login } from "../../redux/actions";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    }
  }

  inputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  sendLoginData = () => {
    this.props.login();
  }

  render() {
    return (
      <div className="login-form">
        <TextField
          value={this.state.login}
          onChange={this.inputChange}
          name="login"
          label="Логин"
          variant="outlined"/>
        <TextField
          value={this.state.password}
          onChange={this.inputChange}
          name="password"
          label="Пароль"
          variant="outlined"/>
          <div className="login-form__actions">
            <Button
              variant="contained"
              className="mr-2"
              color="primary"
              onClick={this.sendLoginData}>
              Продолжить
            </Button>
            <a href="">Забыли пароль?</a>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(Login);
