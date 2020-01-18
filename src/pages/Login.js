import React, { Component } from "react";
import { Button, Input, Checkbox, Loader } from "rsuite";
import { userAuth } from "../actions/authActions";
import { connect } from "react-redux";

import "./Login.scss";

const Logo = require("../img/logo2.png");

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleBtnClick = async () => {
    const { username, password } = this.state;
    await this.props.userAuth({ username, password });
    console.log(this.props);
  };
  render() {
    return (
      <div className="login-page">
        <div className="row">
          <div className="col-6 d-flex  align-items-center">
            <div className="login-form">
              <Input
                onChange={(value, e) => this.setState({ username: value })}
                size="lg"
                className="form-input"
                placeholder="Введите логин или почту"
              ></Input>
              <Input
                onChange={(value, e) => this.setState({ password: value })}
                type="password"
                size="lg"
                className="form-input"
                placeholder="Введите пароль"
              ></Input>
              <Checkbox size="lg">Запомнить</Checkbox>
              <Button
                onClick={this.handleBtnClick}
                size="lg"
                className="login-btn"
                appearance="primary"
              >
                Войти
              </Button>
              <Button size="lg">Регистрация</Button>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div>
              <img className="img-fluid" src={Logo}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    token: state.auth.token
  };
}

export default connect(mapStateToProps, { userAuth })(Login);
